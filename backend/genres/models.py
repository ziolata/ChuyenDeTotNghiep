from django.db import models
class Genres(models.Model):
    id = models.BigAutoField(primary_key=True, )
    name = models.CharField(max_length=200, null=True, blank=True,verbose_name="Tên thể loại")
    description = models.TextField(null=True, blank=True,verbose_name="Mô tả")
    createdAt = models.DateTimeField(auto_now_add=True,verbose_name="Ngày tạo")

    class Meta:
        verbose_name = "Quản lý thể loại"
        verbose_name_plural = 'Quản lý thể loại'
    def __str__(self):
        return self.name


class Author(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=200, null=True, blank=True,verbose_name="Tên tác giả")
    createdAt = models.DateTimeField(auto_now_add=True,verbose_name="Ngày tạo")

    class Meta:
        verbose_name = "Quản lý tác giả"
        verbose_name_plural = 'Quản lý tác giả'
    def __str__(self):
        return self.name