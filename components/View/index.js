import React from "react";
import {
  View,
  Dimensions
} from "react-native";
import colors from '../../constants/colors'
const { width, height } = Dimensions.get("window");


export default function Vieew({...ViewStyle}){
    return (
        <View style={{
            height:height*0.4,
            width:width*0.8,
            borderWidth:0.1,
            alignItems:"center",
            backgroundColor:"white",
            justifyContent:"center",
            borderRadius:10,
            ...ViewStyle
            }}/>
);
  }
