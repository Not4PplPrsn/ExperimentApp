import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Animated, TouchableOpacity  } from 'react-native';
import {useState} from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ImageBackground } from 'react-native';
import { Checkbox, Menu, Provider as PaperProvider, Button } from 'react-native-paper';


export type Course = 'Main' | 'Dessert' | 'Entree';

export const  COURSES: Course[] = ['Dessert', 'Main', 'Entree'];

export type Dishes = {
  id: number;
  image: any;
  dishName: string;
  description: string;
  price: number;
  isDeleted: boolean; 
  courseName: string; 
};

export default function App() {

  const companyName = "Mister Christoffel's";
  const studentNumber = 'ST10470237';

  const [price, setPrice] = useState('');
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [course, setCourse] = useState<Course>('Main');

  const [dish, setDish] = useState<Dishes[]>([]);
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const [menuVisible, setMenuVisible] = useState(false);


      const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,//only allows images no other file types 
      allowsEditing: false,// does not let the user crop or adjust the image.
      quality: 1,//opens the image library on the device
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.topBar} >
        <Text style={styles.TopBarText}>{companyName}</Text> 
        <Text>{studentNumber}</Text>  
      </View>
      

      <View>
        <Text style={styles.FormHeading}>
          Fill the form below
        </Text>
      </View>
      
      <View style={styles.form}>

    <View>
    <View>
      <TouchableOpacity onPress={pickImage}>

          <Image source={{uri: selectedImage}}
          style ={styles.pickedImageDisplay}/>
 
      </TouchableOpacity>

      <Menu
      visible = {menuVisible}
      onDismiss={ () => setMenuVisible(false)}
      anchor ={
        
      <TouchableOpacity
      onPress ={() => setMenuVisible(true)}
      >
        <View style = {styles.Button}>
          <Text>{course || 'Select Course'}</Text>
        </View>
      </TouchableOpacity>

      }
      >
        { COURSES.map ((course,index)=>(

          <Menu.Item
          key={course}
          title= {course}
          onPress={() => {setCourse (course as Course)}}
          />
        ))}

      </Menu>

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
        <TextInput
          placeholder="Enter dish price"
          value={price}
          keyboardType='numeric'
          onChangeText={setPrice}
          style={styles.input}
          
        />
      </View>
      
      
    

      </View>
      <TouchableOpacity>
        <View style={styles.Button}>
          <Text style={styles.buttonText}>ADD</Text>
        </View>
      </TouchableOpacity>
















      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f2f086",
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
  },
  formFields: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
    backgroundColor: 'rgb(24, 132, 204)',
    padding: 10,
    margin: 20,
    alignSelf: 'center',
    width: 300,
    height: 80,
    alignItems: 'center',
    borderRadius: 25
  },

  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Helvetica',
    shadowColor: 'rgba(102, 101, 101, 0.25)',
    shadowOffset: { width: 5, height:15,},

    
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
  borderWidth: 2
  
},
dropDownAnchorButton: {
  height : 75,
  width: 100,
  backgroundColor: 'rgba(96, 165, 243, 0.2)',
  borderRadius: 22,

}


});
