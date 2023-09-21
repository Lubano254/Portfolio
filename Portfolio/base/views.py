from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def home(request):
    return HttpResponse('<h1>Home</h1>')


def posts(request):
    return HttpResponse('<h1>Posts</h1>')


def post(request):
    return HttpResponse('<h1>Post Title</h1>')


def profile(request):
    return HttpResponse('<h1>User profile</h1>')
