from itertools import product
from multiprocessing import context
from django.contrib import messages

from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
import requests

from .cart import Cart

from product.models import Product

from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from django.conf import settings

def add_to_cart(request, product_id):
    messages.success(request, 'producto añadido a tu 🛒')
    cart = Cart(request)
    cart.add(product_id)
    
    return render(request, 'cart/partials/menu_cart.html')

def cart(request):
    return render(request, 'cart/cart.html')

def success(request):
    us_email = request.user.email
    user = request.user.first_name
    template = get_template('cart/partials/purchase_mail.html')
    # links = request.item.product.design.all
    # links = Product.product.design.url
    # print(links)
    context = {'us_email': us_email, 'user': user}
    content = template.render(context)
    
    email = EmailMultiAlternatives(
            'Un correo de prueba',
            'Correo de compra',
            'settings.EMAIL_HOST_USER',
            [us_email],
        )

    email.attach_alternative(content, 'text/html')
    # email.send()
    
    return render(request, 'cart/success.html')

def update_cart(request, product_id, action):
    cart = Cart(request)

    if action == 'increment':
        cart.add(product_id, 1, True)
        messages.success(request, 'producto añadido')
    else:
        cart.add(product_id, -1, True)
        messages.warning(request,'producto eliminado')

    
    product = Product.objects.get(pk=product_id)
    quantity = cart.get_item(product_id)

    if quantity:
        quantity = quantity['quantity']

        item = {
            'product': {
                'id': product.id,
                'name': product.name,
                'image': product.image,
                'get_thumbnail': product.get_thumbnail(),
                'price': product.price,
            },
            'total_price': (quantity * product.price) / 100,
            'quantity': quantity,
        }
    else:
        item = None

    response = render(request, 'cart/partials/cart_item.html', {'item': item})
    response['HX-Trigger'] = 'update-menu-cart'
    return response

@login_required
def checkout(request):
    pub_key = settings.STRIPE_API_KEY_PUBLISHABLE 
    return render(request, 'cart/checkout.html', {'pub_key': pub_key})

def hx_menu_cart(request):
    return render(request, 'cart/partials/menu_cart.html')

def hx_cart_total(request):
    return render(request, 'cart/partials/cart_total.html')