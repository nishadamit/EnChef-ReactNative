import React from 'react';
import {View,Text,StyleSheet } from 'react-native';

const Veg = () =>{
       return(
           <View style={styles.Container} >
               <Text>This TabNavigation of Veg</Text>
           </View>
       )
}

const styles = StyleSheet.create({
     Container:{
         flexDirection:'row',
         justifyContent:'center',
         alignItems:'center'
     }
})

export default Veg