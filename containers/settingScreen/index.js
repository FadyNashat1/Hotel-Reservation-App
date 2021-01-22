import React from "react";
import {
  SafeAreaView,
  FlatList,
} from "react-native";
import SearchBar from '../../components/SearchBar/index'
import { useNavigation } from "@react-navigation/native";
import TouchView from '../../components/TouchView/index'

export default function SettingtScreen ({navigation}){
  const {navigate}=useNavigation()
    const Mydata = {
        orderSatus: [
            {
              title:"Profile" ,
              onPress:() => navigate("ProfileScreen") 
            },

            {
                title:"Country" ,
                onPress:() => navigate("CountryScreen") 
              },
              {
                title:"Privacy Policy" ,
                onPress:() => navigate("PrivacyPolicyScreen") 

              },
              {
                title:"Support & FAQs" ,
                onPress:() => navigate("SupportScreen") 

              },
              {
                title:"Change password" ,
                onPress:() => navigate("ChangePasswordScreen") 

              },
              {
                title:"Log out" ,
                onPress:() => navigate("LoginScreen") 
              },

                   ]
    }
  Mydata.renderOrderSatatus = item => (
    <TouchView
    onPress={item.onPress}
    title={item.title}
  />
);
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            <SearchBar icon1="ios-arrow-back" title="Settings" />
            <FlatList
               data={Mydata.orderSatus}
               extraData={Mydata}
               renderItem={({ item }) => Mydata.renderOrderSatatus(item)}/>
        </SafeAreaView>
    )
    }
