import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from "react-native";
const { width, height } = Dimensions.get("window");
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function SearchTabBar ({iconname,barstyle}) {
    return (
      <SafeAreaView
        style={{
          backgroundColor:"#EDEDED",
          flexDirection: "row",
          width:width*0.93,
          marginVertical:10,
          borderRadius:15,
          alignItems:"center",
          alignSelf:"center",
          ...barstyle
        }}>
          <View style={{
            flex:1,
            flexDirection:"row",
            alignItems:"center"
            }}>
              <TouchableOpacity>
                <Ionicons
                name="ios-search"
                size={25}
                color={"black"}
                style={{padding:10}}>
                </Ionicons>
                </TouchableOpacity>
                <Text style={{color:"#979797",padding:10}}>
                    Search
                </Text>
        </View>
      </SafeAreaView>
    );
  }

