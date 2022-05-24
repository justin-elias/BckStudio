/*
 * Copyright (c) 2020. Bozeman Community Kiln
 */

/// <reference types="node_modules/@types/use-global-hook/index.d.ts" />

import {AppProps} from "next/app"
import {Event} from "@sentry/types"
import {ReactNode} from "react";
import {ButtonProps} from "@mui/material/core";
import {containerFluid, drawerWidth, transition} from "./assets/globals";
import theme from "./assets/theme";
import {NextApiRequest, PreviewData} from "next";

declare module 'classnames';

export interface LogoButtonProps extends ButtonProps{
    width: string,
    height: string,
    src: string
}
export interface BckUser{
    id: string,
    token: string | undefined,
    email: string | null
}
export interface CmsImage{
    altText: string,
    title: string,
    height: number
    width: number,
    url: string,
}

export interface BioCard{
    person: {
        staffBio: string,
        firstName: string,
        lastName: string,
        staffPicture: CmsImage,
        staffTitle: string
    }
}

export interface MembershipTier {
    title: string,
    price: number,
    description: [string],
    buttonVariant: "text" | "outlined" | "contained",
    buttonText: string,
    inputValue: string,
    term: "Month" | "Pass",
}

export interface BckAppProps extends AppProps {
    err: Event;
    children?: ReactNode;
    user?: BckUser;
    preview?: boolean;
    whiteFont?: boolean;
}

export interface HeroImg {
    src: string,
    children?: ReactNode
}
export interface PricingProps extends BckAppProps{
    tierCategory: Map<MembershipTier>,
    title: string,
    maxWidth: "lg" | "sm",
}

export interface PreviewProps{
    page?: string;
    preview?: boolean;
}

export interface faq{
    question: string
    answer: {
        html?: string
        text?: string
        markdown?: string
        raw?: string
    }
}
export interface faqPage{
    listOfFaQs: [faq]
}
export interface faqQueryProp{
    faqPage: faqPage
}
export interface FaqProps extends BckAppProps{
    faqQueryResult: faqQueryProp
}

export interface MD {
    source: faq
}

export interface PagePreviewData extends PreviewData{
    token?: string
}
export interface PageContextData extends NextApiRequest {
    previewData: PagePreviewData
}

export interface ClassType extends Array<any>{
    className: string
    displayTitle: string
    instructor?: {
        firstName: string
        lastName: string
        headshotImage: {
            altText: string
            height: string
            width: string
            url: string
        }
        bio: {
            text: string
        }
        instructorStatement: {
            text: string
        }
    }
    classLink: string
    buttonText: string
    disableBookingButton: string
    classDescriptionList: Array<string>
    classInfoList: Array<string>
}
export interface ClassCategories extends Array<any> {
    categoryTitle: string
        description: string
        classes: Array<ClassType>
}
export interface ClassListResults {
    classCategories?: Array<ClassCategories>
}

export interface DefaultInstructorQueryResults {
    instructor: {
        firstName: string
        lastName: string
        headshotImage: {
            url: string
        }
        bio: {
            text: string
        }
        instructorStatement: {
            text: string
        }
    }
}

export interface StaffType {
    firstName: string
    lastName: string
    staffBio:{
        text:string
    },
    staffPicture:{
        title: string
        altText: string
        height: string
        width: string
        url: string
    },
    staffTitle: string
}
export interface StaffQuery {
    instructors: Array<StaffType>
}