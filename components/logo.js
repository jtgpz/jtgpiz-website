import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'


const LogoBox = styled.span`
font-weight: bold;
font-size: 20px;

display: inline-flex;
alignt-items: center;
height: 30px;
line-height: 24px;
padding: 10px;


&:hover img {
    transform: rotate(20deg)l
    }
`


const Logo = () => {
    const codeImg = `/images/code${useColorModeValue('','-dark')}.svg`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={codeImg} layout="fixed" width={25} height={25} alt=""/>  
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS rounded 1c'
                    fontWeight=""
                    ml={5}>
                      Jtgpiz
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo