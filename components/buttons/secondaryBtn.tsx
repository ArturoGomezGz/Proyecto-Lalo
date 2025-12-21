import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

interface Props {
    buttonLabel: string,
    backgroundColor?: string,
    verticalSpace?: number,
    onPress?: () => void
}

export default function SecondaryBtn({buttonLabel, backgroundColor = "#6200EE", verticalSpace = 30, onPress}: Props) {
    return (
        <TouchableOpacity
            style={[style.button, {borderColor: backgroundColor, marginBottom: verticalSpace}]}
            onPress={onPress}
        >
            <Text style={[style.buttonLabel, {color: backgroundColor}]}>
                {buttonLabel}
            </Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 4,
        alignItems: "center",
        borderWidth: 2
    },
    buttonLabel: {
        color: "white", 
        fontSize: 16, 
        fontWeight: "bold" 
    }
})