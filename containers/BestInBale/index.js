import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
import CountryCart from '../../components/CountryCart/index'
import SearchTabBar from '../../components/SearchTabBar/index'
const { width, height } = Dimensions.get("window");
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from '../../constants/colors'

export default function BestInBaleScreen ({navigation,onPress}){
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image53.png'),
                title:"Ramade Encore" ,
                subtitle:"Kuta, Kota Denpasar" ,
                onPress:() => navigation.navigate("HotelDetailsScreen")    
              },
              {
                image:require('../../assets/image55.png'),
                title:"Alam Sembuwuk Resort" ,
                subtitle:"Kabupaten Gianyar"     
              },
              {
                image:require('../../assets/image53.png'),
                title:"The ONE Legian Hotel Resort" ,
                subtitle:"Badung Regency" ,
              },
              {
                image:require('../../assets/image54.png'),
                title:"Grand Zuri Kuta" ,
                subtitle:"Kuta, Kabupaten Badung"     
              },

             ]
    }
  Mydata.renderOrderSatatus = item => (
    <CountryCart
    onPress={item.onPress}
    image={item.image}
    title={item.title}
    subtitle={item.subtitle}
  />
);
    return (
        <SafeAreaView style={{
            flex:1,
            backgroundColor:"white",
            alignItems:"center",
            paddingTop:15
            }}>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                }}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name="ios-arrow-back"size={25} style={{right:12}}/>
            </TouchableOpacity>
                <SearchTabBar barstyle={{
                    width:width*0.8,
                    borderRadius:7,
                    backgroundColor:"#D1D1D1"
                    }}/>
            </View>
            <Text style={{
                color:colors.skyBlue,
                fontSize:18,
                alignSelf:"flex-start",
                padding:10
                }}>
                Best Hotel in Bale
            </Text>
            <FlatList
               data={Mydata.orderSatus}
               extraData={Mydata}
               renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
        </SafeAreaView>
    )
    }
