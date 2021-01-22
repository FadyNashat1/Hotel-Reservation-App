import React from 'react';
import { View,Dimensions,ImageBackground,Text } from 'react-native';
import Input from '../../components/Input/index'
const { width, height } = Dimensions.get("window");
import MainButton from '../../components/MainButton/index'
import colors from '../../constants/colors'
import { useNavigation } from '@react-navigation/native';
import TouchOpacity from '../../components/TouchOpacity/index'

 export default function VerificationScreen ({navigation }) {
     const{navigate}=useNavigation()
    return (
        <ImageBackground
            source={require("../../assets/image11.png")}
            style={{flex:1,alignItems:"center",backgroundColor:"white",paddingTop:50}}>
            <Text style={{fontSize:33,color:colors.primary,marginVertical:10,padding:10,}}>
                    Verification code
             </Text>
            <View style={{
                height:height*0.2,
                width:width*0.8,
                borderWidth:0.1,
                alignItems:"center",
                backgroundColor:"white",
                justifyContent:"center",
                borderRadius:10,
                }}>
                <Input
                    placeholder="Enter Your Verification Code"
                    />
              <TouchOpacity
                 title="Resend (30s)"
                 onPress={() => navigate("ForgetPasswordScreen")}
                 />

            </View>
            <View style={{bottom:20}}>
                    <MainButton 
                        title="Verify"
                        touchStyle={{width:width*0.4}}
                        />
                </View>
        </ImageBackground>
    );
}
