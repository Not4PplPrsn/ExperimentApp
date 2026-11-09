import {Drawer, DrawerContentScrollView, DrawerItem} from 'expo-router/drawer';

import { useRouter } from 'expo-router';

import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

import Add from './Editing/Add';

import Remove from './Editing/Remove';

import Deleted from './History/Deleted';

import Cart from './History/Cart';

import { useState } from 'react';




const History  = [
{name: 'Deleted', path: Deleted, label: <MaterialIcons name="delete-outline" size={12} color="#000000" /> },
{name: 'Cart', path: Cart,  label: <Ionicons name="cart-outline" size={12} color="#000000" />}

]

const Editing = [
    {name: 'Add', path: Add, label: <MaterialIcons name="add-circle-outline" size={12} color="#000000" />},
    {name: 'Remove', path: Remove, label: <MaterialIcons name="remove-circle-outline" size={12} color="#000000" /> }
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

                title: 'Main'
            }}
            />
        </Drawer>
    );
}

function DrawerScroller(){
    const router = useRouter();
    return(
        <DrawerContentScrollView>

            <DrawerItem
            label={"Main"}

            onPress={() => router.push('/(tabs)')}
            />
            
            
        </DrawerContentScrollView>

    );
}