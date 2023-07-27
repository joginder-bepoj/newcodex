import React from "react";
import Advertisement from "../advertisement/Advertisement";
import Spinner from "../spinner/Spinner";
import { Accordion } from "react-bootstrap";

const ViewQuizes = ({ chapterList, navigation }) => {
    return (
        <>
            <section className="pt-3 bg-light tutorial-info">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 mb-5">
                            <div className="card">
                                <div className="p-2">
                                    {chapterList.map((item, i) => (
                                        <div className="px-3" key={i}>
                                            <h4 className="accordion-header">
                                                {item.skill_chapterName}
                                            </h4>
                                            <div>
                                                {item.sub_chapter?.map((subChapter) => (
                                                    <div
                                                        className={`accordion-body start-html `}
                                                        key={subChapter?.id}
                                                    // onClick={() => navigation(subChapter?.id, item)}
                                                    >
                                                        {subChapter.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 mb-5">
                            <div className="chapterStart">
                                <div className="react-renderer node-quiz mb-3">
                                    <div className="flex flex-col rounded-lg w-full grow border">
                                        <div>
                                                <h2 className="px-4 py-3" >What is the full form of AI?</h2>
                                                <div className="row g-3 px-4">
                                                    <div className="col-12 col-md-6">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-outlined"
                                                            id="success-outlined"
                                                            autocomplete="off"
                                                        />
                                                        <label
                                                            className="btn btn-outline-success w-100"
                                                            for="success-outlined"
                                                        >
                                                            Checked success radio 1
                                                        </label>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-outlined"
                                                            id="uccess-outlined"
                                                            autocomplete="off"
                                                        />
                                                        <label
                                                            className="btn btn-outline-success w-100"
                                                            for="uccess-outlined"
                                                        >
                                                            Checked success radio 2
                                                        </label>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-outlined"
                                                            id="ccess-outlined"
                                                            autocomplete="off"
                                                        />
                                                        <label
                                                            className="btn btn-outline-success w-100"
                                                            for="ccess-outlined"
                                                        >
                                                            Checked success radio 3
                                                        </label>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="options-outlined"
                                                            id="ess-outlined"
                                                            autocomplete="off"
                                                        />
                                                        <label
                                                            className="btn btn-outline-success w-100"
                                                            for="ess-outlined"
                                                        >
                                                            Checked success radio 4
                                                        </label>
                                                    </div>
                                                    <div>
                                                    
                                                    </div>
                                                </div>
                                                <p className="border-top px-4 pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos, temporibus reprehenderit doloribus quo incidunt, laudantium saepe et praesentium neque sapiente quam quos repellat numquam placeat consectetur, sint facere. In!</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="react-renderer node-quiz mb-3">
                                    <div className="flex flex-col rounded-lg w-full grow">
                                        <div>
                                                <h2 className="px-4 py-3" >What is the full form of AI?</h2>
                                                <div className="row g-3 px-4">
                                                    <div className="col-12">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="outlined"
                                                            id="col-success-outlined"
                                                            autocomplete="off"
                                                        />
                                                        <label
                                                            className="btn btn-outline-success w-100"
                                                            for="col-success-outlined"
                                                        >
                                                            Checked success radio 1
                                                        </label>
                                                    </div>
                                                    <div className="col-12">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="outlined"
                                                            id="col-uccess-outlined"
                                                            autocomplete="off"
                                                        />
                                                        <label
                                                            className="btn btn-outline-success w-100"
                                                            for="col-uccess-outlined"
                                                        >
                                                            Checked success radio 2
                                                        </label>
                                                    </div>
                                                    <div className="col-12">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="outlined"
                                                            id="col-ccess-outlined"
                                                            autocomplete="off"
                                                        />
                                                        <label
                                                            className="btn btn-outline-success w-100"
                                                            for="col-ccess-outlined"
                                                        >
                                                            Checked success radio 3
                                                        </label>
                                                    </div>
                                                    <div className="col-12">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="outlined"
                                                            id="col-ess-outlined"
                                                            autocomplete="off"
                                                        />
                                                        <label
                                                            className="btn btn-outline-success w-100"
                                                            for="col-ess-outlined"
                                                        >
                                                            Checked success radio 4
                                                        </label>
                                                    </div>
                                                    <div>
                                                    
                                                    </div>
                                                </div>
                                                <p className="border-top px-4 pt-2 border border-2 rounded-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos, temporibus reprehenderit doloribus quo incidunt, laudantium saepe et praesentium neque sapiente quam quos repellat numquam placeat consectetur, sint facere. In!</p>

                                        </div>
                                    </div>
                                </div>
                                {/* {chapterData?.sub_chapter_url === router?.query?.slug[1] ? (
                                    <>
                                    <div className={`chapters p-3 bg-white `}
                                    >
                                        <div className={fadeinClass ? "fade-in" : "fade-out"} dangerouslySetInnerHTML={{ __html: chapterData?.description}} />
                                        <div className="nextprev-btn">
                                <p className="pre-btn" onClick={()=> chapterData.previous_page_url !== null && router.push(`/${router.query.slug[0]}/${chapterData.previous_page_url}`)}>
                                    <svg
                                        width="7"
                                        height="13"
                                        viewBox="0 0 7 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.39962 12.5479L6.96755 11.9027L1.54679 6.91294L6.40816 1.35299L5.77533 0.774308L0.349957 6.97931L6.39962 12.5479Z"
                                            fill="#212529"
                                        ></path>
                                    </svg>
                                    &nbsp; Previous Chapter
                                </p>
                                <p className="next-btn" onClick={()=>router.push(`/${router.query.slug[0]}/${chapterData.next_page_url}`)}>
                                    Next Chapter &nbsp;
                                    <svg
                                        width="8"
                                        height="13"
                                        viewBox="0 0 8 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.59491 0.267833L0.96986 0.855294L5.90497 6.34688L0.551304 11.4118L1.1278 12.0491L7.10258 6.39654L1.59491 0.267833Z"
                                            fill="#212529"
                                        ></path>
                                    </svg>
                                </p>
                                    </div>
                                    </div>
                                    
                                    </>
                                ): <Spinner />} */}
                            </div>
                        </div>
                        <div className="col-md-2">
                            <Advertisement />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewQuizes;
