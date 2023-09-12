import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="bg-red-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Clerk Auth</div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            <Link
              href="/dashboard"
              className="text-yellow-600 hover:text-white mr-4"
            >
              대시보드
            </Link>

            <div className="flex items-center font-bold">
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
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
