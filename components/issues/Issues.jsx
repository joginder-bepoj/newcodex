import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { useStateContext } from "../../context/StateContext";

const Issues = ({issueData}) => {
    const {user, handleProfileNavigate, toastOptions} = useStateContext();
    const router = useRouter();

    const handleIssueBtn = () => {
        if (!user) {
            toast.info("Please wait we are redirecting you to the login page.", toastOptions)
            setTimeout(() => {
                router.push("/login")
            }, 5000)
            return false;
        }
        router.push("/post-issue");
    }

    const IssueData = ({ item }) => {
        return (
            <div className="pt-4" key={item.id}>
                <div className="card">
                    <div className="card-body rounded-2 bg-light">
                        <div className="row">
                            <div className="col-md-7">
                                <Link href={`/issues/${item.issue_url}`} title={item.issue_title}>
                                    <h4 className="m-0 pb-1 fs-5 heading-issue">
                                        {item.issue_title}
                                    </h4>
                                </Link>
                                <div className="d-flex py-1">
                                    <span className="codeigniter fw-normal text-uppercase">
                                        {item.skill || "PHP"}
                                    </span>
                                    <span className="px-2 text-capitalize" style={{cursor: "pointer"}} onClick={()=>handleProfileNavigate(item)}>
                                        |{" "}{item.name || "Priyanka"}
                                    </span>
                                    <span className="fw-normal">| {item.date.slice(0, 11)} </span>
                                </div>
                            </div>
                            {router.pathname !== "/" && (
                                <div className="col-md-5 comment-col align-self-center text-align-end d-none d-lg-block">
                                    <Link
                                        href={`/issues/${item.issue_url}`}
                                        className="user-name me-3"
                                        title={item.issue_title}
                                    >
                                        <svg
                                            width="20"
                                            height="19"
                                            viewBox="0 0 20 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15 0H5C3.74071 0.00158768 2.53345 0.502542 1.643 1.393C0.752542 2.28345 0.251588 3.49071 0.25 4.75V17.75C0.25013 17.8982 0.294188 18.0431 0.376608 18.1663C0.459028 18.2895 0.576113 18.3856 0.713077 18.4423C0.85004 18.499 1.00074 18.5138 1.14614 18.485C1.29154 18.4561 1.42511 18.3848 1.53 18.28L3.944 15.866C4.06008 15.7496 4.19804 15.6574 4.34993 15.5946C4.50182 15.5318 4.66464 15.4996 4.829 15.5H15C16.2593 15.4984 17.4666 14.9975 18.357 14.107C19.2475 13.2165 19.7484 12.0093 19.75 10.75V4.75C19.7484 3.49071 19.2475 2.28345 18.357 1.393C17.4666 0.502542 16.2593 0.00158768 15 0ZM18.25 10.75C18.2489 11.6116 17.9062 12.4377 17.2969 13.0469C16.6877 13.6562 15.8616 13.9989 15 14H4.829C4.46759 13.9989 4.10956 14.0696 3.77568 14.208C3.44179 14.3463 3.13871 14.5496 2.884 14.806L1.75 15.939V4.75C1.75106 3.88837 2.09381 3.06234 2.70307 2.45307C3.31234 1.84381 4.13837 1.50106 5 1.5H15C15.8616 1.50106 16.6877 1.84381 17.2969 2.45307C17.9062 3.06234 18.2489 3.88837 18.25 4.75V10.75Z"
                                                fill="#17A99D"
                                            />
                                        </svg>
                                        &nbsp;Comments <sup>0</sup>
                                    </Link>
                                    <Link
                                        href={`/issues/${item.issue_url}`}
                                        className="user-name me-3"
                                        title={item.issue_title}
                                    >
                                        <svg
                                            width="19"
                                            height="13"
                                            viewBox="0 0 19 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.6607 6.06541C18.4946 5.85306 14.5384 0.863777 9.50024 0.863777C4.46157 0.863777 0.505372 5.85306 0.339345 6.06541L0 6.49976L0.339345 6.93412C0.505372 7.14647 4.46157 12.136 9.50024 12.136C14.5384 12.136 18.4946 7.14647 18.6607 6.93412L19 6.49976L18.6607 6.06541ZM9.50024 10.7252C5.95675 10.7252 2.86385 7.65725 1.82371 6.5C2.86432 5.34251 5.95699 2.27501 9.50024 2.27501C13.0432 2.27501 16.1361 5.34275 17.1765 6.5C16.1357 7.65749 13.043 10.7252 9.50024 10.7252Z"
                                                fill="#17A99D"
                                            />
                                            <path
                                                d="M9.50013 2.63998C7.37141 2.63998 5.63965 4.37151 5.63965 6.5C5.63965 8.62896 7.37141 10.3607 9.50013 10.3607C11.6289 10.3607 13.3606 8.62896 13.3606 6.5C13.3606 4.37151 11.6289 2.63998 9.50013 2.63998ZM9.50013 8.94949C8.14934 8.94949 7.05064 7.85056 7.05064 6.49976C7.05064 5.14944 8.14934 4.05075 9.50013 4.05075C10.8507 4.05075 11.9496 5.14944 11.9496 6.49976C11.9496 7.85056 10.8507 8.94949 9.50013 8.94949Z"
                                                fill="#17A99D"
                                            />
                                        </svg>
                                        &nbsp;Views <sup>{item.views}</sup>
                                    </Link>
                                    <Link href={`/issues/${item.issue_url}`} title={item.issue_title} className="readMore-btn">
                                        Read More
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <section className="issue py-4">
                <div className="container">
                    {
                        router.pathname === "/" ? <div className="border-bottom">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="site-heading mb-3">Issues</h2>
                                </div>
                                <div className="col-md-6 new-issue">
                                    <ul className="list-unstyled d-flex align-items-center justify-content-end d-flex">
                                        <li>
                                            <Link href="/issues" title="Issue">
                                                New Issue{" "}
                                                <sup className="text-white d-inline-flex align-items-center justify-content-center rounded-circle">
                                                    2
                                                </sup>
                                            </Link>
                                        </li>
                                        <li>|</li>
                                        <li className="ps-4">
                                            <Link href="/issues" title="Issue">More</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> : <div className="border-bottom position-relative">
                            <div className="row">
                                <div className="col-md-8 col-12">
                                    <h2 className="sub-heading">Issues</h2>
                                    <p className="text-secondary fs-5">Fix Your Issue Online with Codex View</p>
                                </div>
                                <div className="col-md-4 col-12 d-flex justify-content-md-end align-items-baseline">
                                    <button onClick={handleIssueBtn} title="Post Your Issue" className="post-btn mt-md-4 mb-3 mb-md-0 btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>{" "}
                                        Post Your Issue</button>
                                </div>
                            </div>
                        </div>
                    }
                    {issueData.map((item, i) =>
                        router.pathname === "/" ? (
                            i < 2 && <IssueData item={item} key={item.id} />
                        ) : (
                            <IssueData item={item} key={item.id} />
                        )
                    )}
                </div>
            </section>
        </>
    );
};



export default Issues;
