import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
import Mainweather from "./components/mainweather/Mainweather";

const App = () => {
  const { width: windowsWidth, height: windowsHeight } = useWindowDimensions();
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/AppBg2.jpg")}
          style={styles.image}
        >
          <ScrollView>
            <Mainweather />
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
