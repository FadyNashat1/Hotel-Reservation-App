import React from "react";
import { Text, View, TouchableOpacity,Dimensions,ImageBackground} from "react-native";
const { width, height } = Dimensions.get("window");
import colors from '../../constants/colors'

export default function Cart({onPress,image,txt}) {
  return(
          <View style={{margin:5}}>
    <View style={{marginVertical:10,borderRadius:20}}>
        <TouchableOpacity style={{
                }}
                onPress={onPress}>
            <ImageBackground
                source={image}
                style={{
                    width:width*0.45,
                    height:height*0.12,
                    justifyContent:"center",
        }}>
                    <Text style={{
                        color:colors.white,
                        fontSize:18,
                        alignSelf:"center",
                        fontWeight:"bold"
                    }}>
                        {txt}
                    </Text>
            </ImageBackground>
        </TouchableOpacity>
    </View>
    </View>
);
}