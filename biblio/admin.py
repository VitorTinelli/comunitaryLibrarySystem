from django.contrib import admin
from biblio.models import User
# Register your models here.

class Users(admin.ModelAdmin):
    list_display = ('id', 'nome', 'email')
    list_display_links = ('id','nome', 'email')
    search_fields = ('nome', 'email',)

admin.site.register(User, Users)