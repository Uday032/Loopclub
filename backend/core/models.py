from django.db import models
import datetime

# Create your models here.
class Subscribers(models.Model):
    emails = models.EmailField(max_length=254)
    date_added = models.DateField(default=datetime.date.today)