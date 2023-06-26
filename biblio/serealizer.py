from rest_framework import serializers
from biblio.models import Books
from biblio.models import User
from biblio.models import AcceptedBooks

class UserSerealizer (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'isAdm')
class BookSerealizer (serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = ('id', 'title', 'author', 'genre', 'year', 'edition', 'pages', 'language', 'image')
class AcceptedBookSerealizer (serializers.ModelSerializer):
    class Meta:
        model = AcceptedBooks
        fields = ('id', 'title', 'author', 'genre', 'year', 'edition', 'pages', 'language', 'wikipedia', 'image', 'count')
        