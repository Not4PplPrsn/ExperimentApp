import {Drawer} from 'expo-router/drawer'

import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'

export default function DrawerMenu() {
    return(
        <Drawer>
            <Drawer.Screen

            name='index'
            options={{
                headerShadowVisible: false,

                title: 'Main'
            }}
            />
        </Drawer>
    )
}