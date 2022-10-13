import React from 'react'
import { ButtonLogin, ButtonRegister, Content } from './styled'
import { DropDown, Logo, NavContainer, Navigation, User } from './styled'
import ArrowDown from '../../images/ArrowDown.svg'
import ArrowUp from '../../images/ArrowUp.svg'
import Calendar from '../../images/icon-calendar.svg'
import Planning from '../../images/icon-planning.svg'
import Reminders from '../../images/icon-reminders.svg'
import Todo from '../../images/icon-todo.svg'
import NavMobile from './NavMobile'

const NavBar = () => {
  const [ ativo, setAtivo ] = React.useState(false);
  const [ ativo1, setAtivo1 ] = React.useState(false);
  const Seta1 = ativo ? ArrowUp : ArrowDown;
  const Seta2 = ativo1 ? ArrowUp : ArrowDown;
  const Screen = window.innerWidth;

  function handleClick(){
    setAtivo(!ativo)
  }

  function handleClick1(){
    setAtivo1(!ativo1)
  }

  return (
    <NavContainer>
      <section>
        <Navigation>
          <Logo>
            snap
          </Logo>
          { Screen >= 821 ? <Content>
            <DropDown>
              <a onClick={handleClick}>Features <img src={Seta1} /></a>
              {ativo ? <ul className={`modal1`}>
                <li><img src={Todo} /> Todo List</li>
                <li><img src={Calendar} /> Calendar</li>
                <li><img src={Reminders} /> Reminders</li>
                <li><img src={Planning} /> Planning</li>
              </ul> : ""}
            </DropDown>

            <DropDown>
              <a onClick={handleClick1}>Company <img src={Seta2} /></a>
              {ativo1 ? <ul className={`modal2`}>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul> : ""}
            </DropDown>

            <a>Careers</a>

            <a>About</a>
          </Content> : ""}
        </Navigation>

        { Screen >= 821 ? <User>
          <ButtonLogin>Login</ButtonLogin>
          <ButtonRegister>Register</ButtonRegister>
        </User> : <NavMobile/>}
      </section>
    </NavContainer>
  )
}

export default NavBar
