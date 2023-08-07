import { ReactNode, FC } from "react";
import { useMediaQuery } from "@mui/material";

const HeaderWrapper: FC<{children: ReactNode | JSX.Element}> = ({ children }): JSX.Element => {

    const breakpoint = useMediaQuery('(min-width: 768px)');

    return (
        <header
        style={{
            width: '100%',
            height: breakpoint ? '15vh' : '10vh',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}
        >
            {children}
        </header>
    )
};

export default HeaderWrapper;
