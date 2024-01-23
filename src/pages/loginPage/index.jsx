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
                    <input type="text" name="text" class="input" placeholder="Mobile number, username or email" />
                    <input type="password" name="text" class="input" placeholder="Password" />
                    <button id='buttonLogin' className='buttons'>Login</button>
                    <a href="">Have you forgotten your password?</a>
                </form>
                <div className='divDivision'></div>
                <div className='divGoRegister'>
                    <p>Don't have a account?</p>
                    <button className='buttonGoRegister buttons'>Register</button>
                </div>
            </div>
        </main>

    )

}

export default loginPage;