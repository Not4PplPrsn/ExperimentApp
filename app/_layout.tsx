import {Drawer, DrawerContentScrollView, DrawerItem} from 'expo-router/drawer';

import { useRouter } from 'expo-router';

import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

import Add from './Editing/Add';

import Remove from './Editing/Remove';

import Deleted from './History/Deleted';

import Cart from './History/Cart';

import { useState, } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList,TouchableOpacity,ScrollView  } from 'react-native';
import { Switch } from 'react-native';



{/**The pages that will be toggled in the drawer menu */}
const History  = [
{name: 'Deleted', path: '/History/Deleted', icon: <MaterialIcons name="delete-outline" size={12} color="#000000" /> },
{name: 'Cart', path: '/History/Cart',  icon: <Ionicons name="cart-outline" size={12} color="#000000" />}

]

const Editing = [
    {name: 'Add', path: '/Editing/Add', icon: <MaterialIcons name="add-circle-outline" size={12} color="#000000" />},
    {name: 'Remove', path: '/Editing/Remove', icon: <MaterialIcons name="remove-circle-outline" size={12} color="#000000" /> }
]


export default function RootLayout() {
    return(
        <Drawer
        drawerContent={() => <DrawerScroller/>} // This will show what ever content programme in the corresponding function 
        >

            {/**Screens must belogged before they are used in anything  */}
            <Drawer.Screen

            name='(tabs)' // Has a layout file with its own navigation so it does things automatically, and lands in the home screen first 
            options={{
                headerShadowVisible: false,
                headerShown: true,

                title: 'Home'
            }}
            />

            {/**These are the screens for the editing, and tracking the history of one's order and deleted and deleted menu items */}
            <Drawer.Screen
            name='Editing/Add'
            options={{
                title: 'Add'
            }}
            />
            <Drawer.Screen
            name='Editing/Remove'
            options={{
                title: 'Remove'
            }}
            />
            <Drawer.Screen
            name='History/Cart'
            options={{
                title: 'Cart'
            }}
            />
            <Drawer.Screen
            name='History/Delete'
            options={{
                title: 'Bin'
            }}
            />
        </Drawer>
    );
}

function DrawerScroller(){
    const router = useRouter();

    const [expand, setExpand]= useState({ /**Set the variables to false they are not open  */
        History:false,
        Editing: false
    });


    const toggleSection = (key: keyof typeof expand) => { /**(W3Schools, 2025) */ /**This is the function for the  the the toggling of items for the opening and closing of  the the item in the drawer items  */
    setExpand((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

    return(
        <DrawerContentScrollView>

        {/**This is the home page navigation button and no navigation will appear unless it is standardized in this function as set in the main drawer */}
            <DrawerItem
            label={"Home"}
            icon={() => <Ionicons name="home-outline" size={12} color="#000000" /> }

            onPress={() => router.push('/(tabs)')}
            />

            <View>  {/**This landing button for the expanding the items and reveal the navigation buttons  */}
                <Text> History</Text>

                <Switch 
                value= {expand.History}

                onValueChange={() => toggleSection('History')}
                /> 
            </View>


            

            {expand.History&& //This is the case for the when the expansion for the history is true and what will be displayed
            History.map(items=>(
                <DrawerItem
                key={items.name}
                label={items.name}
                icon={() => items.icon}
 
                onPress={() => router.push(items.path)}
                />
            ))

            }

            <View> 
                <Text> Editing</Text>

                <Switch
                value= {expand.Editing}

                onValueChange={() => toggleSection('Editing')}
                />
            </View>
            {expand.Editing && //This is the case for the when the expansion for the editing is true and what will be displayed 
            Editing.map(items => (


                <DrawerItem
                key={items.name}
                label={items.name}

                icon={() => items.icon}

                onPress={() => router.push(items.path)}
                />
            ))


            }
            
            
        </DrawerContentScrollView>

    );
}