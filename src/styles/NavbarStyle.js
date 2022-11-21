import styled from 'styled-components'

export const NavbarStyle = styled.div`
    margin: 0 47px;
    display: flex;
    justify-content: space-between;

    .logo{
        /* border: 1px solid green; */
    }

    .NavItem{
        display: flex;

        ul{
            display: flex;
            gap: 32px;

            li{
                list-style: none;
                color: #fff;
            }

        }
    }
`