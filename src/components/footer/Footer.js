import React from 'react'
import './Footer.css';
import {footerData} from "./footerData";
const Footer = () => {
  return <ul className='footer'>
    {
      footerData.map( (dt,indx) => {
        return <li key={indx} >
          <div className='main-title'>{dt.title}</div>
          <ul className={dt.cn} >
            {
              dt.subTitle.map( (sub_dt, sub_indx) => {
                return <li className={sub_dt.cn} key={sub_indx} >
                  <a href={sub_dt.path} target="_blank" >
                    {
                      sub_dt.icon && <span>{sub_dt.icon}</span>
                    }
                    {sub_dt.title}
                  </a>
                </li>
              })
            }
          </ul>
        </li>
      })
    }
  </ul>
}

export default Footer;