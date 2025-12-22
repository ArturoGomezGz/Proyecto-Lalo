import {
    StyleSheet,
    View,
    Text
} from "react-native";
import { useState } from "react";
import Button from "./button";
import Header from "./header";

interface Props {
    username?: string,
    email?: string,
    unactiveColor?: string
    activeColor?: string
}

export default function NavBar({ username, email, unactiveColor, activeColor }: Props) {

    const [activeTab, setActiveTab] = useState<string>("Videos");

    return (
        <View>
            <Header username={username} email={email} />

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