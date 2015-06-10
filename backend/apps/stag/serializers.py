from rest_framework import serializers
from .models import Lock


class LockSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lock
        read_only_fields = ('slug',)