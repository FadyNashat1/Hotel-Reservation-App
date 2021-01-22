import React from "react";
import {
  Text,
  View,
} from "react-native";
import colors from '../../constants/colors'

export default function Header({title}){
    return (
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:"33",color:colors.primary}}>
                    {title}
            </Text>
         </View>    
    );
  }
