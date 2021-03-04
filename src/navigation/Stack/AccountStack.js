import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../../screens/Bottom/Account';

import CompanyLogo from '../../components/Companylogo';
import HamburgerIcon from '../../components/HumberIcon';

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
                    options={{ 
                        headerTitle: (props) => <CompanyLogo {...props} />,
                        headerRight: () => <HamburgerIcon/>
                        }}
                />
        </Stack.Navigator>
     )
}
