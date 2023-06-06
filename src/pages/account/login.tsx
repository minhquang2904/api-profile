import { Inter, Open_Sans } from "next/font/google"
import { useEffect, useState } from "react"
import style from "./account.module.scss"
import Image from "next/image"
import { logo } from "../data"
import * as yup from "yup"
const openSans = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "latin"],
  style: ["normal"],
})

export default function login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  console.log('123123')
  const user = {
    email: email,
    password: password,
  }

  const yupUser = yup.object().shape({
    password: yup
      .string()
      .required("Please Enter your password.")
      .min(6, "Password is too short - should be 6 chars minimum."),
    email: yup.string().required("Please Enter your email.").email("Email must be a valid email."),
  })

  useEffect(() => {
    const titleLogo = document.querySelector("#title-logo span") as HTMLElement
    titleLogo.style.color = "#22D3EE"
  }, [])

  useEffect(() => {
    // handleSubmit()
  }, [error])

  const handleSubmit = () => {
    yupUser
      .validate(user)
      .then((value) => {
        console.log(value)
      })
      .catch((err) => {
        setError(err.errors)
      })
  }

  return (
    <div className={`bg-main flex justify-center items-center min-h-[100vh] ${openSans.className}`}>
      <div className="form pr-8 pl-8 max-w-[460px] w-[100%]">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="IMAGE" className="w-[50%]" />
        </div>
        <h1
          id="title-logo"
          className={`uppercase font-bold text-[22px] mb-14 text-center tracking-[.25em] ${openSans.className}`}
        >
          Minh Qu<span>a</span>ng Dev
        </h1>
        <div className={style.formGroup}>
          <label>Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className={style.formGroup}>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div
          onClick={handleSubmit}
          className="rounded-[6px] text-[14px] hover:opacity-[0.88] duration-300 font-semibold select-none outline-none border-none uppercase w-[100%] px-4 py-3 text-center mt-8 cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500"
        >
          sign in
        </div>
        <h4 className="mt-4 text-[13px] duration-300 text-right cursor-pointer select-none text-[#999] hover:text-[#d347ef]">
          Send password to email ?
        </h4>
        {error && (
          <div className="bg-errorBg text-errorFont font-medium py-3 px-4 text-[14px] rounded-[6px] mt-4">{error}</div>
        )}
      </div>
    </div>
  )
}
