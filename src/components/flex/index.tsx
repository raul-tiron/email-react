import { Box, BoxProps } from "@mui/material"

const Flex: React.FC<BoxProps> = ({children, ...props}): JSX.Element => {
    return (
        <Box 
        display={'flex'}
        {...props}
        >
            {children}
        </Box>
    )
}

export default Flex;
