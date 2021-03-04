import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Order from '../../screens/Drawer/Order';

import CompanyLogo from '../../components/Companylogo';

export const OrderStack = () =>{
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
            initialRouteName='order'
        >
                <Stack.Screen 
                    name="order"
                    component={Order}
                    options={{ 
                        headerTitle: (props) => <CompanyLogo {...props} />,
                        }}
                />
        </Stack.Navigator>
     )
}
