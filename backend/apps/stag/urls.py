from django.conf.urls import patterns, include, url
from . import views

urlpatterns = patterns('',
    url(r'^locks/$', views.LockList.as_view(), name='task-list'),
    url(r'^locks/(?P<slug>[a-zA-Z\-0-9]+)/?$', views.LockDetail.as_view(), name='task-detail'),
)