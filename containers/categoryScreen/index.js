import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Dimensions
} from "react-native";
import SearchBar from '../../components/SearchBar/index'
import CountryCart from '../../components/CountryCart/index'
import SearchTabBar from '../../components/SearchTabBar/index'
import MainButton from "../../components/MainButton";
const { width, height } = Dimensions.get("window");


export default function CategoryScreen ({navigation}){
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image9.png'),
                title:"Banff National Park" ,
                subtitle:"Canada"     
              },
              {
                image:require('../../assets/image7.png'),
                title:"Bali" ,
                subtitle:"Indonisia"     
              },
              {
                image:require('../../assets/image6.png'),
                title:"Bali" ,
                subtitle:"Indonisia"     
              },
              {
                image:require('../../assets/image17.png'),
                title:"Bali" ,
                subtitle:"Indonisia"     
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
        <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            <View>
            <SearchBar title="Category"/>
            <SearchTabBar iconname="ios-search"/>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginVertical:10}}>
            <MainButton 
                    touchStyle={{backgroundColor:"white",borderWidth:0.2,padding:5,width:width*0.18}}
                    title="Hotel"
                    textstyle={{color:"black",width:width*0.22}}/>
                <MainButton 
                    touchStyle={{backgroundColor:"white",borderWidth:0.2,padding:5,width:width*0.18}}
                    title="River"
                    textstyle={{color:"black",width:width*0.22}}/>
                <MainButton 
                    touchStyle={{backgroundColor:"white",borderWidth:0.2,padding:5,width:width*0.22}}
                    title="Mountain"
                    textstyle={{color:"black",width:width*0.22}}/>
                <MainButton 
                    touchStyle={{backgroundColor:"white",borderWidth:0.2,padding:5,width:width*0.18}}
                    title="City"
                    textstyle={{color:"black",width:width*0.22}}/>
            </View>
            <FlatList
               data={Mydata.orderSatus}
               extraData={Mydata}
               renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
               </View>
        </SafeAreaView>
    )
    }
