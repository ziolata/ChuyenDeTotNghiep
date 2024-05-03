from django.shortcuts import render
from rest_framework import generics, permissions, status, mixins
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import *
from .serializers import ChapterSerializer, ChapterDetailSerializer
# Create your views here.

class ChapterDetailView(generics.RetrieveAPIView):
    queryset =  Chapter.objects.all()
    serializer_class = ChapterDetailSerializer
    permission_classes = [permissions.AllowAny]
    def retrieve(self, request, pk=None):
        try:
            chapter = Chapter.objects.get(pk=pk)
            chapter.views += 1
            chapter.save()
            serializer = ChapterDetailSerializer(chapter)
            return Response(serializer.data)
        except Novel.DoesNotExist:
            return Response({'details': f"Chapter with id {pk} not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'details': f"{e}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ChapterView(generics.ListAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    permission_classes = [permissions.AllowAny]
    def list(self, request, pk=None):
        try:
            chapters = Chapter.objects.filter(novel__pk=pk)
            serializer = ChapterSerializer(chapters, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'details': f"{e}"}, status=status.HTTP_204_NO_CONTENT)

