from django.contrib import admin
from django.urls import path, include
from biblio.views import UserViewSet
from biblio.views import BookViewSet
from biblio.views import LoginView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'usuarios', UserViewSet)
router.register(r'livros', BookViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', LoginView.as_view()),
    path('', include(router.urls)),

]
