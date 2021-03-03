import React from 'react';
import {View,Text,StyleSheet } from 'react-native';

const Profile = () =>{
       return(
           <View style={styles.Container} >
               <Text>This is Profile Section</Text>
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

export default Profile