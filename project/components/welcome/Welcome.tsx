import { TouchableOpacity, View, Text } from "react-native"

import { createStyle } from "./welcome.styles"

const Welcome = ({ navigation }: any) => {
  const style = createStyle()
  return (
    <View style={ style.backgroundStyle }>
      <Text style={ style.headerText }>
        Witaj w HealthApp!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={style.button}>
        <Text style={style.buttonText}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export { Welcome }