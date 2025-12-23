import { View } from "react-native";
import CreateAcountCard from "@/components/createAcount/createAcountCard";
import { use, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { router } from "expo-router";

export default function createAcount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createAccount = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.replace("/(tabs)/home");
        } catch (error: any) {
            console.error("Error creating account: ", error.message);
        }
    }

    return (
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <CreateAcountCard 
                verticalSpace={20} 
                color="#8744e4ff" 
                handleCreateAccount={createAccount}
                emailHandleChange={setEmail}
                passwordHandleChange={setPassword}
                />
        </View>
    );
}