import React from 'react'
import Head from "next/head"
import Advertisement from '../components/advertisement/Advertisement'
import AboutBanner from '../components/banners/AboutBanner'
import PopularCourses from '../components/course/PopularCourses'
import PopularTutorial from '../components/popularTutorial/PopularTutorial'
import courseBnr from "../assets/course-bnr.png"
import Layout from '../layout/Layout'
import Loader from "../components/spinner/Spinner"

const courses = ({loading}) => {
  return (
    <>
    <div>
        <Head>
            <title>Courses</title>
            <meta name="description" content="Courses page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
        <AboutBanner name={"Course"} bnrImg={courseBnr} />
            <Advertisement />
            <PopularCourses />
            <Advertisement />
            <PopularTutorial />
            <Advertisement />
            {loading ? <Loader /> : null}
        </Layout>
    </div>
    </>
  )
}

export default courses