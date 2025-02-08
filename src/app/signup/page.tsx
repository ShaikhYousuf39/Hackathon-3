'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { z, ZodError } from "zod";
import bcrypt from "bcryptjs";
import { FaUserPlus, FaArrowRight } from "react-icons/fa";

// Define the schema for the user
const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Define the user type
interface User {
  username: string;
  email: string;
  password: string;
}

export default function Signup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      userSchema.parse({ username, email, password });
    } catch (error) {
      if (error instanceof ZodError) {
        alert(error.errors[0].message);
      } else {
        alert("An unexpected error occurred");
      }
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.some(
      (user) => user.username === username || user.email === email
    );

    if (userExists) {
      alert("User with this username or email already exists! Try logging in.");
    } else {
      users.push({ username, email, password: hashedPassword });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! Please log in.");
      if (isMounted) {
        router.push("/login"); 
      }
    }
  };

  if (!isMounted) {
    return null; 
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black">
      <form
        onSubmit={handleSignup}
        className="max-w-sm w-full bg-gray-100 text-black p-6 rounded-lg shadow-lg space-y-6"
      >
        <h1 className="text-2xl font-bold flex items-center justify-center text-gray-800">
          <FaUserPlus className="mr-2" /> Signup
        </h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition"
        >
          Signup
        </button>
        <div className="text-center">
          <p className="text-sm">
            Already a user?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline flex items-center justify-center"
            >
              Go to Login <FaArrowRight className="ml-1" />
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
