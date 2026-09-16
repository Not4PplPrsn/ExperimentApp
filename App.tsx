import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Animated, TouchableOpacity,ScrollView  } from 'react-native';
import {useState} from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ImageBackground } from 'react-native';
import { Checkbox, Menu, Provider as PaperProvider, Button,  } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown';
import { Ionicons, MaterialCommunityIcons,Entypo } from '@expo/vector-icons';




export type Course = 'Main' | 'Dessert' | 'Entree';

export const  COURSES: Course[] = ['Dessert', 'Main', 'Entree'];

export type Dish = {
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

  const [dishes, setDishes] = useState<Dish[]>([]);
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

  const handleAddingItems  = () => {
    const DishName = dishName.trim();
    const dishCourse= course.trim();
    const descriptionT = dishDescription.trim();
    const costT =Number(price.trim());

  if ( !DishName || !dishCourse || !selectedImage || !descriptionT || costT <= 0){
      Alert.alert("Please fill all field to continue📄")
      console.log("Must fill all fields.😒")
      return;
    }
    const normalizedNew = DishName.toLowerCase();

    const exists = dishes.some(
    d => d.dishName.trim().toLowerCase() === normalizedNew
  );
     if (exists) {
    Alert.alert('Duplicate', `"${dishName}" is already in the list.`);
    return;
  }
     const newDish: Dish = {
    id: Math.random().toString(36).slice(2),
    dishName: dishName.trim(),
    price: costT,
    image: selectedImage,
    description: descriptionT,
    courseName: dishCourse,
    isDeleted: false

  };
  setDishes(prev => [...prev, newDish]);

  setDishName('');
  setPrice('');
  setCourse('Main');
  setDishName('');
  setDishDescription('');
  setSelectedImage(null);

  }


  return (
    
    <View style={styles.container}>
      <View style={styles.topBar} >
        <Text style={styles.TopBarText}>{companyName}</Text> 
        <Text>{studentNumber}</Text>  
      </View>
      
    <ScrollView contentContainerStyle ={{maxWidth: 800}}>
      <View>
        <Text style={styles.FormHeading}>
          Fill the form below
        </Text>
      </View>
      
    <PaperProvider>  


      <TouchableOpacity onPress={handleAddingItems}>
        <View style={styles.Button}>
          <Entypo name="plus" size={40} color="#000000" />
        </View>
      </TouchableOpacity>
      
      <View style={styles.form}>

    <View>
    <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', padding: 10}}>
      <TouchableOpacity onPress={pickImage}>

          <Image source={{uri: selectedImage}}
          style ={styles.pickedImageDisplay}/>
 
      </TouchableOpacity>

  <Dropdown
    label="Select course"
    placeholder="Select course"
    options={COURSES.map((c) => ({ label: c, value: c }))}
    value={course}
    onSelect={(value) => setCourse(value as Course)}
    mode="outlined"
   menuContentStyle={styles.formFields}
   
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
        <Text style={styles.inputSubheadings}>R</Text>
        <TextInput
          placeholder="Enter dish price"
          value={price}
          keyboardType='numeric'
          onChangeText={setPrice}
          style={styles.input}
          
        />
        </View>
      </View>
      
      
    

      </View>
      
      </PaperProvider>





    <FlatList
    data={dishes}
    keyExtractor= {(item) =>(item.id)}
    ListEmptyComponent={() => (
      <View style={styles.emptyListBox}>
        <Text style = {styles.emptyText}> Nothing Here Yet 💭</Text>
      </View>
    )}

    renderItem={({item}) => (
      <View style={styles.ListItemContainer} >
        <View style={{flexDirection: 'row', margin: 2, justifyContent:'space-around'}}>
          <Image
          source={item.image}
          style ={styles.pickedImageDisplay}
          />
        <View style ={{flexDirection: 'column', padding:4}}>
          <Text>{item.dishName}</Text>
          <Text>{item.courseName}</Text>
        </View>

        </View>
        <Text>{item.description}</Text>

        <View style = {styles.priceContainer}>
          <Text style  = {styles.priceText}> R{item.price}</Text>
        </View>
      
      </View>
    )}
    
    />










</ScrollView>
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
    backgroundColor: 'rgb(24, 132, 204)',
    padding: 5,
    margin: 2,
    alignSelf: 'center',
    width: 'auto',
    height: 'auto',
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
  borderWidth: 2,
  padding: 20
  
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
    backgroundColor: "rgba(223, 134, 74, 0.71)",
    margin: 20,
  },
  priceText: {
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 12,

  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },




});
