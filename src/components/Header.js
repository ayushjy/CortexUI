import React from 'react'

const Header = () => {
    return (
        <div className='pt-8 flex justify-between items-center'>
            <img src="/img/logo.png" alt="logo"/>
            <button className='px-8 py-3 text-base rounded-md font-normal bg-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white sora'>Purchase Now</button>
        </div>
    )
}

export default Header