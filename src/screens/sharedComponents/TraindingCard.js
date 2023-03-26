import React from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { AppFontSizes, AppStyles, Colors, Layouts, Metrics } from '../../themes';
import ImagePath from '../../utils/ImagePath';
import { Label } from '../../components';
import { showToast } from '../../utils/Helpers';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.88)

const TraindingCard = ({ item, index }) => {
    const id = item?.steamUrl && item.steamUrl.split('/').pop();

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => showToast(item.title)}>
            <View style={styles.container} key={'a'}>
                <Image
                    source={ImagePath(id)}
                    style={[AppStyles.fullWidthImg, { borderRadius: 8 }]}
                    resizeMode='stretch'
                />
            </View>
            <View style={[Metrics.padding10, Layouts.selfCenter]}>
                <Label
                    label={item.title}
                    labelStyle={[AppFontSizes.mulishBoldTitleF14]}
                    numberOfLines={2}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        width: ITEM_WIDTH,
        height: 300,
    },
})

export default TraindingCard
