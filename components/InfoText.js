import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../assets/colors/colors'

export default InfoText = (props) => {
    const { info, title } = props
    return (
        <View style={[styles.titleWrapper, { ...props.style }]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.info}>{info}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleWrapper: {
        paddingHorizontal: 20,
        maxWidth: 300,
    },
    title: {
        fontFamily: 'MontserraRegular',
        fontSize: 14,
        color: colors.textLight,
    },
    info: {
        fontFamily: 'MontserratBold',
        fontSize: 16,
        color: colors.textDark,
        marginTop: 5,
    },
})
