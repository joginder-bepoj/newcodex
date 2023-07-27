import Link from 'next/link'
import React from 'react'

const Quiz = ({skillData}) => {
  return (
    <>
        <section className="online-courses py-4">
                <div className="container">
                    <h2 className="sub-heading">Lets Take a Quiz</h2>
                    <p>The best free all technologies qizes</p>
                    <div className="row">
                        {skillData.map(
                            (item) =>
                            (
                                <div className="col-md-3" key={item.id}>
                                    <div className="card tutorial-item pt-2 mb-3">
                                        <div className="card-body">
                                            <div className={`free-tutorial rounded-circle ${item.bg_class}`}>
                                            <div dangerouslySetInnerHTML={{ __html: item.image }} />
                                            </div>
                                            <h5 className="pt-3 fw-bold m-0">{item.skill}</h5>
                                        </div>
                                        <Link
                                            href={`/quizes/${item.page_url}`}
                                            title={item.skill}
                                            className="view-tutorial fw-5"
                                        >
                                            Take a Quiz
                                        </Link>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
    </>
  )
}

export default Quiz