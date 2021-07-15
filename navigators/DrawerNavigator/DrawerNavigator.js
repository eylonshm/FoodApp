import * as React from 'react'
import { Button, View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 20 }}>Swipe from Left to toggle Side Drawer</Text>
            <Button onPress={() => navigation.navigate('Notifications')} title="Go to notifications" />
        </View>
    )
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    )
}

const Drawer = createDrawerNavigator()

export default function App() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    )
}
