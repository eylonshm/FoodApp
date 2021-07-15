import Feather from 'react-native-vector-icons/Feather'
import React from 'react'
import { Platform, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../assets/colors/colors'

export default ArrowBackIcon = () => (
    <TouchableOpacity style={styles.arrowWrapper}>
        <Feather name={'chevron-left'} size={13} color={colors.textDark} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    arrowWrapper: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.textLight,
        ...Platform.select({
            ios: {
                marginBottom: 5,
                marginLeft: 20,
            },
            android: {
                marginLeft: 10,
                marginBottom: 5,
            },
        }),
    },
})
