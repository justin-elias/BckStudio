// Core
import React from "react";
import {BckAppProps} from "../../../index";
// Styles
import {makeStyles} from "@mui/styles";
// @ts-ignore
import classNames from "classnames";
import {primaryColor} from "../../../assets/theme";
import {container} from "../../../assets/globals";
// Components
import {List, ListItem} from "@mui/material";
import Link from "next/link";
import HeroImg from "../../HeroImg/HeroImg";
import SocialMediaInfo from "../../SocialMediaInfo/SocialMediaInfo";
import BusinessInfo from "../../BusinessInfo/BusinessInfo";
// Assets

const useStyles = makeStyles((theme) => ({
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
    },
    left: {
        float: "left",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
            // @ts-ignore
            [theme.breakpoints.up("md")]: {
                float: "right!important"
        },
            // @ts-ignore
            [theme.breakpoints.down("sm")]: {
                float: "center!important"
        }
    },
    footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }


}));

export default function Footer(props: BckAppProps) {
    const classes = useStyles();
    const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
    return (
        <React.Fragment>
            <footer className={footerClasses} role={"footer"}>
              <div className={classes.container}>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <Link href={"/memberships"}>
                        <a
                            className={classes.block}
                        >
                          Memberships
                        </a>
                        </Link>
                      </ListItem>
                      <ListItem className={classes.inlineBlock}>
                        <Link href={"/classes-encounters"} passHref>
                        <a
                          className={classes.block}
                        >
                          Classes & Encounters
                        </a>
                        </Link>
                      </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <Link href={"/contact"} passHref>
                        <a
                            className={classes.block}
                        >
                          Contact Us
                        </a>
                      </Link>
                    </ListItem>
                    </List>
                  </div>
                  <div className={classes.right}>
                    &copy; {new Date().getFullYear()} Bozeman Community Kiln
                  </div>
                </div>
            </footer>
        </React.Fragment>
    );
};