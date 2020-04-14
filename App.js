import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}> 
//     <Text style={styles.text}>Hello Numa</Text>
//     </View>
//   );
// }

export default class Game extends Component {
  //set initial state
  state = {
    secret : 0,
    input: '',
    feedback: ''
  }

  //function to picl random number
generateRandom() {
  return Math.round(Math.random() *100)
  //Math.round - rounds off, Math.random - picks random number between 1-10
}

//function to initialise the game
init() {
const secretNumber = this.generateRandom()
this.setState({ secret: secretNumber })
}
//lifecycle function
componentDidMount(){
  this.init()
}

//update input state
updateInput = (value) => {this.setState({input: value})}

checkGuess = () => {
const userGuess = parseInt(this.state.input)
const secretNumber = this.state.secret;
if (userGuess == secretNumber) {
  this.setState({feedback: 'You guessed the right number, number is ' + secretNumber})
  //restart the game
  this.init()
  return 
}
if (userGuess <secretNumber) {
  this.setState({feedback: 'The number is larger than ' + userGuess})
 
}
if (userGuess >secretNumber) {
  this.setState({feedback: 'The number is smaller than ' + userGuess})
}
return
}

  render () {
    return(
      <View style={styles.container}>
        <Text style={styles.text}> Guess my number</Text>
        <TextInput 
        style={styles.input} 
        keyboardType='number-pad'
          onChangeText = {this.updateInput}>
        </TextInput>
        <TouchableHighlight style={styles.button} 
        underlayColor='lightblue'
        onPress={this.checkGuess}>
          <Text>Submit Guess</Text>
        </TouchableHighlight>
        <Text>{this.state.feedback}</Text>
      </View>
    )}}
  

const styles = StyleSheet.create({
  button: {
    width: 110,
    padding: 10,
    backgroundColor: 'blue',
    marginTop: 20,
    alignItems:'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
input: {
  backgroundColor: '#ffffff',
  width: 100,
  marginTop:20,
  padding:10,
  textAlign:'center'
}

});
