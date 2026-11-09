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
        drawerContent={() => <DrawerScroller/>}
        >
            <Drawer.Screen

            name='(tabs)'
            options={{
                headerShadowVisible: false,
                headerShown: true,

                title: 'Home'
            }}
            />

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
            name='History/Deleted'
            options={{
                title: 'Bin'
            }}
            />
        </Drawer>
    );
}

function DrawerScroller(){
    const router = useRouter();

    const [expand, setExpand]= useState({
        History:false,
        Editing: false
    });

    const [items, setItems]= useState([/**(W3Schools, 2025) */
          History.map(item => ({...item, visible: true })),
    ]);

    const toggleSection = (key: keyof typeof expand) => { /**(W3Schools, 2025) */ /**This is the function for the  the the toggling of items for the opening and closing of  the the item in the drawer items  */
    setExpand((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

    return(
        <DrawerContentScrollView>

            <DrawerItem
            label={"Main"}

            onPress={() => router.push('/(tabs)')}
            />
            <View> 
                <Text> History</Text>

                <Switch
                value= {expand.History}

                onValueChange={() => toggleSection('History')}
                />
            </View>


            

            {expand.History&&
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
            {expand.Editing && 
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