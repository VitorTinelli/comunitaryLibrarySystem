from django.shortcuts import render
from rest_framework import viewsets
from biblio.models import User
from biblio.serealizer import UserSerealizer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerealizer
