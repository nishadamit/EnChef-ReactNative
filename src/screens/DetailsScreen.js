import React,{useState,useLayoutEffect}  from 'react';
import { View ,Text,StyleSheet,Button,TouchableOpacity} from 'react-native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const DetailScreen  = ({navigation}) =>{

    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
         navigation.setOptions({
           headerRight: () => (
             <Button onPress={() => setCount(c => c + 1)} title="Update count" />
           ),
         });
       }, [navigation]);

       return(
           <View style={styles.Container}>
               <Text>Count: {count}</Text>
               <View style={styles.gap} ></View>
               <Text  style={{fontSize:responsiveFontSize(4)}} >This is detail Screen</Text>
            <TouchableOpacity onPress={() =>navigation.push('detail')}>
                <View style={styles.ButtonStyle}>
                    <Text style={styles.textStyle}>Go To Details</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>navigation.navigate('home')}>
                <View style={styles.ButtonStyle}>
                    <Text style={styles.textStyle}>Go To Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>navigation.setOptions({ title: 'Updated!' })}>
                <View style={styles.ButtonStyle}>
                    <Text style={styles.textStyle}>Update Screen Title</Text>
                </View>
            </TouchableOpacity>
           </View>
       )
}

const styles = StyleSheet.create({
    Container:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
     },
     gap:{
         height:responsiveHeight(2)
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


export default DetailScreen