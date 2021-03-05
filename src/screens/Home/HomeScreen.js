import React,{useState,useLayoutEffect} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button, 
    TouchableOpacity,
    SafeAreaView,
    StatusBar
 } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import HamburgerIcon from '../../components/HumberIcon';

const HomeScreen =({navigation}) =>{

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => <HamburgerIcon navigation={navigation}/>,
        });
      }, [navigation]);


    return(
        <SafeAreaView style={styles.Container}>
            <StatusBar barStyle="dark-content" backgroundColor="#6495ed" />
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
            <TouchableOpacity onPress={() =>navigation.navigate('backprevent')}>
                <View style={styles.ButtonStyle}>
                    <Text style={styles.textStyle}>Back Preventation</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
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