from django.contrib import admin

from .models import Category, Product, ImagenProducto, ModeloProducto, DesignProducto

class ImagenProductoAdmin(admin.TabularInline):
    model = ImagenProducto

class ModeloProductoAdmin(admin.TabularInline):
    model = ModeloProducto

class DesignProductoAdmin(admin.TabularInline):
    model = DesignProducto

class ProductoAdmin(admin.ModelAdmin):
    inlines = [
        ImagenProductoAdmin,
        ModeloProductoAdmin,
        DesignProductoAdmin
    ]

admin.site.register(Category)
admin.site.register(Product, ProductoAdmin)