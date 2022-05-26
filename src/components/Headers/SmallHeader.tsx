// Core
import React, {useState} from "react";
// Style
import {makeStyles} from "@mui/styles";
//@ts-ignore
import classNames from "classnames";
//Components
import {headerStyle} from "../../assets/globals";
import {AppBar, Drawer, IconButton, Toolbar} from "@mui/material";
import LogoButton from "../Buttons/LogoButton";
import BookServiceDialog from "../BookServiceDialog/BookServiceDialog";
import {Menu} from "@mui/icons-material";
// Assets

// @ts-ignore
const useStyles = makeStyles(() => ({
    ...headerStyle
}));

export default function SmallHeader(props: any) {
    const classes = useStyles();
    const { rightLinks, fixed, absolute, color, size } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const appBarClasses = classNames({
      //@ts-ignore
    [classes.appBar]: true,
      //@ts-ignore
    [classes.absolute]: absolute,
      //@ts-ignore
    [classes.fixed]: fixed,
      //@ts-ignore
    [classes.color]: color
  });

    return (
        <React.Fragment>
            <AppBar className={appBarClasses}>
                <Toolbar
                    // @ts-ignore
                    className={classes.container}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                    <LogoButton href={"/"} width={"143px"} height={"40px"} src={"https://media.graphassets.com/XMAKIRSSVyM1QPf2Y8hG"}/>
                    <BookServiceDialog className={classNames(
                        //@ts-ignore
                        classes.heroButton)} buttonText={"Book Now"} size={size}/>
                </Toolbar>
                <Drawer
                  variant="temporary"
                  anchor={"left"}
                  open={mobileOpen}
                  classes={{
                    paper:
                        //@ts-ignore
                        classes.drawerPaper
                  }}
                  onClose={handleDrawerToggle}
                >
                <div className={
                    //@ts-ignore
                    classes.appResponsive}>
                    {rightLinks}
                </div>
                </Drawer>
            </AppBar>
        </React.Fragment>
    );
}