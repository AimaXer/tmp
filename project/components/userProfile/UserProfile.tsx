import { useContext } from "react"
import { TouchableOpacity, View, Text } from "react-native"
import { LoginContext } from "../../App"

import { createStyle } from "./userProfile.styles"

const UserProfile = ({ navigation }: any) => {
  const style = createStyle()

  const state = useContext(LoginContext)

  return (
    <View style={ style.backgroundStyle }>
      <TouchableOpacity onPress={() => navigation.navigate('Results')} style={style.button}>
        <Text style={style.buttonText}>
          WYNIKI BADAŃ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => state.setIsLoggedIn(false)} style={style.button}>
        <Text style={style.buttonText}>
          WYLOGUJ
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export { UserProfile }