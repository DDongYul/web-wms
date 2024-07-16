import { colors } from "@material-ui/core";
import { container } from "/styles/jss/nextjs-material-kit.js";
import { BorderColor, BorderStyle } from "@material-ui/icons";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.0rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    color : "yellow",
    // border : 10,
    // borderWidth: "10px",   // Added borderWidth
    // borderColor: "black",  // Added borderColor
    // borderStyle: "solid",  // Added borderStyle
    // borderRadius : "10px",
    // outline : "white solid 4px",
    textShadow: `
      -2px -2px 0 #000,  
       2px -2px 0 #000,
      -2px  2px 0 #000,
       2px  2px 0 #000
    `, // Added text shadow to create a border effect
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0",
    color : "yellow",
    textShadow: `
      -2px -2px 0 #000,  
       2px -2px 0 #000,
      -2px  2px 0 #000,
       2px  2px 0 #000
    `, // Added text shadow to create a border effect
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
