from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(Genres)
class GenresAdmin(admin.ModelAdmin):
    list_display = ('id','name','createdAt')
    search_fields = ['name']

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('id','name','createdAt')
    search_fields = ['name']