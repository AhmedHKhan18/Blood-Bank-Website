import React from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase.config";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState("")

function handleLogin(e) {
    setLoading(true)
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user.uid;
        localStorage.setItem("userId", user);
        navigate("/home", {replace: true});
        Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome!",
          });
          setLoading(false)
      })
      .catch((error) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: (error.message),
          });
         setLoading(false)
    });
}

    return (
        <section className="bg-gray-50">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div className="flex items-center justify-center flex-row">
                        <img className="h-16" src="https://t3.ftcdn.net/jpg/02/74/42/28/360_F_274422814_sv23aGOAILKKk8ZcMgLKvHQBTEsWh7WP.jpg"/>
                    <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">Blood Bank</h1>
                    </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Login Account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                      <input type="email" onChange={e=>setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" onChange={e=>setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label  className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  {isLoading ?
                  <div className="flex items-center justify-center">
                    <img src="https://www.endill.com/assets/newimages/loader.gif" className="h-12"/>
                  </div>:
                  <button type="submit" className="w-full  bg-blue-600 hover:bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleLogin}>Login</button>
}
                  <p className="text-sm font-light text-gray-500">
                      Don`t have an account? <a href="./signup" className="font-medium text-primary-600 hover:underline">SignUphere</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    )
}

