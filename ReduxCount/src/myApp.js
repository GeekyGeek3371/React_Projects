import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'

function mapStateToProps(state){
  return {
      myCounter: state.myCounter
    };
  
}

function mapDispatchToProps(dispatch){
  return {
    incCounter : () => dispatch({
      type : 'INC',
    }),
    decCounter : () => dispatch({
      type : 'DEC',
    })
  }
}

class MyApp extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View>
        <Text style={{fontSize: 20,}}>{this.props.myCounter}</Text>
        </View>
        <View style={styles.incounter}>
          <TouchableOpacity
          onPress = {()=> this.props.incCounter()}
          >
            <Text>INCREASE  </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          onPress = {()=> this.props.decCounter()}
          >
          <Text>  DECREASE  </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  incounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,

)(MyApp)
