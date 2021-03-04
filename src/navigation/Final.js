import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

import CompanyLogo from '../components/Companylogo';
import HamburgerIcon from '../components/HumberIcon';
import { Drawer1 } from './Drawer';

const Stack = createStackNavigator();

export const Final = () =>{
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
            initialRouteName='final'
       >
                <Stack.Screen 
                    name="final"
                    component={Drawer1} 
                    options={{ 
                        headerTitle: (props) => <CompanyLogo {...props} />,
                        headerRight: (props) => <HamburgerIcon navigation={props}/>
                        }}
                />
        </Stack.Navigator>
     )
}
