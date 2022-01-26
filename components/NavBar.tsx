import {
    Box,
    Flex,
    Text,
} from "@chakra-ui/react"
import Image from "next/image"

const NavBarTxt = ({txt, onClick}: {txt: string, onClick: any}) => {
    return (
        <Text color="#ffffff" marginLeft="12" marginRight="12" css={{fontSize: "1.535vw"}} onClick={onClick} className="nav-link">
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
                    <NavBarTxt txt={"About"} onClick={() => window.scrollTo(0, 762)}/>
                    <NavBarTxt txt={"Stem Cells"} onClick={() => window.scrollTo(0, 1602)}/>
                    <NavBarTxt txt={"Resources"} onClick={() => window.scrollTo(0, 9999)}/>
                </Flex>
            </Flex>
        </Box>
    )
}

export default NavBar;