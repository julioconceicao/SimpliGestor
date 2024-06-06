import { TouchableOpacity, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TelaLogin from '../screens/TelaLogin/TelaLogin';
import TelaCadastro from '../screens/TelaCadastro/TelaCadastro';
import HomePage from '../screens/Home/HomePage';
import Financeiro from '../screens/Financeiro/Financeiro';
import Calendario from '../screens/Calendario/Calendario';
import TelaAgendar from '../screens/Agendar/TelaAgendar';
import BottomTabAgendar from '../components/bottomTabAgendar/BottomTabAgendar';
import BotaoVoltar from '../components/BotaoVoltar/BotaoVoltar';
import AgendaDiaria from '../screens/AgendaDiaria/AgendaDiaria'
import {Lembretes}  from '../screens/Lembretes/Lembretes';
import { Servicos } from '../screens/Servicos/Servicos';
import { Historico } from '../screens/Historico/Historico';
import { Perfil } from '../screens/Perfil/Perfil';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




function StackRoutes() {
    const navigation = useNavigation();
    return (

        <Stack.Navigator 
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#3E5DFF',
                    fontWeight: 'bold',

                },
                headerRight: () => ( 
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>                 
                        <EvilIcons name='user' size={60} color={'#3E5DFF'} style={{ marginRight: 10 }}
                            
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {
                    backgroundColor: 'whitesmoke'
                },
                tabBarInactiveTintColor: '#3E5DFF',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'whitesmoke',
                    borderTopWidth: 1,
                    height: 65,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderColor: 'grey',
                    borderWidth: 2,
                },
            }}
        >

            <Stack.Screen
                name='TelaLogin'
                component={TelaLogin}
                options={{ 

                    headerShown: false,                    
                }}
            />

            <Stack.Screen
                name='TelaCadastro'
                component={TelaCadastro}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name='HomePage'
                component={HomePage}
                options={{ 
                    headerLeft: () => (
                        <Image
                            source={require('../assets/logo_azul_simpligestor2.png')}
                            style={{ width: 170, height: 50, marginLeft: 10 }} // Ajuste o tamanho da imagem conforme necessário
                        />
                    ),
                    headerTitle: ''
                }}
            />
            
            <Stack.Screen
                name='Financeiro'
                component={Financeiro}
                options={{headerLeft: () => (
                    <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                    <BotaoVoltar />
                ),}}
            />
            
            <Stack.Screen
                name='Calendario'
                component={Calendario}
                options={{headerLeft: () => (
                    <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                    <BotaoVoltar />
                )}}                               
            />
            
            <Stack.Screen
                name='Agenda Diaria'
                component={AgendaDiaria}
                options={{
                    headerLeft: () => (
                    <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                    <BotaoVoltar />
                    ),
                }}

            />

            <Stack.Screen
                name='Lembretes'
                component={Lembretes}
                options={{headerLeft: () => (
                    <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                    <BotaoVoltar />
                ),}}
            />

            <Stack.Screen
                name='Servicos'
                component={Servicos}
                options={{headerLeft: () => (
                    <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                    <BotaoVoltar />
                ),}}
            />

            <Stack.Screen
                name='Historico'
                component={Historico}
                options={{headerLeft: () => (
                    <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                    <BotaoVoltar />
                ),}}                
            />
            <Stack.Screen
                name='Perfil'
                component={Perfil}
                options={{headerLeft: () => (
                    <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                    <BotaoVoltar />
                ),}}
            />
        </Stack.Navigator>
    );
}


export default function Routes() {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={{
                            
                
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#3E5DFF',
                    fontWeight: 'bold',
                    

                },
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>                 
                        <EvilIcons name='user' size={60} color={'#3E5DFF'} style={{ marginRight: 10 }}
                            
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {
                    backgroundColor: 'whitesmoke'
                },
                
                tabBarInactiveTintColor: '#3E5DFF',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'whitesmoke',
                    borderTopWidth: 1,
                    height: 65,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderColor: 'grey',
                    borderWidth: 2,
                },
            }}
        >

            <Tab.Screen
                name='TabHomePage'
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' size={50} color={color} />
                        }
                        return <Ionicons name='home-outline' size={40} color={color} />
                    },
                    headerShown: false
                     //Remove nome do header                    
                }}
            />

            <Tab.Screen
                name='Calendario'
                component={Calendario}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='calendar' size={50} color={color} />
                        }
                        return <Ionicons name='calendar-outline' size={40} color={color} />
                    },
                    headerLeft: () => (
                        <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                        <BotaoVoltar />
                    ),
                }}
            />

            <Tab.Screen
                name='Financeiro'
                component={Financeiro}
                options={{

                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <FontAwesome name='dollar' size={50} color={color} />
                        }
                        return <FontAwesome name='dollar' size={40} color={color} />
                    },
                    headerLeft: () => (
                        <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                        <BotaoVoltar />
                    ),
                }}
            />

            <Tab.Screen
                name='TelaAgendar'
                component={TelaAgendar}
                options={{
                    tabBarIcon: ({ color, size, }) => (
                        <BottomTabAgendar />
                    ),
                    headerLeft: () => (
                        <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                        <BotaoVoltar />
                    ),
                }}
            />
        </Tab.Navigator>
    );
} 


