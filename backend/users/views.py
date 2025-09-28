from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# Serializer for user registration
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email'),
            password=validated_data['password']
        )
        return user

# View for registration
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class logintokenSerializer(TokenObtainPairView):
    def validate(self, attrs):
        data= super.validate(attrs)

        data['user']=
        {
            'id': self.User.id
            'username': self.User.username
            'email': self.User.email
        }
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = logintokenSerializer       