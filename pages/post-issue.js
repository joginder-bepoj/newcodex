/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import Layout from '../layout/Layout'
import issueBnr from "../assets/issue-bnr.png"
import Advertisement from "../components/advertisement/Advertisement"
import { ToastContainer } from 'react-toastify'
import AboutBanner from '../components/banners/AboutBanner'
import Add from '../components/forms/Add'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Loader from "../components/spinner/Spinner"

const PostIssue = ({loading}) => {
    let user;
    const router = useRouter()

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
                <title>Post Issue</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <AboutBanner name={"Post Issue"} bnrImg={issueBnr} />
                <Add />
                <Advertisement />
                <ToastContainer />
                {loading ? <Loader /> : null}
            </Layout>
        </div>
        </>
    )
}

export default PostIssue