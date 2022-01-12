import { useContext } from "react"
import { TouchableOpacity, View, Text } from "react-native"
import { UserContext } from "../../App"

import { createStyle } from "./results.styles"

const Results = ({ navigation }: any) => {
  const style = createStyle()
  const dataState = useContext(UserContext)

  return (
    <View style={ style.backgroundStyle }>
      {dataState.userData['badania']?.map((element) => {
        // console.log(element)
        return (
          <>
            <Text>{element['wyniki'][0]}</Text>
            <Text>{element['wyniki'][1]}</Text>
            <Text>{element['wyniki'][2]}</Text>
            <Text>{element['wyniki'][3]}</Text>
            <Text>{element['wyniki'][4]}</Text>
            <Text>{element['wyniki'][5]}</Text>
            <Text>-----------------------------------------------</Text>
          </>
        ) 
      })}
      {dataState.userData['pacjenci']?.map((element) => {
        // console.log(element)
        return (
          <>
            <Text>{element['imie']}</Text>
            <Text>-----------------------------------------------</Text>
          </>
        ) 
      })}
    </View>
  )
}

export { Results }