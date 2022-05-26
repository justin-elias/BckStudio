/*
 * Copyright (c) 2022. Bozeman Community Kiln
 */

import theme from "./theme";

const drawerWidth = 260;

const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const containerFluid = {
  paddingRight: "0.938em",
  paddingLeft: "0.938em",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const container = {
  ...containerFluid,
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100vw"
  },
  [theme.breakpoints.only("md")]: {
    maxWidth: "100vw"
  },
  [theme.breakpoints.only("lg")]: {
    maxWidth: "100vw"
  },
  [theme.breakpoints.only("xl")]: {
    maxWidth: "87.5em"
  }
};

const boxShadow = {
  boxShadow:
      "0 0.625em 1.875em -0.75em rgba(0, 0, 0, 0.42), 0 0.25em 1.563em 0em rgba(0, 0, 0, 0.12), 0 0.5em 0.625em -0.313em rgba(0, 0, 0, 0.2)"
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "1.563em 0",
  boxShadow: "0 0.063em 0.25em 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "0.188em",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};

const primaryColor = "#416e80";
const secondaryColor = "#B8D8DA";
const primaryFontColor = "#444";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

const defaultFont = {
  fontFamily: '"Lato","Helvetica","Arial","Lucida",sans-serif;',
  fontWeight: "400",
  lineHeight: "1.5rem",
  fontSize: "1em",
  color: primaryFontColor
};
const brandFont = {
  fontFamily: "Merriweather Sans, sans-serif",
  fontWeight: 700,
  color: "#333"
};
const primaryBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(65, 110, 128, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(65, 110, 128, 0.2)"
};
const secondaryBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(184, 216, 218, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(184, 216, 218, 0.2)"
};
const infoBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(0, 188, 212, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(0, 188, 212, 0.2)"
};
const successBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(76, 175, 80, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(76, 175, 80, 0.2)"
};
const warningBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(255, 152, 0, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(255, 152, 0, 0.2)"
};
const dangerBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(244, 67, 54, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(244, 67, 54, 0.2)"
};
const roseBoxShadow = {
  boxShadow:
      "0 0.25em 1.25em 0em rgba(0, 0, 0, 0.14), 0 0.438em 0.625em -0.313em rgba(233, 30, 99, 0.4)"
};

const warningCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  ...warningBoxShadow
};
const successCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)",
  ...successBoxShadow
};
const dangerCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)",
  ...dangerBoxShadow
};
const infoCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)",
  ...infoBoxShadow
};
const primaryCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...primaryBoxShadow
};
const roseCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)",
  ...roseBoxShadow
};
const cardActions = {
  margin: "0 1.25em 0.625em",
  paddingTop: "0.625em",
  borderTop: "0.063em solid #eeeeee",
  height: "auto",
  ...defaultFont
};

const cardHeader = {
  margin: "-1.875em 0.938em 0",
  borderRadius: "0.188em",
  padding: "0.938em"
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "0.188em",
  boxShadow:
      "0 0.625em 1.25em -0.75em rgba(0, 0, 0, 0.42), 0 0.188em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.5em 0.625em -0.313em rgba(0, 0, 0, 0.2)",
  padding: "0.625em 0",
  transition: "all 150ms ease 0s"
};

const title = {
  margin: "1.75rem 0 0.875rem",
  marginBottom: "1rem",
  marginTop: "2rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontWeight: "bold",
  fontFamily: 'Asap, sans-serif'
};

const cardTitle = {
  ...title,
  marginTop: ".625rem"
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};

const mainElement = {
  background: "#FFFFFF",
  //position: "relative",
  zIndex: "3",
  margin: "-3.75em 1.875em 0em",
  borderRadius: "0.375em",
  boxShadow: "0 1em 1.5em 0.125em rgba(0, 0, 0, 0.14), 0 0.375em 1.875em 0.313em rgba(0, 0, 0, 0.12), 0 0.5em 0.625em -0.313em rgba(0, 0, 0, 0.2)"
};

const playBrand = {
  color: theme.palette.primary.main,
};

const dividerBar = {
  backgroundColor: theme.palette.secondary.main,
  height: "2vh"
};

const clp_exclaim = {
  ...playBrand,
  fontSize: "0.85em"
};

