import React, { useState } from 'react';
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { initializeApp } from "firebase/app"

import { Main } from './components/Main'
import { Welcome } from './components/welcome/Welcome'
import { Login } from './components/login/Login'

const firebaseConfig = {
  apiKey: "AIzaSyB2yQDr-Q6sclind1Q46EZcsUFBFoNsbzU",
  authDomain: "project2-a2276.firebaseapp.com",
  projectId: "project2-a2276",
  storageBucket: "project2-a2276.appspot.com",
  messagingSenderId: "673128799334",
  appId: "1:673128799334:web:55d95da02e51702a59a1a7"
};

const Stack = createNativeStackNavigator()
export const LoginContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: (login: boolean) => {},
});

export const UserContext = React.createContext({
  userData: false,
  setUserData: (data: {}) => {},
});

const App = () => {
  initializeApp(firebaseConfig)
  const [user, setUser] = useState( false )
  const [data, setData] = useState( {} )
  
  const setIsLoggedIn = (login: boolean) => {
    setUser(state => login )
  }

  const setUserData = (data: {}) => {
    setData(state => data )
  }

  const dataState = {
    isLoggedIn: user,
    setIsLoggedIn: setIsLoggedIn
  }

  const userDataState = {
    userData: data,
    setUserData: setUserData
  }

  return (
    <LoginContext.Provider value={dataState}>
      <UserContext.Provider value={userDataState}>
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
      </UserContext.Provider>
    </LoginContext.Provider>
  )
}

export default App