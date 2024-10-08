import { object } from "prop-types";
import { container } from "/styles/jss/nextjs-material-kit.js";

const loginStyle = {
  section: {
    minHeight: "110vh",
    maxHeight: "1600px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url('/img/WareHouseWallpaper.png')",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backgroundBlendMode: "overlay",
  },
  container,
  form: {
    margin: "0"
  },
  cardHeader: {
    color: "white",
    background: "#deb887",
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
  },
  cardBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    height: "35px",
    width: "180px",
    padding: "0",
    margin: "10px"
  },
  input: {
    height: "35px",
    width: "180px",
    padding: "0",
    margin: "10px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  }
};

export default loginStyle;
