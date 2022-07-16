from django.contrib import admin

from .models import Category, Product, ImagenProducto

class ImagenProductoAdmin(admin.TabularInline):
    model = ImagenProducto

class ProductoAdmin(admin.ModelAdmin):
    inlines = [
        ImagenProductoAdmin
    ]

admin.site.register(Category)
admin.site.register(Product, ProductoAdmin)