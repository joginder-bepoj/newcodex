/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import Layout from "../layout/Layout"
import { ToastContainer } from 'react-toastify'
import Advertisement from '../components/advertisement/Advertisement'
import AboutBanner from '../components/banners/AboutBanner'
import blogImg from "../assets/blog-bnr.png"
import AddBlog from '../components/forms/AddBlog'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Loader from "../components/spinner/Spinner"

const PostBlogs = ({loading}) => {
    const router = useRouter()
    let user;

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("user"));
        if (userInfo) {
          user = userInfo;
        }
    }, []);

    useEffect(()=>{
        if(!user){
            router.push("/login")
        }
    },[])

  
  return (
    <>
    <div>
        <Head>
            <title>Post Blogs</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
        <AboutBanner name={"Blog"} bnrImg={blogImg} />
        <AddBlog />
        <Advertisement />
        <ToastContainer />
        {loading ? <Loader /> : null}
        </Layout>   
    </div>
    </>
  )
}

export default PostBlogs