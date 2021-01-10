
from rest_framework import serializers
from .models import Subscribers

class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscribers
        fields = '__all__'