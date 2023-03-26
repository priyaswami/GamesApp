import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../../themes';
import { navigateToHome } from '../../utils/Helpers';

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigateToHome()
        }, 1500);
    }, []);

    return (
        <View style={AppStyles.splashWrapper}>
            <Text>121212</Text>
        </View>
    );
};

export default Splash;
