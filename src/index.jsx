import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";

import { Categories } from "./screens";
import { styles } from "./styles";

export default function App() {
  const [loaded] = useFonts({
    "Kanit-Bold": require("../assets/fonts/Kanit-Bold.ttf"),
    "Kanit-Light": require("../assets/fonts/Kanit-Light.ttf"),
    "Kanit-Regular": require("../assets/fonts/Kanit-Regular.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  return <Categories />;
}
