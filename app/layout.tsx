"use client"
import NavBar from "@/components/NavBar"
import "./globals.css"

import { ThemeProvider } from "next-themes"
import { HeroSection } from "@/components/HeroSection"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-light-green dark:bg-stone-900">
        {/*<ThemeProvider enableSystem={true} attribute="class">*/}
          <NavBar />
          {children}
          {/*<Footer />*/}
        {/*</ThemeProvider>*/}
      </body>
    </html>
  )
}
