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

export default function ViewButton({onPress,view,touchStyle,textstyle,iconname,show}){
    return (
        <View style={{alignItems:"flex-end",left:3.8}}>
              <TouchableOpacity style={{
                  width:width*0.21,
                  height:height*0.05,
                  backgroundColor:colors.skyBlue,
                  borderTopLeftRadius:20,
                  borderBottomLeftRadius:20,
                  alignItems:"center",
                  justifyContent:"center",
                  bottom:7,
                  padding:10,
                  ...touchStyle
              }}
                 onPress={onPress}>
                  <Text style={{
                      color:colors.white,
                      fontSize:16,
                      textAlign:"center",
                      textAlign:"center",
                      ...textstyle                    
                  }}>
                       {view}
                  </Text>
             </TouchableOpacity>
         </View>    
    );
  }
