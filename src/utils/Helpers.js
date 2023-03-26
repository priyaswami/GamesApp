import { Platform, ToastAndroid } from "react-native";

/**
 * 
 * @param {*} navigation 
 * @param {*} screenName screen name for navigation
 */
export const gotoScreen = (navigation, screenName) => {
    navigation.navigate(screenName)
}

/**
 * 
 * @param {*} navigation 
 * reset navigation state
 */
export const navigateToHome = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'DashboardScreen' }],
    });
}

export const showToast = (title) => {
    if (Platform.OS === 'android') {
        return ToastAndroid.show(title, ToastAndroid.SHORT);
    }
};
