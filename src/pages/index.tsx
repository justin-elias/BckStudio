import type { NextPage } from 'next'
import Head from 'next/head'
import {container, title, mainElement} from '../assets/globals'
import {makeStyles} from "@mui/styles";
import gql from "graphql-tag";
import {PageContextData, StaffQuery, StaffType} from "../index";
import {queryCMS} from "../utils/queryCMS";
import shuffleArray from "../utils/shuffleArray";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import CLPSection from "../components/CLPSection/CLPSection";
import AboutSection from "../components/AboutSection/AboutSection";
import {ShowPreview} from "../components/ShowPreview/ShowPreview";
import React from "react";

const useStyles = makeStyles(() => ({
    container,
    title,
    mainElement

}))

const staffQuery = gql`{
    instructors(where: {isStaff: true, staffTitle_not: null}) {
        firstName,
        lastName,
        staffBio{
            text
        },
        staffPicture{
            title
            altText
            height
            width
            url
        },
        staffTitle
    }
}`

export async function getStaticProps(context: PageContextData) {
    try {
        const preview = context.preview ? context.preview : null;
        const prodToken = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN;
        const token = preview ? (context.previewData?.token + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT!) : prodToken;
        const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!
        const staff: Array<StaffQuery> = await queryCMS(staffQuery, token!, endPoint);

        return {
            props: {staff, preview}, // will be passed to the page component as props
        }
    } catch (e) {
        return {
            props: {staff: null, preview: false}, // will be passed to the page component as props        }
        }
    }
}

const Home: NextPage = (props: any) => {
    const classes = useStyles()
    const { staff, preview } = props

    const shuffledStaff = () => {
        if (staff !== null) {
            const shuffle: Array<StaffType> = shuffleArray(staff.instructors)
            for (let i = 0; i < shuffle.length; i++) {
                if (shuffle[i].staffTitle === "Studio Dog" && i !== shuffle.length - 1) {
                    const temp = shuffle[i];
                    shuffle[i] = shuffle[shuffle.length - 1]
                    shuffle[shuffle.length - 1] = temp
                }
            }
            return shuffle
        }
    }
  return (
    <div className={classes.container}>
        <Head>
            <title>Pottery Classes & Studio • Bozeman Community Kiln</title>
            <link rel="canonical" href="https://bckstudio.com/"/>
            <meta name="description"
                  content="Whether you are interested in a first clay encounter, looking for the perfect pottery
                     class, or need your own ceramic studio space, Bozeman Community Kiln is here."
            />
        </Head>
        <ShowPreview preview={preview} page={""}/>
        <main role={"main"}>
            <BrandedHeader>
                <CLPSection/>
            </BrandedHeader>
            <AboutSection staff={shuffledStaff()}/>
        </main>
    </div>
  )
}

export default Home
