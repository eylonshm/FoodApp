import React from 'react'
import { Text, StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'

export default SectionTitle = (props) => {
    const { text } = props

    return <Text style={styles.sectionTitle}>{text}</Text>
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 16,
        fontFamily: 'MontserratBold',
        paddingHorizontal: 20,
        marginTop: 20,
        color: colors.textDark,
    },
})
