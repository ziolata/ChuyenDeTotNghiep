from rest_framework import serializers
from .models import *

class ReviewWebSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review_Web
        fields = '__all__'


