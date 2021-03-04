import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Profile from '../../screens/Drawer/Profile';

import CompanyLogo from '../../components/Companylogo';

export const ProfileStack = () =>{
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
            initialRouteName='profile'
        >
                <Stack.Screen 
                    name="profile"
                    component={Profile}
                    options={{ 
                        headerTitle: (props) => <CompanyLogo {...props} />,
                        }}
                />
        </Stack.Navigator>
     )
}
