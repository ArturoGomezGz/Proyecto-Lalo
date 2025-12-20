import { Text, View } from "react-native";
import Input from "../components/input";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hola mundo</Text>
      <View style={{ width: "90%", marginTop: 20 }}>
        <Input labelName="Correo" placeholderName="nombre@dominio.com" backgroundColor="#F2F2F2" fontColor="#79747E" password={false} />
        <Input labelName="Contraseña" placeholderName="********" backgroundColor="#F2F2F2" fontColor="#79747E" password={true} />
      </View>
    </View>
  );
}
