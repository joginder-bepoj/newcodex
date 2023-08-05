import Head from 'next/head'
import HomeBanner from "../components/banners/HomeBanner"
import SiteBanner from "../components/siteBanner/SiteBanner"
import TutorialTab from '../components/tutorialTab/TutorialTab'
import Goals from "../components/goals/Goals"
// import Issue from '../components/issues/Issues'
import Blogs from "../components/blogs/Blogs"
import PopularTutorial from "../components/popularTutorial/PopularTutorial"
import TrainingPlatform from "../components/training/TrainingPlatform"
import Layout from "../layout/Layout"
import axios from 'axios';
import { issue, blogs, skills } from '../services/services'
import Advertisement from '../components/advertisement/Advertisement'
import Loader from "../components/spinner/Spinner"
import Placeholder from '../components/issues/Placeholder'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useState } from 'react'

const Issue = dynamic(()=>import("../components/issues/Issues"), {loading: ()=><Placeholder />})

 
export default function Home({metaTags,  skillData, loading}) {
  const [issueData, setIssueData] = useState([])
  const [blogsData, setBlogsData] = useState([])
  useEffect(() => {
      const getData = async () =>{
        const issueData = await issue() 
        const blogsData = await blogs() 
        setIssueData(issueData)
        setBlogsData(blogsData)
      //  return issueData, blogsData
      }        
      getData()
        
      
  }, [])

  
  return (
    <div >
      <Head>
        <title>CodexView: Explore Online Courses & Learning Resources</title>
        <meta name="keywords" content={metaTags[0].meta_tags} />
        <meta name="description" content={metaTags[0].meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomeBanner />
        <SiteBanner />
        <Advertisement />
        <TutorialTab skillData={skillData} />
        <Goals />
        <Advertisement />
        <Issue issueData={issueData} />
        <Blogs blogsData={blogsData} />
        <PopularTutorial />
        <Advertisement />
        <TrainingPlatform />
        {loading ? <Loader /> : null}
      </Layout>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getmetatags/2`, {
      headers: {
          "X-API-KEY": process.env.NEXT_APP_API_KEY
      }
    });
  const metaTags = res.data
 
  const skillData = (await skills()) || []
  return {
    props: {metaTags, skillData}, // will be passed to the page component as props
  }
}
