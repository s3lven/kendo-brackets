import Link from 'next/link';
import React from 'react'

const AuthNav = () => {
  return (
    <nav className="w-full h-[72px] bg-dark">
      <div className="h-full flex justify-center items-center px-[108px] py-2">
        <Link href="/" className="h-full flex items-center justify-center">
          <p className="font-poppins font-bold text-2xl leading-6 tracking-[0.15px] text-white">
            Taikai
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default AuthNav