"use client"

import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export function AosInit() {
  useEffect(() => {
    const timer = setTimeout(() => {
      Aos.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
      })
    }, 150)

    return () => clearTimeout(timer)
  }, [])

  return null
}