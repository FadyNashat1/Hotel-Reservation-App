import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import colors from '../../constants/colors'
import Ionicons from "@expo/vector-icons"

export default function MainButton({onPress,title,touchStyle,textstyle,iconname}){
    return (
        <View style={{flex:1,alignItems:"center"}}>
              <TouchableOpacity style={{
                  color:"white",
                  width:width*0.3,
                  borderWidth:0,
                  margin:8,
                  backgroundColor:colors.primary,
                  borderRadius:20,
                  padding:10,
                  alignItems:"center",
                  ...touchStyle
              }}
                 onPress={onPress}>
                  <Text style={{
                      color:colors.white,
                      fontSize:16,
                      textAlign:"center",
                      ...textstyle                    
                  }}>
                       {title}
                  </Text>
             </TouchableOpacity>
         </View>    
    );
  }
