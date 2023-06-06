import { NativeBaseProvider, Box, Text } from "native-base"

const MoveScreenwithData = ({
    route
}) => {
    const { name, city } = route.params

    return (
        <NativeBaseProvider>
            <Box marginTop={"20"}>
                <Text marginBottom={"1"} textAlign={"center"} fontWeight={"bold"} fontSize={"2xl"}>My name {name}</Text>
                <Text marginBottom={"1"} textAlign={"center"} fontWeight={"bold"} fontSize={"2xl"}>I'm from {city}</Text>
            </Box>
        </NativeBaseProvider>
    )
}

export default MoveScreenwithData