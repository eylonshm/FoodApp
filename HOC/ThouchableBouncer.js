import React, { useEffect } from 'react'
import { TouchableOpacity, LogBox } from 'react-native'
import BouncyView from 'react-native-bouncy-touchable'

export default ThouchableBouncer = ({ style, onPress, children }) => {
    useEffect(() => {
        LogBox.ignoreLogs(['useNativeDriver', 'componentWillMount'])
    }, [])

    return (
        <BouncyView level={1.5} onPress={() => onPress()}>
            <TouchableOpacity style={{ ...style }}>{children}</TouchableOpacity>
        </BouncyView>
    )
}
