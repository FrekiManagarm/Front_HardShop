import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useState, useRef, useEffect, RefObject, MutableRefObject } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import Image from "next/image"
import { FadeInTop } from "@/helpers/FadeInTop"


export default function HomePage({ pageInfos, index }: { pageInfos: any, index: number }) {

  const [opacity, setOpacity] = useState(0);
  const [indexs, setIndexs] = useState(0);
  const [increase, setIncrease] = useState(0);

  const boxRef: any = useRef()
  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ['-50vh', '50vh']
  })
  useMotionValueEvent(scrollYProgress, 'change', (e: number) => {
    if (e === undefined || e === null) {
      setIncrease(e)
      setIndexs(0)
    } else if (e > 0.95) {
      setIncrease(e)
      setIndexs(0)
    } else if (e > 0.7) {
      setIncrease(e)
      setIndexs(0)
      setOpacity(1 - e)
    } else if (e < 0.25) {
      setIndexs(0)
      setIncrease(e)
    } else if (e < 0.7) {
      setOpacity(0 + e * 3)
      setIndexs(20)
      setIncrease(e)
    }
  })

  useEffect(() => {
    console.log(pageInfos.title, indexs, increase)
  }, [indexs]);

  return (
    <>
      <Flex
        position={"fixed"}
        top={"15vh"}
        opacity={opacity}
        flexDirection="column"
        justifyContent={'space-between'}
        alignItems={"center"}
        h={{ base: "80svh", md: "80vh" }}
        zIndex={indexs}
        w={'100vw'}
      >
        <Flex
          flexDirection="column"
          opacity={opacity}
          alignItems="center"
          gap={0}
          zIndex={indexs}
        >
          <FadeInTop fromBottom={false} delay={0}>
            <Heading variant={"headModel"} textAlign={'center'}>
              
            </Heading>
          </FadeInTop>
        </Flex>
      </Flex>
    </>
  )
}
