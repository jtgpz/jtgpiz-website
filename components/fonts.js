import { Global } from '@emotion/react'


const Fonts = () => (
    <Global 
        styles={`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap');

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
        `}
    />
)

export default Fonts