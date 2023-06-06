import { NativeBaseProvider, Text, Box, Button } from "native-base"

const Home = ({
    route,
    navigation
}) => {

    const data = {
        name: 'Ezzz',
        city: 'Kediri'
    }

    return (
        <NativeBaseProvider>
            <Text marginTop={"10"} textAlign={"center"} fontWeight={"bold"} fontSize={"2xl"}>This is a Main Screen</Text>
            <Box margin={10} display={"flex"} justifyContent={"center"}>
                <Button onPress={() => navigation.navigate('Move Screen')} fontWeight={"bold"} rounded={"xl"} marginY={"2"}>Move Screen</Button>
                <Button onPress={() => navigation.navigate('Move Screen with Data', data)} fontWeight={"bold"} rounded={"xl"} marginY={"2"}>Move Screen with Data</Button>
                <Button onPress={() => navigation.navigate('Move Screen for Result')} fontWeight={"bold"} rounded={"xl"} marginY={"2"}>Move Screen for Result</Button>
            </Box>
            {
                route.params?.word && (
                    <Text marginTop={"10"} textAlign={"center"} fontWeight={"bold"} fontSize={"2xl"}>{route.params?.word}</Text>
                )
            }
        </NativeBaseProvider>
    )
}

export default Home