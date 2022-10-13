import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px 8%;
    gap: 20px;

    & > div{
        max-width: 480px;
        max-height: 498px;
        display: flex;
        flex-direction: column;
        gap: 30px;

        & div.Patro{
            margin-top: 58px;
            display: flex;
            gap: 26px;

            & img.o1{
                height: 20px;
            }

            & img.o2{
                height: 32px;
            }

            & img.o3{
                height: 20px;
            }

            &  img.o4{
                height: 26px;
            }
        
        }


        & div.But > button{
            font-size: 1.0em;
            font-weight: 700;
            padding: 12px 22px;
            border-radius: 8px;
            border: 1px solid;
            cursor: pointer;
            background-color: black;
            color: white;

            :hover{
                background-color: white;
                color: black;
            }
        }

        & h1{
            margin: 2px;
            font-size: 4.8em;
        }

        p{
            text-align: justify;
            width: 416px;
            font-size: 1.2em;
            color: #666666;
        }
    }


    & > img{
        height: 580px;
    }

    @media (max-width: 834px){
        flex-direction: column-reverse;

            & > div{
                max-width: 780px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 18px;

                & div.Patro{
                    margin-top: 38px;
                    display: flex;
                    gap: 16px;

                    & img.o1{
                        height: 18px;
                    }

                    & img.o2{
                        height: 26px;
                    }

                    & img.o3{
                        height: 18px;
                    }

                    &  img.o4{
                        height: 23px;
                    }
                
                }


                & div.But > button{
                    font-size: 1.5em;
                    font-weight: 700;
                    padding: 12px 22px;
                    border-radius: 8px;
                    border: 1px solid;
                    cursor: pointer;
                    background-color: black;
                    color: white;

                    :hover{
                        background-color: white;
                        color: black;
                    }
                }

                & h1{
                    /* margin: 2px; */
                    font-size: 4.4em;
                }

                p{
                    text-align: center;
                    /* max-width: 416px; */
                    font-size: 1.2em;
                    color: #666666;
                }
        }


        & > img{
            /* max-width: 280px; */
            max-height: 540px;
        }
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
        padding: 0;

            & > div{
                max-width: 780px;
                gap: 10px;

                & div.Patro{

                    & img.o1{
                        height: 28px;
                    }

                    & img.o2{
                        height: 36px;
                    }

                    & img.o3{
                        height: 28px;
                    }

                    &  img.o4{
                        height: 33px;
                    }
                
                }


                & div.But > button{
                    font-size: 1.3em;
                }

                & h1{
                    font-size: 3.2em;
                }

                p{
                    text-align: center;
                    font-size: 1.3em;
                    color: #666666;
                }
        }


        & > img{
            max-height: 380px;
        }
    }

    @media (max-width: 416px){
        /* background-color: rgba(225, 0, 255, 0.5); */
        padding: 0;

            & > div{
                max-width: 414px;
                gap: 10px;

                & div.Patro{

                    & img.o1{
                        height: 18px;
                    }

                    & img.o2{
                        height: 26px;
                    }

                    & img.o3{
                        height: 18px;
                    }

                    &  img.o4{
                        height: 23px;
                    }
                
                }


                & div.But > button{
                    font-size: 1.2em;
                }

                & h1{
                    font-size: 2.7em;
                }

                p{
                    text-align: center;
                    font-size: 1.3em;
                    color: #666666;
                }
        }


        & > img{
            max-height: 280px;
        }
    }

    @media (max-width: 375px){
        padding: 0;

        & > div{
            max-width: 414px;
            gap: 10px;

            & div.Patro{
                padding: 0 2%;

                & img.o1{
                    height: 15px;
                }

                & img.o2{
                    height: 26px;
                }

                & img.o3{
                    height: 18px;
                }

                &  img.o4{
                    height: 21px;
                }
                
            }


            & div.But > button{
                font-size: 1.2em;
            }

            & h1{
                font-size: 2.5em;
            }

            p{
                /* text-align: center; */
                font-size: 18px;
                color: #666666;
                width: 330px;
            }
        }

        & > img{
            max-height: 258px;
        }
    }
`;
