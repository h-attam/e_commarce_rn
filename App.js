import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/navigators/Routes';
import "react-native-gesture-handler";


console.error = () => {}; //  error message close

const App = () => {
  return(
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <Routes/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App;