import React,{useState,useLayoutEffect}  from 'react';
import { 
    View ,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

  import HamburgerIcon from '../../components/HumberIcon';

const BackPrevention  = ({navigation}) =>{

    const [text, setText] = React.useState('');
    const [hasUnsavedChanges, setFlag] = React.useState(true);

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => <HamburgerIcon navigation={navigation}/>,
        });
      }, [navigation]);


      React.useEffect(
        () =>
          navigation.addListener('beforeRemove', (e) => {
            if (!hasUnsavedChanges) {
              // If we don't have unsaved changes, then we don't need to do anything
              return;
            }
    
            // Prevent default behavior of leaving the screen
            e.preventDefault();
    
            // Prompt the user before leaving the screen
            Alert.alert(
              'Discard changes?',
              'You have unsaved changes. Are you sure to discard them and leave the screen?',
              [
                { text: "Don't leave", style: 'cancel', onPress: () => {} },
                {
                  text: 'Discard',
                  style: 'destructive',
                  // If the user confirmed, then we dispatch the action we blocked earlier
                  // This will continue the action that had triggered the removal of the screen
                  onPress: () => navigation.dispatch(e.data.action),
                },
              ]
            );
          }),
        [navigation, hasUnsavedChanges]
      );

      return (
        <View style={styles.Container}>
                <TextInput
                value={text}
                placeholder="Type something…"
                onChangeText={setText}
                style={styles.textInput}
                />
                <Button
                    title="Save"
                    onPress={() =>setFlag(false)}
                />
        </View>
      );
}

const styles = StyleSheet.create({
    Container:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
     },
     textInput:{
         borderWidth:responsiveWidth(0.1),
         marginHorizontal:responsiveWidth(1),
         width:responsiveWidth(70),
         marginBottom:responsiveHeight(2)
     }
})


export default BackPrevention