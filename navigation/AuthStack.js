import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../containers/Login/index';
import ForgetPasswordScreen from '../containers/ForgetPassword';
import startSwiperScreen from '../containers/startSwiperScreen/index'
import WelcomeScreen from '../containers/welcomeScreen/index'
import SignUpScreen from '../containers/signUpScreen/index'
import HomeScreen from '../containers/homeScreen/index'
import VerificationScreen from '../containers/verificationScreen/index'
import CategoryScreen from '../containers/categoryScreen/index'
import HotelDetailsScreen from '../containers/hotelDetails/index'
import PostsScreen from '../containers/postsScreen/index'
import FavouriteScreen from '../containers/favouriteScreen/index'
import FollowRequestScreen from '../containers/followRequestScreen/index'
import FollowScreen from '../containers/followScreen/index'
import SettingScreen from '../containers/settingScreen'
import TaskingScreen from '../containers/Tasking/index'
import ProfileScreen from '../containers/profileScreen/index'
import CountryScreen from '../containers/countryScreen/index'
import ChangePasswordScreen from '../containers/changePasswordScreen/index'
import PrivacyPolicyScreen from '../containers/privacyPolicyScreen/index'
import SupportScreen from '../containers/SupportScreen/index'
import BestPlaceScreen from '../containers/bestPlaceScreen/index'
import PopularDestinationScreen from '../containers/popularDestinationScreen/index'
import BestInBaleScreen from '../containers/BestInBale/index'
import AddPostScreen from '../containers/addPostScreen/index'
import InitialScreen from '../containers/initialScreen/index'
const Auth = createStackNavigator();

const AuthStack = () => {
    return (
        <Auth.Navigator
            initialRouteName="startSwiperScreen"
            headerMode="none"
        >
            <Auth.Screen name="LoginScreen" component={LoginScreen} />
            <Auth.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
            <Auth.Screen name="startSwiperScreen" component={startSwiperScreen} />
            <Auth.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Auth.Screen name="SignUpScreen" component={SignUpScreen} />
            <Auth.Screen name="HomeScreen" component={HomeScreen} />
            <Auth.Screen name="VerificationScreen" component={VerificationScreen} />
            <Auth.Screen name="CategoryScreen" component={CategoryScreen} />
            <Auth.Screen name="HotelDetailsScreen" component={HotelDetailsScreen} />
            <Auth.Screen name="PostsScreen" component={PostsScreen} />
            <Auth.Screen name="FavouriteScreen" component={FavouriteScreen} />
            <Auth.Screen name="FollowRequestScreen" component={FollowRequestScreen} />
            <Auth.Screen name="FollowScreen" component={FollowScreen} />
            <Auth.Screen name="SettingScreen" component={SettingScreen} />
            <Auth.Screen name="TaskingScreen" component={TaskingScreen} />
            <Auth.Screen name="ProfileScreen" component={ProfileScreen} />
            <Auth.Screen name="CountryScreen" component={CountryScreen} />
            <Auth.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
            <Auth.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
            <Auth.Screen name="SupportScreen" component={SupportScreen} />
            <Auth.Screen name="BestPlaceScreen" component={BestPlaceScreen} />
            <Auth.Screen name="PopularDestinationScreen" component={PopularDestinationScreen} />
            <Auth.Screen name="BestInBaleScreen" component={BestInBaleScreen} />
            <Auth.Screen name="AddPostScreen" component={AddPostScreen} />
            <Auth.Screen name="InitialScreen" component={InitialScreen} />
            
        </Auth.Navigator>
    );
}

export default AuthStack;