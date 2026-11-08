import {Tabs} from 'expo-router';

import { Ionicons, MaterialIcons, Entypo, AntDesign,  } from '@expo/vector-icons';
 
import EditingPage from './Editing';
import HomePage from '.';
import MenuSelection from './MenuSelection';



export default function TabLayout() {
    return(
        <Tabs>

                <Tabs.Screen
                name='index'

                options={{
                    title: 'Home',
                    tabBarIcon: (color) =>(<AntDesign name='home' size={28} color={'#ffff'}/>)
                }}
                />

                <Tabs.Screen
                name='Editing'

                options={{
                    title: 'Edit',
                    tabBarIcon: (color) =>(<AntDesign name='edit' size={28} color={'#ffff'}/>)
                }}
               
                />

                <Tabs.Screen
                name='MenuSelection'

                options={{
                    title: 'Menu',
                    tabBarIcon: (color) =>(<AntDesign name='select' size={28} color={'#ffff'}/>)
                }}
                
                />
                
        </Tabs>
        
    )
}