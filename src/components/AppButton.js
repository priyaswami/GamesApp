import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { Colors, Metrics } from '../themes'

/**
 * 
 * @param {*} params 
 * @returns 
 */
const AppButton = ({ title, onPress, styles, textStyle, isDisabled, showLoader }) => {
    return (
        <TouchableOpacity style={styles} disabled={isDisabled} onPress={onPress}>
            {showLoader && <ActivityIndicator animating={showLoader} color={Colors.WHITE} style={Metrics.mr12} />}
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton;
