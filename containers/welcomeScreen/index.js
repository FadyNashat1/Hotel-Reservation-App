import React from 'react';
import {
    Text, 
    View,
    SafeAreaView,
    Dimensions,
    Image,
  ImageBackground,
  }
   from 'react-native';
  import colors from '../../constants/colors'
  const { width, height } = Dimensions.get("window");
  import { useNavigation } from '@react-navigation/native';
  import MainButton from '../../components/MainButton/index'

 export default function WelcomeScreen ({}) {
     const {navigate}=useNavigation()
      return (
          <ImageBackground 
          style={{
              flex:1,
              alignItems:"center",
              height:height,
              width:390,
              right:20
          }}
          source={require("../../assets/image1.png")}>
              <View style={{bottom:20,position:"absolute"}}>
              <MainButton 
                title="Login"
                onPress={() => navigate("LoginScreen")}
                touchStyle={{width:width*0.8}}
                />
              <MainButton
               title="Create Account"
               onPress={() => navigate("SignUpScreen")}
               touchStyle={{width:width*0.8}}
               />
              </View>
          </ImageBackground>
          
      )
      }
 