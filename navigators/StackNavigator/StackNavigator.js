import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import colors from '../../assets/colors/colors'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../components/Home'
import Details from '../../components/Details'
import Header from '../../components/Header'
import ArrowBackIcon from '../../components/ArrowBackIcon'

const Stack = createStackNavigator()

export default function StackNavigator() {
    let [fontsLoaded] = useFonts({
        MontserratBold: Montserrat_700Bold,
        MontserratSemiBold: Montserrat_600SemiBold,
        MontserraRegular: Montserrat_400Regular,
        MontserratMedium: Montserrat_500Medium,
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.background,
                        shadowRadius: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        elevation: 0,
                    },
                    headerBackImage: () => <ArrowBackIcon />,
                    headerBackTitleVisible: false,
                    headerTitleStyle: { alignSelf: 'center' },
                    headerTitle: false,
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'My home',
                        headerTitle: (props) => <Header {...props} />,
                    }}
                />
                <Stack.Screen name="Details" component={Details} options={{ headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        )
    }
}
