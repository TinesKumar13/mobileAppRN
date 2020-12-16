import React, {useState} from 'react'

import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'

const App = () => {

  const [color , setColor] = useState("#FFFFFF")

  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let pallete = '#' + n.slice(0, 6).toUpperCase();

    setColor(pallete)
   
  };
  return (
    <>
    <View style={[styles.container , {backgroundColor:color}]}>
      
      <TouchableOpacity onPress={random_hex_color_code}>
     
      <Text style = {styles.text}>Tap Me</Text>

      </TouchableOpacity>
 

      <TouchableOpacity onPress={() => setColor("black")}>
     
      <Text style = {[styles.text , {marginTop:10}]}>Reset</Text>

      </TouchableOpacity>


    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : "center",
    justifyContent: 'center'
  },

  text: {
    color : "white",
    fontSize: 30,
    backgroundColor: "#FEB1B7",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    textTransform: "uppercase"
  
  }
})



export default App;