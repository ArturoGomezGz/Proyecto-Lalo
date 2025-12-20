import { View } from "react-native";
import CreateAcountCard from "../components/createAcount/createAcountCard";
import LoginCard from "@/components/login/loginCard";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginCard verticalSpace={20}/>
    </View>
  );
}
