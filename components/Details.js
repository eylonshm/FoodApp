import React, { useLayoutEffect, useState } from 'react'
import { View, SafeAreaView, StyleSheet, Image, Text, FlatList, TouchableOpacity, Platform, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import PageTitle from './PageTitle'
import colors from '../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import InfoText from './InfoText'
import YellowStarIcom from './YellowStarIcom'
import IngredientCard from './cards/IngredientCard'
import ThouchableBouncer from '../HOC/ThouchableBouncer'

const windowWidth = Dimensions.get('window').width

export default Details = ({ route, navigation }) => {
    const { image, title, weight, price, crust, deliveryTime, ingredients } = route.params.item
    const [itemOrdered, setItemOrdered] = useState(false)
    const [ingredientsAdded, setIngredientsAdded] = useState({})

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <YellowStarIcom onPress={() => setItemOrdered(true)} />,
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <SafeAreaView>
                <PageTitle title={title} />
                <PageTitle title={`$${price}`} textColor={colors.price} />
                <View style={styles.midSectionWrapper}>
                    <View style={styles.itemDataWrapper}>
                        <InfoText info={weight} title="Size" />
                        <InfoText info={crust} title="Crust" />
                        <InfoText info={`${deliveryTime} min`} title="Delivery in" />
                    </View>
                    <Image style={styles.image} source={image} />
                </View>
                <View style={styles.ingredientsWrapper}>
                    <Text style={styles.ingredientsText}>Ingredients</Text>
                    <FlatList
                        multiline={true}
                        style={styles.ingredientsList}
                        data={ingredients}
                        renderItem={({ item }) => {
                            return <IngredientCard item={item} />
                        }}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    />
                </View>
            </SafeAreaView>
            <View style={styles.orderButtonWrapper}>
                <ThouchableBouncer style={styles.orderButton} onPress={() => setItemOrdered(true)}>
                    <Text style={styles.orderText}>{itemOrdered ? 'Ordered' : 'Place an Order'}</Text>
                    <Feather name={itemOrdered ? 'check' : 'chevron-right'} size={20} color={colors.black} />
                </ThouchableBouncer>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    price: {
        color: colors.secondary,
    },
    midSectionWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    itemDataWrapper: {
        justifyContent: 'space-between',
        height: 180,
    },
    image: {
        marginLeft: 40,
        resizeMode: 'contain',
        height: 160,
    },
    ingredientsWrapper: {
        marginTop: 40,
    },
    ingredientsText: { fontFamily: 'MontserratBold', fontSize: 18, marginBottom: 15, paddingHorizontal: 20 },
    ingredientsList: {
        marginTop: 10,
        overflow: 'visible',
        height: 100,
    },
    orderButtonWrapper: {
        position: 'absolute',
        bottom: 20,
        borderRadius: 15,
        ...Platform.select({
            ios: {
                bottom: 50,
            },
        }),
    },
    orderButton: {
        flexDirection: 'row',
        width: windowWidth - 40,
        backgroundColor: colors.primary,
        marginHorizontal: 20,
        borderRadius: 20,
        height: 70,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderText: {
        fontFamily: 'MontserratBold',
        fontSize: 16,
        marginHorizontal: 5,
        marginTop: -2,
    },
})
