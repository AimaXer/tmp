import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { View } from "react-native"

import { createStyle } from "./main.styles"
import { Results } from "./results/Results"
import { UserProfile } from "./userProfile/UserProfile"

const Stack = createNativeStackNavigator()

const Main = () => {
  const style = createStyle()
  return (
    <View style={ style.backgroundStyle }>
      <Stack.Navigator
        initialRouteName='UserProfile'
      >
        <Stack.Screen 
          name='Results' 
          component={Results} 
          options={{
            title: 'Wyniki badań',
          }}
        />
        <Stack.Screen 
          name='UserProfile' 
          component={UserProfile} 
          options={{
            title: 'Profil użytkownika',
          }}
        />
      </Stack.Navigator>
    </View>
  )
}

export { Main }