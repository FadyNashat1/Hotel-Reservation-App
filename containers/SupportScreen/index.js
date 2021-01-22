import React from "react";
import {
  SafeAreaView,
  Text,
  Dimensions,
  View
} from "react-native";
import SearchBar from '../../components/SearchBar/index'
const { width, height } = Dimensions.get("window");
import SearchTabBar from '../../components/SearchTabBar/index'


export default function SupportScreen ({navigation}){
    return (
        <SafeAreaView style={{
            backgroundColor:"white",
            alignItems:"center",
            justifyContent:"center"
            }}>
            <SearchBar icon1="ios-arrow-back" title="Support & FAQs" />
            <View style={{
                width:width*0.95,
                height:height*0.4,
                borderWidth:0.4,
                borderRadius:10,
                justifyContent:"space-around",
                alignItems:"center"
                }}>
                <Text style={{
                    fontSize:26,
                    color:"@000000",
                    textAlign:"center",
                    width:width*0.7
                    }}>
                    Heloo! How can we help you?
                </Text>
                <SearchTabBar/>
            </View>
        </SafeAreaView>
    )
    }
