import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { userId } = auth()
  console.log(userId)
  return (
    <>
      <nav className=" bg-red-400 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Clerk Auth</div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            {!userId ? (
              //로그인이 안된 경우
              <>
                <Link
                  href="/sign-in"
                  className="text-yellow-600 hover:text-white mr-4"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-yellow-600 hover:text-white mr-4"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              //로그인이 된 경우
              <>
                <Link
                  href="/repos"
                  className="text-blue-600 hover:text-white mr-4"
                >
                  Repository
                </Link>
                <Link
                  href="/dashboard"
                  className="text-blue-600 hover:text-white mr-4"
                >
                  대시보드
                </Link>
                <Link
                  href="/profile"
                  className="text-blue-600 hover:text-white mr-4"
                >
                  프로필
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
