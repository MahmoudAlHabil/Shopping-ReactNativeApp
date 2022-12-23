import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
    const {
        renderIconLeft,
        renderIconRight,
        wrapperStyle,
        inputStyle,
        iconWrapperStyle,
        placeholder,
        placeholderPosition,
        ...rest
    } = props;

    return (
        <View style={[styles.container, wrapperStyle]}>
            <View style={styles.wrapper}>
                {renderIconLeft && (
                    <View style={[styles.iconWrapper, iconWrapperStyle]}>
                        {renderIconLeft()}
                    </View>
                )}
                <TextInput
                    placeholder={placeholder}
                    style={[styles.input, inputStyle]}
                    {...rest}
                />
                {renderIconRight && (
                    <View style={[styles.iconWrapper, iconWrapperStyle]}>
                        {renderIconRight()}
                    </View>
                )}
            </View>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        borderColor: '#C9C9C9',
        borderWidth: 1,
        borderRadius: 23,
        height: 50,
        width: '100%',
        justifyContent: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
    },
    iconWrapper: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    }
})