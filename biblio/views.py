from django.shortcuts import render
from rest_framework import viewsets
from biblio.models import User
from biblio.models import Books
from rest_framework import generics, status
from rest_framework.response import Response
from biblio.serealizer import UserSerealizer
from biblio.serealizer import BookSerealizer

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerealizer
class BookViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BookSerealizer
class LoginView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerealizer

    def create(self, request, *args, **kwargs):
        email = request.data['email']
        password = request.data['password']

        if (self.queryset.filter(email = email, password=password).first() is not None):
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED, data={'erro':'Usuário ou senha inválidos'})