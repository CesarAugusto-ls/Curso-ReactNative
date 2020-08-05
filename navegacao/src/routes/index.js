import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

// import Stack from './Stack';
import Tab from './Tab'

const index = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                {/* <Stack /> */}
                <Tab />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default index;