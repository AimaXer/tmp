import { useContext } from "react"
import { TouchableOpacity, View, Text } from "react-native"
import { signOut, getAuth } from "firebase/auth"

import { LoginContext } from "../../App"

import { createStyle } from "./userProfile.styles"

// const auth = getAuth()

const UserProfile = ({ navigation }: any) => {
  const style = createStyle()

  const state = useContext(LoginContext)

  const logout = () => {
    // signOut(auth)
    state.setIsLoggedIn(false)
  }

  return (
    <View style={ style.backgroundStyle }>
      <TouchableOpacity onPress={() => navigation.navigate('Results')} style={style.button}>
        <Text style={style.buttonText}>
          WYNIKI BADAŃ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => logout()} style={style.button}>
        <Text style={style.buttonText}>
          WYLOGUJ
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export { UserProfile }