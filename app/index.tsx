import { Text, View } from "react-native";
import LoginCard from "../components/loginCard";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginCard />
    </View>
  );
}
