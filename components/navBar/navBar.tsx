import {
    StyleSheet,
    View,
    Text
} from "react-native";
import { useState } from "react";
import Button from "./button";

interface Props {
    unactiveColor?: string
    activeColor?: string
}

export default function NavBar({ unactiveColor, activeColor }: Props) {

    const [activeTab, setActiveTab] = useState<string>("Videos");

    return (
        <View>
            <Text>navBar</Text>

            <View style={styles.buttonContainer}>
                <Button
                    label="Videos"
                    isActive={activeTab === "Videos"}
                    toggleActive={() => setActiveTab("Videos")}
                    unactiveColor={unactiveColor}
                    activeColor={activeColor}
                />

                <Button
                    label="Photos"
                    isActive={activeTab === "Photos"}
                    toggleActive={() => setActiveTab("Photos")}
                    unactiveColor={unactiveColor}
                    activeColor={activeColor}
                />

                <Button
                    label="Audios"
                    isActive={activeTab === "Audios"}
                    toggleActive={() => setActiveTab("Audios")}
                    unactiveColor={unactiveColor}
                    activeColor={activeColor}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderColor: "gray",
        borderBottomWidth: 1
    }
});