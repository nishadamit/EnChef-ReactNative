import React,{useState,useLayoutEffect} from 'react';
import { View,Text,StyleSheet,Button, TouchableOpacity } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import HamburgerIcon from '../components/HumberIcon';

const HomeScreen =({navigation}) =>{

    const hamburgerClicked =() =>{
          alert("Hamburger clicked")
    }

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => <HamburgerIcon click={hamburgerClicked}/>,
        });
      }, [navigation]);


    return(
        <View style={styles.Container}>
            <Text style={{fontSize:responsiveFontSize(4)}} >This is HomeScreen</Text>
            <TouchableOpacity onPress={() =>navigation.navigate('detail')}>
                <View style={styles.ButtonStyle}>
                    <Text style={styles.textStyle}>Go To Details</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>navigation.navigate('tabnav')}>
                <View style={styles.ButtonStyle}>
                    <Text style={styles.textStyle}>TabNavigation</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

    // return <Text>Count: {count}</Text>;
}

const styles = StyleSheet.create({
       Container:{ 
           flex: 1, 
           alignItems: 'center', 
           justifyContent: 'center',
        },
        ButtonStyle:{
            width:responsiveWidth(75),
            height:responsiveHeight(5),
            backgroundColor:'#6495ed',
            justifyContent:'center',
            flexDirection:'row',
            alignItems:'center',
            borderRadius:responsiveHeight(1),
            marginTop:responsiveHeight(1)
        },
        textStyle:{
            color:'#fff',
            fontWeight:'bold',
            fontSize:responsiveFontSize(2.5)
        }
})

export default HomeScreen