import React from "react";
import {
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import colors from '../../constants/colors'
import Ionicons from "@expo/vector-icons"
const { width, height } = Dimensions.get("window");
import MainButton from '../../components/MainButton/index'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Requests({onPress,title,image,color,btntxt}){
    const{navigate} =useNavigation()
    return (
        <View style={{
            padding:8,
            alignItems:"center",
            borderBottomWidth:0.6,
            flexDirection:"row",
            justifyContent:"space-between",
            width:width,
            flex:1
            }}>
            <View style={{flex:0.3}}>
                <Image 
                    style={{
                        borderRadius:50,
                        width:50,
                        height:50
                    }}
                    source={image}/>
            </View>
            <View style={{flex:0.6}}>
                <Text style={{fontSize:16,marginHorizontal:10}}>
                    {title}
                </Text>
            </View>
            <MainButton onPress={() => navigate("FollowScreen")} title={btntxt}touchStyle={{backgroundColor:[color],padding:5}}/>
            <TouchableOpacity style={{flex:0.1 ,borderWidth:0.5,borderRadius:70,alignItems:"center",width:width*0.08}}>
                <Text style={{color:"red",fontSize:20}}>x</Text>
            </TouchableOpacity>
         </View>    
    );
  }
