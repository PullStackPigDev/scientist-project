import {
    Box,
    Heading,
    Text
} from "@chakra-ui/react"
import Link from "next/link"

export default function Info() {
    return (
        <>
            <Text
                fontSize="0.5vw"
                marginLeft="2vw"
            >
                * Important pieces cut from references.
                <Link href="/">
                    <a style={{
                        paddingLeft: "2vw",
                        color: "blue"
                    }}>Home</a>
                </Link>
            </Text>
            <Box margin="2vw">
                <Heading
                    as="h1"
                    paddingBottom="3vh"
                >
                    Early days and education
                </Heading>
                <Text
                    width="85vw"
                    height="25vh"
                    paddingBottom="3vh"
                >
                    &quot;Ernest Armstrong McCulloch was born in Toronto, Ontario on 21 April 1926. His parents were comparatively well off and he enjoyed a privileged upbringing. His maternal grandfather was James Armstrong, a wealthy businessman, and his maternal grandmother took a keen interest in Ernest's education. In his personal notes written much later in life, McCulloch recounts an early memory in which he was routinely driven to a prestigious junior public school by a chauffeur in a Cadillac sedan. He notes that the chauffeur was often late, which caused him considerable distress but had no academic consequences. Ernest spent his high school years at Upper Canada College (UCC), a boy's private school in Toronto where ‘elite’ English Canadians of that era sent their sons to grow up into gentlemen of influence. In his personal notes, Ernest recalls that many of his happiest memories of UCC were centred around the long-lasting friendships that began at this school. He also fondly remembers his involvement with the school magazine. He eventually became the editor of this publication, a position of some prestige that came with the title of ‘steward’ and the right to wear a ‘fancy blazer’.&quot;
                </Text>
                <Heading
                    as="h1"
                    paddingBottom="3vh"
                    paddingTop="5vh"
                >
                    Story of Stem Cell Discovery
                </Heading>
                <Text>
                    &quot;McCulloch and Till then went on to examine the spleens of their transplanted animals. McCulloch had noticed that discrete, macroscopic nodules had developed on the spleen surface in surviving mice. Upon closer examination, these nodules were found to be filled with proliferating cells. It turned out that the nodules, which the team dubbed ‘spleen colonies’, were easy to count and could be used to quantitatively determine ‘the sensitivity to radiation of the proliferative capacity in vivo of normal adult mouse bone marrow cells irradiated in vitro’. In other words, the number of nodules appearing on the spleen was directly proportional to the number of bone marrow cells originally injected into the lethally irradiated recipient. Rather than rashly labelling them ‘stem cells’, McCulloch and Till used the term ‘colony-forming units’ (CFUs) to describe the injected cells that were able to lodge in the spleen, proliferate and form nodules.&quot;
                </Text>
                <Heading
                    as="h1"
                    paddingBottom="1vh"
                    paddingTop="3vh"
                >
                    Simulation
                </Heading>
                <Text>
                    <Link href="/simulation">
                        <a style={{
                            color: "blue"
                        }}>Here</a>
                    </Link>
                </Text>
            </Box>
        </>
    )
}