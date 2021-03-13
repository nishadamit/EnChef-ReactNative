import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';

// import {Final} from './Final';
import { Drawer1 } from './Drawer';

const Router = () =>{
       return(
           <NavigationContainer  
              ref={navigationRef}
            //   onStateChange={(state) => console.log('New state is', state)}
           >
                 <Drawer1/>
           </NavigationContainer>
       )
}

export default Router
