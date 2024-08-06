import { makeStyles } from "@material-ui/core"
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/mainEndStyle.js"

const useStyles = makeStyles(styles)

export default function HowToUseStart() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <p className={classes.title}>지금, Fit-Box와 함께 시작하세요</p>
            <button className={classes.button}>구매하기</button>
        </div>
    )
}