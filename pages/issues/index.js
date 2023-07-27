import React from 'react'
import Head from 'next/head'
import Layout from "../../layout/Layout"
import Advertisement from "../../components/advertisement/Advertisement"
import { ToastContainer } from 'react-toastify'
// import IssuesComp from '../../components/issues/Issues'
import AboutBanner from '../../components/banners/AboutBanner'
import issueBnr from "../../assets/issue-bnr.png"
import axios from 'axios'
import { issue } from '../../services/services'
import Loader from "../../components/spinner/Spinner"
import dynamic from 'next/dynamic'
import Placeholder from '../../components/issues/Placeholder'

const IssuesComp = dynamic(()=>import("../../components/issues/Issues"), {loading: ()=><Placeholder />})

const issues = ({metaTags, issueData, loading}) => {
  return (
    <>
    <div>

        <Head>
        <title>Issue</title>
        <meta name="keywords" content={metaTags[0].meta_tags} />
        <meta name="description" content={metaTags[0].meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            <AboutBanner name={"Issues"} bnrImg={issueBnr} />
            <Advertisement />
            <IssuesComp issueData={issueData} />
            <Advertisement />
            <ToastContainer />
            {loading ? <Loader /> : null}
        </Layout>  
    </div>
    </>
  )
}

export default issues

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getmetatags/5`, {
      headers: {
          "X-API-KEY": process.env.NEXT_APP_API_KEY
      }
    });
  const metaTags = res.data
  const issueData = (await issue()) || []
  return {
    props: {metaTags, issueData}, // will be passed to the page component as props
  }
}
