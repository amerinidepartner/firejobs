import React, { useEffect, useState } from "react"
import Header from "../components/layouts/Header"
import JobCard from "../components/home/JobCard"
import { callGetApi } from "../utils/api/api"
import { Teams } from "../utils/var/teams"
import { Modal } from "antd"

export default function Home() {
    const [departments, setDepartments] = useState([])
    const [jobs, setJobs] = useState([])
    const [countedDepartments, setCountedDepartments] = useState([])
    const [selectedBio, setSelectedBio] = useState(undefined)
    const [formData, setFormData] = useState({
        status: {
            id: "open",
            name: "All Roles"
        },
        department: {
            id: "",
            name: ""
        },
    })

    const onGetDepartments = (res) => {
        setDepartments(res)
    }

    const onFailedGetDepartments = (res) => {
        console.log(res)
    }

    const getDepartments = () => {
        callGetApi("departments", onGetDepartments, onFailedGetDepartments)
    }

    const onGetJobs = (res) => {
        setJobs(res.filter((el) => el.name.indexOf("Template") < 0 && el.name.indexOf("TEMPLATE") < 0 && el.name.indexOf("template") < 0))
    }

    const onFailedGetJobs = (res) => {
        console.log(res)
    }

    const getJobs = (status, department_id) => {
        const query = `status=${status}&department_id=${department_id}`
        callGetApi(`jobs?${query}`, onGetJobs, onFailedGetJobs)
    }

    useEffect(() => {
        if (departments.length > 0 && jobs.length > 0) {
            const countedDepartments0 = [
                {
                    id: "",
                    name: "All",
                    job_count: jobs.length,
                    jobs: jobs
                },
                ...departments.map((el) => ({
                    ...el,
                    job_count: jobs.filter((el2) => el.id == el2.departments[0].id).length,
                    jobs: [
                        ...jobs.filter((el2) => el.id == el2.departments[0].id)
                    ]
                }))
            ];
    
            setCountedDepartments(countedDepartments0)
        } else {
            setCountedDepartments([])
        }
    }, [departments, jobs])

    useEffect(() => {
        getDepartments()
        getJobs(formData.status.id, formData.department.id)
    }, [])

    return (
        <>
            <div className="FireJob_Main">
                <div className="container">
                    <Header />
                    <div className="FireJob_banner">
                        <h1>Fire Jobs</h1>
                        <div className="FireJob_banner_form">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="FireJob_best">
                                        <h2>The Best Never Rest</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="FireJob_body">
                <div className="FireJob_video" id="whoare">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="FireJob_video_box">
                                    <img src="images/who_we_are.png" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2>Who we are</h2>
                                <p>TBNR is a top YouTube Production Company based in Dallas, Texas that manages the massive YouTube channels and digital media brands of Preston and Brianna Arsement, and Keeley Ellis. TBNR was founded by Preston in 2010 when he launched his first YouTube Channel, TBNRFrags. Shortly thereafter he launched PrestonPlayz which currently has over 14 million subscribers!</p>
                                <p>Our 7 YouTube channels are focused on IRL, Gaming, and Reaction content. TBNR has an innate desire to spread positive messaging and cares deeply about the kind of content that we popularize with our videos.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FireJob_star" id="BrandStats">
                    <div className="container">
                        <div className="FireJob_brand">
                            <h2>BRAND STATS</h2>
                            <div className="row ">
                                <div className="col-md-4">
                                    <div className="FireJob_Channels">
                                        <h3>7</h3>
                                        <span>YouTube Channels</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="FireJob_Channels">
                                        <h3>70 million+</h3>
                                        <span>Subscribers</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="FireJob_Channels">
                                        <h3>18 billion+</h3>
                                        <span>Lifetime Views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FireJob_Positions" id="sPositions">
                    <div className="container">
                        <div className="FireJob_Open">
                            <h2>Open Positions</h2>
                            <div className="FireJob_Positions_button" id="myBtnContainer">
                                {countedDepartments && countedDepartments.length > 0 &&
                                    countedDepartments.filter((el) => el.job_count != 0).map((el) => (
                                        <button key={el.id} className="btn"
                                            onClick={() => 
                                                setFormData({
                                                    ...formData,
                                                    department: {
                                                        id: el.id,
                                                        name: el.name
                                                    }
                                                })
                                            }
                                        > {el.name} <span>{el.job_count}</span></button>
                                    ))
                                }
                            </div>
                            <div className="FireJob_Portfolio">
                                <div className="row">
                                    {countedDepartments && countedDepartments.length > 0 && countedDepartments.filter((el) => el.id == formData.department.id).length > 0 && countedDepartments.filter((el) => el.id == formData.department.id)[0].jobs.map((el) => (
                                        <div key={el.id} className="col-lg-4  col-sm-6 col-xs-6 Creative">
                                            <JobCard job={el} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="FireJob_Trailblazers" id="Trailblazers">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <h2>Trailblazers</h2>
                                <p>To make trailblazing content we look to hire the brightest and most creative people in the industry who like to have fun and be weird!</p>
                            </div>
                            <div className="col-lg-9">
                                <div className="owl-carousel">
                                    {Teams.map((el) => (
                                        <div className="item" key={el.id}>
                                            <div className="FireJob_item">
                                                <div className="FireJob_item_img"><img src={el.image} /></div>
                                                <div className="FireJob_item_data">
                                                    <h3>{el.name}</h3>
                                                    <h5>{el.role}</h5>
                                                    <h4>Years of Service:<span>{el.years_of_service}</span></h4>
                                                    <h4>Favorite Pizza Topping:<span>{el.favorite_pizza_topping}</span></h4>
                                                    <button onClick={() => setSelectedBio(el)}>Favorite Memory</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="FireJob_Perks" id="FireJob_Perks">
                    <div className="container">
                        <div className="FireJob_Open">
                            <h2>Fire Perks</h2>
                            <p>We go beyond great not only professionally, but personally as well.</p>
                            <div className="row ">
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks1.png" />
                                        </span>
                                        <h4>100% Company paid Medical Insurance </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks2.png" />
                                        </span>
                                        <h4>Company sponsored Dental and Vision Insurance</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks3.png" />
                                        </span>
                                        <h4>401K with a 3% non-elective contribution</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks4.png" />
                                        </span>
                                        <h4>Flexible time off </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks5.png" />
                                        </span>
                                        <h4>Company paid holidays </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks6.png" />
                                        </span>
                                        <h4>Paid Parental Leave </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks7.png" />
                                        </span>
                                        <h4>Short and Long Term Disability Insurance </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks8.png" />
                                        </span>
                                        <h4>Quarterly Campfire Reviews </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="FireJob_Pillars_section" id="Firejob_Pillars">
                    <div className="container">
                        <h2>Fire Pillars are the foundation of everything created here - including careers.</h2>
                        <h3>Fire Pillars</h3>

                        <div className="FireJob_Pillars">
                            <div className="row ">
                                <div className="col-lg-4">
                                    <div className="FireJob_Great">
                                        <h4>Go Beyond Great</h4>
                                        <ul>
                                            <li>Innovate & Replicate</li>
                                            <li>Challenge Your Best</li>
                                            <li>Quality Work &gt; Time Spent</li>
                                            <li>Seek Criticism & Radical Candor</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="FireJob_Great">
                                        <h4>Fuel Excitement</h4>
                                        <ul>
                                            <li>Charitable Initiatives</li>
                                            <li>Recognize Wins </li>
                                            <li>Have Fun, Be Weird</li>
                                            <li>Listen With Empathy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="FireJob_Great">
                                        <h4>Ignite Transformation</h4>
                                        <ul>
                                            <li>Seek Discomfort</li>
                                            <li>Faith Over Fear</li>
                                            <li>Be Bold & Pursue Growth</li>
                                            <li>Spark Change Within Yourself & The Company</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedBio &&
                <Modal open={true} onCancel={() => setSelectedBio(undefined)} footer={null} className="bio-modal">
                    <h3>{selectedBio.name}</h3>
                    <h5>{selectedBio.role}</h5>
                    <p>{selectedBio.bio}</p>
                </Modal>
            }
        </>
    )
}