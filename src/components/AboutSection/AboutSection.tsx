/*
 * Copyright (c) 5/24/22. Bozeman Community Kiln
 */

// Core
import React from "react";
// Style
import {makeStyles} from "@mui/styles";
//@ts-ignore
import classNames from "classnames";
import {cardBodyStyle, cardTitle, imagesStyles, title} from "../../assets/globals";
//Components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import { Typography, Card, CardContent,Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore} from "@mui/icons-material";
import Image from "next/image";
import {nanoid} from "nanoid";
import {StaffType} from "../../index";
// Assets

// @ts-ignore
const useStyles = makeStyles((theme) => ({
    inlineType: {
    display: "inline"
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  description: {
    color: "#444"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "2.563rem",
    fontSize: "1.25",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  leftAlignText: {
    textAlign: "left !important"
  },
  rightAlignText: {
    textAlign: "right !important",
    paddingBottom: "3.05rem"
  },
  expandText: {
    margin: "5rem"
  },
  cardPlain: {
        background: "transparent",
        boxShadow: "none",
        marginTop: "2rem"
    },
  ...imagesStyles,
  cardTitle,
  cardBodyStyle,
  smallTitle: {
    color: "#6c757d",
  },

}));

export default function AboutSection(props: any) {
    const classes = useStyles();
    const {staff} = props

  const hCones = "https://media.graphassets.com/MFyMrP7IQisembYJM4k6";
  const width = 258;
  const height = 336;

  // @ts-ignore
    const imageClasses = classNames(
        // @ts-ignore
        classes.imgRaised,
        // @ts-ignore
        classes.imgRoundedCircle,
        // @ts-ignore
        classes.imgFluid,
        // @ts-ignore
        classes.imgSmall
  );
  const coneImgClasses = classNames(
      // @ts-ignore
      classes.imgSmall
  );
    return (
        <React.Fragment>
            <div
                // @ts-ignore
                className={classes.section}>
              <Typography variant={"h3"}
                    // @ts-ignore
                    className={classes.title}>
                ABOUT BOZEMAN COMMUNITY KILN
             </Typography>
            <GridContainer alignItems={"flex-start"} alignContent={"center"} justifyContent={"center"}>
              <GridItem xs={12} sm={12} md={8}>
                <Typography variant={"body1"} gutterBottom>
                Bozeman Community Kiln invites you to come create, learn, and play with ceramic clay. Members enjoy a relaxed,
                and collaborative atmosphere where they can be inspired to make their own projects at their own pace. The
                experience of working in a studio, filled with unique individuals at different experience levels, fosters
                broader learning opportunities and lasting friendships. Artistic expression offers a creative outlet through
                both sculpting and decorating of each unique clay form you create. From your creative outlet to a great first
                date, creating ceramic pottery is a perfect form of entertainment. From sculpture to cup, vase to platter,
                Bozeman Community Kiln will teach you to use clay to throw your personal portfolio to the next level. Our
                mission is to connect locals with the rich clay history and ceramic community that Montana boasts, and share
                that history with our visitors.
                </Typography>
              </GridItem>
              {staff.map((person: StaffType) => (
                <GridItem xs={12} sm={12} md={6} key={nanoid()}>
                  <Card
                      // @ts-ignore
                      classes={{root: classes.cardPlain}}>
                    <GridItem xs={12} sm={12} md={6}
                              // @ts-ignore
                              className={classes.itemGrid}>
                      <Image src={person.staffPicture.url} width={width} height={height} alt={person.staffPicture.altText} title={person.staffPicture.title} className={imageClasses} placeholder={"blur"} blurDataURL={"../assets/images/blurDefault.png"}/>
                    </GridItem>
                    <Typography variant={"h4"}
                        // @ts-ignore
                        className={classes.cardTitle}>
                      {person.firstName} {person.lastName}
                      <br />
                      <small
                          // @ts-ignore
                          className={classes.smallTitle}>
                          {person.staffTitle}
                      </small>
                    </Typography>
                    <GridItem xs={12} sm={12} md={6}
                              // @ts-ignore
                              className={classes.itemGrid}>
                      <Image src={hCones} alt={"Horizontal Cones divider"} width={"275px"} height={"18px"} className={coneImgClasses} unoptimized/>
                    </GridItem>
                    <CardContent
                        // @ts-ignore
                        className={classes.cardBodyStyle}>
                      <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore/>}
                            aria-controls={person.firstName + "-" + person.lastName + "-bio-content"}
                            id={person.firstName + "-" + person.lastName + "-bio-header"}
                        >
                          <Typography variant={"h4"}
                              // @ts-ignore
                              className={classNames(classes.cardTitle)}>
                                  Learn about {person.firstName}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant={"body1"} align={"left"}>
                            {person.staffBio.text}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </CardContent>
                  </Card>
                </GridItem>
              ))}
            </GridContainer>
          </div>
        </React.Fragment>
    );
}