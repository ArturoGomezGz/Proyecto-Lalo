import { 
    StyleSheet,
    TouchableOpacity, 
    Text 
} from "react-native";

interface Props {
    buttonLabel: string,
    backgroundColor?: string,
    verticalSpace?: number,
    onPress?: () => void
}

export default function SubmitBtn({buttonLabel, backgroundColor = "#6200EE", verticalSpace = 30, onPress}: Props) {
    return (
        <TouchableOpacity
            style={[style.button, {backgroundColor: backgroundColor, marginBottom: verticalSpace}]}
            onPress={onPress}
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
        alignItems: "center"
    },
    buttonLabel: {
        color: "white", 
        fontSize: 16, 
        fontWeight: "bold" 
    }
})