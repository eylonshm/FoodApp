import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../../assets/colors/colors'
// import BouncyView from 'react-native-bouncy-touchable'

export default CategoryCard = (props) => {
    const { title, selected, image } = props

    return (
        // <BouncyView level={1.9}>
        <View style={[styles.cardWrapper, { ...props.style }]}>
            <Image style={styles.image} source={image} />
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity style={[styles.selectWrapper, { backgroundColor: selected ? colors.white : colors.secondary }]}>
                <Feather name={'chevron-right'} size={15} color={selected ? colors.black : colors.white} />
            </TouchableOpacity>
        </View>
        // </BouncyView>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        width: 100,
        height: 170,
        borderRadius: 19,
        backgroundColor: '#F5CA48',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginRight: 20,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 8,
    },
    image: { marginTop: 15, maxWidth: 50, maxHeight: 50 },
    text: { fontFamily: 'MontserratSemiBold', fontSize: 14, marginTop: 10 },
    selectWrapper: {
        width: 25,
        height: 25,
        backgroundColor: colors.white,
        borderRadius: 25,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 8,
    },
})
