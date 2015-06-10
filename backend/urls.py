from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = patterns('',
    url(r'^$', 'apps.stag.views.index', name='index'),
    url(r'^api/', include('apps.stag.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^.*', 'apps.stag.views.index') #catch-all
)