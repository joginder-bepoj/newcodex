import React from 'react'
import Layout from '../../layout/Layout'
import UserBG from '../../components/usersinfo/UserBG'
import UsersTabs from '../../components/usersinfo/UsersTabs'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import Head from 'next/head'
import Loader from "../../components/spinner/Spinner"

const UserProfile = ({userViewData, loading}) => {
  return (
    <>
    <div>

        <Head>
            <title>{userViewData?.user}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <UserBG userViewData={userViewData}  />
            <UsersTabs userViewData={userViewData} />
            <ToastContainer /> 
            {loading ? <Loader /> : null}
        </Layout>    
    </div>
    </>
  )
}

export default UserProfile


export async function getServerSideProps(context) {
    const {params} = context;
    const res = await axios.get(`${process.env.NEXT_APP_API_URL}/user_profile/${params.slug}`, {
        headers:{
          "X-API-KEY": process.env.NEXT_APP_API_KEY,
        }
    })

    const userViewData = res.data;

    return {
      props: {userViewData}, // will be passed to the page component as props
    }
}
