import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailsScreen';
import TabNavScreen from '../screens/TabNav';

import CompanyLogo from '../components/Companylogo';
import HamburgerIcon from '../components/HumberIcon';


const Stack = createStackNavigator();

const Router = () =>{
       return(
           <NavigationContainer>
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
                     >
                     <Stack.Screen 
                         name="home"
                         component={HomeScreen} 
                         options={{ 
                             headerTitle: (props) => <CompanyLogo {...props} />,
                             headerRight: () => <HamburgerIcon/>
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
           </NavigationContainer>
       )
}

export default Router
