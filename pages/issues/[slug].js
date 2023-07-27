import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Advertisement from '../../components/advertisement/Advertisement'
import AddComments from '../../components/forms/AddComments'
import IssueViewComp from '../../components/issues/IssueView'
import Layout from '../../layout/Layout'
import { ToastContainer } from 'react-toastify'
import AboutBanner from '../../components/banners/AboutBanner'
import issueBnr from "../../assets/issue-bnr.png"
import {issue} from "../../services/services"
import axios from 'axios'
import { useStateContext } from '../../context/StateContext'
import Loader from "../../components/spinner/Spinner"


const IssueView = ({issueData, singleIssue, loading}) => {
    const [addComment, setAddComment] = useState(false)
    const {setIssueId} = useStateContext()

    useEffect(() => {
      setIssueId(singleIssue?.id)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
  return (
    <>
    <div>

      <Head>
        <title>{singleIssue.issue_title}</title>
        <meta name="description" content="Issue page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AboutBanner name={"Issues"} bnrImg={issueBnr} />
            <Advertisement />
            <IssueViewComp issueData={issueData} singleIssue={singleIssue} setAddComment={setAddComment} />
            {
              addComment && <AddComments />
            } 
            <Advertisement />
            <ToastContainer />
            {loading ? <Loader /> : null}
        </Layout>
            </div>
    </>
  )
}

export default IssueView



export async function getServerSideProps({params}) {
  const issueData = (await issue()) || []

    const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getIssue/${params.slug}`, {
      headers: {
        "X-API-KEY": process.env.NEXT_APP_API_KEY,
      }
    })
    const singleIssue = res.data[0]
    
  return {
    props: {issueData, singleIssue}, // will be passed to the page component as props
  }
}