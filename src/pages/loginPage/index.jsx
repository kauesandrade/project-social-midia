import './style.css'

import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputSign from '../../components/inputSign';

const loginPage = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [isDisableButton, setIsDisableButton] = useState(true);
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    const changeVisiblePassword = () => {
        isVisiblePassword == false ? setIsVisiblePassword(true) : setIsVisiblePassword(false)
    }

    const handleClickLogin = () => {
        error == "" ? setError("Email or password invalid") : setError("")
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

                    <InputSign
                        buttonEye={false}
                        type="text"
                        name="login"
                        placeholder="Email"
                        setValue={setLogin}
                        value={login}
                        span={''}
                    />

                    <InputSign
                        buttonEye={true}
                        type="password"
                        name="password"
                        placeholder="Password"
                        setValue={setPassword}
                        value={password}
                        span={error}
                    />

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