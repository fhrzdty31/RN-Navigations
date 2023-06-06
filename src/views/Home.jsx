import { useEffect, useState } from "react"
import { NativeBaseProvider, Text, Box, Button } from "native-base"

const Home = ({
    route,
    navigation
}) => {

    const data = {
        name: 'Ezzz',
        city: 'Kediri'
    }

    const [word, setWord] = useState("")

    useEffect(
        () => {
            if (route.params?.word) {
                setWord(route.params?.word)
            }
        }, [route.params?.word]
    )

    return (
        <NativeBaseProvider>
            <Text marginTop={"10"} textAlign={"center"} fontWeight={"bold"} fontSize={"2xl"}>This is a Main Screen</Text>
            <Box margin={"10"} >
                <Button onPress={() => navigation.navigate('Move Screen')} fontWeight={"bold"} rounded={"xl"} marginY={"2"}>Move Screen</Button>
                <Button onPress={() => navigation.navigate('Move Screen with Data', data)} fontWeight={"bold"} rounded={"xl"} marginY={"2"}>Move Screen with Data</Button>
                <Button onPress={() => navigation.navigate('Move Screen for Result')} fontWeight={"bold"} rounded={"xl"} marginY={"2"}>Move Screen for Result</Button>
            </Box>
            {
                word && (
                    <Text marginTop={"10"} textAlign={"center"} fontWeight={"bold"} fontSize={"2xl"}>{word}</Text>
                )
            }
        </NativeBaseProvider>
    )
}

export default Home