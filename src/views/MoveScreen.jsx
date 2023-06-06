import { NativeBaseProvider, Text, Button } from "native-base"

const MoveScreen = ({
    navigation
}) => {
    return (
        <NativeBaseProvider>
            <Text marginTop={"10"} textAlign={"center"} fontWeight={"bold"} fontSize={"2xl"}>This is a Second Screen</Text>
            <Button onPress={() => navigation.goBack()} fontWeight={"bold"} rounded={"xl"} margin={"10"}>Back</Button>
        </NativeBaseProvider>
    )
}

export default MoveScreen