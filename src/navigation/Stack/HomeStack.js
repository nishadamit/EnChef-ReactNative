import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../../screens/Home/HomeScreen';
import DetailScreen from '../../screens/Home/DetailsScreen';
import TabNavScreen from '../../screens/Home/TabNav';

import CompanyLogo from '../../components/Companylogo';
import HamburgerIcon from '../../components/HumberIcon';

const Stack = createStackNavigator();

export const HomeStack = () =>{
     return(
        <Stack.Navigator
            screenOptions={{
            headerStyle:{
                backgroundColor:'#6495ed',
            },
            headerTintColor:"white",
            headerTitleStyle:{
                fontWeight:'bold'
            },
            }}
            initialRouteName='home'
       >
                <Stack.Screen 
                    name="home"
                    component={HomeScreen} 
                    options={{ 
                        headerTitle: (props) => <CompanyLogo {...props} />,
                        }}
                />
                <Stack.Screen 
                    name="detail" 
                    component={DetailScreen} 
                    options={{
                        title:"Detail",
                        }}
                />
                <Stack.Screen 
                    name="tabnav" 
                    component={TabNavScreen} 
                    options={{
                        title:"Tab Navigation",
                        }}
                />
        </Stack.Navigator>
     )
}
