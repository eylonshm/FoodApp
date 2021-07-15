import Feather from 'react-native-vector-icons/Feather'
import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'
import ThouchableBouncer from '../HOC/ThouchableBouncer'

export default ArrowBackIcon = (props) => (
    <ThouchableBouncer style={styles.arrowWrapper} onPress={() => props.onPress()}>
        <Feather name={'star'} size={13} color={colors.white} />
    </ThouchableBouncer>
)

const styles = StyleSheet.create({
    arrowWrapper: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 4,
        backgroundColor: colors.primary,
        ...Platform.select({
            ios: {
                marginBottom: 5,
            },
        }),
    },
})
