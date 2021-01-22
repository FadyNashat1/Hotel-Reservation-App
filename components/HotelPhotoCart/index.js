import React from "react";
import {  View, TouchableOpacity, Dimensions,ImageBackground } from "react-native";
const { width, height } = Dimensions.get("window");

export default function HotelPhotoCart({onPress,image}) {
    return(

        <View style={{marginVertical:7}}>
            <View style={{borderRadius:20}}>
                 <TouchableOpacity 
                    onPress={onPress}>
                 <ImageBackground
                    source={image}
                    style={{
                        width:width*0.35,
                        height:height*0.1,
                        justifyContent:"center",
            }}>
                </ImageBackground>
                </TouchableOpacity>
             </View>
        </View>
    )
}
