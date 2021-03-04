import React,{useLayoutEffect} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import HamburgerIcon from '../../components/HumberIcon';



const Profile = ({navigation}) =>{

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => <HamburgerIcon navigation={navigation}/>,
        });
      }, [navigation]);
    
      return(
        <View style={styles.Container}>
            <Text style={styles.textStyle1} >This is Profile Screen</Text>
            <View style={styles.ButtonStyle}>
                <Text style={styles.textStyle}>Update Profile</Text>
            </View>
            <View style={styles.ButtonStyle}>
                <Text style={styles.textStyle}>Edit Profile</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
     },
     textStyle1:{
        fontSize:responsiveFontSize(3.5),
        color:'#df5286',
        fontWeight:'bold'
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

export default Profile