import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
import SearchBar from '../../components/SearchBar/index'
import CountryCart from '../../components/CountryCart/index'
const { width, height } = Dimensions.get("window");


export default function FavouriteScreen ({navigation}){
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image41.png'),
                title:"Kazakhshtan" ,
                subtitle:"About post", 
                info:"Jasmine Ford"  
              },
              {
                image:require('../../assets/image29.png'),
                title:"India" ,
                subtitle:"About post"  , 
                info:"Alan Wells"    
              },
              {
                image:require('../../assets/image42.png'),
                title:"Angokr Wat" ,
                subtitle:"About post"  , 
                info:"Greece"    
              },
              {
                image:require('../../assets/image43.png'),
                title:"Kenya" ,
                subtitle:"About post"  , 
                info:"Debra Hayes"  
              },

                   ]
    }
  Mydata.renderOrderSatatus = item => (
    <CountryCart
    onPress={item.onPress}
    image={item.image}
    title={item.title}
    subtitle={item.subtitle}
    info={item.info}
  />
);
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            <SearchBar icon1="ios-arrow-back" />
            <View style={{
                flexDirection:"row",
                borderWidth:0.2,
                width:width,
                height:height*0.07,
                justifyContent:"space-between",
                alignItems:"center",
                padding:10,
                marginVertical:8
            }}>
                <Text style={{fontSize:16,color:"#000000"}}>
                    Follow requests
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("FollowRequestScreen")}>
                    <Text>120</Text>
                </TouchableOpacity>
            </View>
            <FlatList
               data={Mydata.orderSatus}
               extraData={Mydata}
               renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
        </SafeAreaView>
    )
    }
