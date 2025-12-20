import { Text, View } from "react-native";
import LoginCard from "../components/loginCard";
import CreateAcountCard from "../components/createAcountCard";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CreateAcountCard verticalSpace={20}/>
    </View>
  );
}
