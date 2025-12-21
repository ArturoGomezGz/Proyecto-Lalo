import { 
    StyleSheet, 
    View,
    Text
} from "react-native";

interface Props {
    label: string
    unactiveColor?: string
    activeColor?: string
    isActive?: boolean
}

export default function Button({label, unactiveColor, activeColor, isActive}: Props) {
    return (
        <View>
            <Text>{label}</Text>

        </View>
    );
}

const styles = StyleSheet.create({

});