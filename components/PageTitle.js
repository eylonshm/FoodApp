import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../assets/colors/colors'

export default PageTitle = (props) => {
    const { title, subTitle, textColor } = props
    return (
        <View style={[styles.titleWrapper, { ...props.style }, { marginTop: !subTitle ? 10 : 30 }]}>
            {subTitle && <Text style={styles.subTitle}>{subTitle || 'subTitle Prop is required'}</Text>}
            <Text style={[styles.title, textColor && { color: textColor }]}>{title || 'title Prop is required'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
        maxWidth: 300,
    },
    subTitle: {
        fontFamily: 'MontserraRegular',
        fontSize: 16,
        color: colors.textDark,
    },
    title: {
        fontFamily: 'MontserratBold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,
    },
})
