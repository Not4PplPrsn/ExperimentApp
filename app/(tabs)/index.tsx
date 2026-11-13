import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList,TouchableOpacity,ScrollView  } from 'react-native';
import {useState} from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {  Provider as PaperProvider } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown'; /**(npm, 2025) */
import {Entypo } from '@expo/vector-icons';



import { DishList } from '../../assets/Functions/Lists/DishEntries';
import { COURSES } from '../../assets/Functions/DataProcessing';

import { useDishStore } from '../../assets/Functions/DataProcessing';





export default function HomePage() {

  const {entries} = useDishStore()

  return (
    <View style={styles.container}>
      
      <ScrollView style= {{ height: 'auto', width : 'auto', marginBottom: 25}}>


        <Text style= {styles.TopBarText}>Entrée</Text>
  <ScrollView horizontal = {true}>     
    {entries.filter((entry) => entry.course === "Entrée"  )
      .slice(0.2)
      .map((item) => (

      
      <View style={styles.ListItemContainer} >
        <View style={{flexDirection: 'row', margin: 2, justifyContent:'space-around'}}>
          <Image
          source={item.image}
          style ={styles.pickedImageDisplay}
          />
        <View >
          <Text style={styles.dishNameText}>{item.name}</Text>
        </View>

        </View>
        <Text style={styles.descriptionText}>{item.description}</Text>

        <View style = {styles.priceContainer}>
          <Text style  = {styles.priceText}> R {item.price}</Text>
        </View>
      
      </View>

      

    ))
        };
  </ScrollView>

       <Text style= {styles.TopBarText}>Main</Text>
   <ScrollView  horizontal = {true}>      
    {entries.filter((entry) => entry.course === "Main"  )
      .slice(0.2)
      .map((item) => (

        
      <View style={styles.ListItemContainer} >
        <View style={{flexDirection: 'row', margin: 2, justifyContent:'space-around'}}>
          <Image
          source={item.image}
          style ={styles.pickedImageDisplay}
          />
        <View >
          <Text style={styles.dishNameText}>{item.name}</Text>
        </View>

        </View>
        <Text style={styles.descriptionText}>{item.description}</Text>

        <View style = {styles.priceContainer}>
          <Text style  = {styles.priceText}> R {item.price}</Text>
        </View>
      
      </View>

      

    ))
        };
  </ScrollView>      


        <Text style= {styles.TopBarText}>Dessert</Text>

  <ScrollView  horizontal = {true}>
    {entries.filter((entry) => entry.course === "Dessert"  )
      .slice(0.2)
      .map((item) => (

        
      <View style={styles.ListItemContainer} >
        <View style={{flexDirection: 'row', margin: 2, justifyContent:'space-around'}}>
          <Image
          source={item.image}
          style ={styles.pickedImageDisplay}
          />
        <View >
          <Text style={styles.dishNameText}>{item.name}</Text>
        </View>

        </View>
        <Text style={styles.descriptionText}>{item.description}</Text>

        <View style = {styles.priceContainer}>
          <Text style  = {styles.priceText}> R {item.price}</Text>
        </View>
      
      </View>

      

    ))
        };
  </ScrollView>
        

      </ScrollView>
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 224)",
  },

  TopBarText: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    fontStyle: 'italic',
    marginStart : '10%',
    marginTop: '20%',
    letterSpacing: 2
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
  borderWidth: 0.15,
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
    width: 350,
    
    alignSelf: 'center',
    height: 470,
    backgroundColor: "rgba(143, 188, 139, 0.73)",
    margin: 20,
    borderRadius: 20
  },
  priceText: {
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 14,
    padding: 5

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
    color: "rgba(128, 121, 119, 0.92)",
    margin: 5,
    width: 105  },
  descriptionText:{
    fontSize: 13,
    letterSpacing: 0.4,
    padding: 5,
    margin: 17,
    flexWrap: 'nowrap'
  }




});
 /*
 References 
 Expo, 2026. ImagePicker. [online] Expo documentation. Available at: <https://docs.expo.dev/versions/latest/sdk/imagepicker/> [Accessed 10 October 2026].
npm, 2025. react-native-paper-dropdown-2025. [online] npm. Available at: <https://www.npmjs.com/package/react-native-paper-dropdown-2025> [Accessed 3 October 2026].
The IIE, T.I.I. of E., 2026. MAST5112_MM.docx. [online] Available at: <https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BE64EF930-F31D-42F3-ABDE-632C1339F1AF%7D&file=MAST5112_MM.docx&action=default&mobileredirect=true> [Accessed 8 September 2026].
 */