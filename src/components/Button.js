import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
    const {
        icon,
        wrapperStyle,
        textStyle,
        iconWrapperStyle,
        onPress,
        ...rest
    } = props;
    return (
        <TouchableOpacity
            {...rest}
            onPress={onPress}
            style={[styles.container, wrapperStyle]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, textStyle]}>{props.title}</Text>
                {icon && (
                    <View style={[styles.iconWrapper, iconWrapperStyle]}>
                        {icon()}
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        borderRadius: 23,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#54a8fc',
    },
    text: {
        fontSize: 17,
        lineHeight: 23,
        color: '#fff'
    },
    iconWrapperStyle: {
        width: 16,
        height: 16,
    }
})