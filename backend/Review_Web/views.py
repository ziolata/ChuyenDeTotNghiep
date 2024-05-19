from django.shortcuts import render
from rest_framework import generics, permissions, status, mixins
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from .models import *
from chapter.models import Chapter
from django.db.models import Subquery, OuterRef
from rest_framework.response import Response
from .serializers import *
from django_filters import rest_framework as filters
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination
# Create your views here.

class ReviewWebView(generics.CreateAPIView):
    queryset = Review_Web.objects.all()
    serializer_class = ReviewWebSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None
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