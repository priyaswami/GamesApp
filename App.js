import React from 'react'
import { LogBox, View } from 'react-native'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import store from './src/redux/store'
import { Layouts } from './src/themes'
import AppNavigators from './src/navigation/AppNavigators'

const App = () => {
    return (
        <View style={Layouts.flexFill} >
            <Provider store={store}>
                <SafeAreaProvider>
                    <AppNavigators />
                </SafeAreaProvider>
            </Provider>
        </View>
    )
}

LogBox.ignoreAllLogs();

export default App
