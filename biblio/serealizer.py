from rest_framework import serializers
from biblio.models import User

class UserSerealizer (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        