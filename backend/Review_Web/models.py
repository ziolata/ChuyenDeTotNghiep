from django.db import models
from django.contrib.auth.models import User
from  Auth.models import UserCustom
# Create your models here.
class Review_Web(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(UserCustom, on_delete=models.SET_NULL, null=True, verbose_name="Người dùng")
    rating = models.IntegerField(null=True, blank=True, default=0,verbose_name="Sao")
    comment = models.TextField(null=True, blank=True,verbose_name="Nội dung đánh giá")
    createdAt = models.DateTimeField(auto_now_add=True,verbose_name="Ngày đánh giá")
    class Meta:
        verbose_name_plural = ' Quản lý Đánh giá Website'
    def __str__(self):
        return str(self.rating)