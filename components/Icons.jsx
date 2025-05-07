import { AntDesign, FontAwesome5, Entypo, FontAwesome6, FontAwesome, Feather } from "@expo/vector-icons";

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
        <FontAwesome5 name="notes-medical" size={28} color="#071427" {...props}/>
    );
};

export const SearchIcon = (props) => {
    return (
        <FontAwesome5 name="search" size={24} color="#071427" {...props}/>
    );
};

export const LikeIcon = (props) => {
    return (
        <AntDesign name="like2" size={24} color="#071427" {...props}/>
    );
};

export const BookMarkIcon = (props) => {
    return (
        <FontAwesome name="bookmark" size={28} color="black" {...props}/>
    );
};

export const MapIcon = (props) => {
    return (
        <FontAwesome5 name="map-marker-alt" size={28} color="black" {...props}/>
    );
};

export const UploadIcon = (props) => {
    return (
        <FontAwesome name="upload" size={28} color="black" {...props}/>
    );
};
