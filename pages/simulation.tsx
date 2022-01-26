import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { Flex, Select, Button } from '@chakra-ui/react'

const Simulate: NextPage = () => {
    const [URL, setURL] = React.useState<string>("/hcell.png")
    const [child, setChild] = React.useState<Array<React.ReactElement>>([])
    const getRandom = (min: number, max: number) => Math.floor(Math.random()*(max-min+1)+min);
    function renew() {
        const c = getRandom(10, 50)
        setChild([...child, <div style={{
            position: "absolute",
            marginTop: getRandom(0, window.innerHeight-25) + "px",
            marginLeft: getRandom(0, window.innerWidth-25) + "px"
        }}  key={child.length}><Image src={URL} width={`${c}vw`} height={`${c}vh`} className={"cells"} alt="" /></div>])
    }
    return (
        <Flex>
            <Image src={URL} width="500vw" height="500vh" className={"cells"} />
            <div>{child}</div>
            <Flex flexDir="column" width="100%" height="100%" justifyContent={"space-between"}>
                <Select placeholder="Select an action" onChange={e => {
                    setURL(e.target.value || "/hcell.png")
                }}>
                    <option value="/rbc.png">Red Blood Cell</option>
                    <option value="/wbc.png">White Blood Cell</option>
                    <option value="/plt.png">Platelet</option>
                </Select>
                <Button onClick={renew} marginTop={"1vh"} marginBottom={"1vh"}>Self Renewal</Button>
                <Button onClick={() => {
                    const e: Array<React.ReactElement> = []
                    for (let i = 0; i < 10; i++) {
                        const c = getRandom(10, 50)
                        e.push(<div style={{
                            position: "absolute",
                            marginTop: getRandom(0, window.innerHeight-25) + "px",
                            marginLeft: getRandom(0, window.innerWidth-25) + "px"
                        }}  key={child.length+i}><Image src={URL} width={`${c}vw`} height={`${c}vh`} className={"cells"} alt="" /></div>)
                    }
                    setChild([...child, ...e])
                }}>Self Renewal x10</Button>
            </Flex>
        </Flex>
    )
}

export default Simulate