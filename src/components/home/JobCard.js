import React from "react"
import { Departments } from "../../utils/var/departments"

export default function JobCard({ job }) {
    return (
        <div className="FireJob_glightbox">
            <div className="FireJob_glightbox_upere">
                <div className="FireJob_glightbox_img">
                    <img src={Departments.filter((el) => el.id == job.departments[0].id)[0].image} />
                </div>
                <div className="FireJob_glightbox_dta">
                    <h3>{job.name}</h3>
                    <ul>
                        <li><img src="images/Ellips.png" />&nbsp;{job.custom_fields.employment_type}</li>
                        <li><img src="images/Frame.png" />&nbsp;{job.offices.map((el, index) => (index == (job.offices.length - 1) ? el.name : `${el.name}, `))}</li>
                    </ul>
                </div>
            </div>
            <div className="FireJob_glightbox_low">
                {job.custom_fields.salary && (<span>${job.custom_fields.salary}K+/yr</span>)}
                {job.custom_fields.apply_url && (<a href={job.custom_fields.apply_url} target="_blank">Apply Now</a>)}
            </div>
        </div>
    )
}