import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'TelaA':
                            iconName = focused
                                ? 'ios-add'
                                : 'ios-add-circle';
                            break;
                        case 'TelaB':
                            iconName = focused
                                ? 'ios-add'
                                : 'ios-add-circle';
                            break;
                        case 'TelaC':
                            iconName = focused ? 'ios-alarm' : 'ios-alarm-outline';
                            break;
                        default:
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen
                name="TelaA"
                component={TelaA}
                options={{ title: "Inicial" }}
            />
            <Tab.Screen
                name="TelaB"
                component={TelaB}
                options={{ title: "Dados" }}
            />
            <Tab.Screen
                name="TelaC"
                component={TelaC}
                options={{ title: "Config" }}
            />
        </Tab.Navigator>
    )
}
