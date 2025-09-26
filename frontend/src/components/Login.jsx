
import React, { useState } from "react";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }
        setError("");
        // Call the onLogin prop to trigger navigation
        if (onLogin) onLogin();
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-t from-slate-500 to-slate-800">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent select-none">
                Smart Shield
            </h1>
            <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl shadow-card w-full max-w-md bg-white/80 backdrop-blur-md border border-slate-200"
            >
                <h2 className="text-xl font-semibold mb-6 text-center text-slate-800">Login to Dashboard</h2>
                {error && (
                    <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
                )}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-slate-700">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-50"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        autoComplete="username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-slate-700">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-50"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-slate-350 to-slate-500 text-white py-2.5 rounded-lg font-semibold shadow-md hover:from-slate-500 hover:to-slate-500 transition-colors text-lg"
                >
                    Login
                </button>
            </form>
            <div className="mt-8 text-slate-200 text-xs text-center opacity-80 select-none">
                &copy; {new Date().getFullYear()} Smart Shield. All rights reserved.
            </div>
        </div>
    );
};

export default Login;