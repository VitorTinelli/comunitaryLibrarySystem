from django.contrib import admin
from django.urls import path, include
from biblio.views import UserViewSet
from biblio.views import BookViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'usuarios', UserViewSet)
router.register(r'livros', BookViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
