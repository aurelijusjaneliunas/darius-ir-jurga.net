from django.db import models
from django.utils.text import slugify

# Create your models here.


class Lock(models.Model):
    lock = models.BooleanField(default=False)
    slug = models.SlugField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slug = slugify(self.text)
            i = 1
            while (Lock.objects.filter(slug=slug).exists()):
                slug = '%s%s' % (base_slug, i)
                i += 1
            self.slug = slug
        super(Lock, self).save(*args, **kwargs)