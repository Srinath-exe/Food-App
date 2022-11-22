import React, { useState } from "react";
import { TouchableOpacity, TextInput, View } from 'react-native'
import Text from "@kaloraat/react-native-text"
import UserInput from "../components/auth/userInput";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    return (
        <View style={{ justifyContent: "center", flex: 1 }}>
            <Text title center>Sign Up</Text>
            <UserInput name="NAME" value={name} setValue={setName} autoCapitalize="words" autoCorrect={false} />
            <UserInput name="EMAIL" 
            value={email} 
            setValue={setEmail} 
            autoCompleteType="email" 
            keyboardType = "email-address"
            />
            <UserInput name="PASSWORD" value={password} setValue={setPassword} 
            secureTextEntry = {true}
            autoCompleteType="password"
            />

            <TouchableOpacity
                style={{
                    backgroundColor:"orange",
                    height:60,
                    paddingHorizontal:20,
                    marginHorizontal:20,
                    borderRadius:40,
                    alignItems:"center",
                    justifyContent: "center",
                }}
            >
                <Text bold medium center>SUBMIT</Text>
            </TouchableOpacity>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Text>{JSON.stringify({ name, email, password, loading }, null, 3)}</Text>

        </View>

    );
};

export default Signup