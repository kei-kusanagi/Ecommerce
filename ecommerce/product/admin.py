from django.contrib import admin

from .models import Category, Product, ImagenProducto, ModeloProducto

class ImagenProductoAdmin(admin.TabularInline):
    model = ImagenProducto

class ModeloProductoAdmin(admin.TabularInline):
    model = ModeloProducto

class ProductoAdmin(admin.ModelAdmin):
    inlines = [
        ImagenProductoAdmin,
        ModeloProductoAdmin
    ]

admin.site.register(Category)
admin.site.register(Product, ProductoAdmin)