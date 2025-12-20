import { 
    StyleSheet,
    View,
    Text,
    Switch as RNDSwitch
} from "react-native";

interface Props {
    color?: string;
    verticalSpace?: number 
}

export default function Switch({ color = "#000", verticalSpace = 10 }: Props) {
    return (
        <View style ={styles.container}>
            <View style={[styles.subContainer, { marginBottom: verticalSpace }]}>
                <Text style={[styles.label, { color: color } ]}>Private</Text>
                <RNDSwitch />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: "auto",
        marginRight: 0
        
    },
    subContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        marginRight: 10,
    },
});