import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "@/Apps/Screens/LoginScreen";

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require("../assets/fonts/Outfit-Regular.ttf"),
    'outfit-medium': require("../assets/fonts/Outfit-Medium.ttf"),
    'outfit-bold': require("../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginScreen />
    </View>
  );
}
