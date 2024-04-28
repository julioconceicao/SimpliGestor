
import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaLogin from '../screens/TelaLogin/TelaLogin';
import TelaCadastro from '../screens/TelaCadastro/TelaCadastro';
import HomePage from '../screens/Home/HomePage';
import  Financeiro  from '../screens/Financeiro/Financeiro';
import  Calendario  from '../screens/Calendario/Calendario';
import TelaAgendar from '../screens/Agendar/TelaAgendar';
import { Ionicons, FontAwesome, EvilIcons } from '@expo/vector-icons';
import BottomTabAgendar from '../components/bottomTabAgendar/BottomTabAgendar';
import BotaoVoltar from '../components/BotaoVoltar/BotaoVoltar';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='TelaLogin'
                component={TelaLogin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='TelaCadastro'
                component={TelaCadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='HomePage'
                component={HomePageTab} // Usamos um componente diferente para incluir a tab apenas na HomePage
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Financeiro'
                component={Financeiro} // Usamos um componente diferente para incluir a tab apenas na HomePage
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Calendario'
                component={Calendario} // Usamos um componente diferente para incluir a tab apenas na HomePage
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}


 function HomePageTab() {
     return (
         <Tab.Navigator 
             screenOptions={{
                 tabBarInactiveTintColor: '#3E5DFF', 
                 tabBarShowLabel: false,
                 headerTitleAlign: 'center',              
                 headerTitleStyle: {
                    color: '#3E5DFF',
                    fontWeight: 'bold',
                    
                 },              
                 headerRight: () => (
                    <EvilIcons name='user' size={60} color={'#3E5DFF'} style={{ marginRight: 10 }} />
                ),           
                headerStyle: {
                    backgroundColor: 'whitesmoke'
                },  
                 
                 tabBarStyle: {
                     position: 'absolute',
                     backgroundColor: 'whitesmoke',
                     borderTopWidth: 1,
                     height: 65,
                     borderTopLeftRadius: 20,
                     borderTopRightRadius: 20,
                     borderColor: 'grey',
                     borderWidth: 2
                 },
                 
             }} 
        
         >

             <Tab.Screen
                 name='HomePage'
                 component={HomePage}
                 options={{
                     tabBarIcon: ({color, size , focused}) => {
                         if (focused) {
                             return <Ionicons name='home' size={50} color={color} />
                         }

                         return <Ionicons name='home-outline' size={40} color={color} />
                     },
                     headerLeft: () => (
                        <Image
                            source={require('../assets/logo_azul_simpligestor2.png')}
                            style={{ width: 170, height: 50, marginLeft: 10 }} // Ajuste o tamanho da imagem conforme necessário
                        />
                    ),
                    
                    headerTitle: ''
                    
                 }}
             />
             
             <Tab.Screen
                 name='Calendario'
                 component={Calendario}
                 options={{
                     tabBarIcon: ({color, size, focused}) => {
                         if (focused) {
                             return <Ionicons name='calendar' size={50} color={color} />
                         }

                         return <Ionicons name='calendar-outline' size={40} color={color} />
                     },
                     headerLeft: () => (
                        <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                        <BotaoVoltar/>     
                     ),
                    
                 }}
             />

             <Tab.Screen
                 name='Financeiro'
                 component={Financeiro}
                 options={{
                     tabBarIcon: ({color, size, focused}) => {
                         if (focused) {
                             return <FontAwesome name='dollar' size={50} color={color} />
                         }

                         return <FontAwesome name='dollar' size={40} color={color} />
                     },
                     headerLeft: () => (
                        <FontAwesome name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }} />,
                        <BotaoVoltar/>     
                     ),
                    
                    
                 }}
                
             />    

             <Tab.Screen
                 name='TelaAgendar'
                 component={TelaAgendar}
                 options={{
                    tabBarIcon: ({color, size, }) => (
                        <BottomTabAgendar/>
                    ),
                    headerLeft: () => ( 

                               
                        <FontAwesome  name='arrow-left' size={40} color={'#3E5DFF'} style={{ marginLeft: 10 }}  />,
                        <BotaoVoltar/>                       
                     ),         
                 }}
             />
         </Tab.Navigator>
     );
 }


// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import TelaLogin from '../screens/TelaLogin/TelaLogin';
// import TelaCadastro from '../screens/TelaCadastro/TelaCadastro';
// import HomePage from '../screens/Home/HomePage';
// import  {Financeiro}  from '../screens/Financeiro/Financeiro';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function Routes() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name='TelaLogin'
//                 component={TelaLogin}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name='TelaCadastro'
//                 component={TelaCadastro}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name='HomePage'
//                 component={HomePage}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name='Main'
//                 component={MainStackNavigator} // Alteração aqui
//                 options={{ headerShown: false }}
//             />
//         </Stack.Navigator>
//     );
// }

// function MainStackNavigator() { // Novo componente para o StackNavigator dentro do TabNavigator
//     return (
//         <Tab.Navigator>
//             <Tab.Screen
//                 name='HomePage'
//                 component={HomePage}
//             />
//             <Tab.Screen
//                 name='Financeiro'
//                 component={Financeiro}
//             />
//         </Tab.Navigator>
//     );
// }



// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import TelaLogin from '../screens/TelaLogin/TelaLogin';
// import TelaCadastro from '../screens/TelaCadastro/TelaCadastro';
// import HomePage from '../screens/Home/HomePage';
// import { Financeiro } from '../screens/Financeiro/Financeiro';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function Routes() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name='TelaLogin'
//                 component={TelaLogin}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name='TelaCadastro'
//                 component={TelaCadastro}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name='Main'
//                 component={MainTabNavigator}
//                 options={{ headerShown: false }}
//             />
//         </Stack.Navigator>
//     );
// }

// function MainTabNavigator() {
//     return (
//         <Tab.Navigator>
//             { <Tab.Screen
//                 name='HomePage'
//                 component={HomePage}
//             /> }
//             <Tab.Screen
//                 name='Financeiro'
//                 component={Financeiro}
//             />
//         </Tab.Navigator>
//     );
// }



// import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import TelaLogin from '../screens/TelaLogin/TelaLogin';
// import TelaCadastro from '../screens/TelaCadastro/TelaCadastro';
// import HomePage from '../screens/Home/HomePage'
// import { Financeiro } from '../screens/Financeiro/Financeiro';
// import { View } from 'react-native';


// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();


// export default function Routes() {
//     return(
//         <>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name = 'TelaLogin'
//                     component={TelaLogin}
//                     options={{headerShown: false}}
//                 />    

//                 <Stack.Screen
//                     name = 'TelaCadastro'
//                     component={TelaCadastro}
//                     options={{headerShown: false}}
//                 />    
//                 <Stack.Screen
//                     name = 'HomePage'
//                     component={HomePage}
//                     options={{headerShown: false}}
//                 />    
//             </Stack.Navigator>

//             <Tab.Navigator screenOptions={{headerShown: false}}>
            
//             <Tab.Screen
//                 name='HomePage'
//                 component={HomePage}
                
//             />
//             <Tab.Screen
//                 name='Financeiro'
//                 component={Financeiro}
//             />
            
//         </Tab.Navigator>

            
//         </>

        
//     )    
// }