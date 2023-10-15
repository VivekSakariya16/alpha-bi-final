"use client";
import { useState } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = 'https://gif-delta.vercel.app/';
        }catch(error:any){
            setMessage(error.message);
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <div className="text-center">
                    <i className="fa fa-key text-4xl text-blue-500"></i>
                    <h1 className="text-3xl font-bold text-gray-900 mt-4">Login Page</h1>
                </div>

                <form className="mt-6">
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input w-full mt-2 border border-black bg-white rounded-lg p-3 text-black text-lg" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input w-full mt-2 border border-black bg-white rounded-lg p-3 text-black text-lg" />
                    </div>

                    <div className="flex items-center justify-between">
                        <button type="submit" onClick={handleSubmit} className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline-black active:bg-gray-800 text-lg">
                            Login
                        </button>
                        <p className="text-gray-700 text-sm">Do not have an account? <a href="/signin" className="text-blue-500">Sign up</a>
                        </p>
                    </div>
                    <div>
                    {message && (
                        <div className="mb-4 text-red-500 text-sm">
                            {message}
                        </div>
                    )}
                    </div>
                </form>
            </div>
        </div>
    );
}
