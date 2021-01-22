import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from "react-native";
const { width, height } = Dimensions.get("window");
import colors from '../../constants/colors'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function SearchBar ({icon1,title,textplace }) {
    return (
      <SafeAreaView
        style={{
          backgroundColor: "transparent",
          flexDirection: "row",
          paddingTop:10,
          borderBottomColor:colors.basic,
          width:width*0.93,
          marginVertical:10,
          alignItems:"center",
        }}>
          <View style={{
            alignItems:"flex-start",
            flex:1,
            }}>
              <TouchableOpacity>
                <Ionicons
                name={icon1}
                size={25}
                color={colors.skyBlue}
                style={{padding:10}}>
                </Ionicons>
                </TouchableOpacity>
        </View>
        <View style={{
          alignItems:"flex-end",
          flex:1,
          }}>
            <TouchableOpacity style={{}}>
              <Text style={{
              color:colors.skyBlue,
              fontweight:"bold",
              fontSize:17,
              fontWeight:"bold",
              textAlign:"center",
              ...textplace
              }}>{title}</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

