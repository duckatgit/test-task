import React from 'react'
import Logo from "../../assets/images/logo.png"
import {BsStars, BsBag} from 'react-icons/bs'
import {TbWorld} from 'react-icons/tb'
import {HiOutlineMail} from 'react-icons/hi'
import {BiUser} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='w-full h-14 border-b-2 flex items-center justify-between'>
      <div className='ml-5 flex justify-center items-center'>
        <img src={Logo} alt="..." />
        <span className='ml-3 font-semibold text-3xl'>Archslate</span>
      </div>
      <div className='flex'>
        <div className='flex flex-col items-center pr-5'>
          <BsStars />
          <span className='font-medium text-sm'>Candidates</span>
        </div>
        <div className='flex flex-col items-center pr-5'>
          <TbWorld />
          <span className='font-medium text-sm'>Companies</span>
        </div>
        <div className='flex flex-col items-center pr-5'>
          <BsBag />
          <span className='font-medium text-sm'>Jobs</span>
        </div>
        <div className='flex flex-col items-center pr-5'>
          <HiOutlineMail />
          <span className='font-medium text-sm'>Notifications</span>
        </div>
        <div className='flex flex-col items-center pr-5'>
          <BiUser />
          <span className='font-medium text-sm'>User Name</span>
        </div>
      </div>
    </div>
  )
}

export default Header