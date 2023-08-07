import Flex from '../flex';
import HeaderWrapper from './header-wrapper';
import Logo from '../../assets/react.svg'
import NavButton from '../nav-button';

const Header: React.FC = (): JSX.Element => {
    
    return (
        <HeaderWrapper>
            <Flex
            sx={{
                alignItems:'center',
                justifyContent: 'center',
                width: '50%',
                height: '100%'
            }}
            >
                <img src={Logo} />
            </Flex>
            <Flex
             sx={{
                alignItems:'center',
                justifyContent: 'center',
                width: '50%',
                height: '100%'
            }}
            >
                <NavButton name='Download Api                                          ' />
            </Flex>
        </HeaderWrapper>
    );
};

export default Header;
