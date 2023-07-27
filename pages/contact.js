import React from 'react'
import Head from "next/head"
import AboutBanner from "../components/banners/AboutBanner"
import contactBnr from "../assets/contact-us-bnr.png"
import ContactForm from '../components/contactForm/ContactForm'
import Layout from '../layout/Layout'
import axios from 'axios'
import Loader from "../components/spinner/Spinner"

const contact = ({metaTags, loading}) => {
  return (
    <>
    <div>
        <Head>
        <title>Contact</title>
        <meta name="keywords" content={metaTags[0].meta_tags} />
        <meta name="description" content={metaTags[0].meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <AboutBanner name={"Contact Us"} bnrImg={contactBnr} />
      <ContactForm />
      {loading ? <Loader /> : null}
      </Layout>
    </div>
    </>
  )
}

export default contact


export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getmetatags/7`, {
      headers: {
          "X-API-KEY": process.env.NEXT_APP_API_KEY
      }
    });
  const metaTags = res.data
  return {
    props: {metaTags}, // will be passed to the page component as props
  }
}
