import React from "react"
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setLoading] = useState("")
    const [blood, setBlood] = useState("");
    const [city, setCity] = useState("");
    const [age, setAge] = useState("");
    const [mydata, setMydata] = useState([]);

    
    function handleSignup(e) {
        setLoading(true)
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (response) => {
            const user = response.user.uid;
            setMydata(user)
            localStorage.setItem("userId", user);
            await setDoc(doc(db, "users", user), {
                name: name,
                email: email,
                password: password,
                Uid: user,
                Age: age_now,
                Blood: blood,
                City: city
            })
            navigate("/home", {replace: true});
            Swal.fire({
                icon: "success",
                title: "SignUp Successful",
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
        var today = new Date();
        var birthDate = new Date(age);  // create a date object directly from `dob1` argument
        var age_now = today.getFullYear() - birthDate.getFullYear();

    return (
        <section className="bg-gray-50 my-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="flex items-center justify-center flex-row">
                        <img className="h-16" src="https://t3.ftcdn.net/jpg/02/74/42/28/360_F_274422814_sv23aGOAILKKk8ZcMgLKvHQBTEsWh7WP.jpg"/>
                    <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">Blood Bank</h1>
                    </div>
                    <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Full name</label>
                            <input id="name" onChange={e=>setName(e.target.value)} className="bg-gray-50 border berder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Name" required=""/>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" onChange={e=>setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Your City</label>
                            <select name="city" id="city" onChange={e=>setCity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                            <option value="Select">Select</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Peshawar">Peshawar</option>
                            <option value="Quetta">Quetta</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>                        
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Your Blood Group</label>
                            <select name="Bloodgroup" id="Bloodgroup" onChange={e=>setBlood(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                            <option value="Select">Select</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>                        
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Your Age</label>
                            <input type="date" id="Age" onChange={e=>setAge(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Age" required=""/>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" onChange={e=>setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline " href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        {isLoading ?
                  <div className="flex items-center justify-center">
                    <img src="https://www.endill.com/assets/newimages/loader.gif" className="h-12"/>
                  </div>:
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-Select focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={handleSignup}>Create an account</button>
}
                        <p className="text-sm font-light text-gray-500">
                            Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline">Loginhere</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    )
}
