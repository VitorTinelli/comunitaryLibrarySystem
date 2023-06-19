from django.db import models
from django.contrib.auth.models import User


class User(models.Model):
    username = models.CharField(max_length = 50)
    email = models.EmailField()
    password = models.CharField(max_length = 20)
    isAdm = models.BooleanField(default=False)

    def __str__(self):
        return self.username

class Books(models.Model):
    title = models.CharField(max_length = 100)
    author = models.CharField(max_length = 100)
    genre = models.CharField(max_length = 100)
    year = models.CharField(max_length = 4)
    edition = models.CharField(max_length = 100)
    pages = models.IntegerField()
    language = models.CharField(max_length = 100)
    image = models.TextField()

    def __str__(self):
        return self.title

class AcceptedBooks(models.Model):
    title = models.CharField(max_length = 100)
    author = models.CharField(max_length = 100)
    genre = models.CharField(max_length = 100)
    year = models.CharField(max_length = 4)
    edition = models.CharField(max_length = 100)
    pages = models.IntegerField()
    language = models.CharField(max_length = 100)
    wikipedia = models.TextField()
    image = models.TextField()
    count = models.IntegerField()
