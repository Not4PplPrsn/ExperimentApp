import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList,TouchableOpacity,ScrollView  } from 'react-native';
import {useState} from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {  Provider as PaperProvider,Checkbox } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown'; /**(npm, 2025) */
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { Trash } from '../../assets/Functions/Lists/Deleted';
import { DishEntries } from '../../assets/Functions/DataProcessing';
import { useRouter } from 'expo-router';
import { useDishStore } from '../../assets/Functions/DataProcessing';
import { CourseType } from '../../assets/Functions/DataProcessing';
import { COURSES } from '../../assets/Functions/DataProcessing';



export default function Remove(){
  const router = useRouter();

  const {entries, removeDish}  = useDishStore();
  const [selectedCourse, setSelectedCourse] = useState<CourseType>("All");

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const filteredItems = entries.filter((dish) =>
  selectedCourse === 'All'
    ? !dish.isDeleted &&
      dish.name.trim() !== '' &&
      dish.description.trim() !== '' &&
      dish.price > 0 &&
      dish.image
    : dish.course === selectedCourse &&
      !dish.isDeleted &&
      dish.name.trim() !== '' &&
      dish.description.trim() !== '' &&
      dish.price > 0 &&
      dish.image
);


    return(
    <PaperProvider>      
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => router.back() }>
              <View style= {{margin: 20}}> 
                <Ionicons name = "arrow-back-circle-outline" color={'rgba(143, 188, 139, 0.73)'} size={48}/>
              </View>
            </TouchableOpacity>
            
  <TouchableOpacity
  >
    
  </TouchableOpacity>
  
  <Dropdown
  /**(npm, 2025) */
    
    label="Select course"
    placeholder="Select course"
    options={COURSES.map((c) => ({ label: c, value: c }))}
    value={selectedCourse}
    onSelect={(value) => setSelectedCourse(value as CourseType)}
    mode="outlined"
   menuContentStyle={styles.dropdownContainer}
   
  />

  <View >
  <FlatList
  data={filteredItems}
  renderItem={({ item }) => {
    

    return (
        
      <View style={styles.ListItemContainer} >
          <TouchableOpacity onPress={() => removeDish(item.id)}>
            <View style = {styles.Button}>  
              <Ionicons name="trash-outline" size={25} color="#f5f5f5" />
            </View>
          </TouchableOpacity>
        
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
    );
  }}

  keyExtractor={(item) => item.id.toString()/**(W3Schools, 2025) */} // turns all items into string form
/></View>
            
        </View>
</PaperProvider>        

);}



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
    alignSelf: 'center',
    borderRadius: '3.25%'
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
    backgroundColor: 'rgb(228, 82, 46)',
    padding: 5,
    margin: 6,
    alignSelf: 'center',
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 25,
        justifyContent: 'center',

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