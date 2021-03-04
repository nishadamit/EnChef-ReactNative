import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Final} from './Final';
import { Drawer1 } from './Drawer';

const Router = () =>{
       return(
           <NavigationContainer>
                 <Drawer1/>
           </NavigationContainer>
       )
}

export default Router
