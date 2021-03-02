
import React from 'react';
import{ SafeAreaView,StyleSheet } from 'react-native';
import Router from './src/navigation';

const App =() => {
  return (
    <>
      <SafeAreaView>
            <Router/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
