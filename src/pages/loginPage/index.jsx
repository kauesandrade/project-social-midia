import { useEffect, useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

const loginPage = () => {

    const navigate = useNavigate();

    const[login, setLogin] = useState("");
    const[password, setPassword] = useState("");

    const[isError, setIsError] = useState(false);
    const[isDisableButton, setIsDisableButton] = useState(true);

    const handleClickLogin = () =>{
        isError == false ? setIsError(true) : setIsError(false)
    }

    useEffect(() =>{
        password.length >= 8 && login.length > 0  ? setIsDisableButton(false) : setIsDisableButton(true)
    }, [login, password])

    return (

        <main className='mainLoginPage'>
            <div className='divCard'>
                <div className='divHeader'>
                    <h1>NeoSync</h1>
                    <img src="src/assets/imagens/NeoSyncLogo.png" alt="" />
                </div>
                <form className='formInputLogin'>
                    <div className='divInput'>
                        <input type="text" name="text" className="input" placeholder="Email" onChange={(e)=> setLogin(e.target.value)}  value={login}/>
                    </div>
                    <div className='divInput'>
                        <input type="password" name="text" className="input" placeholder="Password"  onChange={(e)=> setPassword(e.target.value)}  value={password}/>
                        <div className='divInputSpan'>
                            {isError && 
                                <span>Email or password invalid</span>
                            }
                        </div>
                    </div>
                    <div className='divButton'>
                        <button id='buttonRegister' className='buttons' type='button' disabled={isDisableButton} onClick={()=> handleClickLogin()}>Login</button>
                    </div>
                    <a href='' onClick={()=> navigate('/register')}>Have you forgotten your password?</a>
                </form>
                <div className='divDivision'></div>
                <div className='divGo'>
                    <p>Don't have a account?</p>
                    <button className='buttonGo buttons' onClick={()=> navigate('/register')}>Register</button>
                </div>
            </div>
        </main>

    )

}

export default loginPage;