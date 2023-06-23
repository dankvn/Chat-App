import React, { useEffect } from "react";
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";
import Link from "next/link";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  const { currentUser, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && currentUser) {
      // it means user loged in
      router.push("/");
    }
  }, [currentUser, isLoading]);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return isLoading || (!isLoading && currentUser) ? (
    "Loader..."
  ) : (
    <div className="h-[100vh] flex justify-center items-center bg-c1">
      <div className="flex items-center flex-col w-[600px]">
        <div className="text-center">
          <div className="text-4xl font-bold">Ingrese a su cuenta</div>
          <div className="mt-3 text-c3"></div>
        </div>

        <div className="flex items-center gap-2 w-full mt-10 mb-5">
          <div className="text-white bg-[#f21d1dbe] hover:bg-[#f21d1d]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 w-1/2 h-14 rounded-md cursor-pointer p-[1px]">
            <div className="flex items-center justify-center gap-3 text-white font-semibold  w-full h-full rounded-md">
              <IoLogoGoogle size={24} />
              <span> Ingrese con Google</span>
            </div>
          </div>

          <div className="text-white bg-[#3b5898a8] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 w-1/2 h-14 rounded-md cursor-pointer p-[1px">
            <div className="flex items-center justify-center gap-3 text-white font-semibold  w-full h-full rounded-md">
              <IoLogoFacebook size={24} />
              <span> Ingrese con Facebook</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-5 h-[1px] bg-c3"></span>
          <span className="text-c3 font-semibold"> o </span>
          <span className="w-5 h-[1px] bg-c3"></span>
        </div>

        <form
          className="flex flex-col items-center gap-3 w-[500px] mt-5"
          onSubmit={handleSumbit}
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3"
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3"
            autoComplete="off"
          />
          <div className="text-right w-full text-c3">
            <span className="cursor-pointer"> Forgot Password?</span>
          </div>
          <button className="mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ">
            Ingrese su cuenta
          </button>
        </form>
        <div className="flex justify-center gap-1text-c3 mt-5">
          <span>Aún no estas registado?</span>
          <Link
            href="/register"
            className="font-semibold text-white underline  underline-offset-2 cursor-pointer"
          >
            Registrate Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default login;
