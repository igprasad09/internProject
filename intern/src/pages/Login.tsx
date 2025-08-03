
import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"


export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-500 h-screen w-full grid justify-center items-center">
      <div className="bg-white w-100  rounded-md">
        <Heading Label={'Sign in'} />
        <Subheading Label={'Enter Your Credentials to access your account'} />

        <InputBox Label={'Email'} placeholder={'Johndoe@gamil.com'} />
        <InputBox Label={'Password'} placeholder={'Password'} />

        <Button onClick={() => {
          navigate('/home')
        }} Label={'Sign in'} />
        <ButtonWarning Label={"Don't have account?"} ButtonLabel={'Create Account'} />
      </div>
    </div>
  )
}