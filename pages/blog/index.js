import React from 'react'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import Advertisement from '../../components/advertisement/Advertisement'
import AboutBanner from '../../components/banners/AboutBanner'
// import Blogs from '../../components/blogs/Blogs'
import Layout from '../../layout/Layout'
import blogImg from "../../assets/blog-bnr.png"
import axios from 'axios'
import { blogs } from '../../services/services'
import Loader from "../../components/spinner/Spinner"
import Placeholder from '../../components/blogs/Placeholder'
import dynamic from 'next/dynamic'

const Blogs = dynamic(()=>import("../../components/blogs/Blogs"), {loading: ()=><Placeholder />})



const blog = ({metaTags, blogsData, loading}) => {
  return (
    <>
    <div>
        <Head>
            <title>Blog</title>
            <meta name="keywords" content={metaTags[0].meta_tags} />
        <meta name="description" content={metaTags[0].meta_description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <AboutBanner name={"Blog"} bnrImg={blogImg} />
            <Advertisement />
            {
              blogsData ? <Blogs blogsData={blogsData} /> : <Placeholder />
            }
            {/* <Blogs blogsData={blogsData} /> */}
            <Advertisement />
            <ToastContainer />
            {loading ? <Loader /> : null}
        </Layout>
    </div>
    </>
  )
}

export default blog

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getmetatags/8`, {
      headers: {
          "X-API-KEY": process.env.NEXT_APP_API_KEY
      }
    });
  const metaTags = res.data
  const blogsData = (await blogs()) || []
  return {
    props: {metaTags, blogsData}, // will be passed to the page component as props
  }
}
