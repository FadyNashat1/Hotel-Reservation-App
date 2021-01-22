import React from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text
} from "react-native";
import colors from '../../constants/colors'
const { width, height } = Dimensions.get("window");


export default function TouchView({title,onPress}){
    return (
        <TouchableOpacity 
          onPress={onPress}
            style={{borderBottomWidth:0.4,padding:15,justifyContent:"center",width:width}}
            >
            <Text style={{fontSize:16}}>
                {title}
            </Text>
        </TouchableOpacity>
);
  }
