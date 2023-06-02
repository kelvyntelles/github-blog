import logo from '../../assets/logoGitHub.svg'
import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
        </HeaderContainer>
    )
}