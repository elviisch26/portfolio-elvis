import { useState, useEffect } from "react"
import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"
import { SearchBoxHome } from "../components/SearchboxHome/SearchBoxHome"
import { COLORS } from "../constants/profile"

export const Home = () => {
    return (
        <div className="page-layout">
            <Navbar />
            <div className="bloque-margen">
                <div className="d-flex justify-content-center align-items-center google-word">
                    {COLORS.map((item, index) => (
                        <span key={index} className={item.color}>{item.letter}</span>
                    ))}
                </div>
                <SearchBoxHome />
            </div>
            <Footer />
        </div>
    )
}
