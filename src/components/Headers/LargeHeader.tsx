// Core
import React, {useEffect} from "react";
// Style
import {makeStyles} from "@mui/styles";
import classNames from "classnames";
import {headerStyle} from "../../assets/globals";
//Components
import {AppBar, Toolbar} from "@mui/material";
import LogoButton from "../Buttons/LogoButton";
// Assets

// @ts-ignore
const useStyles = makeStyles((theme) => ({
    ...headerStyle
}));

export default function LargeHeader(props: any) {
    const classes = useStyles();
    const {} = props

    useEffect(() => {

        if (props.changeColorOnScroll) {
          window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
          if (props.changeColorOnScroll) {
            window.removeEventListener("scroll", headerColorChange);
          }
        };
      });

  const headerColorChange = () => {
    const {changeColorOnScroll} = props;
    const windowsScrollTop = window.pageYOffset;
      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body
            .getElementsByTagName("header")[0]
            .classList.remove(
                // @ts-ignore
                classes[color]);
        document.body
            .getElementsByTagName("header")[0]
            .classList.add(
                // @ts-ignore
                classes[changeColorOnScroll.color]);
        if (document.getElementById("nav_logo")) {
          if (
              // @ts-ignore
              document.getElementById("nav_logo").hasAttribute("hidden")) {
            // @ts-ignore
              document
                .getElementById("nav_logo")
                .removeAttribute("hidden")
          }
        }
      } else {
          document.body
            .getElementsByTagName("header")[0]
            .classList.add(
                // @ts-ignore
                classes[color]);
        document.body
            .getElementsByTagName("header")[0]
            .classList.remove(
                // @ts-ignore
                classes[changeColorOnScroll.color]);
        if (document.getElementById("nav_logo")) {
          // @ts-ignore
            document
              .getElementById("nav_logo")
              .setAttribute("hidden", "true")
        }
      }
  }
  const { color, rightLinks, fixed, absolute } = props;
  const appBarClasses = classNames({
      // @ts-ignore
      [classes.appBar]: true,
      // @ts-ignore
      [classes[color]]: color,
      // @ts-ignore
      [classes.absolute]: absolute,
      // @ts-ignore
      [classes.fixed]: fixed,

  });


  const logoButton = (hidden: boolean, id: string) =>
      <LogoButton id={id} href={"/"} hidden={hidden} width={"143px"} height={"40px"}
                  src={"https://media.graphassets.com/XMAKIRSSVyM1QPf2Y8hG"}/>;
      return (
          <div>
              <AppBar className={appBarClasses}>
                  <Toolbar
                      // @ts-ignore
                      className={classes.container}>
                      {logoButton(true, "nav_logo")}
                      {rightLinks}
                  </Toolbar>
              </AppBar>
          </div>
      );
  }