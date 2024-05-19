
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    path('admin/clearcache/', include('clearcache.urls')),
    path('admin/', admin.site.urls),
    path('api/auth/', include('Auth.urls')),
    path('api/novel/', include('novel.urls')),
    path('api/chapter/', include('chapter.urls')),
    path('api/genres/', include('genres.urls')),
    
    
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += staticfiles_urlpatterns()
admin.site.site_title = "NovelTop Admin(DEV)"
admin.site.site_header = "Noveltop Administrator"
admin.site.index_title = "Trang quản trị của noveltop.online"
