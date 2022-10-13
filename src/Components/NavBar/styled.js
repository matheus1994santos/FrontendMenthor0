import styled from "styled-components";

export const NavContainer = styled.section`
    /* width: 100%; */
    display: flex;
    justify-content: center;
    padding: 8px 2%;

    & section{
        max-width: 1440px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`;

export const Navigation = styled.div`
    display: flex;

    & a{
        :hover{
            color: black;
        }
    }
`;

export const Logo = styled.h1`
    font-size: 2.3em;
    margin: 0;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    padding: 0 4%;
    padding-top: 12px;
    gap: 30px;
    color: #757575;

    & a{
        margin: 0;
    }
`;

export const DropDown = styled.nav`
    display: flex;
    flex-direction: column;
    margin: 0;
    position: relative;

    & a{
        & img{
            margin-bottom: 2px;
        }

        :hover{
            color: black;
        }
    }

    & ul{
        position: absolute;
        display: flex;
        flex-direction: column;
        padding: 0;
        padding: 8px;
        top: 16px;
        gap: 8px;
        list-style-type: none;
        box-shadow: 0px 1px 4px rgba( 117, 117, 117, 0.4);
        border-radius: 12px;
        background-color: white;

        & li{
            width: 90px;
            font-size: 0.9em;
            cursor: pointer;

            & img{
                width: 14px;
                height: 16px;
                margin-right: 2px;
                margin-bottom: -3px;
            }
        }
    }

    & .modal1{
        right: 4px;
        padding: 8px 12px;
    }

    & .modal2{
        left: 2px;
        padding: 8px 12px;
    }
`;

export const User = styled.div`
    margin: 0 4%;
`;

export const ButtonLogin = styled.button`
    padding: 8px 20px;
    font-size: 16px;
    border: none;
    background-color: #f4f4f4;
    color: #757575;
    cursor: pointer;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;

    :hover{
        color: black;
    }
`;

export const ButtonRegister = styled.button`
    border: 1.5px solid #757575;
    padding: 8px 20px;
    font-size: 16px;
    border-radius: 8px;
    background-color: #f4f4f4;
    color: #757575;
    cursor: pointer;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;

    :hover{
        border: 1.5px solid black;
        color: black;
    }
`;

export const Menu = styled.nav`
    margin: 0;
    cursor: pointer;

    & section{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba( 0, 0, 0, 0.6);
        z-index: 1;
    }

`;

export const MenuContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0;
    padding: 12px 4%;
    width: 220px;
    height: 100%;
    background-color: white;

    & div{
        width: 100%;
        text-align: right;
    }

    & a{
        font-size: 1.5em;
        color: #757575;
        :hover{
            color: #000;
        }
    }

    & nav.RE{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 12px;
        gap: 12px;
    }
`;

export const DropDownMob = styled.nav`
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 134px;
    position: relative;

    & a{
        & img{
            margin-bottom: 2px;
        }

        :hover{
            color: black;
        }
    }

    & ul{
        display: flex;
        flex-direction: column;
        padding: 0 8px;
        gap: 10px;
        list-style-type: none;

        & li{
            width: 100%;
            font-size: 1.1em;
            color: #757575;
            cursor: pointer;

            & img{
                width: 14px;
                height: 16px;
                margin-right: 2px;
                margin-bottom: -3px;
            }
        }

        
    }

    & .modal1{
        right: 4px;
        padding: 8px 12px;
    }

    & .modal2{
        left: 2px;
        padding: 8px 12px;
    }
`;

export const ButtonLoginM = styled.button`
    width: 80%;
    padding: 8px 20px;
    font-size: 16px;
    background-color: white;
    border: none;
    color: #757575;
    cursor: pointer;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;

    :hover{
        color: black;
    }
`;

export const ButtonRegisterM = styled.button`
    border: 1.5px solid #757579;
    padding: 8px 20px;
    font-size: 16px;
    border-radius: 8px;
    color: #757575;
    background-color: white;
    cursor: pointer;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
    width: 80%;

    :hover{
        border: 1.5px solid black;
        color: black;
    }
`;