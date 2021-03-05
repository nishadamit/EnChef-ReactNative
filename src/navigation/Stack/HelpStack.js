import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Help from '../../screens/Bottom/Help';

const Stack = createStackNavigator();

export const HelpStack = () =>{
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
                    name="help"
                    component={Help} 
                    options={{
                        headerTitle:"Help"
                    }}
                />
        </Stack.Navigator>
     )
}
