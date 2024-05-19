from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone
# Create your models here.
class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Vui long dien email')
        if not password:
            raise ValueError('Vui long dien password')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self,email, password):
        if password is None:
            raise TypeError('Vui long dien password')
        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user
class Role(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True,verbose_name="Tên quyền")
class UserCustom(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True,)
    username = models.CharField(max_length=50)
    fullname = models.CharField(max_length=50, default = None, null = True, verbose_name="Họ và tên")
    phone_number = models.IntegerField(default = None, null = True,verbose_name="SĐT")
    address = models.CharField(max_length=50, default = None, null = True,verbose_name="Địa chỉ")
    gender = models.CharField(max_length=200, null=True,choices=[('male', 'Nam'),('female', 'Nữ')] ,blank=True,verbose_name="Giới tính")
    birth = models.DateField(null=True,verbose_name="Ngày sinh")
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True,verbose_name="Kích hoạt")
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE, default = 1,verbose_name="Loại tài khoản")
    date_joined = models.DateTimeField(default=timezone.now,verbose_name="Ngày đăng ký")
    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['username']
    objects = AppUserManager()
    class Meta:
        verbose_name = "Quản lý người dùng"
        verbose_name_plural = 'Quản lý Người dùng'
    def __str__(self):  
        return self.username