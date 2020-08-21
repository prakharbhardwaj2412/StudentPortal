from django.urls import path
from . import views

urlpatterns = [
	path('', views.login, name='index'),
	path('attendance/', views.attendance, name='attendance'),
	path('marks/', views.marks, name='marks'),
	path('timetable/', views.timetable, name='timetable'),
	path('birthday/', views.birthday, name='birthday'),
]