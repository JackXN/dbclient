//components
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image';


//media
import HeadImg from '../../../public/finaljackImage.png'

function index() {
    return (
      <Box sx={styles.container}>
<Box sx={styles.imageContainer}>
    <Image src={HeadImg} style={{height: '10px', width:'20px'}}/>
</Box>
<Box sx={styles.header}>
<Text as='h1' color='white' fontFamily='Bangers' fontSize='50px'>Github Stats</Text>
</Box>
<Box sx={styles.modalWrapper}>
<Box sx={styles.modalContainer}>
    <Box sx={styles.modal}>
        <Text as='p'>1,200</Text>
    </Box>
</Box>
<Box sx={styles.description}>
        <Text as='h1'> Repositories</Text>
    </Box>
<Box sx={styles.modalContainer}>
    <Box sx={styles.modal}>
        <Text as='p'>1,200</Text>
    </Box>
    
</Box>
<Box sx={styles.description}>
        <Text as='h1'> Repositories</Text>
    </Box>
<Box sx={styles.modalContainer}>
    <Box sx={styles.modal}>
        <Text as='p'>1,200</Text>

    </Box>
      
</Box>
<Box sx={styles.description}>
        <Text as='h1'> Repositories</Text>
    </Box>
</Box>


      </Box>
    )
}



const styles = {
    container: {
        height: '100%',
        background: '#3E3838',
        mt: '20px',
        borderRadius: '20px',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: ['column', 'column', 'row']

    },
    imageContainer: {
        height: '',
    },

    modalWrapper: {
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        flexWrap: 'wrap',
    },
    modalContainer: {
        height: '100%',
        width: '100%',
        background: "gray",
        borderRadius: '10px',
        mb: '20px'
    },
    modal: {
        color: 'white',
        fontFamily: 'Bangers',
        fontSize: '40px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px'
        
    },
    description: {
        color: 'white',
        fontFamily: 'Bangers'
    }
}

export default index
