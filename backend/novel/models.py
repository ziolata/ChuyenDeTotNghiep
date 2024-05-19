from django.db import models
from django.contrib.auth.models import User
from genres.models import *
from Auth.models import *
# Create your models here.


class Novel(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(
        UserCustom, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True, verbose_name='Tên tiểu thuyết')
    image = models.ImageField(null=True, blank=True,verbose_name='Ảnh' ,upload_to="Novel",
                              default='/Novel/default.png')
    genres = models.ManyToManyField(
        Genres, related_name='manga_genres', blank=True, verbose_name='Thể loại')
    description = models.TextField(null=True, blank=True, verbose_name='Mô tả')
    author = models.ForeignKey(
        Author, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Tác giả')
    status = models.CharField(max_length=200, null=True,choices=[('continue', 'tiếp tục'),('stoped', 'Đã dừng lại'), ('complete', 'Hoàn thành')] ,blank=True, verbose_name='Trạng thái')
    features = models.CharField(max_length=200, null=True,choices=[('hot', 'Hot'),('new', 'New'), ('full', 'Full')] ,blank=True, verbose_name='Đặc trưng')
    views = models.IntegerField(null=True, blank=True, default=0, verbose_name='Lượt xem')
    rating = models.FloatField(null=True, blank=True, default=0, verbose_name='Đánh giá')
    favorites = models.IntegerField(null=True, blank=True, default=0)
    numReviews = models.IntegerField(null=True, blank=True, default=0, verbose_name='Tổng lượt đánh giá')
    createdAt = models.DateTimeField(auto_now_add=True, verbose_name='Ngày tạo')
    updatedAt = models.DateTimeField(auto_now=True, verbose_name='Ngày cập nhật')
    class Meta:
        verbose_name = "Tiểu thuyết"
        verbose_name_plural = ' Quản lý Tiểu thuyết'

    def __str__(self):
        return self.name


class Review(models.Model):
    id = models.BigAutoField(primary_key=True)
    novel = models.ForeignKey(Novel, on_delete=models.SET_NULL, null=True,verbose_name="Tiểu thuyết")
    user = models.ForeignKey(UserCustom, on_delete=models.SET_NULL, null=True, verbose_name="Người dùng")
    rating = models.IntegerField(null=True, blank=True, default=0,verbose_name="Sao")
    comment = models.TextField(null=True, blank=True,verbose_name="Nội dung đánh giá")
    createdAt = models.DateTimeField(auto_now_add=True,verbose_name="Ngày đánh giá")
    class Meta:
        verbose_name_plural = ' Quản lý Đánh giá tiểu thuyết'
    def __str__(self):
        return str(self.rating)

class ReadingHistory(models.Model):
    user = models.ForeignKey(UserCustom, on_delete=models.CASCADE)
    novel = models.ForeignKey(Novel, on_delete=models.CASCADE)
    last_read_chapter = models.IntegerField(default=0)
    started_at = models.DateTimeField(auto_now_add=True)  
    last_updated_at = models.DateTimeField(auto_now=True)  

    class Meta:
        unique_together = (('user', 'novel'),)


