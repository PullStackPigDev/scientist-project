import {
    Text,
    Flex,
    Button
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer({reload}: {reload: Function}) {
    return (
        <footer style={{backgroundColor: "#F8F8F8", width: "100%", height: "15%"}}>
            <Flex width="93%" height="100%" flexWrap="wrap" justifyContent="space-between">
                <Flex maxWidth="100%" height="100%" flexDir="column-reverse" flexWrap="wrap">
                    <Text paddingBottom={2} paddingLeft={2}>
                        © 2022 Copyright All Rights Served
                    </Text>
                </Flex>
                <Flex maxWidth="100%" height="100%" flexDir="column-reverse" flexWrap="wrap">
                    <Flex paddingBottom={2}>
                        <Button onClick={() => {window.scrollTo(0, 0); reload()}} marginRight="1.5vw">
                            Reload Animations
                        </Button>
                        <Link href="/info">
                            <Button marginRight={30}>
                                <Text color="blue" className="pointer-hover underline-hover">
                                    More...
                                </Text>
                            </Button>
                        </Link>
                        <Link href="https://github.com/PullStackPigDev/scientist-project">              
                            <Image className="pointer-hover" src="/github.png" alt="github" width={40} height={30} />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </footer>
    )
}
