import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../../screens/Bottom/Account';

const Stack = createStackNavigator();

export const AccountStack = () =>{
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
            initialRouteName='account'
       >
                <Stack.Screen 
                    name="account"
                    component={Account} 
                />
        </Stack.Navigator>
     )
}
