import React from 'react';
import { View,Image,Text,StyleSheet,TouchableOpacity } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

import * as RootNavigation from '../navigation/RootNavigation';
  

//   console.log("root Navigation",RootNavigation)

  const HumburgerIcon = ({navigation}) =>{

       return(
        <TouchableOpacity onPress={() =>navigation.toggleDrawer()} >
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={require('../assets/menu-icon.png')}
                />
            </View>
        </TouchableOpacity>

       )
  }

  const styles = StyleSheet.create({
        container:{
             flexDirection:'row',
             alignItems:'center',
             width:responsiveWidth(9),
             height:responsiveHeight(3.6),
             marginRight:responsiveWidth(1)
        },
        textStyle:{
               fontWeight:'bold',
               fontSize:responsiveFontSize(3),
               color:'#fff'
        }
  })

  export default HumburgerIcon
