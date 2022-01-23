import React from 'react'
import type { NextPage } from 'next'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import {
  Text,
  Flex
} from '@chakra-ui/react'

const Home: NextPage = () => {
  const [scr, setScr] = React.useState<string>("")
  const [hsc, setHsc] = React.useState<Array<string>>(["", ""])
  const [scc, setScc] = React.useState<string>("")
  function GetProp() {
    if (window.scrollY > 120 && window.scrollY < 1634) {
      setScr("motion3")
    }
    if (window.scrollY > 1100 && window.scrollY < 2000) {
      setHsc(["motion4", "motion5"])
    }
    if (window.scrollY > 1700 && window.scrollY < 2700) {
      setScc("motion6")
    }
  }
  React.useEffect(() => {
    GetProp()
    window.addEventListener("scroll", () => {
      GetProp()
    })
  }, [])
  return (
    <div style={{overflow: "hidden"}}>
      <NavBar />
      <main style={{width: '100vw', height: '100vh', position: 'relative' }}>
        <Image src="/mainBg.svg" layout="fill" objectFit="cover" alt="bgImg" />
        <Flex alignItems="center" justifyContent="center" flexDir="column" height="100%">
          <Text color="#ffffff" fontSize="4.5em" zIndex={1} className="motion1">
            <b style={{
              letterSpacing: "0.01em",
            }}>
              Meet Ernest Armstrong McCulloch
            </b>
          </Text>
          <Text color="#ffffff" fontSize="1.8em" zIndex={1} className="motion2">
            The Canadian Hematologist That Discovered Stem Cells
          </Text>
        </Flex>
      </main>
      <div style={{width: '100vw', height: '100vh', position: 'relative' }}>
        <Flex alignItems="start" justifyContent="start" flexDir="column" height="100%">
          <div style={{padding: "6em"}} className={scr}>
            <Text fontSize="4.5em" paddingBottom="0.5em">
              <b>
                Father of Stem Cell Research
              </b>
            </Text>
            <Flex>
              <Text width="55%" fontSize="1.5em" paddingRight={100} lineHeight={10}>
                &emsp;&emsp;&emsp;Ernest Armstrong McCulloch is a Canadian hematologist known for his discovery of haematopoietic stem cells (HSC). Ernest Armstrong McCulloch was born in Toronto, Ontario on 21 April 1926. His parents were comparatively well off and he enjoyed a privileged upbringing. Ernest had a nickname “Bun”, or “Bunny”. Mainly because he didn’t really like his first name. For education, Ernest went to Upper Canada College for High School, and had his university in University of Toronto. In 1957, Ernest joined the Ontario Cancer Institude. In 1974, he became an official member of the Royal Society of Canada. And in 2011, he passed away, death factor unknown.
              </Text>
              <Flex flexDir={"column"} textAlign="center">
                <Image src="/profile.svg" alt="Profile" width={500} height={500} />
                <Text paddingTop="1vh">
                  Dr. Ernest A. McCulloch in 2005.
                </Text>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </div>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <Image src="/mainBg2.svg" layout="fill" objectFit="cover" alt="bgImg" />
        <Flex alignItems="center" justifyContent="center" flexDir="column" height="100%">
          <Text color="#ffffff" fontSize="4.5em" zIndex={1} className={hsc[0]}>
            <b style={{
              letterSpacing: "0.01em"
            }}>
              The Discovery of hematopoietic stem cells
            </b>
          </Text>
          <Text color="#ffffff" fontSize="2.5em" zIndex={1} className={hsc[1]}>
            with Ernest and James Till
          </Text>
        </Flex>
      </div>
      <div style={{width: '100vw', height: '100vh', position: 'relative' }}>
        <Flex alignItems="start" justifyContent="start" flexDir="column" height="100%">
          <div style={{padding: "6em"}} className={scc}>
            <Text fontSize="4.5em" paddingBottom="0.5em" textAlign="center">
              <b>
                Stem Cells, the “colony-forming units”
              </b>
            </Text>
            <Flex>
              <Flex flexDir={"column"} textAlign="center">
                <Image src="/stem.svg" alt="Profile" width={500} height={500} />
                <Text paddingTop="1vh" fontSize="0.6em">
                  Discrete, macroscopic nodules had developed on the spleen surface in surviving mice
                </Text>
              </Flex>
              <Text width="55%" fontSize="1.25em" paddingLeft={100} lineHeight={8}>
                &emsp;&emsp;&emsp;In 1961, at the University of Toronto and the Ontario Cancer Institude. There came the discovery of hemtaopoietic stem cells. Ernest and Till found out that the number of nodules appearing on the spleen was directly proportional to the number of bone marrow cells originally injected into the lethally irradiated recipient. They called it “colony-forming units”. Then, with the help of a graduate student of Till’s Andrew Becker, who proved their findings. After several more experiments, more of stem cells’ characteristics were found, including self-renewal, process of cellular differentiation, etc. Their work led to revolutionary treatments for a lot of blood diseases such as leukemia, anemia and immunodeficiencies. This achievement also led to the awards and prizes. They won the Gairdner award in 1969, they were made Officers of the Order of Canada in 1988, inducted into the Canadian Medical Hall of Fame in 2004 and earned an Albert Lasker Award in 2005, a top U.S. medical research prize. The only pity is that they did not receive a Nobel prize for such an accomplishment. 
              </Text>
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  )
}

export default Home
