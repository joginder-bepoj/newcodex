import React, {useState, useEffect} from 'react'
import Advertisement from '../../components/advertisement/Advertisement'
import Layout from "../../layout/Layout"
import BlogView from '../../components/blogs/BlogView'
import AddComments from '../../components/forms/AddComments'
import { ToastContainer } from 'react-toastify'
import AboutBanner from '../../components/banners/AboutBanner'
import blogImg from "../../assets/blog-bnr.png"
import axios from 'axios'
import {blogs} from "../../services/services"
import { useStateContext } from '../../context/StateContext'
import Head from 'next/head'
import Loader from "../../components/spinner/Spinner"

const BlogsViewPage = ({singleBlog, blogsData, loading}) => {
    const [addComment, setAddComment] = useState(false)
    const {setBlogsId} = useStateContext()
    useEffect(() => {
      setBlogsId(singleBlog?.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <>
    <div>

      <Head>
        <title>{singleBlog.title}</title>
        <meta name="description" content="Issue page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            <AboutBanner name={"Blog"} bnrImg={blogImg} />
            <Advertisement />
            <BlogView singleBlog={singleBlog} blogsData={blogsData}  setAddComment={setAddComment} />
            {addComment && <AddComments />}
            <Advertisement />
            <ToastContainer />
            {loading ? <Loader /> : null}
        </Layout>
    </div>
    </>
  )
}

export default BlogsViewPage


export async function getServerSideProps({params}) {
  const blogsData = (await blogs()) || []

    const res = await axios.get(
      `${process.env.NEXT_APP_API_URL}/getBlogs/${params.slug}`,
      {
        headers: {
          "X-API-KEY": process.env.NEXT_APP_API_KEY,
        },
      }
    );
    const singleBlog = res.data[0];

  return {
    props: {singleBlog, blogsData}, // will be passed to the page component as props
  }
}