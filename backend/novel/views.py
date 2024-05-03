from django.shortcuts import render
from rest_framework import generics, permissions, status, mixins
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from .models import *
from rest_framework.response import Response
from .serializers import NovelSerializer,ReviewSerializer, NovelDetailSerializer
from django_filters import rest_framework as filters
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination
# Create your views here.
class LargeResultsSetPagination(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 10000

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 1
    page_size_query_param = 'page_size'
    max_page_size = 1000
class NovelList(generics.ListAPIView):
    queryset = Novel.objects.all()
    serializer_class = NovelSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']
    permission_classes = [permissions.AllowAny]
    pagination_class = StandardResultsSetPagination
class ReviewList(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.AllowAny]

class TopNovel(generics.ListAPIView):
    queryset = Novel.objects.all().order_by('-views')[0:5]
    serializer_class = NovelSerializer
    permission_classes = [permissions.AllowAny]
    
class NovelDetailView(mixins.CreateModelMixin,generics.RetrieveAPIView):
    queryset =  Novel.objects.all()
    serializer_class = NovelDetailSerializer
    permission_classes = [permissions.AllowAny]
    def retrieve(self, request, pk=None):
        try:
            novel = Novel.objects.get(pk=pk)
            novel.views += 1
            novel.save()
            serializer = NovelDetailSerializer(novel)
            return Response(serializer.data)
        except Novel.DoesNotExist:
            return Response({'details': f"Novel with id {pk} not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'details': f"{e}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    def post(self, request, pk):
        user = request.user
        novel = Novel.objects.get(pk=pk)
        data = request.data

        # 1 - Review already exists
        alreadyExists = novel.review_set.filter(user=user).exists()
        if alreadyExists:
            content = {'detail': 'Novel already reviewed'}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        # 2 - No Rating or 0
        elif 'rating' not in data or data['rating'] == 0:
            content = {'detail': 'Please select a rating'}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        # 3 - Create review
        else:
            serializer = ReviewSerializer(data=data)
            if serializer.is_valid():
                serializer.save(user=user, novel=novel)

                reviews = novel.review_set.all()
                novel.numReviews = len(reviews)

                total = 0.0
                for review in reviews:
                    total += review.rating

                novel.rating = total / len(reviews)
                novel.save()

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class NovelCreateReview(generics.CreateAPIView):
    queryset = Novel.objects.all()
    serializer_class = ReviewSerializer  # Assuming you have a NovelReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, pk):
        user = request.user
        novel = Novel.objects.get(pk=pk)
        data = request.data

        # 1 - Review already exists
        alreadyExists = novel.review_set.filter(user=user).exists()
        if alreadyExists:
            content = {'detail': 'Novel already reviewed'}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        # 2 - No Rating or 0
        elif 'rating' not in data or data['rating'] == 0:
            content = {'detail': 'Please select a rating'}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        # 3 - Create review
        else:
            serializer = ReviewSerializer(data=data)
            if serializer.is_valid():
                serializer.save(user=user, novel=novel)

                reviews = novel.review_set.all()
                novel.numReviews = len(reviews)

                total = 0
                for review in reviews:
                    total += review.rating

                novel.rating = total / len(reviews)
                novel.save()

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)