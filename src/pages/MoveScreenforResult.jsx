import { useState } from "react"
import { NativeBaseProvider, Text, Input, Button } from "native-base"

const MoveScreenforResult = ({
    route, navigation
}) => {

    const [word, setWord] = useState("")

    return (
        <NativeBaseProvider>
            <Text marginTop={"10"} marginX={"5"} textAlign={"center"} fontWeight={"bold"} fontSize={"2xl"}>Write down one word that comes to your mind!</Text>
            <Input type="text" marginTop={"5"} marginX={"5"} rounded={"xl"} value={word} onChangeText={text => setWord(text)}/>
            <Button onPress={() => navigation.navigate({
                name: 'Home',
                params: {
                    word
                },
                merge: true
            })} fontWeight={"bold"} rounded={"xl"} margin={"10"}>Back</Button>
        </NativeBaseProvider>
    )
}

export default MoveScreenforResult