import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import colors from '../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather'

const SearchInput = (props) => {
    const [textInput, setTextInput] = useState()
    return (
        <View style={[styles.searchWrapper, { ...props.style }]}>
            <Feather name="search" size={16} color={colors.textDark}></Feather>
            <TextInput
                placeholder="Search..."
                placeholderTextColor={colors.textLight}
                style={styles.textInput}
                value={textInput}
                onChangeText={setTextInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 20,
    },
    textInput: {
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.textLight,
        flex: 1,
        color: colors.textDark,
    },
})

export default SearchInput
