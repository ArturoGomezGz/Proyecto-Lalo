import {
    View
} from "react-native";
import Input from "../input";
import SubmitBtn from "../submitBtn";
import Switch from "../switch";
import CreateAcountPicture from "./createAcountPicture";

interface Props {
    color?: string;
    verticalSpace? : number
}

export default function CreateAcountCard({color = "#8744e4ff", verticalSpace=30}: Props) {
    return (
        <View style={{width: "85%"}}>
            <CreateAcountPicture color={color} verticalSpace={verticalSpace}/>
            <Input labelName="Nombre Completo" placeholderName="Tu nombre completo" backgroundColor="#F2F2F2" fontColor={color} password={false} verticalSpace={verticalSpace}/>
            <Switch color={color} verticalSpace={verticalSpace}/>
            <Input labelName="Telefono" placeholderName="1234567890" backgroundColor="#F2F2F2" fontColor={color} password={false} verticalSpace={verticalSpace}/>
            <Input labelName="Correo" placeholderName="nombre@dominio.com" backgroundColor="#F2F2F2" fontColor={color} password={false} verticalSpace={verticalSpace}/>
            <Input labelName="Contraseña" placeholderName="********" backgroundColor="#F2F2F2" fontColor={color} password={true} verticalSpace={verticalSpace}/>
            <SubmitBtn buttonLabel="Crear Cuenta" backgroundColor={color}/>
        </View>
    );
}