import React, { useState } from 'react';
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Main } from './components/Main';
import { Welcome } from './components/welcome/Welcome'
import { Login } from './components/login/Login';

const Stack = createNativeStackNavigator()
export const LoginContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: (login: boolean) => {},
});

const App = () => {
  const [user, setUser] = useState( false )
  const setIsLoggedIn = (login: boolean) => {
    setUser(state => login )
  }

  const dataState = {
    isLoggedIn: user,
    setIsLoggedIn: setIsLoggedIn
  }

  return (
    <LoginContext.Provider value={dataState}>
      <View style={{ flex: 1 }}>
        {user ? (
          <NavigationContainer independent={true}>
            <Stack.Navigator
              initialRouteName='Main'
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name='Main' component={Main} />
            </Stack.Navigator>
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='Welcome'
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name='Welcome' component={Welcome} />
              <Stack.Screen name='Login' component={Login} initialParams={setIsLoggedIn}/>
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </View>
    </LoginContext.Provider>
  )
}

export default App