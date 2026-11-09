import {Tabs} from 'expo-router';

import { Ionicons, MaterialIcons, Entypo, AntDesign,  } from '@expo/vector-icons';
 



export default function TabLayout() {
    return(
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'rgb(255, 229, 180)',
                borderTopLeftRadius:10,
                borderTopRightRadius: 10,
                position: 'absolute'

            },
            tabBarInactiveTintColor: 'rgb(240, 248, 255)',
            tabBarActiveTintColor: 'rgb(143, 188, 139)'

        }}
        >

                <Tabs.Screen
                name='index'

                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) =>(<AntDesign name='home' size={28} color={color as string}/>)
                }}
                />

                <Tabs.Screen
                name='Editing'

                options={{
                    title: 'Edit',
                    tabBarIcon: ({color}) =>(<AntDesign name='edit' size={28} color={color as string}/>)
                }}
               
                />

                <Tabs.Screen
                name='MenuSelection'

                options={{
                    title: 'Menu',
                    tabBarIcon: ({color}) =>(<AntDesign name='select' size={28} color={color as string}/>)
                }}
                
                />
                
        </Tabs>
        
    )
}