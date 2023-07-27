import React from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import Editior from "./Editior";
import Spinner from "../spinner/Spinner";

const AddComments = () => {
    const router = useRouter()
    const { borderCommentEmailErr, setBorderCommentEmailErr, borderCommentNameErr, setBorderCommentNameErr, handleIssueCommentSubmit, commentsData, setCommentsData, handleBlogsCommentSubmit, loading } = useStateContext()
    const handleChange = (e)=>{
        setCommentsData({...commentsData, [e.target.name]: e.target.value})
        if(commentsData.name.length !==0){setBorderCommentNameErr(false)}
        if(commentsData.email.length !==0){setBorderCommentEmailErr(false)}
    }
    return (
        <>
            <section className="mb-3">
                <div className="container">
                    <h2 className="leaveComment">Leave a comment</h2>
                    <form onSubmit={router.asPath === `/issues/${router.query.slug}` ? handleIssueCommentSubmit : handleBlogsCommentSubmit}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <input className={`form-control mb-2 px-2 ${borderCommentNameErr && "errRed"}`} type="text" name="name" placeholder="Name" onChange={handleChange} value={commentsData.name} />
                            </div>
                            <div className="col-12 col-md-6">
                            {
                                loading && <Spinner />
                            }
                                <input className={`form-control mb-2 px-2 ${borderCommentEmailErr && "errRed"}`} type="email" name="email" placeholder="Email" onChange={handleChange} value={commentsData.email} />
                            </div>
                            <br />
                            <div className="col-12 mb-3">
                                <Editior />
                            </div>
                        </div>
                        <button type="submit" className="commentBtn post-btn">Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default AddComments;
