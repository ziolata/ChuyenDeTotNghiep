from django.db import models
from novel.models import *

# Create your models here.
class Chapter(models.Model):
    id = models.BigAutoField(primary_key=True)
    novel = models.ForeignKey(Novel, on_delete=models.SET_NULL, null=True)
    number = models.IntegerField(null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    views = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


class ChapterContent(models.Model):
    id = models.BigAutoField(primary_key=True)
    chapter = models.ForeignKey(Chapter, on_delete=models.SET_NULL, null=True)
    content = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.chapter)
