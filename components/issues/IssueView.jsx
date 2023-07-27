import React from 'react'
import Link from 'next/link'
import { useStateContext } from '../../context/StateContext'
import Comments from '../comments/Comments'

const IssueView = ({issueData, singleIssue, setAddComment}) => {
  const { handleProfileNavigate} = useStateContext()

  return (
    <>
      <section className="issue py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="border-bottom pb-3">
                <h3 className="sub-heading">{singleIssue?.issue_title}</h3>
                <div className="d-flex">
                  <span className="fw-normal px-2">Posted </span> <span className="pe-2 text-capitalize" style={{cursor: "pointer"}} onClick={()=>handleProfileNavigate(singleIssue)}>by {singleIssue?.name || "Priyanka"}</span>
                  <span className="fw-normal px-2"> | &nbsp; {singleIssue?.date.slice(0, 11)} </span>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div dangerouslySetInnerHTML={{ __html: singleIssue?.issue_description}} />
              </div>
              <div className="border-bottom btn-post py-4">
                  <button className="post-btn" title="" onClick={()=>setAddComment(true)} >Add a Comment</button>
              </div>
              <h6 className="py-4">This post has {singleIssue?.issue_comments?.length} Comment </h6>
              <div className="issue-comments">
                {
                  singleIssue?.issue_comments?.map(item =>(
                    <Comments key={item.id} item={item} />
                  ))
                }
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <div className="card p-3 related_issue">
                <h3>Related Issue </h3>
                <ul>
                  {
                    issueData.map(item =>(
                      item.id !== singleIssue?.id && <li className="d-flex align-items-center border-bottom" key={item.id}>
                      <svg className="me-2" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5174 6.78957C18.3533 6.84313 18.2637 7.01957 18.3173 7.18363C18.613 8.08984 18.763 9.03742 18.763 10C18.763 12.4225 17.8197 14.6998 16.1068 16.4128C14.3938 18.1257 12.1164 19.069 9.69398 19.069C7.27156 19.069 4.99414 18.1257 3.28121 16.4128C1.56828 14.6998 0.625 12.4224 0.625 10C0.625 7.57758 1.56832 5.30016 3.28125 3.58723C4.99418 1.8743 7.2716 0.930977 9.69402 0.930977C10.9788 0.930977 12.2201 1.19402 13.3837 1.71289C14.5079 2.21422 15.5043 2.92805 16.345 3.83457C16.4623 3.96109 16.6601 3.96859 16.7866 3.85117C16.9132 3.73383 16.9206 3.53613 16.8033 3.40953C15.9048 2.44082 14.84 1.67797 13.6383 1.14207C12.394 0.587305 11.067 0.305977 9.69402 0.305977C7.10465 0.305977 4.67027 1.3143 2.83934 3.14531C1.00836 4.97625 0 7.41062 0 10C0 12.5893 1.00836 15.0237 2.83934 16.8546C4.67027 18.6856 7.10465 19.694 9.69402 19.694C12.2834 19.694 14.7178 18.6857 16.5487 16.8546C18.3797 15.0237 19.388 12.5893 19.388 10C19.388 8.97141 19.2277 7.95859 18.9114 6.98969C18.8579 6.82563 18.6814 6.73613 18.5174 6.78957Z" fill="#17A99D" />
                        <path d="M19.7254 3.25242C19.5483 3.07516 19.3127 2.97754 19.0621 2.97754C18.8114 2.97754 18.5758 3.07516 18.3989 3.2523L18.1191 3.53203C17.9971 3.65406 17.9971 3.85191 18.1191 3.97395C18.2412 4.09594 18.4391 4.09598 18.5611 3.97391L18.8409 3.69406C18.8999 3.635 18.9784 3.6025 19.062 3.6025C19.1456 3.6025 19.2241 3.635 19.2833 3.69422C19.3424 3.75336 19.375 3.83188 19.375 3.91543C19.375 3.99898 19.3424 4.0775 19.2833 4.13664L8.50789 14.9121C8.44891 14.9712 8.37039 15.0037 8.2868 15.0037C8.2032 15.0037 8.12469 14.9712 8.06555 14.912L3.8573 10.7037C3.79816 10.6446 3.76559 10.5661 3.76559 10.4825C3.76559 10.399 3.79816 10.3204 3.85742 10.2611C3.91641 10.2021 3.99492 10.1696 4.07852 10.1696C4.16211 10.1696 4.24062 10.2021 4.29977 10.2613L8.06582 14.0273C8.12441 14.0859 8.20391 14.1189 8.2868 14.1189C8.36969 14.1189 8.44918 14.0859 8.50777 14.0273L17.6816 4.85355C17.8036 4.73148 17.8036 4.53367 17.6816 4.4116C17.5595 4.28961 17.3617 4.28961 17.2396 4.4116L8.2868 13.3644L4.74187 9.81945C4.5648 9.64219 4.32926 9.54457 4.07859 9.54457C3.82793 9.54457 3.59234 9.64219 3.41539 9.81934C3.2382 9.99652 3.14062 10.232 3.14062 10.4825C3.14062 10.733 3.2382 10.9685 3.41539 11.1457L7.62352 15.3538C7.80055 15.5311 8.03613 15.6287 8.2868 15.6287C8.53746 15.6287 8.77305 15.5311 8.94996 15.354L19.7252 4.57867C19.9024 4.40148 20 4.16598 20 3.91547C20 3.66496 19.9024 3.42945 19.7254 3.25242Z" fill="#17A99D" />
                      </svg>
                      <Link href={`/issues/${item.issue_url}`} title={item.issue_title} className="fs-6 py-3">
                        {item.issue_title}
                      </Link>
                    </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IssueView
