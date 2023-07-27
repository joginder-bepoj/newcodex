import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Link from "next/link";

const UsersTabs = ({ userViewData }) => {
    const [key, setKey] = useState("blogs");
    return (
        <>
            <section>
                <div className="container userTabs">
                    <Tabs
                        variant="pills"
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 justify-content-center justify-content-md-start"
                    >
                        <Tab eventKey="blogs" title="Blogs">
                            <div className="mx-md-5 mx-3 issue my-3">
                                {userViewData?.blog?.length===0 ? <h3>You have to create blogs first then they will appear here</h3> : userViewData?.blog?.map((item, i) => (
                                    <div className="pt-4" key={i}>
                                        <div className="card">
                                            <div className="card-body rounded-2 bg-light">
                                                <div className="row">
                                                    <div className="col-md-10 col-12">
                                                        <h4 className="m-0">
                                                            <Link href={`/blog/${item.blog_Url}`} title={item.blog_title}>
                                                                {item.blog_title}
                                                            </Link>
                                                        </h4>
                                                        <div className="d-flex py-1">
                                                            <span className="fw-normal px-2">
                                                               {item.date.slice(0, 11)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-none d-md-block">
                                                        <Link
                                                            href={`/blog/${item.blog_Url}`}
                                                            title={item.blog_title}
                                                            className="readMore-btn"
                                                        >
                                                            Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </Tab>
                        <Tab eventKey="issue" title="Issues">
                            <div className="mx-md-5 mx-3 issue my-3">
                                {userViewData?.issue?.length===0 ? <h3>You have to create issue first then they will appear here </h3> : userViewData?.issue?.map((item, i) => (
                                    <div className="pt-4" key={i}>
                                        <div className="card ">
                                            <div className="card-body rounded-2 bg-light">
                                                <div className="row">
                                                    <div className="col-md-10 col-12">
                                                        <h4 className="m-0">
                                                            <Link href={`/issues/${item.issue_url}`} title={item.issue_title}>
                                                                {item.issue_title}
                                                            </Link>
                                                        </h4>
                                                        <div className="d-flex py-1">
                                                            <span className="codeigniter fw-normal pe-2">
                                                                {item.skill.charAt(0).toUpperCase() +
                                                                    item.skill.slice(1)}
                                                            </span>
                                                            <span className="fw-normal px-2">
                                                                {" "}
                                                                | &nbsp; {item.date.slice(0, 11)}{" "}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-none d-md-block">
                                                        <Link
                                                            href={`/issues/${item.issue_url}`}
                                                            title={item.issue_title}
                                                            className="readMore-btn"
                                                        >
                                                            Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </section>
        </>
    );
};

export default UsersTabs;
