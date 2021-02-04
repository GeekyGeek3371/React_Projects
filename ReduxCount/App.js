import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MyApp from './src/myApp'

const initState = {
  myCounter: 0
}

const reducer = (state = initState, action) =>{
  if(action.type === 'INC'){
    return {myCounter: state.myCounter + 1}
  }
  else if(action.type === 'DEC'){
    if(state.myCounter>=1)return {myCounter: state.myCounter - 1}
    else
    return state
  }
  else
  return state
  
}

const store = createStore(reducer);



export default function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
