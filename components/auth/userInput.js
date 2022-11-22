import React from "react";
import { TextInput, View } from 'react-native'
import Text from "@kaloraat/react-native-text"

const UserInput = ({name,value,setValue,
    autoCapitalize="none",
    keyboardType="default",
    secureTextEntry=false
}) => {
    return (
            <View style={{ marginHorizontal: 20 ,}}>
            <Text semi >{ name}</Text>
                <TextInput 
                autoCapitalize = {autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                style={{
                    // backgroundColor:"grey",
                    height: 50,
                    borderBottomWidth: 0.5,
                    color: "black",
                marginBottom: 30
                }}
                value= { value}
                onChangeText={(text)=>{ setValue(text)}}
                />
            </View>
          
    );
};

export default UserInput