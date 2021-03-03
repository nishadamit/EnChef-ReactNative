import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { HomeStack } from './Stack/Stack';
import Cart from '../screens/Bottom/Cart';
import Account from '../screens/Bottom/Account';
import Help from '../screens/Bottom/Help';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () =>{
        return(
            <Tab.Navigator 
            screenOptions={({ route }) => ({
                 tabBarIcon: ({ focused, color, size }) => {
                 let iconName= "home";
                 let sizes=26
                 let colors="#6495ed"

                 if (route.name === 'home') {
                     iconName = 'home';
                     return <Entypo name={'home'} size={sizes} color={colors} />;
                 } else if (route.name === 'cart') {
                     iconName = 'cart';
                 } else if (route.name === 'help') {
                     iconName = 'help';
                 } else if (route.name === 'account') {
                     iconName = 'account';
                     return <MaterialCommunityIcons name={iconName} size={sizes} color={colors} />
                 }
                 return <Ionicons name={iconName} size={sizes} color={colors} />
             },})}
         >
                 <Tab.Screen name="home" component={HomeStack} />
                 <Tab.Screen name="cart" component={Cart} />
                 <Tab.Screen name="help" component={Help} />
                 <Tab.Screen name="account" component={Account} />
         </Tab.Navigator>
        )
}
