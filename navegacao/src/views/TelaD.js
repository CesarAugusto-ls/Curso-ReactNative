import React from 'react';
import { View, Button } from 'react-native'

import TextoCentral from '../components/TextoCentral'

const TelaD = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <Button
                    title='Abrir'
                    onPress={() => props.navigation.openDrawer()}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corFundo='#33fa32' corTexto='#000' >
                    Tela D
                </TextoCentral>
            </View>
        </View>


    )
}

export default TelaD;