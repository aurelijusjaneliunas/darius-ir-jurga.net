from django.shortcuts import render
from .models import Lock
from .serializers import LockSerializer
from rest_framework import generics


class LockList(generics.ListCreateAPIView):
    queryset = Lock.objects.all()
    serializer_class = LockSerializer


class LockDetail(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'slug'
    queryset = Lock.objects.all()
    serializer_class = LockSerializer

# Create your views here.
def index(request):
    return render(request, "stag/index.html")