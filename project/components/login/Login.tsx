import React, { Dispatch, SetStateAction, useContext, useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"

import { LoginContext } from '../../App'

import { createStyle } from "./login.styles"

const checkUserPass = (username: string, password: string, state) => {
  // TODO: Jeśli login i haslo sa w API to odpala funkcje setIsLoggedIn z true, jak nie to w cale

  state.setIsLoggedIn(true)
} 

const Login = ({ navigation }: any) => {
  const style = createStyle()
  const state = useContext(LoginContext)

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
        onPress={() => {checkUserPass(username, password, state)}} 
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
