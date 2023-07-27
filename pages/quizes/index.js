import Head from 'next/head'
import React from 'react'
import Layout from '../../layout/Layout'
import AboutBanner from '../../components/banners/AboutBanner'
import contactBnr from "../../assets/contact-us-bnr.png"
import Quiz from '../../components/quizes/Quiz'
import { skills } from '../../services/services'
import axios from 'axios'
import Advertisement from '../../components/advertisement/Advertisement'
import PopularTutorial from '../../components/popularTutorial/PopularTutorial'

const index = ({ skillData, metaTags }) => {
    return (
        <>
            <div>
                <Head>
                    <title>Quizes</title>
                    {
                        metaTags.map((item, i) => (
                            <React.Fragment key={i}>
                                <meta key={i} name="keywords" content={item.meta_tags} />
                                <meta key={i} name="description" content={item.meta_description} />
                            </React.Fragment>
                        ))
                    }
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout >
                    <AboutBanner name={"Quizes"} bnrImg={contactBnr} />
                    <Quiz skillData={skillData} />
                    <Advertisement />
                    <PopularTutorial />
                    <Advertisement />
                </Layout>
            </div>
        </>
    )
}

export default index

export async function getServerSideProps(context) {
    const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getmetatags/4`, {
        headers: {
            "X-API-KEY": process.env.NEXT_APP_API_KEY
        }
    });
    const metaTags = res.data
    const skillData = (await skills()) || []
    return {
        props: { metaTags, skillData }, // will be passed to the page component as props
    }
}