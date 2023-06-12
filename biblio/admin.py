from django.contrib import admin
from biblio.models import User
from biblio.models import Books
# Register your models here.

class Users(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'isAdm')
    list_display_links = ('id','username', 'email', 'isAdm')
    search_fields = ('username', 'email', 'isAdm')

class Bookss(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'genre', 'year', 'edition', 'pages', 'language', 'wiki', 'pdf', 'count')
    list_display_links = ('id', 'title', 'author', 'genre', 'year', 'edition', 'pages', 'language', 'wiki', 'pdf', 'count')
    search_fields = ('title', 'author', 'genre', 'year', 'edition', 'pages', 'language',)

admin.site.register(User, Users)
admin.site.register(Books, Bookss)