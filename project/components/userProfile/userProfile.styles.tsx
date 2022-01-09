import { StyleSheet } from 'react-native'

export const createStyle = () => {
    return StyleSheet.create({
        backgroundStyle: {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 150,
        },
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 180,
            height: 50,
            backgroundColor: '#29b6f6',
            marginBottom: 20,
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
        },
        headerText: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 30,
        }
    })
}