import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";


export function ReferenceCard({content, from, extend}: {content: string, from: string, extend?: boolean}) {
    return (
        <Box width="48%" fontSize="1em" borderRadius={"2%"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
            <Text padding={5} paddingBottom={extend ? "50px" : 5}>
                <Text>
                    {content}
                </Text>
                <Link href={from}>
                    <a style={{color: "blue", textDecoration: "underline", overflowWrap: "break-word", wordWrap: "break-word"}}>
                        {from}
                    </a>
                </Link>
            </Text>
        </Box>
    )
}