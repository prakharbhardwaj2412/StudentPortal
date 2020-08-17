from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import LoginCred
import json
# Create your views here.

def login(request):
	if (request.method=="POST"):
		obj=json.loads(request.body)
		stdnt=LoginCred.objects.filter(library_id=obj['library_id'], password=obj['password'])
		if stdnt.exists():
			message=json.dumps({"id": stdnt[0].id})
			print(message)
		else:
			message="wrong credientials"
		return JsonResponse(message, safe=False)