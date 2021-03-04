import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Veg from './TabNavScreens/Veg';
import NonVeg from './TabNavScreens/NonVeg';

const Tab = createMaterialTopTabNavigator();

const TabNav = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="veg" 
                component={Veg}
                options={{
                    title: 'Veg',
                  }}
            />
            <Tab.Screen 
                name="nonveg" 
                component={NonVeg}
                options={{
                    title: 'Non Veg',
                  }}
            />
        </Tab.Navigator>
    )
}

export default TabNav;