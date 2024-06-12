import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from "../../screens/AboutScreen";
import AppScreen from "../../screens/AppScreen";

const Stack = createNativeStackNavigator()

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home" 
            component={AppScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen 
              name="About" 
              component={AboutScreen}
              options={{
                headerLeft: () => null,
                headerShown: false
              }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
