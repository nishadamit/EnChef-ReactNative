import React from 'react';
import {View,Text,StyleSheet } from 'react-native';

const NonVeg = () =>{
       return(
           <View style={styles.Container} >
               <Text>This TabNavigation of NonVeg</Text>
           </View>
       )
}

const styles = StyleSheet.create({
     Container:{
         flex:1,
         flexDirection:'row',
         justifyContent:'center',
         alignContent:'center'
     }
})

export default NonVeg