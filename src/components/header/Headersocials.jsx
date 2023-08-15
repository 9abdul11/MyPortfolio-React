import React from 'react'

import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'

const Headersocials = () => {
  return (
    <div className="header-socials">
        <a href="https://linkedin.com" target='_blank'><AiFillLinkedin/></a>
        <a href="https://github.com" target='_blank'><AiFillGithub/></a>
        <a href="https://gmail.com" target='_blank'><BiLogoGmail/></a>
    </div>
  )
}

export default Headersocials