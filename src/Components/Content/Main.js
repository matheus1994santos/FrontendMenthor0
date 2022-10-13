import React from 'react'
import HeroDesktop from '../../images/HeroDesktop.png'
import HeroMobile from '../../images/HeroMobile.png'
import Audiophile from '../../images/Clienteaudiophile.svg'
import Databiz from '../../images/Clientedatabiz.svg'
import Maker from '../../images/Clientemaker.svg'
import Meet from '../../images/Clientemeet.svg'
import { ContainerMain } from './styled'



const Main = () => {
  const Screen = window.innerWidth;
  return (
    <ContainerMain>
      <div>
        <h1>Make remote work</h1>
        <p>
            Get your team in sync, no matter your location
            Streamline processes, creat team rituals, 
            and watch productivity soar.
        </p>
        <div className='But'>
            <button>Learn more</button>
        </div>
        <div className='Patro'>
            <img src={Databiz} className="o1"/>
            <img src={Audiophile} className="o2"/>
            <img src={Meet} className="o3"/>
            <img src={Maker} className="o4"/>
        </div>
      </div>
      <img src={ Screen <= 834 ? HeroMobile : HeroDesktop }/>
    </ContainerMain>
  )
}

export default Main
