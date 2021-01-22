import React from 'react';
import { View, Dimensions, ImageBackground,Text } from 'react-native';
import Input from '../../components/Input/index'
const { width, height } = Dimensions.get("window");
import MainButton from '../../components/MainButton/index'
import colors from '../../constants/colors'

 export default function SignUpScreen ({navigation }) {
    return (
            <ImageBackground
                 style={{flex:1,alignItems:"center",backgroundColor:"white",paddingTop:25}} 
                source={require("../../assets/image11.png")}>
                    <Text style={{fontSize:33,color:colors.primary,marginVertical:10}}>
                        Craete Account
                    </Text>
               <View style={{
                   height:height*0.5,
                   width:width*0.8,
                   borderWidth:0.1,
                   alignItems:"center",
                   backgroundColor:"white",
                   justifyContent:"center",
                   borderRadius:10
                   }}>
                    <Input
                        placeholder="Name"
                        icon="user"
                />
                    <Input
                        placeholder="Email"
                        icon="email"
                />
                    <Input
                        placeholder="Password"
                        icon="key-variant"
                />
                    <Input
                        placeholder="Confirm password"
                        icon="key-variant"
                />

                </View>
                <View style={{bottom:20}}>
                    <MainButton 
                        title="Sign Up"
                        touchStyle={{width:width*0.4}}
                        onPress={() => navigation.navigate("LoginScreen")}

                    />
                </View>
        </ImageBackground>
    );
}

