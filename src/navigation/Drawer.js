import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomNavigator } from './Bottom'
import Profile from '../screens/Drawer/Profile';
import Order from '../screens/Drawer/Order';

const Drawer = createDrawerNavigator();

 export const Drawer1 = () =>{
        return(
            
                <Drawer.Navigator
                   initialRouteName="home"
                   drawerPosition="right"
                >
                        <Drawer.Screen name="home" component={BottomNavigator} />
                        <Drawer.Screen name="profile" component={Profile} />
                        <Drawer.Screen name="order" component={Order} />
                </Drawer.Navigator>
		  
        )
 }