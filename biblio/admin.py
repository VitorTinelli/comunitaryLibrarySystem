from django.contrib import admin
from biblio.models import User
# Register your models here.

class Users(admin.ModelAdmin):
    list_display = ('id', 'username', 'email')
    list_display_links = ('id','username', 'email')
    search_fields = ('username', 'email',)

admin.site.register(User, Users)