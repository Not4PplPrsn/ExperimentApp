import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList,TouchableOpacity,ScrollView  } from 'react-native';
import {useState} from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {  Provider as PaperProvider } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown'; /**(npm, 2025) */
import {Entypo } from '@expo/vector-icons';




export type Course = 'Main' | 'Dessert' | 'Entree'; /*The types will will act as a filler and in the dropdown menu */

export const  COURSES: Course[] = ['Dessert', 'Main', 'Entree']; /*The choice for se of the  */
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

  //empty variable for filling in and storing information
  const [price, setPrice] = useState('');
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [course, setCourse] = useState<Course>('Main');

  const [dishes, setDishes] = useState<Dish[]>([]); /*This is the dish array for us to use and store all items  */
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
  }

  const handleAddingItems  = () => { /*(The IIE, 2026) */

    //shortens everything
    const DishName = dishName.trim();
    const dishCourse= course.trim();
    const descriptionT = dishDescription.trim();
    const costT =Number(price.trim()) /*The amount type into a number instead of a sting */; 

  if ( !DishName ||  !selectedImage || !descriptionT || !dishCourse || costT <= 0 )//Checks if the fields are empty by counting the length of all array items 
    
    {
      Alert.alert("Please fill all field to continue📄")
      console.log("Must fill in all fields.😒")
      return;
    }
    const normalizedNew = DishName.toLowerCase(); // the initial variable which the items will be compared to 

    const exists = dishes.some(
    d => d.dishName.trim().toLowerCase() === normalizedNew // Will search through the array to see if there is an item with the same name as the new item 
  );
     if (exists) {
    Alert.alert('Duplicate', `"${dishName}" is already in the list.`);
    return;
  }
     const newDish: Dish = {  // The items which have passed the verification checks will fill the array item fields 
    id: Math.random().toString(36).slice(2),
    dishName: dishName.trim(),
    price: costT,
    image: selectedImage,
    description: descriptionT,
    courseName: dishCourse,
    isDeleted: false

  };
  //Adding the the newDish variable as an item in the array 
  setDishes(prev => [...prev, newDish]);
  Alert.alert('New item added')

  // Reset the form's fields 

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
      
    <ScrollView style= {{ height: 'auto', width : 'auto', marginBottom: 25}}>
      <View>
        <Text style={styles.FormHeading}>
          Fill the form below
        </Text>
      </View>
      
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
    onSelect={(value) => setCourse(value as Course)}
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
      
      <TouchableOpacity onPress={handleAddingItems}>
        <View style={styles.Button}>
          <Entypo name="plus" size={30} color="#f8f4f4" />
          <Text style={styles.buttonText}>Add</Text>
        </View>
      </TouchableOpacity>
      
    

      </View>

      
      </PaperProvider>






  >
    <FlatList

    data={dishes}
    keyExtractor= {(item) =>(item.id)}
    ListEmptyComponent={() => ( /*(The IIE, 2026) */
      <View style={styles.emptyListBox}>
        <Text style = {styles.emptyText}> No new dishes entered 🍽️ </Text>
      </View>
    )}

    renderItem={({item}) => ( /*(The IIE, 2026) */
      <View style={styles.ListItemContainer} >
        <View style={{flexDirection: 'row', margin: 2, justifyContent:'space-around'}}>
          <Image
          source={item.image}
          style ={styles.pickedImageDisplay}
          />
        <View style ={{flexDirection: 'column', padding:4}}>
          <Text style={styles.dishNameText}>{item.dishName}</Text>
          <Text style={styles.courseSelected}>{item.courseName}</Text>
        </View>

        </View>
        <Text style={styles.descriptionText}>{item.description}</Text>

        <View style = {styles.priceContainer}>
          <Text style  = {styles.priceText}> R {item.price}</Text>
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
    backgroundColor: "#92bd7e91",
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
 /*
 References 
 Expo, 2026. ImagePicker. [online] Expo documentation. Available at: <https://docs.expo.dev/versions/latest/sdk/imagepicker/> [Accessed 10 October 2026].
npm, 2025. react-native-paper-dropdown-2025. [online] npm. Available at: <https://www.npmjs.com/package/react-native-paper-dropdown-2025> [Accessed 3 October 2026].
The IIE, T.I.I. of E., 2026. MAST5112_MM.docx. [online] Available at: <https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BE64EF930-F31D-42F3-ABDE-632C1339F1AF%7D&file=MAST5112_MM.docx&action=default&mobileredirect=true> [Accessed 8 September 2026].
 */