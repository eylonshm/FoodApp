import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors/colors'

export default PopularCard = (props) => {
    const { image, title, weight, rating } = { ...props.item }

    return (
        <View style={[styles.cardWrapper, { ...props.style }]}>
            <View style={styles.leftSection}>
                <View style={styles.topWrapper}>
                    <MaterialCommunityIcons name="crown" size={12} color={colors.primary} />
                    <Text style={styles.topText}>top of the week</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.weight}>{weight}</Text>
                <View style={styles.bottomSection}>
                    <View style={styles.leftBottomView}>
                        <MaterialCommunityIcons name="plus" size={13} color={colors.black} />
                    </View>
                    <View style={styles.ratingWrapper}>
                        <MaterialCommunityIcons name="star" size={12} color={colors.black} />
                        <Text style={styles.ratingText}>{rating}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightSection}>
                <Image style={styles.image} source={image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        flex: 1,
        marginTop: 20,
        width: 348,
        paddingHorizontal: 20,
        paddingTop: 20,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 8,
        marginBottom: 20,
        overflow: 'hidden',
    },
    leftSection: {},
    topWrapper: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    topText: { fontSize: 14, fontFamily: 'MontserratSemiBold', marginLeft: 5, color: colors.textDark },
    title: { fontSize: 16, fontFamily: 'MontserratSemiBold', color: colors.textDark, marginBottom: 5 },
    weight: { fontSize: 14, fontFamily: 'MontserratSemiBold', color: colors.textLight, marginBottom: 10 },
    bottomSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftBottomView: {
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 19,
        borderTopRightRadius: 19,
        marginLeft: -20,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingWrapper: { marginLeft: 18, flexDirection: 'row', alignItems: 'center' },
    ratingText: { fontSize: 12, fontFamily: 'MontserratSemiBold', marginLeft: 2, color: colors.textDark },
    rightSection: {},
    image: { resizeMode: 'contain', height: 120 },
})
