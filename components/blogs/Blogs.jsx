import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useStateContext } from "../../context/StateContext";
import Image from "next/image";

const Blogs = ({blogsData}) => {
    const { user, toastOptions, handleProfileNavigate } = useStateContext();
    const router = useRouter();

    const handleBlogBtn = () => {
        if (!user) {
            toast.info("Please wait we are redirecting you to the login page.", toastOptions);
            setTimeout(() => {
                router.push("/login");
            }, 4000);
            return false;
        }
        router.push("/post-blogs");
    };

    const BlogsData = ({ item }) => {
        return (
            <div className="col-md-4" key={item?.id}>
                <div className="card mb-4">
                    <Image
                        src={item?.image}
                        className="card-img-top blogs"
                        alt={item?.title}
                        width="600"
                        height="300"
                    />
                    <div className="card-body">
                        <h4 className="card-text">
                            <Link href={`/blog/${item?.page_url}`} title={item?.title}>
                                {item?.title}
                            </Link>
                        </h4>
                        <div className="d-flex">
                            <span className="me-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#A4ABAF"
                                    className="bi bi-calendar3"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                &nbsp; {item?.date.slice(0, 11)}
                            </span>
                            <span
                                className="mx-2 text-capitalize"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleProfileNavigate(item)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#A4ABAF"
                                    className="bi bi-person"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                &nbsp; {item?.name}
                            </span>
                            <span className="mx-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#A4ABAF"
                                    className="bi bi-chat"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                </svg>
                                &nbsp;0
                            </span>
                        </div>
                        {router.pathname !== "/" && (
                            <div
                                className="mt-2 text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: item?.description.slice(0, 95),
                                }}
                            />
                        )}
                        <div className="d-flex justify-content-md-end mt-2 mt-md-0">
                            <Link
                                href={`/blog/${item?.page_url}`}
                                title={item?.title}
                                className="btn-text"
                            >
                                View More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <section className="blog py-4">
                <div className="container">
                    {router.pathname === "/" ? (
                        <h2 className="site-heading pb-3">
                            Our<span> Blog</span>
                        </h2>
                    ) : (
                        <div className="row pb-3">
                            <div className="col-md-8 col-12 d-flex align-items-center">
                                <h2 className="sub-heading">Blogs</h2>
                            </div>
                            <div className="col-md-4 col-12 d-flex justify-content-md-end align-items-baseline">
                                <button onClick={handleBlogBtn} className="post-btn btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-pencil-square"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                    </svg>{" "}
                                    Post Your Blogs
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        {blogsData.map((item, i) =>
                            router.pathname === "/" ? (
                                i < 3 && <BlogsData item={item} key={item.id} />
                            ) : (
                                <BlogsData item={item} key={item.id} />
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;