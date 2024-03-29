/*
 * Copyright (c) 5/18/22. Bozeman Community Kiln
 */

import React, {ReactFragment} from "react";
// core components
import Head from "next/head";
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import classNames from "classnames";
import {
    brandFont,
    mainElement,
    playBrand,
    primaryFontColor,
    secondaryColor,
    title
} from "../assets/globals";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import ClassList from "../components/ClassList/ClassList";
import {queryCMS} from "../utils/queryCMS";
import gql from "graphql-tag"
import {ShowPreview} from "../components/ShowPreview/ShowPreview";
import {Theme} from "@mui/system";
import {ClassCategories, PageContextData, ClassListResults, DefaultInstructorQueryResults} from "../index";
import {nanoid} from "nanoid";

const useStyles = makeStyles((theme: Theme) => ({
    h1Container: {
        backgroundColor: theme.palette.secondary.main,
        padding: "2.5rem",
    },
    textBody: {
        maxWidth: "50vw",
        margin: "auto",
        paddingBottom: "2.5rem"
    },

    column: {
        flexBasis: "33.33%",
    },
    panel: {
        maxWidth: "50%",
        margin: "auto"
    },
    grid: {
        backgroundColor: "fff"
    },
    playExclaim: {
        fontSize: "0.85em"
    },
    playBrand: {
        color: theme.palette.primary.main
    },
    main_content: {
        position: "relative",
        zIndex: "2"
    },
    mainContentRaised: {
        margin: "auto",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    play_brand: {
        ...playBrand
    },
    clp_exclaim: {
        ...playBrand,
        fontSize: "0.85em"

    },
    section: {
        width: "100%",
        padding: "70px 0",
        textAlign: "center",
        backgroundColor: secondaryColor
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: primaryFontColor
    },
    links: {
        color: "#0645AD"
    },

    iframeWrapper: {
        margin: "2.5rem"
    },
    mainElement,
    brandFont
}));
// @ts-ignore

const classCategories = gql`{
    classCategories {
        categoryTitle
        description
        classes{
            className
            displayTitle
            instructor {
                firstName
                lastName
                headshotImage {
                    altText
                    height
                    width
                    url
                }
                bio {
                    text
                }
                instructorStatement {
                    text
                }
            }
            classLink
            buttonText
            disableBookingButton
            classDescriptionList
            classInfoList
        }
    }
}`

const defaultInstructorQuery =
    gql`{  
        instructor(where: {defaultInstructor: true}){
            firstName
            lastName
            headshotImage {
                url
            }
            bio {
                text
            }
            instructorStatement {
                text
            }
        }       
    }`;


export async function getStaticProps(context: PageContextData) {
    try {
        const preview = context.preview ? context.preview : null;
        const prodToken = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN;
        const token = preview ? (context.previewData.token! + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT) : prodToken;
        const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

        const classListQueryResult: ClassListResults = await queryCMS(classCategories, token!, endPoint!);
        const defaultInstructor: DefaultInstructorQueryResults = await queryCMS(defaultInstructorQuery, token!, endPoint!);

        return {
            props: {classListQueryResult, defaultInstructor, preview}, // will be passed to the page component as props
        }
    } catch (e) {
        return {
            props: {classListQueryResult: null, defaultInstructor: null, preview: false}, // will be passed to the page component as props
        }
    }
}

export default function ClassesEncounters(props: any) {
    const classes = useStyles();
    const { classListQueryResult, defaultInstructor, preview } = props;

    const classLists = () => {
            let result: Array<ReactFragment> = [];
            if (classListQueryResult) {
                classListQueryResult.classCategories.map((category: ClassCategories) => {
                    if (category.categoryTitle !== "Encounters") {
                        result.push(<ClassList index={nanoid()} classList={category}
                                               key={category.categoryTitle} title={category.categoryTitle}
                                               defaultInstructor={defaultInstructor}/>)
                    }
                })
            }
            return result
        }
    return (
        <React.Fragment>
            <Head>
                <title>Clay Classes • Bozeman Community Kiln</title>
                <link rel="canonical" href="https://bckstudio.com/classes-encounters/"/>
                <meta name="description"
                      content="Join us for one of our classes to learn a variety of pottery techniques from local artists, or try our clay encounters, a one-time visit great for playing with clay."/>
            </Head>
            <ShowPreview preview={preview} page={"classes-encounters"}/>
            <main role={"main"}>
                <BrandedHeader>
                    <Typography variant={"h1"} align={"center"} className={classNames(classes.brandFont)} gutterBottom>
                        LEARN.
                    </Typography>
                    <div className={classes.textBody}>
                        <Typography variant={"body1"} component={"p"} align={"center"}>
                            Thank you for your interest in our classes. Classes at BCK directly support local, working artists. After regular studio hours, artists rent the studio to teach curriculum they create, creating more variety and opportunities for you to learn the art of ceramics. Read on to find the adult or youth class that speaks to you.
                        </Typography>
                    </div>
                </BrandedHeader>
                {classLists()}
            </main>
        </React.Fragment>
    );
}
