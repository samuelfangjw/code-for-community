import React from "react"
import { Link } from "gatsby"
import cx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextInfoContent from "@mui-treasury/components/content/textInfo"
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog"
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "30px auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      margin: '20px auto',
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: '120%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: spacing(2), // 16
      // opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}))

export const ProgrammesCard = React.memo(function BlogCard({ data }) {
  const link = data.node.frontmatter.link
  const image = data.node.frontmatter.image.childImageSharp.fluid.src
  const name = data.node.frontmatter.name
  const description = data.node.frontmatter.description
  const period = data.node.frontmatter.period

  const styles = useStyles()
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles()
  const shadowStyles = useOverShadowStyles()
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia className={styles.media} image={image} />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={period}
            heading={name}
            body={description}
          />
          <Button className={buttonStyles}>Find Out More</Button>
        </CardContent>
      </Card>
    </Link>
  )
})

export default ProgrammesCard
