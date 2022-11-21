import react from 'react'

import { NavbarStyle } from '../../styles/NavbarStyle'

const Navbar = () => {
    return (
        <NavbarStyle>
            <div className='logo'>
                {/* <img src={Logo} alt={'Organization Logo'} /> */}
                <svg width="75" height="25" viewBox="0 0 75 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.332031 10.2969V7.125H2.70703V2.375H7.11328V7.125H9.87891V10.2969H7.11328V19.2969C7.11328 19.9948 7.20182 20.4323 7.37891 20.6094C7.55599 20.776 8.09766 20.8594 9.00391 20.8594C9.13932 20.8594 9.27995 20.8594 9.42578 20.8594C9.58203 20.849 9.73307 20.8385 9.87891 20.8281V24.1562L7.76953 24.2344C5.66536 24.3073 4.22786 23.9427 3.45703 23.1406C2.95703 22.6302 2.70703 21.8438 2.70703 20.7812V10.2969H0.332031ZM21.9883 6.5625C22.0716 6.5625 22.1393 6.56771 22.1914 6.57812C22.2539 6.57812 22.3841 6.58333 22.582 6.59375V11.1562C22.3008 11.125 22.0508 11.1042 21.832 11.0938C21.6133 11.0833 21.4362 11.0781 21.3008 11.0781C19.5091 11.0781 18.306 11.6615 17.6914 12.8281C17.3477 13.4844 17.1758 14.4948 17.1758 15.8594V24H12.6914V6.96875H16.9414V9.9375C17.6289 8.80208 18.2279 8.02604 18.7383 7.60938C19.5716 6.91146 20.6549 6.5625 21.9883 6.5625ZM23.5352 24L29.3477 15.375L23.7852 7H29.2383L32.082 11.9375L34.8633 7H40.1602L34.5664 15.2969L40.3789 24H34.832L31.8945 18.8906L28.9414 24H23.5352ZM53.5195 6.96875H58.3008L52.1602 24H47.457L41.3477 6.96875H46.3477L49.8945 19.5312L53.5195 6.96875ZM65.3789 24H60.9258V0.96875H65.3789V24ZM69.6602 19.3438H74.3945V24H69.6602V19.3438Z" fill="white"/>
</svg>


            </div>
            <div className='NavItem'>
                <ul>
                    <li>Home</li>
                    <li>Stays</li>
                    <li>Flights</li>
                    <li>Packages</li>
                    <li>SignUp</li>
                </ul>
            </div>
        </NavbarStyle>
    )
}

export default Navbar