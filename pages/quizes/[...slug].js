import Head from "next/head";
import React from "react";
import Layout from "../../layout/Layout";
import AboutBanner from "../../components/banners/AboutBanner";
import contactBnr from "../../assets/contact-us-bnr.png"
import ViewQuizes from "../../components/quizes/ViewQuizes";
import axios from "axios";


const Quiz = ({chapterList}) => {
  return (
    <>
      <div>
        <Head>
          <title>Quizes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <AboutBanner name={"Quizes"} bnrImg={contactBnr} />
          <ViewQuizes chapterList={chapterList} />
        </Layout>
      </div>
    </>
  );
};

export default Quiz;


export async function getServerSideProps(context) {
    const { params } = context;
    const res = await axios.get(
      `${process.env.NEXT_APP_API_URL}/getSkillChapter/${params.slug[0]}`,
      {
        headers: {
          "X-API-KEY": process.env.NEXT_APP_API_KEY,
        },
      }
    );
    const chapterList = res.data;
    const chapterData = (await skillsOutput(context)) || [];
  
    return {
      props: { chapterList, chapterData }, // will be passed to the page component as props
    };
  }

const skillsOutput = async (context) => {
    const { params } = context;
    try {
      const res = await axios.get(
        `${process.env.NEXT_APP_API_URL}/getSkillChapter/${params.slug[0]}/${params.slug[1]}`,
        {
          headers: {
            "X-API-KEY": process.env.NEXT_APP_API_KEY,
          },
        }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };