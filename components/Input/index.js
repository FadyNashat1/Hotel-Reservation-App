import React from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
} from "react-native";
const { width, height } = Dimensions.get("window");
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from '../../constants/colors'
export default function Input({txt ,placeholder ,icon ,inputStyle}) {
    return (
      <View
        style={{
          backgroundColor: "transparent",
          alignItems: "center",
        }}>
            <Text style={{
                color:"#A6A6A6",
                alignSelf:"flex-start",
                }}>
                {txt}
            </Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <TextInput style={{
                  borderBottomWidth:0.5,
                  width:width*0.7,
                  borderBottomColor:colors.Grey,    
                  alignItems:"center",
                  padding:10,
                  ...inputStyle            
                  }}
              placeholder={placeholder}
              placeholderTextColor="black"/>
                <MaterialCommunityIcons
                  name={icon}
                  size={18}
                  color={colors.skyBlue}
                />
            </View>
        </View>

    );
  }

