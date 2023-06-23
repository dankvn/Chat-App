import React from "react";
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";
import Link from "next/link";

const register = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-c1">
      <div className="flex items-center flex-col w-[600px]">
        <div className="text-center">
          <div className="text-4xl font-bold">Crea tu cuanta ahora </div>
          <div className="mt-3 text-c3">
            Conéctese y chatee con cualquier persona, en cualquier lugar
          </div>
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
          <span className="text-c3 font-semibold">OR</span>
          <span className="w-5 h-[1px] bg-c3"></span>
        </div>

        <form className="flex flex-col items-center gap-3 w-[500px] mt-5">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3"
            autoComplete="off"
          />
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
          
          <button className="mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ">
            Inscríbete
          </button>
        </form>
        <div className="flex justify-center gap-1text-c3 mt-5">
          <span>¿Ya tiene una cuenta?</span>
          <Link
            href="/login"
            className="font-semibold text-white underline  underline-offset-2 cursor-pointer"
          >
            Iniciar Sesion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default register;
