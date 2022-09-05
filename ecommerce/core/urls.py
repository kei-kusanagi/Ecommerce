from django.contrib.auth import views
from django.urls import path

from core.views import frontpage, shop, signup, myaccount, edit_myaccount
from product.views import product

from contact.views import contact

from django.views.generic import TemplateView


urlpatterns = [
    path('', frontpage, name='frontpage'),
    path('', TemplateView.as_view(template_name="index.html")),  
    path('signup/', signup, name='signup'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('login/', views.LoginView.as_view(template_name='core/login.html'), name='login'),
    path('myaccount/', myaccount, name='myaccount'),
    path('myaccount/edit/', edit_myaccount, name='edit_myaccount'),
    path('shop/', shop, name='shop'),
    path('shop/<slug:slug>/', product, name='product'),
    path('contact/', contact, name='contact'),
]