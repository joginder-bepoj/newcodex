import React from 'react'
import { useStateContext } from '../../context/StateContext'
import Link from 'next/link'
import Spinner from "../spinner/Spinner"

const ContactForm = () => {
    const { setContactUS, contactUS, handleContactSubmit, borderContactNameErr, setBorderContactNameErr, borderContactEmailErr, setBorderContactEmailErr, borderContactSubjectErr, setBorderContactSubjectErr, borderContactMessageErr, setBorderContactMessageErr, borderContactPhoneErr, setBorderContactPhoneErr, loading } = useStateContext()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactUS({ ...contactUS, [name]: value })
        if (contactUS.name.length !== 0) { setBorderContactNameErr(false) }
        if (contactUS.email.length !== 0) { setBorderContactEmailErr(false) }
        if (contactUS.subject.length !== 0) { setBorderContactSubjectErr(false) }
        if (contactUS.message.length !== 0) { setBorderContactMessageErr(false) }
        if (contactUS.phone.length !== 0) { setBorderContactPhoneErr(false) }
    }
    return (
        <>
            <section className="py-4 contact-us">
                <div className="container">
                    <h2 className="sub-heading py-4">Contact Us with Codexview</h2>
                    <div className="row justify-content-start gy-4">
                        <div className="col-lg-7">
                            <form className="row g-3" onSubmit={handleContactSubmit}>
                                <div className="col-md-6">
                                    <label className='form-label'> Your Name</label>
                                    <input onChange={handleChange} type="text" className={`form-control ${borderContactNameErr && "errRed"}`} name="name" />
                                </div>
                                <div className="col-md-6">
                                    <label className='form-label'>Your Email</label>
                                    <input onChange={handleChange} type="email" className={`form-control ${borderContactEmailErr && "errRed"}`} name="email" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputSubject" className="form-label">Phone</label>
                                    <input onChange={handleChange} name="phone" type="number" className={`form-control ${borderContactPhoneErr && "errRed"}`} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputSubject" className="form-label">Subject</label>
                                    <input onChange={handleChange} name="subject" type="text" className={`form-control ${borderContactSubjectErr && "errRed"}`} />
                                </div>
                                <div className="col-12">
                                    <label className='form-label'>Message</label>
                                    <textarea onChange={handleChange} className={`form-control ${borderContactMessageErr && "errRed"}`} name="message" rows="3"></textarea>
                                </div>
                                <div className="col-md-2">
                                    <button type="submit" className="site-form-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 ms-lg-5">
                            <ul className="list-group">
                                <li className="list-group-item py-lg-4 py-2"><a href="mailto:info@bepoj.com" title="info@bepoj.com"><span className="me-3 email-txt fw-bold">Email:</span>info@codexview.com</a></li>
                                <li className="list-group-item py-lg-4 py-2"> <Link href="/" title="Codex View" target="_blank"><span className="me-3 email-txt fw-bold">Website:</span>www.codexview.com</Link></li>
                                <li className="list-group-item py-lg-4 py-2"><a href="tel:9805999805" title="9805999805"><span className="me-3 email-txt fw-bold">Contact:</span>9805999805</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {loading && <Spinner />}
            </section>
        </>
    )
}

export default ContactForm