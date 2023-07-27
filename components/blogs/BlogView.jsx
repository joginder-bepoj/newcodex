import React from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import Comments from "../comments/Comments";
import Image from "next/image";

const BlogView = ({setAddComment, singleBlog, blogsData}) => {

  const { handleProfileNavigate } = useStateContext();
  return (
    <>
      <section className="blog pt-4">
        <div className="container">
          <div className="row align-items-baseline">
            <div className="col-md-8">
              <h4 className="card-text blog-text border-bottom">{singleBlog?.title} </h4>
              <Image
                src={singleBlog?.image}
                className="card-img-top"
                alt={singleBlog?.title}
                width="500"
                height="400"
              />
              <div className="d-flex mb-3 align-items-center">
                <span className="m-2">
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
                  &nbsp;{singleBlog?.date.slice(0, 11)}
                </span>
                <span className="mx-2" style={{cursor: "pointer"}} onClick={()=>handleProfileNavigate(singleBlog)}>
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
                  &nbsp;{singleBlog?.name}
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
              <div className="blogs-output" dangerouslySetInnerHTML={{ __html: singleBlog?.description }} />
              <div className="border-bottom btn-post py-4">
                  <button className="post-btn" title="" onClick={()=>setAddComment(true)} >Add a Comment</button>
              </div>
              <h6 className="py-4">This post has { singleBlog?.blog_comments?.length} Comment </h6>
              <div className="blogs-comments">
                {
                  singleBlog?.blog_comments?.map(item=>(
                    <Comments item={item} key={item.id} />
                  ))
                }
              </div>
              
            </div>
            <div className="col-md-4 d-none d-md-block">
              <div className="card p-3 related_blog">
                <h3>Related Blog </h3>
                {blogsData.map(
                  (item) =>
                    item?.id !== singleBlog?.id && (
                      <Link
                        href={`/blog/${item.page_url}`}
                        title={item?.title}
                        key={item.id}
                        className="d-flex border-bottom fs-6 pt-3"
                      >
                        <svg
                          className="me-2"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.5174 6.78957C18.3533 6.84313 18.2637 7.01957 18.3173 7.18363C18.613 8.08984 18.763 9.03742 18.763 10C18.763 12.4225 17.8197 14.6998 16.1068 16.4128C14.3938 18.1257 12.1164 19.069 9.69398 19.069C7.27156 19.069 4.99414 18.1257 3.28121 16.4128C1.56828 14.6998 0.625 12.4224 0.625 10C0.625 7.57758 1.56832 5.30016 3.28125 3.58723C4.99418 1.8743 7.2716 0.930977 9.69402 0.930977C10.9788 0.930977 12.2201 1.19402 13.3837 1.71289C14.5079 2.21422 15.5043 2.92805 16.345 3.83457C16.4623 3.96109 16.6601 3.96859 16.7866 3.85117C16.9132 3.73383 16.9206 3.53613 16.8033 3.40953C15.9048 2.44082 14.84 1.67797 13.6383 1.14207C12.394 0.587305 11.067 0.305977 9.69402 0.305977C7.10465 0.305977 4.67027 1.3143 2.83934 3.14531C1.00836 4.97625 0 7.41062 0 10C0 12.5893 1.00836 15.0237 2.83934 16.8546C4.67027 18.6856 7.10465 19.694 9.69402 19.694C12.2834 19.694 14.7178 18.6857 16.5487 16.8546C18.3797 15.0237 19.388 12.5893 19.388 10C19.388 8.97141 19.2277 7.95859 18.9114 6.98969C18.8579 6.82563 18.6814 6.73613 18.5174 6.78957Z"
                            fill="#17A99D"
                          />
                          <path
                            d="M19.7254 3.25242C19.5483 3.07516 19.3127 2.97754 19.0621 2.97754C18.8114 2.97754 18.5758 3.07516 18.3989 3.2523L18.1191 3.53203C17.9971 3.65406 17.9971 3.85191 18.1191 3.97395C18.2412 4.09594 18.4391 4.09598 18.5611 3.97391L18.8409 3.69406C18.8999 3.635 18.9784 3.6025 19.062 3.6025C19.1456 3.6025 19.2241 3.635 19.2833 3.69422C19.3424 3.75336 19.375 3.83188 19.375 3.91543C19.375 3.99898 19.3424 4.0775 19.2833 4.13664L8.50789 14.9121C8.44891 14.9712 8.37039 15.0037 8.2868 15.0037C8.2032 15.0037 8.12469 14.9712 8.06555 14.912L3.8573 10.7037C3.79816 10.6446 3.76559 10.5661 3.76559 10.4825C3.76559 10.399 3.79816 10.3204 3.85742 10.2611C3.91641 10.2021 3.99492 10.1696 4.07852 10.1696C4.16211 10.1696 4.24062 10.2021 4.29977 10.2613L8.06582 14.0273C8.12441 14.0859 8.20391 14.1189 8.2868 14.1189C8.36969 14.1189 8.44918 14.0859 8.50777 14.0273L17.6816 4.85355C17.8036 4.73148 17.8036 4.53367 17.6816 4.4116C17.5595 4.28961 17.3617 4.28961 17.2396 4.4116L8.2868 13.3644L4.74187 9.81945C4.5648 9.64219 4.32926 9.54457 4.07859 9.54457C3.82793 9.54457 3.59234 9.64219 3.41539 9.81934C3.2382 9.99652 3.14062 10.232 3.14062 10.4825C3.14062 10.733 3.2382 10.9685 3.41539 11.1457L7.62352 15.3538C7.80055 15.5311 8.03613 15.6287 8.2868 15.6287C8.53746 15.6287 8.77305 15.5311 8.94996 15.354L19.7252 4.57867C19.9024 4.40148 20 4.16598 20 3.91547C20 3.66496 19.9024 3.42945 19.7254 3.25242Z"
                            fill="#17A99D"
                          />
                        </svg>
                        <p className="relative-blog">{item?.title}</p>
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogView;
