import React from 'react'

const Header = () => {
    return (
        <header className='gnb'>
            <div className='logo'>CHO BYUNG HYUN</div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className='logo_fake'>CHO BYUNG HYUN</div>
        </header>
    )
}

export default Header