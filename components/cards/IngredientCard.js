import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors/colors'

export default CategoryCard = ({ item }) => {
    return (
        <TouchableOpacity style={[styles.ingredientWrapper, item.id === '1' && { marginLeft: 20 }]}>
            <Image style={styles.ingredientImage} source={item.image} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ingredientWrapper: {
        height: 80,
        width: 100,
        backgroundColor: colors.white,
        justifyContent: 'center',
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginRight: 20,
        shadowOpacity: 0.14,
        shadowRadius: 4,
        elevation: 4,
    },
    ingredientImage: { resizeMode: 'contain', maxHeight: 75 },
})
