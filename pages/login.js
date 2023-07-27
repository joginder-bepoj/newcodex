/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import LoginComponent from "../components/LoginForm/Login"
import Layout from '../layout/Layout'
import {ToastContainer} from "react-toastify"
import Head from 'next/head'
import { useRouter } from 'next/router';
import Loader from "../components/spinner/Spinner"

const Login = ({loading}) => {
  const router = useRouter()
  let user;
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      user = userInfo;
    }
  }, []);

  useEffect(()=>{
      if(user){
          router.push("/")
      }
  },[])

  return (
    <><div>
        <Head>
            <title>User Login</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <LoginComponent />
          <ToastContainer />
          {loading ? <Loader /> : null}
        </Layout>
    </div>
    </>
  )
}

export default Login