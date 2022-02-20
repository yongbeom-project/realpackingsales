import React from 'react';

import { StatusBar } from 'expo-status-bar';

//메인에 세팅할 네비게이션 도구들
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigators'

export default function App() {

 

  return ( 
  <NavigationContainer>
    <StatusBar style="black" />
    <StackNavigator/>
 </NavigationContainer>);
}