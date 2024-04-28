import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const BotaoVoltar = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
    );
};

export default BotaoVoltar;
