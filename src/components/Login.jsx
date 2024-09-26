import Button from "./button"
import { SlSocialGoogle } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";

function Login() {
    return (



        <div className="main">
            <div className="login">

                <h2>Logar</h2>
                <div className="centro">

                    <div className="emailTitle">Email</div>
                    <div className="email"><input type="email" placeholder="Email" /></div>

                    <div className="senhaTitle">Senha</div>
                    <div className="password"><input type="password" placeholder="Senha" /></div>


                    <Button texto="Entrar" />



                </div>

                <p className="entrarCom">Entrar com</p>
                <div className="globalIcons">

                    <a href="https://www.youtube.com/">

                        <div className="google"> <SlSocialGoogle color="white" /> </div>
                    </a>


                    <a href="https://www.youtube.com/" target="blank">
                        <div className="facebook"><FaFacebook color="white" /></div>
                    </a>
                </div>


            </div>

            <aside>
            </aside>

        </div>


    )

}

export default Login