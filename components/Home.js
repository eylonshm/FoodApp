import React, { useEffect } from 'react'
import { View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import categoriesData from '../assets/data/categoriesData'
import popularData from '../assets/data/popularData'
import PageTitle from './PageTitle'
import SearchInput from './SearchInput'
import SectionTitle from '././SectionTitle'
import CategoryCard from './cards/CategoryCard'
import PopularCard from './cards/PopularCard'
import colors from '../assets/colors/colors'
import KeyboardDismisser from '../HOC/KeyboardDismisser'

export default Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <StatusBar style="dark" />
            <SafeAreaView>
                {/* <Header onPress={() => navigation.navigate('Deatils')} /> */}
                <PageTitle title="Delivery" subTitle="food" />
                <SearchInput />
                <SectionTitle text="Categories" />
                <FlatList
                    multiline={true}
                    style={styles.categoriesList}
                    data={categoriesData}
                    renderItem={({ item, index }) => {
                        return (
                            <CategoryCard
                                image={item.image}
                                title={item.title}
                                selected={item.selected}
                                style={{ backgroundColor: item.selected ? colors.primary : colors.white, marginLeft: item.id === '1' ? 20 : 0 }}
                            />
                        )
                    }}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
                <SectionTitle text="Popular" />
                {popularData.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() =>
                            navigation.navigate('Details', {
                                item: item,
                            })
                        }
                    >
                        <PopularCard item={item} />
                    </TouchableOpacity>
                ))}
                {/* <FlatList
                    style={styles.popularWrapper}
                    data={popularData}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() =>
                                    navigation.navigate('Details', {
                                        item: item,
                                    })
                                }
                            >
                                <PopularCard item={item} />
                            </TouchableOpacity>
                        )
                    }}
                /> */}
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoriesList: {
        marginTop: 20,
        height: 190,
        overflow: 'visible',
    },
    popularWrapper: { marginTop: 20, height: 400 },
})
