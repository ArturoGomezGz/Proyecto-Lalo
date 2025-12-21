import { View } from "react-native";
import LoginCard from "@/components/login/loginCard";
import { router } from "expo-router";

const handleCreateAcount = () => {
  router.push("/createAcount");
}

const handleLogin = () => {
  router.push("/(tabs)/home");
}

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginCard 
        verticalSpace={20}
        handleLogin={handleLogin}
        handleCreateAcount={handleCreateAcount}
      />
    </View>
  );
}
