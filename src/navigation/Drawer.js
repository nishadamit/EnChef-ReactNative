import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomNavigator } from './Bottom'
import{ ProfileStack }from './Stack/ProfileStack';
import{ OrderStack }from './Stack/OrderStack';


const Drawer = createDrawerNavigator();

 export const Drawer1 = () =>{
        return(
            
                <Drawer.Navigator
                   initialRouteName="home"
                   drawerPosition="right"
                >
                        <Drawer.Screen 
                             name="home" 
                             component={BottomNavigator}
                             options={{
                                title:"HOME"
                             }}
                        />
                        <Drawer.Screen 
                             name="profile" 
                             component={ProfileStack} 
                             options={{
                                title:"PROFILE"
                            }}
                        />
                        <Drawer.Screen 
                             name="order" 
                             component={OrderStack}
                             options={{
                                title:"ORDER"
                            }} 
                        />
                </Drawer.Navigator>
		  
        )
 }