import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import { HomeStack } from './Stack/HomeStack';
import { AccountStack } from './Stack/AccountStack';
import { HelpStack } from './Stack/HelpStack';
import { CartStack} from './Stack/CartStack';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () =>{
        return(
            <Tab.Navigator 
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                        let iconName= "home";
                        let sizes=26
                        let colors=''
                        if (route.name === 'home') {
                            iconName = 'home';
                            colors = focused ? '#000080':'#6495ed'
                        } else if (route.name === 'cart') {
                            iconName = 'shopping-cart';
                            colors = focused ?  '#000080':'#6495ed'
                        } else if (route.name === 'help') {
                            iconName = 'help';
                            colors = focused ?  '#000080':'#6495ed'
                        } else if (route.name === 'account') {
                            iconName = 'user';
                            colors = focused ?  '#000080':'#6495ed'
                        }
                        return <Entypo name={iconName} size={sizes} color={colors} />
                    },})}
                    tabBarOptions={{
                        activeTintColor: '#000080',
                        inactiveTintColor:'#6495ed',
                      }}
            >
                 <Tab.Screen 
                     name="home" 
                     component={HomeStack} 
                     options={{
                        title:"HOME"
                     }}
                />
                 <Tab.Screen 
                     name="cart" 
                     component={CartStack} 
                     options={{
                        title:"CART",
                     }}
                />
                 <Tab.Screen 
                     name="help" 
                     component={HelpStack} 
                     options={{
                        title:"HELP"
                     }}
                />
                 <Tab.Screen 
                     name="account" 
                     component={AccountStack} 
                     options={{
                        title:"ACCOUNT"
                     }}
                />
         </Tab.Navigator>
        )
}
