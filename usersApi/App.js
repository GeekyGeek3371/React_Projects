import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { Card, CardItem } from "native-base"; 
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataS: [],
    }
  }
  render_FlatList_header = () => {
    var header_View = (
    <View style={styles.header_footer_style}>
      <Text style={styles.textStyle}> Super Users </Text>
    </View>
    );
    return header_View ;
  };
  getUser = () =>{
    fetch("https://randomuser.me/api/?results=500")
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        isLoading: false,
        dataS : this.state.dataS.concat(responseJson.results)
      })
    })
    .catch((error) => {console.log(error)})
  }

  componentDidMount(){
    this.getUser()
  }

  _keyExtractor = (item,index) => item.email;

  render(){
    if(this.isLoading){
      return(
       <View>
         <ActivityIndicator size="large" color="blue"/>
       </View>
      )
    }
    return(
      <FlatList
      data={this.state.dataS}
      keyExtractor={this._keyExtractor}
      ListHeaderComponent={this.render_FlatList_header}
      renderItem={( {item} )=>(
        <Card>
          <CardItem>
            <View style={styles.container} >
              <Image
              style={styles.profilePic}
              source={{
                uri: item.picture.medium
              }}
              />
            </View>
            <View style={styles.userInfo}>
                <Text>
                  Name: {item.name.title} {item.name.first} {item.name.last}
                </Text>
                <Text>
                  Email: {item.email}
                </Text>
                <Text>
                  City: {item.location.city}
                </Text>
                <Text>
                  Phone: {item.phone}
                </Text>
            </View>
          </CardItem>
        </Card>
      )}
      >
      </FlatList>
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
  profilePic:{
    flex: 2,
    height: 100,
    width: 100,
    marginEnd: 10,
    marginTop: 0,
    marginLeft: 22
  },
  userInfo:{
    flex: 5,
    flexDirection: "column",
    marginLeft: 35
  },
  header_footer_style:{
 
    width: '100%', 
    height: 44, 
    backgroundColor: '#120E43', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 30,
   
  },
   
  textStyle:{
    textAlign: 'center', 
    color: '#fff', 
    fontSize: 21
  },
});
