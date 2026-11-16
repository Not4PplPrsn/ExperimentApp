import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList,TouchableOpacity,ScrollView  } from 'react-native';
import {useState} from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {  Provider as PaperProvider } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown'; /**(npm, 2025) */
import {Entypo } from '@expo/vector-icons';

import { useDishStore } from '../../assets/Functions/DataProcessing';





export default function HomePage() {

  const {entries} = useDishStore();
  const numberOfItems  = entries.length; /*(W3Schools, 2026) */ 

  let priceSum = 0  // Standardize the sum of all items in the array

  let averageDishPrice = 0 // Standardized the average price of the items 

  const numberOfStarters = entries.filter((dish) => (dish.course ==="Entrée")).length  /*(W3Schools, 2026) */ /**this will count the amount of items which have the course attribute that matches the one mentioned */
  const numberOfMainDishes = entries.filter((dish) => (dish.course ==="Main")).length
  const numberOfDesserts= entries.filter((dish) => (dish.course ==="Dessert")).length


 for(let i  = 0; i < numberOfItems; i++ ) { //(The IIE, 2026)
  priceSum = priceSum + entries[i].price // Adding the price of each items in the list to the priceSum value as it the loop iterates through the loop 

  averageDishPrice = priceSum / numberOfItems // Average iterates through the loop until all the the items in menu have been accounted for even new items in the array 
 };
  return (
    <View style={styles.container}>
      
      <ScrollView style= {{ height: 'auto', width : 'auto', marginBottom: 25}}>
        <Text style= {styles.baselineText}> 
          Number of dishes: {numberOfItems}
        </Text>

        <Text style={styles.baselineText}>
          Average Dish Price: R {averageDishPrice}
        </Text>
        <Text style={styles.baselineText}>
          Number of Entrées: {numberOfStarters}
        </Text>
        
        <Text style={styles.baselineText}>
          Number of Main Course Dishes: {numberOfMainDishes}
        </Text>
        
        <Text style={styles.baselineText}>
          Number of Dessert Course Dishes: {numberOfDesserts}
        </Text>




        <Text style= {styles.courseHeading}>Entrée</Text>
  <ScrollView horizontal = {true}>     
    {entries 
    .filter((entry) => entry.course === "Entrée"  )  /*(W3Schools, 2026) */ /**This will filter through the list for this exact attribute value */
      .slice(0.2)
      .map((item) => ( //Then this will display those exact items with the attribute 

      
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
        }
  </ScrollView>

       <Text style= {styles.courseHeading}>Main</Text>
   <ScrollView  horizontal = {true}>      
    {entries.filter((entry) => entry.course === "Main"  ) /*(W3Schools, 2026) */ 
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
        }
  </ScrollView>      


        <Text style= {styles.courseHeading}>Dessert</Text>

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
        }
  </ScrollView>
        

      </ScrollView>
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({ //(The IIE, 2026)
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 224)",
  },

  courseHeading: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    fontStyle: 'italic',
    marginStart : '10%',
    marginTop: '10%',
    letterSpacing: 2
  },
   
  baselineText :{
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: 'thin',
    padding: 10
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
