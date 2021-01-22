import React from "react";
import {
  SafeAreaView,
  FlatList,
  ScrollView
} from "react-native";
import SearchBar from '../../components/SearchBar/index'
import PostCart from '../../components/PostCart/index'
import MainButton from "../../components/MainButton";
import { useNavigation } from "@react-navigation/native";

export default function PostsScreen ({}){
  const {navigate}=useNavigation()
    const Mydata = {
        orderSatus: [
            {
                image:require('../../assets/image39.png'),
                title:"Kazakhshtan" ,
                subtitle:"About post", 
                info:"Jasmine Ford"  
              },
              {
                image:require('../../assets/image38.png'),
                title:"India" ,
                subtitle:"About post"  , 
                info:"Alan Wells"    
              },
              {
                image:require('../../assets/image40.png'),
                title:"Angokr Wat" ,
                subtitle:"About post"  , 
                info:"Greece"    
              },
              {
                image:require('../../assets/image37.png'),
                title:"Kenya" ,
                subtitle:"About post"  , 
                info:"Debra Hayes"  
              },

                   ]
    }
  Mydata.renderOrderSatatus = item => (
    <PostCart
    onPress={item.onPress}
    image={item.image}
    title={item.title}
    subtitle={item.subtitle}
    info={item.info}
  />
);
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            <SearchBar icon1="ios-arrow-back" title="Post"/>
            <ScrollView>
            <FlatList
               data={Mydata.orderSatus}
               extraData={Mydata}
               renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
               <MainButton 
                  onPress={() => navigate("AddPostScreen")}
                  title="Add Post"/>
               </ScrollView>
        </SafeAreaView>
    )
    }
