import React from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

  const CompanyLogo = () =>{
       return(
         <View style={styles.container}>
                     <Image
                          style={{ width: 40, height: 40 }}
                          source={require('../assets/logo.png')}
                      />
                      <Text style={styles.textStyle}>EnChef</Text>
         </View>
       )
  }

  const styles = StyleSheet.create({
        container:{
             flexDirection:'row',
             alignItems:'center'
        },
        textStyle:{
               fontWeight:'bold',
               fontSize:responsiveFontSize(3),
               color:'#fff'
        }
  })

  export default CompanyLogo
