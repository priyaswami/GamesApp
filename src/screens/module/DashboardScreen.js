import React from 'react'
import { View } from 'react-native'
import { CustomStatusBar, Headers } from '../../components'
import AssetImages from '../../constants/ImageConstants'
import { HEADERNAME } from '../../constants/TextConstants'
import { Colors, Layouts, Metrics } from '../../themes'
import CarousalCards from '../sharedComponents/CarousalCards'

const DashboardScreen = () => {
    return (
        <View style={[Layouts.flexContainer]}>
            <CustomStatusBar statusBarColor={Colors.WHITE} barStyle='dark-content' />
            <Headers
                label={HEADERNAME.DASHBOARD_HEADER}
                leftIcon={AssetImages.menu}
                rightIcon={AssetImages.notification}
            />
            <View style={[Layouts.flexContainer, Metrics.mt16]}>
                <CarousalCards />
            </View>
        </View>
    )
}

export default DashboardScreen;
