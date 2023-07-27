import React from 'react'
import Editior from './Editior'
import { useStateContext } from '../../context/StateContext'
import Spinner from '../spinner/Spinner'

const AddBlog = () => {
    const {handleBlogPost, blogPostData, setBlogPostData, loading, setBlogsFile} = useStateContext()
    const handleChange =(e) =>{
        setBlogPostData({...blogPostData, [e.target.name]: e.target.value})
    }
    const handleFileChange = (e) =>{
        setBlogsFile(e.target.files[0])
    }
  return (
    <>
       <section className="issue py-4">
                <div className="container">
                    <h2 className="site-heading mb-3">Post Your Blogs</h2>
                    <div className="card">
                        <div className="card-body rounded-2 bg-light">
                            <form onSubmit={handleBlogPost}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="title"
                                            value={blogPostData.title}
                                            onChange={handleChange}
                                            placeholder="Title"
                                            className="modalInp w-100 border-bottom"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="skill"
                                            value={blogPostData.skill}
                                            onChange={handleChange}
                                            placeholder="Skill Name"
                                            className="modalInp w-100 border-bottom"
                                        />
                                    </div>
                                </div>
                                <input
                                    type="file"
                                    name="file"
                                    accept="image/png, image/gif, image/jpeg"
                                    onChange={handleFileChange}
                                    className="modalInp w-100 border-bottom"
                                />
                                <br />
                                <Editior />
                                <button type="submit" className="modalBtn mt-2 post-btn">
                                    Post Blog
                                </button>
                            </form>
                        </div>
                        {loading && <Spinner />}
                    </div>
                </div>
            </section>
    </>
  )
}

export default AddBlog