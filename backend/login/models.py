from django.db import models

# Create your models here.
class LoginCred(modelsModel):
	library_id = models.CharField(max_length=10)
	password = models.CharField(max_length=10, default="123456")