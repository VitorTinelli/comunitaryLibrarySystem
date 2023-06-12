from django.contrib import admin
from django.urls import path, include
from biblio.views import UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'usuarios', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
