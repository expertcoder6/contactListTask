/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

/*-------- pre defined value ----------*/
import { contact_list } from './src/utils/constant';

/*-------- librery ----------*/
import AsyncStorage from '@react-native-async-storage/async-storage';

/*-------- main screen ----------*/
import Entry from './src/container/Entry';

const App = () => {
  useEffect(()=>{
    const jsonValue = JSON.stringify(contact_list);
    storeData(jsonValue)
  })

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('contactListData', value)
    } catch (e) {
      // saving error
    }
  }

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <Entry />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
