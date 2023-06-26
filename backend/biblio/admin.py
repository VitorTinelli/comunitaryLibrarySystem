from django.contrib import admin
from biblio.models import User
from biblio.models import Books
from biblio.models import AcceptedBooks
# Register your models here.

class Users(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'isAdm')
    list_display_links = ('id','username', 'email', 'isAdm')
    search_fields = ('username', 'email', 'isAdm')

class Bookss(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'genre', 'year', 'edition', 'pages', 'language', 'image')
    list_display_links = ('id', 'title', 'author', 'genre', 'year', 'edition', 'pages', 'language', 'image')
    search_fields = ('title', 'author', 'genre', 'year', 'edition', 'pages', 'language',)
class AcceptedBookss(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'genre', 'year', 'edition', 'pages', 'language', 'wikipedia', 'image', 'count')
    list_display_links = ('id', 'title', 'author', 'genre', 'year', 'edition', 'pages', 'language', 'wikipedia', 'image', 'count')
    search_fields = ('title', 'author', 'genre', 'year', 'edition', 'pages', 'language','count',)

admin.site.register(User, Users)
admin.site.register(Books, Bookss)
admin.site.register(AcceptedBooks, AcceptedBookss)