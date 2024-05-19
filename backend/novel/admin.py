from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin
from django.utils.safestring import mark_safe
# Register your models here.

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id','user','rating','comment','novel')
    list_filter = ['novel']
    search_fields = ['novel__name']

class NovelAdmin(admin.ModelAdmin):
    list_display = ('id','image_tag','name','views','rating','numReviews','status')
    readonly_fields = ('image_tag',)
    list_filter = ['name','author__name','genres__name']
    search_fields = ['name','author__name','genres__name']
    class Meta:
        verbose_name = "Tiểu thuyết" 
    def image_tag(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="100" height="100" />')
        return 'No Image'
    image_tag.short_description = 'Image'
    
admin.site.register(Novel, NovelAdmin)