from django.db import models
from novel.models import Novel

# Create your models here.
class Chapter(models.Model):
    id = models.BigAutoField(primary_key=True)
    novel = models.ForeignKey(Novel, on_delete=models.SET_NULL, null=True, verbose_name="Tiểu thuyết")
    content = models.FileField(null=True,upload_to="Content",verbose_name="Nội dung")
    number = models.IntegerField(null=True, blank=True, verbose_name="Chương số")
    name = models.CharField(max_length=200, null=True, blank=True, verbose_name="Tên chương")
    views = models.IntegerField(null=True, blank=True, default=0, verbose_name="Lượt xem")
    createdAt = models.DateTimeField(auto_now_add=True,verbose_name="Ngày tạo")

    

    class Meta:
        verbose_name = "Quản lý chương"
        verbose_name_plural = 'Quản lý chương'

    def __str__(self):
         return f"{self.novel},{self.id},"   


class ChapterContent(models.Model):
    id = models.BigAutoField(primary_key=True)
    chapter = models.ForeignKey(Chapter, on_delete=models.SET_NULL, null=True)
    content = models.FileField(null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.chapter)
