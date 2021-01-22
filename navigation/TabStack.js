import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../containers/homeScreen/index'
import CategoryScreen from '../containers/categoryScreen/index'
import SettingtScreen from '../containers/settingScreen/index'
import BestPlaceScreen from '../containers/bestPlaceScreen/index'
import PopularDestinationScreen from '../containers/popularDestinationScreen/index'
import colors from '../constants/colors'

const Tab = createBottomTabNavigator();
const Product = createStackNavigator();
const Cart = createStackNavigator();

const HomeStack = () => {
    return (
        <Product.Navigator initialRouteName="Home" headerMode="none" >
            <Product.Screen name="Home" component={HomeScreen} />
        </Product.Navigator>
    );
}
const CartStack = () => {
    return (
        <Cart.Navigator headerMode="none" >
            <Product.Screen name="Cart" component={CartScreen} />
        </Cart.Navigator>
    );
}
const TabStack = () => {
    return (
        <Tab.Navigator 
            initialRouteName="HomeScreen"
            tabBarOptions={{
                style:{borderTopRightRadius:30,borderTopLeftRadius:30,},
                activeTintColor:colors.primary,
                inactiveTintColor:"black",
                labelStyle:{
                    fontSize:13,padding:10
                        },
            }}>

            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Category" component={CategoryScreen} />
            <Tab.Screen name="Best" component={BestPlaceScreen} />
            <Tab.Screen name="Popular" component={PopularDestinationScreen} />
             <Tab.Screen name="Setting" component={SettingtScreen} />
        </Tab.Navigator>
    );
}

export default TabStack;