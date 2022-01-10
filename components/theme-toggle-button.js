import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const {motion} = require('framer-motion');
const { AnimatePresence } =require('framer-motion')



const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode ()
    
    
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div style={{display: 'inline-block'}}
        key={useColorModeValue('light', 'dark')}
        inital={{y: -20, opacity: 0}}
        animate={{y: 0, opacity:1 }}
        exit={{y: -20, opacity: 0}}
        transition={{duraiton: 0.1}}
        >

        <IconButton aria-label="toggle theme"
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
        ></IconButton>
        </motion.div>
        </AnimatePresence>

    )
}
export default ThemeToggleButton