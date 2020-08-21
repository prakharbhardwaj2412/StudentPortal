from django.db import models

# Create your models here.
class LoginCred(models.Model):
	library_id = models.CharField(max_length=10)
	password = models.CharField(max_length=10, default="123456")
	name = models.CharField(max_length=40)

class Attendance(models.Model):
	"""docstring for Attendance"""
	student = models.ForeignKey('LoginCred', on_delete=models.CASCADE)
	attendance_type = models.CharField(max_length=40)
	percentage = models.CharField(max_length=10)
	present_days = models.CharField(max_length=10)
	total_days = models.CharField(max_length=10)

class Marks(models.Model):
	"""docstring for Marks"""
	student = models.ForeignKey('LoginCred', on_delete=models.CASCADE)
	exam = models.CharField(max_length=10)
	subject = models.CharField(max_length=10)
	marks = models.CharField(max_length=5)

class Timetable(models.Model):
	subject_name = models.CharField(max_length=40)
	subject_teacher = models.CharField(max_length=40)

class Birthday(models.Model):
	"""docstring for Birthday"""
	name = models.CharField(max_length=40)
	course = models.CharField(max_length=10)
	department = models.CharField(max_length=10)
	year = models.CharField(max_length=5)