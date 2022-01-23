import {
    Box,
    Flex,
    Text,
} from "@chakra-ui/react"
import Image from "next/image"

const NavBarTxt = ({txt, onClick}: {txt: string, onClick: any}) => {
    return (
        <Text color="#ffffff" marginLeft="12" marginRight="12" css={{fontSize: "1.5em"}} onClick={onClick}>
            {txt}
        </Text>
    )
}

const NavBar = () => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={"rgba(0, 44, 71, 0.85)"}
            zIndex={99999}
        >
            <Flex justifyContent="space-between">
                <Flex 
                    align="center"
                    padding={2}
                >
                    <Image src={"/icon.svg"} width={45} height={45} alt={"icon"} />
                </Flex>
                
                <Flex
                    align="center"
                    justify="flex-end"
                >
                    <NavBarTxt txt={"Home"} onClick={() => window.scrollTo(0, 0)} />
                    <NavBarTxt txt={"About"} onClick={() => window.scrollTo(0, 817)}/>
                    <NavBarTxt txt={"Stem Cells"} onClick={() => window.scrollTo(0, 1634)}/>
                    <NavBarTxt txt={"Resources"} onClick={() => window.scrollTo(0, 2451)}/>
                </Flex>
            </Flex>
        </Box>
    )
    // return (
    //     <Box
    //         position="fixed"
    //         as="nav"
    //         w="100%"
    //         bg={"#002C47"}
    //         zIndex={99999}
    //     >
    //         <Container
    //             maxW="container.xl"
    //             display="flex"
    //             wrap="wrap"
    //             align="center"
    //             justify="space-between"
    //             paddingStart={2}
    //             paddingEnd={2}
    //         >
    //             <Flex align="center">
    //                 <Image src={"/icon.svg"} width={45} height={45} alt={"icon"} />
    //             </Flex>

    //             <Flex
    //                 align="center"
    //                 justify="flex-end"
    //             >
    //                 <Text color="#ffffff">
    //                     Home
    //                 </Text>
    //                 <Text color="#ffffff">
    //                     About
    //                 </Text>
    //                 <Text color="#ffffff">
    //                     Stem Cells
    //                 </Text>
    //                 <Text color="#ffffff">
    //                     Resources
    //                 </Text>
    //             </Flex>
    //         </Container>
    //     </Box>
    // )
}

export default NavBar;