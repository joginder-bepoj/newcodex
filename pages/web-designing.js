import React from 'react'
import Head from 'next/head'
import Advertisement from '../components/advertisement/Advertisement'
import TutorialsBanner from '../components/banners/TutorialsBanner'
import PopularTutorial from '../components/popularTutorial/PopularTutorial'
// import WebDesigningComp from '../components/tutorialTab/WebDesigning'
import Layout from '../layout/Layout'
import axios from 'axios'
import { skills } from '../services/services'
import Loader from "../components/spinner/Spinner"
import Placeholder from '../components/tutorialTab/Placeholder'
import dynamic from 'next/dynamic'

const WebDesigningComp = dynamic(()=>import("../components/tutorialTab/WebDesigning"), {loading: ()=><Placeholder />})


const webdesigning = ({metaTags, skillData, loading}) => {
  return (
    <>
      <div>
        
        <Head>
        <title>Web designing</title>
        
        {
          metaTags.map((item, i)=>(
            <React.Fragment key={i}>
              <meta key={i} name="keywords" content={item.meta_tags} />
              <meta key={i} name="description" content={item.meta_description} />
            </React.Fragment>
          ))
        }
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
            <TutorialsBanner />
             <WebDesigningComp skillData={skillData} />
            <Advertisement />
            <PopularTutorial />
            <Advertisement />
            {loading ? <Loader /> : null}
        </Layout>   
        </div>
    </>
  )
}

export default webdesigning

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getmetatags/4`, {
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
