from django.shortcuts import render
from django.http import HttpResponse as response
# Create your views here.
def home_view(request, *args, **kwargs):
  # return response("<h1>Hi there boys<h1>")
  my_context = {
    "text": "this is my text",
    "number": 54,
    "list": [45, 66, 66, "Ten"]
  }
  return render(request, "home.html", my_context)