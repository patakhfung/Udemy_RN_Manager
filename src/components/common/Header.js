import React from 'react';
import {Text, View} from 'react-native';


const Header = (props) => {

    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 145,
        paddingTop: 50,
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 40
    }
};

export {Header};
