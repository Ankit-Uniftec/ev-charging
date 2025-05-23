import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import ThemeConstant from '../constants/ThemeConstant';
import { moderateVerticalScale, scale } from 'react-native-size-matters';

const CustomButton = ({ title, onPress, type = 'filled', loading = false }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={{
            ...styles.button,
            backgroundColor: type == 'filled' ? ThemeConstant.PRIMARY_COLOR : '#fff',
            borderWidth: type == 'filled' ? 0 : 1,
            borderColor: type == 'filled' ? null : ThemeConstant.PRIMARY_COLOR
        }} onPress={onPress}
            disabled={loading}>
            {loading ?
                <ActivityIndicator size='small' color='white' />
                : <Text style={{
                    ...styles.buttonText,
                    color: type == 'filled' ? '#ffffff' : ThemeConstant.PRIMARY_COLOR,

                }}>{title}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 100,
        width: '100%',
        alignItems: 'center',
        height: moderateVerticalScale(50),
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: scale(16),
        fontWeight: '700'
    },
});

export default CustomButton;
