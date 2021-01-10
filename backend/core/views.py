from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import status
from rest_framework.decorators import api_view, APIView
from rest_framework.response import Response
from .models import Subscribers
from .serializers import SubscriberSerializer

# Create your views here.
class Subscribersviewset(APIView):

    def get(self, request, format=None):
        subscribers = Subscribers.objects.all()
        serializer = SubscriberSerializer(subscribers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        print(request.data)
        email = Subscribers.objects.filter(emails= request.data["emails"])
        subscribedemail = SubscriberSerializer(email, many=True)
        if(len(subscribedemail.data)==0):
            serializer = SubscriberSerializer(data=request.data)
            if(serializer.is_valid()):
                serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error':"Email already exists"})