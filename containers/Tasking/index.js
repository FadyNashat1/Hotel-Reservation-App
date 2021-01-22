import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from '../../constants/colors'

export default function TaskingScreen ({navigation}){
    const {navigate}= useNavigation()
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        </View>
    )
    }
