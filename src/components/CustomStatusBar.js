/**
 * status bar customized as per requirements for screens
 */

import React from 'react'
import { StatusBar, View, } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * 
 * @param {*} statusBarColor 
 * @returns 
 */
const CustomStatusBar = ({ statusBarColor }) => {
    const insets = useSafeAreaInsets();
    const statusBarHeight = insets.top;
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={statusBarColor} />
            <View style={{ height: statusBarHeight, backgroundColor: statusBarColor }} />
        </>
    )
}

export default CustomStatusBar
