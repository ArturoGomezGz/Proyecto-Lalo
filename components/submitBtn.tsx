import { 
    StyleSheet,
    TouchableOpacity, 
    Text 
} from "react-native";

interface Props {
    buttonLabel: string,
    backgroundColor?: string
}

export default function SubmitBtn({buttonLabel, backgroundColor = "#6200EE"}: Props) {
    return (
        <TouchableOpacity
            style={[style.button, {backgroundColor: backgroundColor}]}
        >
            <Text style={style.buttonLabel}>
                {buttonLabel}
            </Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        alignItems: "center",
        marginBottom: 30
    },
    buttonLabel: {
        color: "white", 
        fontSize: 16, 
        fontWeight: "bold" 
    }
})