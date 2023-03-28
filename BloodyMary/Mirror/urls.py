from django.urls import path

from . import views

app_name = 'Records'
urlpatterns = [
    path('', views.index, name='index'),
]