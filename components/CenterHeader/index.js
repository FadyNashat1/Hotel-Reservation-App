import React, { Component } from "react";
import { 
    Text,
    View,
    TouchableOpacity,
    SafeAreaView
     } from "react-native";
import colors from '../../constants/colors'
export default function CenterHeader ({title,onPress}){
    return(
            <View style={{flexDirection:"row",padding:8}}>
                  <View style={{alignItems:"flex-start",}}>   
                        <Text style={{color:"#000000",fontWeight:"bold",fontSize:16}}>
                            {title}
                        </Text>
                   </View>
                  <TouchableOpacity onPress={onPress}style={{alignItems:"flex-end",flex:1}}>
                      <Text style={{color:colors.black,fontWeight:"bold",fontSize:15}}>
                          View All
                        </Text>
                    </TouchableOpacity>
             </View>
    )
    }