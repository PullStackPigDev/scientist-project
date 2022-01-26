import React from 'react'
import type { NextPage } from 'next'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import {
  Text,
  Flex
} from '@chakra-ui/react'
import { ReferenceCard } from '../components/ReferenceCard'
import { Footer } from '../components/footer'

const Home: NextPage = () => {
  const [scr, setScr] = React.useState<string>("")
  const [hsc, setHsc] = React.useState<Array<string>>(["", ""])
  const [scc, setScc] = React.useState<string>("")
  const [mots, SetMots] = React.useState<Array<string>>(["", ""])
  function GetProp() {
    SetMots(["motion1", "motion2"])
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
        <Image src="/mainBg.svg" layout="fill" objectFit="cover" alt="bgImg" placeholder="blur" blurDataURL='/mainBg.svg' />
        <Flex alignItems="center" justifyContent="center" flexDir="column" height="100%">
          <Text color="#ffffff" fontSize="4.535vw" zIndex={1} className={mots[0]}>
            <b style={{
              letterSpacing: "0.01vw",
            }}>
              Meet Ernest Armstrong McCulloch
            </b>
          </Text>
          <Text color="#ffffff" fontSize="1.835vw" zIndex={1} className={mots[1]}>
            The Canadian Hematologist That Discovered Stem Cells
          </Text>
        </Flex>
        <Text position="absolute" bottom="0" right="5" color="white" fontSize="0.535vw">
          Dr Ernest A. McCulloch drawing on a blackboard
        </Text>
      </main>
      <div style={{width: '100vw', height: '100vh', position: 'relative' }}>
        <Flex alignItems="start" justifyContent="start" flexDir="column" height="100%">
          <div style={{padding: "6.035vw"}} className={scr}>
            <Text fontSize="4.535vw" paddingBottom="0.535vw">
              <b>
                Father of Stem Cell Research
              </b>
            </Text>
            <Flex>
              <Text width="60%" fontSize="1.535vw" paddingRight={90} lineHeight="5vh">
                &emsp;&emsp;&emsp;Ernest Armstrong McCulloch is a Canadian hematologist known for his discovery of haematopoietic stem cells (HSC). Ernest Armstrong McCulloch was born in Toronto, Ontario on 21 April 1926. His parents were comparatively well off and he enjoyed a privileged upbringing. Ernest had a nickname “Bun”, or “Bunny”. Mainly because he didn’t really like his first name. For education, Ernest went to Upper Canada College for High School, and had his university in University of Toronto. In 1957, Ernest joined the Ontario Cancer Institude. In 1974, he became an official member of the Royal Society of Canada. And in 2011, he passed away, death factor unknown.
              </Text>
              <Flex flexDir={"column"} textAlign="center">
                <Image src="/profile.svg" alt="Profile" width="400vw" height="400vh" placeholder="blur" blurDataURL='/profile.svg' />
                <Text paddingTop="1vh">
                  Dr. Ernest A. McCulloch in 2005.
                </Text>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </div>
      <div style={{ width: '100vw', height: '110vh', position: 'relative' }}>
        <Image src="/mainBg3.svg" layout="fill" objectFit="cover" alt="bgImg" placeholder="blur" blurDataURL='/mainBg3.svg' />
        <Flex alignItems="center" justifyContent="center" flexDir="column" height="100%">
          <Text color="#ffffff" fontSize="4.535vw" zIndex={1} className={hsc[0]} marginTop="25vh">
            <b style={{
              letterSpacing: "0.01vw"
            }}>
              The Discovery of hematopoietic stem cells
            </b>
          </Text>
          <Text color="#ffffff" fontSize="2.535vw" zIndex={1} className={hsc[1]}>
            with Ernest and James Till
          </Text>
        </Flex>
        <Text position="absolute" bottom="0" right="5" color="white" fontSize="0.535vw">
          Drs Ernest & Till standing together
        </Text>
      </div>
      <div style={{width: '100vw', height: '100vh', position: 'relative' }}>
        <Flex alignItems="start" justifyContent="start" flexDir="column" height="100%" flexWrap="wrap">
          <div style={{paddingLeft: "6.035vw", paddingRight: "6.035vw", paddingTop: "14.035vh", paddingBottom: "14.035vh"}} className={scc}>
            <Text fontSize="4.535vw" paddingBottom="5vh" textAlign="center">
              <b>
                Stem Cells, the “colony-forming units”
              </b>
            </Text>
            <Flex>
              <Flex flexDir={"column"} textAlign="center" flexWrap="wrap">
                <Image src="/stem.svg" alt="Profile" width="350vw" height="350vh" placeholder="blur" blurDataURL='/stem.svg' />
                <Text paddingTop="3vh" fontSize="0.635vw">
                  Discrete, macroscopic nodules had developed on the spleen surface in surviving mice
                </Text>
              </Flex>
              <Text width="65%" fontSize="1.475vw" paddingLeft="4vw" lineHeight="3.7vh">
                &emsp;&emsp;&emsp;In 1961, at the University of Toronto and the Ontario Cancer Institude. There came the discovery of hemtaopoietic stem cells. Ernest and Till found out that the number of nodules appearing on the spleen was directly proportional to the number of bone marrow cells originally injected into the lethally irradiated recipient. They called it “colony-forming units”. Then, with the help of a graduate student of Till’s Andrew Becker, who proved their findings. After several more experiments, more of stem cells’ characteristics were found, including self-renewal, process of cellular differentiation, etc. Their work led to revolutionary treatments for a lot of blood diseases such as leukemia, anemia and immunodeficiencies. This achievement also led to the awards and prizes. They won the Gairdner award in 1969, they were made Officers of the Order of Canada in 1988, inducted into the Canadian Medical Hall of Fame in 2004 and earned an Albert Lasker Award in 2005, a top U.S. medical research prize. The only pity is that they did not receive a Nobel prize for such an accomplishment. 
              </Text>
            </Flex>
          </div>
        </Flex>
      </div>
      <div style={{width: '100vw', position: 'relative', marginTop: "3vh" }}>
        <Flex alignItems="start" justifyContent="space-between" flexDir="column" height="100%">
          <div style={{padding: "6.035vw", maxWidth: "100%"}}>
            <Text fontSize="4.535vw" textAlign="center">
              <b>
                References & Resources used
              </b>
            </Text>
            <Flex marginTop="5vh" maxWidth="100%" height="85vh" flexDir={"column"} textAlign="center" flexWrap="wrap" wrap="wrap" justifyContent="space-between">
              <Flex maxWidth="100%" flexDir="row" justifyContent="space-between" flexWrap="wrap" wrap="wrap">
                <ReferenceCard content={`
                  Mak, T. W. (2017, August 30). Ernest Armstrong McCulloch. 21 April 1926—20
                  January 2011. THE ROYAL SOCIETY PUBLISHING. Retrieved January 23, 2022,
                  from
                `} from="https://royalsocietypublishing.org/doi/10.1098/rsbm.2017.0019" />
                <ReferenceCard content={`
                  ​​Globe & Mail [Toronto, Canada]. (2011, January 29). Scientist was pioneer in
                  stem cell research. GALE IN CONTEXT Canada. Retrieved January 23, 2022,
                  from 
                `} from="https://go.gale.com/ps/retrieve.do?tabID=News&resultListType=RESULT_LIST&searchResultsType=MultiTab&hitCount=3&searchType=BasicSearchForm&currentPosition=1&docId=GALE%7CA247812726&docType=Obituary&sort=Relevance&contentSegment=ZXAS-MOD1&prodId=CIC&pageNum=1&contentSet=GALE%7CA247812726&searchId=R3&userGroupName=ko_k12hs_d24&inPS=true" />
              </Flex>
              <Flex maxWidth="100%" flexDir="row" justifyContent="space-between" flexWrap="wrap" wrap="wrap">
                <ReferenceCard content={`
                  Bains, A. (2020, November 20). James Edgar Till (1931– ). The Embryo Project
                  Encyclopedia. Retrieved January 23, 2022, from
                `} from="https://embryo.asu.edu/pages/james-edgar-till-1931" extend />
                <ReferenceCard content={`
                  Ogilvie, M. (2009, October 11). McCulloch, Ernest Armstrong. UNIVERSITY OF
                  TORONTO DISCOVER ARCHIVES. Retrieved January 23, 2022, from
                `} from="https://discoverarchives.library.utoronto.ca/index.php/mcculloch-ernest-armstrong" extend />
              </Flex>
            </Flex>
          </div>
          <Footer reload={() => {
            setScr(""); setHsc(["", ""]); setScc(""); SetMots(["", ""]);
          }} />
        </Flex>
      </div>
    </div>
  )
}

export default Home
