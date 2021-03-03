import React from 'react';
import {View,Text,StyleSheet } from 'react-native';

const Account = () =>{
       return(
           <View style={styles.Container} >
               <Text>This is Account Section</Text>
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

export default Account