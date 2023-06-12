from django.shortcuts import render
from rest_framework import viewsets
from biblio.models import User
from biblio.models import Books
from biblio.serealizer import UserSerealizer
from biblio.serealizer import BookSerealizer


# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerealizer
class BookViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BookSerealizer