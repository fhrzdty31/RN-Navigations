/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './pages/Home'
import MoveScreen from "./pages/MoveScreen";
import MoveScreenwithData from "./pages/MoveScreenwithData";
import MoveScreenforResult from "./pages/MoveScreenforResult";

const Stack = createNativeStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Move Screen" component={MoveScreen} />
      <Stack.Screen name="Move Screen with Data" component={MoveScreenwithData} />
      <Stack.Screen name="Move Screen for Result" component={MoveScreenforResult} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App;
