import React, { useEffect, useState } from "react";
import Advertisement from "../components/advertisement/Advertisement";
import TutorialsBanner from "../components/banners/TutorialsBanner";
import ViewTutorial from "../components/tutorialTab/ViewTutorial";
import Layout from "../layout/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Loader from "../components/spinner/Spinner"

const Tutorials = ({ chapterList, chapterData, loading }) => {
  const [fadeinClass, setFadeinClass] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (
      chapterList[0]?.sub_chapter[0]?.url !== undefined &&
      router.asPath === `/${router.query.slug[0]}`
    ) {
      router.push(
        `/${router.query.slug}/${chapterList[0]?.sub_chapter[0].url}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterList]);
  useEffect(()=>{
    setFadeinClass(!fadeinClass);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[chapterData])

  const navigation = (id, chapterList) => {
    let chapterId = chapterList.sub_chapter.filter(
      (chapter) => chapter.id === id
    );
    if (chapterId[0]?.url !== router.query.slug[1]) {
      router.push(`/${router.query.slug[0]}/${chapterId[0]?.url}`);
    }
  };

  return (
    <>
      <div>

      <Head>
          <title>{chapterData?.sub_chapter}</title>
          <meta name="description" content={chapterData?.meta_description} />
          <meta name="keywords" content={chapterData?.meta_keywords} />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <TutorialsBanner />
        <ViewTutorial
          chapterList={chapterList}
          chapterData={chapterData}
          navigation={navigation}
          fadeinClass={fadeinClass}
          />
        <Advertisement />
        {loading ? <Loader /> : null}
      </Layout>
          </div>
    </>
  );
};

export default Tutorials;

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
