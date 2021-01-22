import React, { Component } from "react";
import {
  Dimensions,
  View,
  SafeAreaView,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import Cart from '../../components/Cart/index'
import SearchBar from '../../components/SearchBar/index'
const { width, height } = Dimensions.get("window");
import {Ionicons} from '@expo/vector-icons'
import CenterHeader from '../../components/CenterHeader/index'
import CountryCart from '../../components/CountryCart/index'
import VerticalCart from '../../components/VerticalCart/index'
import TabStack from '../../navigation/TabStack'
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen ({}){
  const {navigate} =useNavigation()
  const Data = {
    orderSatus: [
        {
            image:require('../../assets/image20.png'),
            txt:"Canada" ,     
          },
          {
            image:require('../../assets/image30.png'),
            txt:"USA" ,     
          },
          {
            image:require('../../assets/image25.png'),
            txt:"Australia" ,     
          },
          {
            image:require('../../assets/image29.png'),
            txt:"Australia" ,     
          },
          {
            image:require('../../assets/image9.png'),
            txt:"Australia" ,     
          },
  ]
}

Data.renderOrderSatatus = item => (
  <Cart 
    image={item.image}
    onPress={item.onPress}
    txt={item.txt}
  />
)
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image8.png'),
                title:"Banff National Park" ,
                subtitle:"Canada"     
              },
              {
                image:require('../../assets/image7.png'),
                title:"Bali" ,
                subtitle:"Indonisia"     
              },
                   ]
    }
  
  Mydata.renderOrderSatatus = item => (
    <CountryCart
    title={item.title}
    subtitle={item.subtitle}
    onPress={item.onPress}
    image={item.image}
  />

);
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"#FFFFFF",alignItems:"center"}}>
            <SearchBar icon1="ios-search"title="Home"/>
            <View style={{
                flexDirection:"row",
                borderWidth:0.2,
                width:width,
                height:height*0.07,
                justifyContent:"space-between",
                alignItems:"center",
                padding:10
            }}>
                <Text style={{fontSize:16,color:"#000000"}}>
                    Show post
                </Text>
                <TouchableOpacity onPress={() => navigate("PostsScreen")}>
                <Ionicons name="ios-arrow-forward" size={20}/>
                </TouchableOpacity>
            </View>
            <ScrollView vertical={true}>
            <FlatList
              horizontal
              data={Data.orderSatus}
              extraData={Data}
              renderItem={({ item }) => Data.renderOrderSatatus(item)}/>
            <CenterHeader title="Popular Destination" onPress={() => navigate("CategoryScreen")}/>
            <FlatList
                data={Mydata.orderSatus}
                extraData={Mydata}
                renderItem={({ item }) => Mydata.renderOrderSatatus(item)}>
             </FlatList>
            <CenterHeader title="Explore" onPress={() => navigate("TaskingScreen")}/>
            <VerticalCart
            onPress={()=> navigate("HotelDetailsScreen")}/>
            </ScrollView>
       </SafeAreaView>

    )}