const headerLinksStyle = {
  list: {
    ...defaultFont,
    fontSize: "0.7em",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 2rem)",
        content: '""',
        display: "block",
        height: "0.063em",
        marginLeft: "0.938em",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "secondary",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    borderRadius: "0.188em",
    lineHeight: "1.25rem",
    textDecoration: "none",
    margin: "0em",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.main
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 1.875em)",
      marginLeft: "1rem",
      marginBottom: "0.5em",
      marginTop: "0.5em",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      },

    }
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "0.4rem 1rem"
    },
    color: "#FFF",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    lineHeight: "1.25rem",
    textDecoration: "none",
    margin: "0rem",
    display: "inline-flex",
    top: "0.25em"
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "0.4rem 1rem"
    },
    top: "0.188rem",
    position: "relative",
    fontWeight: "400",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    lineHeight: "1.25rem",
    textDecoration: "none",
    margin: "0rem",
    display: "inline-flex"
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  icons: {
    width: "1.25em",
    marginRight: "0.188em"
  },
  socialIcons: {
    position: "relative",
    fontSize: "1.25em !important",
    marginRight: "0.25em"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "0.625em 1.25em"
    }
  },
  marginRight5: {
    marginRight: "0.313em"
  }
};

const acuityStyles = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        textAlign: "center",
        ...container
    },
    main_content: {
        position: "relative",
        zIndex: "1000"
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
    section: {
        width: "100%",
        padding: "70px 0",
        textAlign: "center",
        backgroundColor: secondaryColor
    },
    mainElement,
};

const imagesStyles = {
  imgFluid: {
    maxWidth: "75%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "48% !important"
  },
  imgRaised: {
    boxShadow:
        "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  },
  imgSmall: {
    width: "100%"
  },
  imgMax: {
    width: "1200px"
  }
};

const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "0 1 auto",
  }
};
const headerStyle = {
    appBar: {
        display: "flex",
        border: "0",
        borderRadius: "3px",
        padding: "0 0",
        marginBottom: "20px",
        color: "#555",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow:
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        transition: "all 150ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: "unset",
        height: "4rem"
    },
    absolute: {
        position: "absolute",
        zIndex: "1100"
    },
    fixed: {
        position: "fixed",
        zIndex: "1100"
    },
    container: {
        ...container,
        minHeight: "50px",
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexWrap: "nowrap"
    },
    flex: {
        flex: "1"
    },
    title: {
        ...defaultFont,
        lineHeight: "1.875rem",
        fontSize: "1.125px",
        borderRadius: "3px",
        textTransform: "none",
        color: "inherit",
        padding: "8px 16px",
        letterSpacing: "unset",
        "&:hover,&:focus": {
            color: "inherit",
            background: "transparent"
        }
    },
    appResponsive: {
        margin: "20px 10px"
    },
    primary: {
        backgroundColor: primaryColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
    },
    info: {
        backgroundColor: infoColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"
    },
    success: {
        backgroundColor: successColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"
    },
    warning: {
        backgroundColor: warningColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"
    },
    danger: {
        backgroundColor: dangerColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"
    },
    rose: {
        backgroundColor: roseColor,
        color: "#FFFFFF",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"
    },
    transparent: {
        backgroundColor: "transparent !important",
        boxShadow: "none",
        paddingTop: "25px",
        color: "#FFFFFF"
    },
    dark: {
        color: "#FFFFFF",
        backgroundColor: "#212121 !important",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },
    white: {
        border: "0",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        backgroundColor: "#fff !important",
        boxShadow:
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
    },
    drawerPaper: {
        border: "none",
        bottom: "0",
        transitionProperty: "top, bottom, width",
        transitionDuration: ".35s, .35s, .35s",
        transitionTimingFunction: "ease, ease, ease",
        width: drawerWidth,
        ...boxShadow,
        position: "fixed",
        display: "block",
        top: "0",
        height: "100vh",
        right: "auto",
        left: "0",
        visibility: "visible",
        overflowY: "visible",
        borderTop: "none",
        textAlign: "left",
        paddingRight: "0px",
        paddingLeft: "0",
        ...transition
    },
    nav_logo_lg: {
        height: "3.5rem"
    },
    nav_logo_sm: {
        height: "2.5rem"
    }
};

const mainLogoStyle = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        textAlign: "center",
        ...container
    },
};

export {
   //variables
    drawerWidth,
    transition,
    container,
    containerFluid,
    boxShadow,
    card,
    defaultFont,
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    primaryBoxShadow,
    infoBoxShadow,
    successBoxShadow,
    warningBoxShadow,
    dangerBoxShadow,
    roseBoxShadow,
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader,
    cardActions,
    cardHeader,
    defaultBoxShadow,
    title,
    cardTitle,
    cardLink,
    cardSubtitle,
    secondaryBoxShadow,
    secondaryColor,
    primaryFontColor,
    brandFont,
    mainElement,
    playBrand,
    dividerBar,
    clp_exclaim,
    headerLinksStyle,
    headerStyle,
    acuityStyles,
    imagesStyles,
    cardBodyStyle,
    mainLogoStyle
};
