import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";

const App = () => {
  const { width: windowsWidth, height: windowsHeight } = useWindowDimensions();
  return (
    <View style={{ width: windowsHeight, height: windowsHeight }}>
      <ImageBackground
        source={require("./assets/AppBg2.jpg")}
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
  },
});
