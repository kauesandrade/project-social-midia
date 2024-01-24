import './style.css'

const loginPage = () => {

    return (

        <main className='mainLoginPage'>
            <div className='divCard'>
                <div className='divHeader'>
                    <h1>NeoSync</h1>
                    <img src="src/assets/imagens/NeoSyncLogo.png" alt="" />
                </div>
                <form className='formInputLogin'>
                    <div className='divInput'>
                        <input type="text" name="text" className="input" placeholder="Mobile number or email" />
                        <div className='divInputSpan'>
                            <span>Number or email invalid</span>
                        </div>
                    </div>
                    <div className='divInput'>
                        <input type="password" name="text" className="input" placeholder="Password" />
                        <div className='divInputSpan'>
                            <span>Passwords doesn't match</span>
                        </div>
                    </div>
                    <div className='divButton'>
                        <button id='buttonRegister' className='buttons'>Login</button>
                    </div>
                    <a href="">Have you forgotten your password?</a>
                </form>
                <div className='divDivision'></div>
                <div className='divGo'>
                    <p>Don't have a account?</p>
                    <button className='buttonGo buttons'>Register</button>
                </div>
            </div>
        </main>

    )

}

export default loginPage;