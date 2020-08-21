from django.contrib import admin

# Register your models here.
from .models import LoginCred, Attendance, Marks, Timetable, Birthday

admin.site.register(LoginCred)
admin.site.register(Attendance)
admin.site.register(Marks)
admin.site.register(Timetable)
admin.site.register(Birthday)