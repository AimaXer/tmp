import { TouchableOpacity, View, Text } from "react-native"

import { createStyle } from "./results.styles"

const Results = ({ navigation }: any) => {
  const style = createStyle()

  // TODO: Zastąpić prawdziwymi wynikami z api

  return (
    <View style={ style.backgroundStyle }>
      <Text>TEST TEST</Text>
    </View>
  )
}

export { Results }