import { FontAwesome5 } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const HomeIcon = (props) => {
    return <Entypo name="home" size={28} color="#071427" {...props} />;
};

export const PlusIcon = (props) => {
    return <FontAwesome6 name="plus" size={28} color="#071427" {...props} />;
};

export const GymIcon = (props) => {
    return (
        <FontAwesome6 name="dumbbell" size={28} color="#071427" {...props} />
    );
};

export const UserIcon = (props) => {
    return (
        <FontAwesome6 name="user-large" size={28} color="#071427" {...props} />
    );
};

export const HealIcon = (props) => {
    return (
        <FontAwesome5 name="notes-medical" size={28} color="black" {...props}/>
    );
};