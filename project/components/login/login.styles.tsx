import { Dimensions, StyleSheet } from 'react-native'

export const createStyle = () => {
    return StyleSheet.create({
        backgroundStyle: {
            flex:1,
            padding: 60,
            paddingTop: 100
        },
        titleText: {
            fontSize: 15,
            paddingTop: 50,
            fontWeight: 'bold',
        },
        input: {
            borderBottomWidth: 1,
            height: 40,
        },
        button: {
            backgroundColor: '#29b6f6',
            width: 150,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            marginLeft: Dimensions.get('window').width / 2 - 150,
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
        }
    })
}