from django.urls import path, include, re_path
from django.views.generic import TemplateView
from . import views
app_name = 'novel'

urlpatterns = [
    path('list/', views.NovelList.as_view(), name='Novel List'),
    path('list/<int:pk>/', views.NovelDetailView.as_view(), name='Novel List'),
    path('review/', views.NovelCreateReview.as_view(), name='Novel List'),
   
]

