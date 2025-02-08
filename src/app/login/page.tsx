'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import { FaSignInAlt, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    const users: Array<{ username: string; email: string; password: string }> =
      JSON.parse(localStorage.getItem("users") || "[]");
  
    const user = users.find((user) => user.email === email);
  
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
        localStorage.setItem("loggedInUser", JSON.stringify({ username: user.username, email: user.email }));
  
        document.cookie = `loggedInUser=${JSON.stringify(user)}; path=/; max-age=3600`;
        setTimeout(() => {
          alert(`Welcome, ${user.username}!`);
          router.push("/home");
        }, 1500);
      } else {
        alert("Invalid email or password.");
        setLoading(false);
      }
    } else {
      alert("User not found! Please sign up first.");
      setLoading(false);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black px-4">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-800"></div>
          <p className="mt-4 text-gray-700">Logging in...</p>
        </div>
      ) : (
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-gray-100 text-black p-6 rounded-lg shadow-lg space-y-6"
        >
          <h1 className="text-2xl font-bold flex items-center justify-center text-gray-800">
            <FaSignInAlt className="mr-2" /> Login
          </h1>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-700">
              Not a user?{" "}
              <Link
                href="/signup"
                className="text-blue-600 hover:underline flex items-center justify-center"
              >
                Go to Signup <FaArrowLeft className="ml-1" />
              </Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
