import React from "react"

export default function Header() {
    return (
        <header className="FireJob_home-header">
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="images/logo.png" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="collapsibleNavbar">
                        <ul className="navbar-nav  ml-auto   mt-lg-0 nav-rot">
                            <li className="nav-item active">
                                <a className="nav-link" href="#whoare">Who We Are</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#BrandStats">Brand Stats</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#sPositions">Open Positions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Trailblazers">Trailblazers</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#FireJob_Perks">Perks</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#Firejob_Pillars">Pillars</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}