import React from "react";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
export default function TouchOpacity({title,onPress,touchstyle}) {
    return (
        <View style={{alignSelf:"flex-end",padding:10}}>
            <TouchableOpacity onPress={onPress}>
                <Text style={{fontSize:12,color:"#BCBCBC",...touchstyle}}>{title}></Text>
            </TouchableOpacity>
        </View>
    )}
