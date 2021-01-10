from django.urls import path
from .views import Subscribersviewset 


urlpatterns = [
    path('subscribers/', Subscribersviewset.as_view()),
]