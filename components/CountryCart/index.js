import React from "react";
import { Text, View, TouchableOpacity, Dimensions,ImageBackground } from "react-native";
const { width, height } = Dimensions.get("window");
import colors from '../../constants/colors'
import FavButton from "../FavButton/index";
import ViewButton from "../ViewButton/index";
import { useNavigation } from "@react-navigation/native";

export default function CountryCart({onPress,subtitle,title,image,navigation}) {
    const {navigate}=useNavigation();
    return(
    <TouchableOpacity style={{
        width:width*0.87,
        height:height*0.195,
        flex:1,
        borderWidth:0.2,
        margin:5,
        alignSelf:"center",
        borderRadius:10
        }}
        onPress={onPress}>
        <View style={{flex:0.62}}>
            <ImageBackground 
                        source={image}
                        style={{flex:1,borderRadius:10}}>
                <FavButton onPress={() =>navigate("FavouriteScreen")}/>
            </ImageBackground>
        </View>
        <View 
            style={{
                flex:0.38,
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"flex-end",
                padding:5
                }}>
            <View>        
            <Text style={{fontSize:16}}>
                {title}
            </Text>
            <Text style={{fontSize:12,color:colors.black}}>
                {subtitle}
            </Text>
            </View>
            <View>
                <ViewButton view="View"/>
            </View>
        </View>
        </TouchableOpacity>
    )
}