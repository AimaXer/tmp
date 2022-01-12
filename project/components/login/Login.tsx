import React, { useContext, useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"

import { LoginContext, UserContext } from '../../App'
import { signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth"

import { createStyle } from "./login.styles"
import { initializeApp } from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyB2yQDr-Q6sclind1Q46EZcsUFBFoNsbzU",
  authDomain: "project2-a2276.firebaseapp.com",
  projectId: "project2-a2276",
  storageBucket: "project2-a2276.appspot.com",
  messagingSenderId: "673128799334",
  appId: "1:673128799334:web:55d95da02e51702a59a1a7"
};

initializeApp(firebaseConfig)

const auth = getAuth()

const getUserInformation = (userID: string, dataState, state) => {
  fetch('http://192.168.1.17:8080/pacjenci?uid=' + userID
  ).then((response) => response.json())
  .then((responseJSON) => {
      dataState.setUserData(responseJSON)
      state.setIsLoggedIn(true)
      // console.log(responseJSON)
  }).catch((e) => {
    state.setIsLoggedIn(false)
    signOut(auth)
  })
}

const checkUserPass = (username: string, password: string, state, dataState) => {
  // TODO: Jeśli login i haslo sa w API to odpala funkcje setIsLoggedIn z true, jak nie to w cale

  signInWithEmailAndPassword(auth, username, password).then((res) => {
    getUserInformation(res.user.uid, dataState, state)
  }).catch((e) => {
    console.log('error')
    state.setIsLoggedIn(false)
  })
} 

const Login = ({ navigation }: any) => {
  const style = createStyle()
  const state = useContext(LoginContext)
  const dataState = useContext(UserContext)

  const [username, onChangeUsername] = useState<string>("")
  const [password, onChangePassword] = useState<string>("")

  return (
    <View style={ style.backgroundStyle }>
      <Text style={ style.titleText }>Nazwa użytkownika</Text>
      <TextInput
        style={style.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Twój login"
      />
      <Text style={ style.titleText }>Hasło</Text>
      <TextInput
        style={style.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Twoje hasło"
      />
      <TouchableOpacity 
        onPress={() => {checkUserPass(username, password, state, dataState)}} 
        style={ style.button }
      >
        <Text style={ style.buttonText }>
          Zaloguj się
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export { Login }
