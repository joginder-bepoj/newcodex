import React from 'react'
import { useStateContext } from '../../context/StateContext'
import Spinner from '../spinner/Spinner'
import Editior from './Editior'

const Add = () => {
    const { handleIssuePost, issuePostData, setIssuePostData, loading } = useStateContext()
    const handleChange = (e) => {
        setIssuePostData({ ...issuePostData, [e.target.name]: e.target.value })
    }
    return (
        <>
           <section className="issue py-4">
                <div className="container">
                <h2 className="site-heading mb-3">Post Your Issues</h2>
                <div className="card">
                    <div className="card-body rounded-2 bg-light">
                        <form onSubmit={handleIssuePost}>
                            <div className="row">
                                <div className="col-md-6"><input type="text" name='title' onChange={handleChange} value={issuePostData.title} placeholder='Title' className="modalInp w-100 border-bottom" /></div>
                                <div className="col-md-6"><input type="text" name='skill' onChange={handleChange} value={issuePostData.skill} placeholder='Skill Name' className="modalInp w-100 border-bottom" /></div>
                            </div>
                            <Editior />
                            <button type='submit' className='modalBtn mt-2 post-btn'>Post</button>
                        </form>
                    </div>
                </div>
                {loading && <Spinner />}
            </div>
            </section>
        </>
    )
}

export default Add