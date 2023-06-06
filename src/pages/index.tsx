import Image from "next/image"
import { Inter } from "next/font/google"
import { useEffect, useState } from "react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })


export default function Home() {
  console.log("123123123")
  return (
    <Link href="/account/login">
      <p>My second page</p>
    </Link>
  )
}
