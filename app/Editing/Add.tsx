import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList,TouchableOpacity,ScrollView  } from 'react-native';
import {useState} from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {  Provider as PaperProvider } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown'; /**(npm, 2025) */
import {Entypo } from '@expo/vector-icons';


 import { DishEntries } from '../../assets/Functions/DataProcessing';
 import { COURSES } from '../../assets/Functions/DataProcessing';

 import { CourseType } from '../../assets/Functions/DataProcessing';
 import { useDishStore } from '../../assets/Functions/DataProcessing';

export default function Add(){

  const {entries, addDish} = useDishStore();
    //empty variable for filling in and storing information
    const [price, setPrice] = useState('');
    const [dishName, setDishName] = useState('');
    const [dishDescription, setDishDescription] = useState('');
    const [course, setCourse] = useState<CourseType>("Entrée");
  
    const [dishes, setDishes] = useState<DishEntries[]>([]); /*This is the dish array for us to use and store all items  */
    const [selectedImage, setSelectedImage] = useState<any>(null)

          const pickImage = async () => { //(Expo, 2026)
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,//only allows images no other file types 
      allowsEditing: false,// does not let the user crop or adjust the image.
      quality: 1,//opens the image library on the device
    });


    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); //does not show an image if nothing is selected 
    }
  };


      const handleAdd = () => {

        // store all the need version of my items so that i can store them and use them for easy error handling 
      const nameTrimmed = dishName.trim();
      const descriptionTrimmed = dishDescription.trim();
      const courseTrimmed = course.trim();
      const costT =Number(price.trim())
      
      /**Will check my word count with this variable  */
      const wordCount = descriptionTrimmed.split(/\s+/).length; // groups character into words and counts then counts the grouped words as characters 

      if (!nameTrimmed && 
        !descriptionTrimmed &&  
        !selectedImage && 
        costT === 0){

        Alert.alert("Please fill in all the fields")
        return;
      }
      else if (nameTrimmed.length === 0) {
        Alert.alert("Please fill your name")
        return;
      }

      else if (wordCount < 0 || wordCount < 70){
        Alert.alert("You must write up to 70 or more, words when describing your dish")
        return;
        
      }

      else if ( costT <= 150){
        Alert.alert("The amount you enter must be more than R 150")
        return;

      }
      else if ( courseTrimmed.length  == 0){
        Alert.alert("Please select the course you would like to enter this dish as.")
        return;

      }
      else if (!selectedImage){
        Alert.alert("Add the image please")
        return;
        
      }


       

      const newItem :DishEntries = {
        name: nameTrimmed,
        description: descriptionTrimmed,
        course: courseTrimmed,
        image: selectedImage,
        price: costT,
        isDeleted: false,
        id: 0
      }

      addDish(newItem)

      Alert.alert("New item has been added to the menu 🍽️ ")

      //Refresh all the form parts 
      setCourse('Entrée');
      setDishDescription('');
      setDishName('');
      setPrice('');
      setSelectedImage(null);

    }



  
    return(

    <ScrollView style={styles.container}>
    <PaperProvider>  


      
      <View style={styles.form}>

    <View>
    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={pickImage}>

          <Image source={{uri: selectedImage}}
          style ={styles.pickedImageDisplay}/>
 
      </TouchableOpacity>

  <Dropdown
  /**(npm, 2025) */
    label="Select course"
    placeholder="Select course"
    options={COURSES.map((c) => ({ label: c, value: c }))}
    value={course}
    onSelect={(value) => setCourse(value as CourseType)}
    mode="outlined"
   menuContentStyle={styles.dropdownContainer}
   
  />

    </View> 
        

    </View>

      <View style={styles.formFields}>
        <Text style={styles.inputSubheadings}>Name of Dish:</Text>
        <TextInput
          placeholder="Enter dish name"
          value={dishName}
          onChangeText={setDishName}
          style={styles.input}
        />
      </View>

      <View style={styles.formFields}>
        <Text style={styles.inputSubheadings}>Description of Dish:</Text>
        <TextInput
          placeholder="Enter dish description"
          value={dishDescription}
          onChangeText={setDishDescription}
          style={styles.descriptionInput}
          multiline={true}
          numberOfLines={4}
          
        />
      </View>


      <View style={styles.formFields}>
        <Text style={styles.inputSubheadings}>Price of Dish:</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 13, fontWeight: '600',}}>R</Text>
        <TextInput
          placeholder="Enter dish price"
          value={price}
          keyboardType='numeric'
          onChangeText={setPrice}
          style={styles.input}
          
        />
        </View>
      </View>
      
      <TouchableOpacity onPress = {handleAdd}>
        <View style={styles.Button}>
          <Entypo name="plus" size={30} color="#f8f4f4" />
          <Text style={styles.buttonText}>Add</Text>
        </View>
      </TouchableOpacity>
      
    

      </View>

      
      </PaperProvider>
      </ScrollView>
    );}


    const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 224)",
    padding: '16%'
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