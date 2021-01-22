import React from "react";
import {
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from "react-native";
const { width, height } = Dimensions.get("window");
import colors from '../../constants/colors'
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export default function FavButton({onPress,touchStyle}){
  const {navigate}=useNavigation();
    return (
        <SafeAreaView style={{flex:1,alignItems:"flex-end",}}>
              <TouchableOpacity style={{
                  color:"white",
                  width:width*0.098,
                  height:height*0.05,
                  backgroundColor:colors.primary,
                  alignItems:"center",
                  justifyContent:"center",
                  ...touchStyle
              }}
              onPress={() =>navigate("FavouriteScreen")}>
             <MaterialCommunityIcons name="bookmark-outline"size={20}color={colors.white} style={{}}/>
             </TouchableOpacity>
         </SafeAreaView>    

    );
  }
