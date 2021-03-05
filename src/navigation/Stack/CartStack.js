import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../../screens/Bottom/Cart';

const Stack = createStackNavigator();

export const CartStack = () =>{
     return(
        <Stack.Navigator
            screenOptions={{
            headerStyle:{
                backgroundColor:'#6495ed',
            },
            headerTintColor:"white",
            headerTitleStyle:{
                fontWeight:'bold'
            }
            }}
            initialRouteName='cart'
       >
                <Stack.Screen 
                    name="cart"
                    component={Cart}
                    options={{
                        headerTitle:'Cart'
                    }}
                />
        </Stack.Navigator>
     )
}
