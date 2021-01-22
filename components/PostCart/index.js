import React from "react";
import { Text, View, TouchableOpacity, Dimensions,ImageBackground } from "react-native";
const { width, height } = Dimensions.get("window");
import colors from '../../constants/colors'

export default function PostCart({onPress,subtitle,title,image,info}) {
    return(
    <TouchableOpacity style={{
        width:width*0.87,
        height:height*0.2,
        flex:1,
        borderWidth:0.2,
        margin:5,
        alignSelf:"center",
        borderRadius:15,
        alignItems:"center"
        
        }}
        onPress={onPress}>
         <View style={{borderRadius:15,flex:0.8,}}>
                 <ImageBackground
                    source={image}
                    style={{width:width*0.94,height:height*0.13,}}>
                 <Text style={{fontSize:15,color:colors.white,padding:15}}>
                            {info}
                        </Text>
                </ImageBackground>
                </View>
        <View 
            style={{
                flex:0.2,
                width:width,
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"flex-end",
                padding:3,
                marginHorizontal:10,
                alignSelf:"flex-start"
                }}>
            <View>        
            <Text style={{fontSize:16}}>
                {title}
            </Text>
            <Text style={{fontSize:12,color:colors.black}}>
                {subtitle}
            </Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}