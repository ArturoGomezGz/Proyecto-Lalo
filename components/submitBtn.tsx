import { TouchableOpacity, Text } from "react-native";

export default function SubmitBtn() {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: "#6200EE",
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 4,
                alignItems: "center",
            }}
        >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
                Enviar
            </Text>
        </TouchableOpacity>
    );
}