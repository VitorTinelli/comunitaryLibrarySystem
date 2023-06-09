from django.shortcuts import render
from rest_framework import viewsets
from biblio.models import User
from biblio.serealizer import UserSerealizer


# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerealizer
