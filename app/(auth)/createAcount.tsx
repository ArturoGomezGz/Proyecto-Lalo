import { View } from "react-native";
import CreateAcountCard from "@/components/createAcount/createAcountCard";

export default function createAcount() {
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