import './style.css'

import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const loginPage = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [isError, setIsError] = useState(false);
    const [isDisableButton, setIsDisableButton] = useState(true);
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    const changeVisiblePassword = () => {
        isVisiblePassword == false ? setIsVisiblePassword(true) : setIsVisiblePassword(false)
    }

    const handleClickLogin = () => {
        isError == false ? setIsError(true) : setIsError(false)
    }

    useEffect(() => {
        password.length >= 8 && login.length > 0 ? setIsDisableButton(false) : setIsDisableButton(true)
    }, [login, password])

    return (

        <main className='mainLoginPage'>
            <div className='divCard'>
                <div className='divHeader'>
                    <h1>NeoSync</h1>
                    <img src="src/assets/imagens/NeoSyncLogo.png" alt="" />
                </div>
                <form className='formInputLogin'>
                    <div className='divInputSpan'>
                        <div className='divInput'>
                            <input type="text" name="text" className="input" placeholder="Email" onChange={(e) => setLogin(e.target.value)} value={login} />
                        </div>
                    </div>

                    <div className='divInputSpan'>
                        <div className='divInput'>
                            <input type={isVisiblePassword == true ? "text" : "password"} name="text" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            <div>
                                {isVisiblePassword &&
                                    < FiEye onClick={() => changeVisiblePassword()} />
                                }
                                {!isVisiblePassword &&
                                    <FiEyeOff onClick={() => changeVisiblePassword()} />
                                }
                            </div>
                        </div>
                        <div className='divSpan'>
                            {isError &&
                                <span>Email or password invalid</span>
                            }
                        </div>
                    </div>
                    <div className='divButton'>
                        <button id='buttonRegister' className='buttons' type='button' disabled={isDisableButton} onClick={() => handleClickLogin()}>Login</button>
                    </div>
                </form>
                <div>
                    <a className='aForgottenPassoword' href='' onClick={() => navigate('/register')}>Have you forgotten your password?</a>
                </div>
                <div className='divDivision'></div>
                <div className='divGo'>
                    <p>Don't have a account?</p>
                    <button className='buttonGo buttons' onClick={() => navigate('/register')}>Register</button>
                </div>
            </div>
        </main>

    )

}

export default loginPage;