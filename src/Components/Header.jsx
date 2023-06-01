import React from 'react';
import khadPicture from '../assets/khad.jpg';

const Header = () => {
  const imgBackgroundStyle1 =
    'absolute top-28 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl -z-10 opacity-50 animate-blob';
  const imgBackgroundStyle2 =
    'absolute w-64 h-64  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl -z-10 opacity-50 right-[35rem] -top-16 animate-blob';
  const imgBackgroundStyle3 =
    'absolute w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl -z-10 opacity-50 bottom-20 right-[40rem] animate-blob ';
  return (
    <div className="flex gap-36 items-center h-[90vh] px-40 -pt-24 bg-purple-50 relative z-50">
      <div className={imgBackgroundStyle1}></div>
      <div className={imgBackgroundStyle2}></div>
      <div className={imgBackgroundStyle3}></div>
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Hi, i'm</span>
        <h3 className="text-5xl text-pink-400 uppercase font-bold">
          Khadijah Abubakar
        </h3>
        <h3 className="text-5xl font-['Londrina_Outline'] uppercase">
          Web Developer
        </h3>
        <div>
          Over here, you'll learn a little about me
          <br />
          The projects i've worked on as well as the techologies i've worked
          with
        </div>
        <button className="bg-pink-400 h-10 w-36 px-2 text-white text-sm rounded-2xl uppercase mt-6">
          checkout cv
        </button>
      </div>
      <div className="relative">
        <img
          src={khadPicture}
          className="w-[18rem] h-[25rem] rounded-[10rem] object-cover"
        />
        <div className="w-[18rem] h-[25rem] bg-pink-200 rounded-[10rem] -top-5 left-12 absolute -z-50  rotate-[10deg] animate-blob delay-4000"></div>
      </div>
    </div>
  );
};

export default Header;
