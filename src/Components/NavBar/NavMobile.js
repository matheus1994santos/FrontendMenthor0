import React from 'react'
import IconMenu from '../../images/IconMenu.svg'
import IconCloseMenu from '../../images/IconCloseMenu.svg'
import ArrowDown from '../../images/ArrowDown.svg'
import ArrowUp from '../../images/ArrowUp.svg'
import Calendar from '../../images/icon-calendar.svg'
import Planning from '../../images/icon-planning.svg'
import Reminders from '../../images/icon-reminders.svg'
import Todo from '../../images/icon-todo.svg'
import { Menu, MenuContainer, DropDown, DropDownMob, ButtonLogin, ButtonRegister, ButtonLoginM, ButtonRegisterM } from './styled'

const NavMobile = () => {
    const [ ativo, setAtivo ] = React.useState(false);
    const [ ativo1, setAtivo1 ] = React.useState(false);
    const [ menu, setMenu ] = React.useState(false);
    const Seta1 = ativo ? ArrowUp : ArrowDown;
    const Seta2 = ativo1 ? ArrowUp : ArrowDown;

    function handleClick(){
        setAtivo(!ativo)
    }
    
    function handleClick1(){
        setAtivo1(!ativo1)
    }

    function menuClick(){
        setMenu(!menu)
    }

  return (
    <Menu>
      { !menu ? <img src={IconMenu} onClick={menuClick}/> :
      <section>
        <MenuContainer>
            <div> <img src={IconCloseMenu} onClick={menuClick}/> </div>
            <DropDownMob>
                <a onClick={handleClick}>Features <img src={Seta1} /></a>
                {ativo ? <ul className={`modal1`}>
                    <li><img src={Todo} /> Todo List</li>
                    <li><img src={Calendar} /> Calendar</li>
                    <li><img src={Reminders} /> Reminders</li>
                    <li><img src={Planning} /> Planning</li>
                </ul> : ""}
            </DropDownMob>

            <DropDownMob>
                <a onClick={handleClick1}>Company <img src={Seta2} /></a>
                {ativo1 ? <ul className={`modal2`}>
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                </ul> : ""}
            </DropDownMob>

            <a>Careers</a>

            <a>About</a>

            <nav className={'RE'}>
                <ButtonLoginM>Login</ButtonLoginM>
                <ButtonRegisterM>Register</ButtonRegisterM>
            </nav>
        </MenuContainer>
      </section>}
    </Menu>
  )
}

export default NavMobile
