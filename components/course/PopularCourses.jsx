import React from 'react';
import Link from 'next/link';

const PopularCourses = () => {
    const courseData = [
        {
            name: "Basic Computer Courses",
            desc: "MS Office Combo Pack, Microsoft Word, Microsoft Excel, Microsoft PowerPoint",
            link: "/web-designing"
        },
        {
            name: "Web Designing",
            desc: "Web Designing - Learn Bootstrap, CSS3, HTML5, Learn JavaScript, jQuery",
            link: "/web-designing"
        },
        {
            name: "Web Development Courses",
            desc: "Web Development - Learn PHP, MySQL, HTML5, CSS3, Javascript, jQuery",
            link: "/web-development"
        },
        {
            name: "Graphic Designing",
            desc: "Graphic Designing - Master pack,  Figma, Adobe Illustrator, Adobe Photoshop",
            link:"/web-designing"
        },
    ]

    return (
        <>
            <section className="online-course py-4">
                <div className="container">
                    <h2 className="sub-heading">Courses</h2>
                    <p>Most popular courses</p>
                    <div className="row">
                        {courseData.map((item, i) => (
                            <div className="col-sm-6 pb-4" key={i}>
                                <div className="card">
                                    <div className="card-body m-3">
                                        <h4 className="free-tutorial">{item.name}</h4>
                                        <p className="fs-6"><b>Courses:</b> {item.desc}</p>
                                        <Link href={item.link} title={item.name} className="btn">View More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularCourses