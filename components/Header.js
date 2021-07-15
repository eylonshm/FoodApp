import React from 'react'
import { View, StyleSheet, Image, Platform, TouchableOpacity, Dimensions } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../assets/colors/colors'

const windowWidth = Dimensions.get('window').width

export default Header = ({ onPress }) => {
    return (
        <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={onPress}>
                <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
            </TouchableOpacity>

            {/* Icon */}
            <TouchableOpacity>
                <Feather name="menu" size={24} color={colors.textDark} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                width: windowWidth,
                paddingHorizontal: 20,
            },
        }),
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
})
