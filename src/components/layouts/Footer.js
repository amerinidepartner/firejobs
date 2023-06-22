import React from "react"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="FireJob-Footer">
                            <div className="FireJob_footer-logo"><img src="images/logo.png" /></div>
                            <div className="FireJob_footer-text">
                                <p>TBNR LLC is proud to be an Equal Opportunity Employer. We celebrate diversity and are committed to an inclusive environment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="FireJob_footer-nav">
                            <h3>QUICK LINKS</h3>
                            <ul>
                                <li><a href="#whoare">Who We Are</a></li>
                                <li><a href="#BrandStats">Brand Stats</a></li>
                                <li><a href="#sPositions">Open Positions</a></li>
                                <li><a href="#Trailblazers">Trailblazers</a></li>
                                <li><a href="#FireJob_Perks">Perks</a></li>
                                <li><a href="#Firejob_Pillars">Pillars</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="FireJob_footer-social">
                            <h3>CONNECT</h3>
                            <ul>
                                <li><a href="mailto:apply@firejobs.gg"><img src="images/email.png" /></a></li>
                                <li><a href="https://www.linkedin.com/company/tbnrproductions/" target="_blank"><img className="linkedImg" src="images/linked_in.png" /></a></li>
                                <li><a href="https://www.youtube.com/@PrestonYT" target="_blank"><img className="youtubeImg" src="images/yt.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}