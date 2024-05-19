from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Review_Web)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id','user','rating','comment')
    list_filter = ['user']
    search_fields = ['user__fullname']