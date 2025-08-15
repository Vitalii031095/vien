"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import "./header.css"
import { useState } from "react"

const navLinks = [
  { name: "Головна", path: "/" },
  { name: "Про нас", path: "/about" },
  { name: "Актуально", path: "/actual" },
//   { name: "Реєстрація", path: "/register" },
  { name: "Контакти", path: "/contacts" },
]

const Header = () => {
	const [burgerBtn, setBurgetBtn] = useState<boolean>(false)
  const pathname = usePathname()

  const toggleBurger = ()=>{
	setBurgetBtn(!burgerBtn)
  }
  console.log(pathname)

  return (
    <div className="header ">
      <div className="header__container">
        <Link href="." className="header__logo logo">
          <Image
			 className="logo--sm"
            src="/logo.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </Link>
        <nav className="header__menu menu">
          <ul className={burgerBtn ? "menu__list active"  : "menu__list"}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path
              return (
                <li key={link.name} className="menu__item">
                  <Link
                    href={link.path}
                    className={
                      isActive ? "menu__link text-amber-800 " : "menu__link"
                    }
						  onClick={()=>setBurgetBtn(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}

          
          </ul>
			 
        </nav>
		  <div className={burgerBtn ?"menu-btn active":"menu-btn" } onClick={toggleBurger}>
							 <span></span>
							 <span></span>
							 <span></span>
						  </div>
		 
      </div>
    </div>
  )
}

export default Header
