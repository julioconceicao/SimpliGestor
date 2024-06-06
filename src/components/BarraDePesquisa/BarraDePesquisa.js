import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);
        // Aqui você pode adicionar lógica para realizar a pesquisa com base no texto digitado
    };

    return (
        <View style={styles.container}>
            <FontAwesome name="search" size={34} color="#3E5DFF" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Pesquisar..."
                value={searchQuery}
                onChangeText={handleSearch}
                placeholderTextColor="#999"
                autoCapitalize="none"
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        top: '4%',
        backgroundColor: '#dcdcdc',
        borderRadius: 30,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginTop: 10,
    },
    input: {
        flex: 1,
        height: 60,
        marginLeft: 10,
        fontSize: 16,
        color: 'blue',
    },
    icon: {
        position: 'absolute',
        right: 15, // Posiciona o ícone à direita da barra de pesquisa
        top: '50%',
        transform: [{ translateY: -20 }], // Ajusta verticalmente para centralizar o ícone na barra de pesquisa
    },
    
});

export default SearchBar;
