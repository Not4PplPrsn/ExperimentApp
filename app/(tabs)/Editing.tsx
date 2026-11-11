import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList,TouchableOpacity,ScrollView  } from 'react-native';
import {useState} from 'react';
import { Alert } from 'react-native';

import { useRoute } from 'expo-router';

export default function EditingPage () {

  const router = useRoute();
    return(
        <View style={styles.container}>
            <Text> Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 224)",
  },

  topBar: {

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

        paddingTop: 58,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(233, 197, 119)',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  TopBarText: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    fontStyle: 'italic',
  },
   
  baselineText :{
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: 'thin',
    paddingTop: 10,
    paddingBottom: 10,
  },
  form:{
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 20,
    width: 350,
    backgroundColor: 'rgb(233, 197, 119)',
    padding: 20,
    alignSelf: 'center'
  },
  formFields: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    
  }, 
  input: {
    backgroundColor: 'rgb(230, 227, 215)',
    borderColor: 'gray',
    height: "auto",
    width: 282,
    borderWidth: 0,
    marginLeft: 4,
    marginTop:5,
    marginBottom: 5,
    flexDirection: 'column',
    padding: 7,
    
    
  },
  placeholderStyle: {
    color: 'rgba(116, 116, 111, 0.26)',
    fontStyle: 'italic',
    justifyContent: "flex-start"
  },
  descriptionInput: {
    height: 120,
    padding: 6,
    fontFamily: 'Arial',
    letterSpacing: 0.5,
    fontWeight: 'thin',
    backgroundColor: 'rgb(230, 227, 215)',
    width: 282,
    justifyContent: 'center',
    marginLeft: 10

    

  },
  Button: {
    backgroundColor: 'rgb(12, 150, 241)',
    padding: 5,
    margin: 6,
    alignSelf: 'center',
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row'
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Helvetica',
    shadowColor: 'rgba(102, 101, 101, 0.25)',
    shadowOffset: { width: 5, height:15,},
    color: '#fff',
    textTransform: 'uppercase'

    
  },
  FormHeading: {
    fontSize: 23,
    fontWeight:'800',
    fontStyle: 'italic',
    alignSelf: 'center',
    margin: 10

  },
  inputSubheadings: {
    fontWeight: 'bold',
    fontSize: 16,
    fontStyle: 'italic'
  },
  imageDesign: {
    borderRadius: '100%',
    
  },
  pickedImageDisplay: {
  width : 100,
  height: 100,
  borderRadius: 75,
  borderWidth: 2,
  padding: 5,
  margin: 10,
  
},
emptyListBox:{
    borderWidth: 3,
    borderColor: "#111111",
    borderStyle: "dashed",
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    width: 350,
    alignSelf: 'center',  
},
  emptyText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111111",
    letterSpacing: 2.15,
    fontFamily: 'Gothic'
  },

  ListItemContainer: {
    width: 'auto',
    alignSelf: 'center',
    height: 'auto',
    backgroundColor: "rgba(252, 184, 57, 0.71)",
    margin: 20,
  },
  priceText: {
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 14,
    padding: 20

  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 'auto',
    marginTop: 15, 
    alignSelf: 'flex-end',
    marginLeft: 10

  },
  dropdownContainer: {
  backgroundColor: 'rgb(233, 197, 119)',
  color: "rgb(206, 89, 12)",
  alignSelf: 'flex-end',
  alignItems: 'center',
  marginTop: 2.5,
  },

  courseSelected: {
    fontWeight: "700",
    fontSize: 16,
    fontStyle: 'italic',
    color: "rgba(29, 29, 28, 0.92)",

  
  },
  dishNameText: {
    fontWeight: "700",
    fontSize: 19,
    color: "rgba(241, 102, 59, 0.92)",
  },
  descriptionText:{
    fontSize: 15,
    letterSpacing: 1.6,
    padding: 10
  }




});