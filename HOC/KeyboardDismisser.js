import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

const KeyboardDismisser = (props) => <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{props.children}</TouchableWithoutFeedback>

export default KeyboardDismisser
