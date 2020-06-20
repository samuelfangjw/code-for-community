// import React from "react"
// import { Link } from "gatsby"
// import Img from "gatsby-image"
// import styled from "styled-components"
// import { Card, CardMedia } from "@material-ui/core"
// import { makeStyles } from "@material-ui/core/styles"
// import Avatar from "@material-ui/core/Avatar"
// import Box from "@material-ui/core/Box"
// import Grid from "@material-ui/core/Grid"
// import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover"
// import cx from "clsx"
// import Color from "color"

// // const useGridStyles = makeStyles(({ breakpo          <ImageContainer>
// //   <Image fluid={image} />
// // </ImageContainer>ints }) => ({
// //   root: {
// //     overflow: "auto",
// //     [breakpoints.only("xs")]: {
// //       "& > *:not(:first-child)": {
// //         paddingLeft: 0,
// //       },
// //     },
// //     [breakpoints.up("sm")]: {
// //       justifyContent: "center",
// //     },
// //   },
// // }))


// const ImageContainer = styled.div`
//   height: 360px;
//   width: 400px;
//   overflow: hidden;
//   flex-shrink: 0;
// `

// const Image = styled(Img)`
//   height: 100%;
// `

// const TextContainer = styled.div`
//   margin: 20px;
//   display: flex;
//   flex-direction: column;
//   max-width: 60%;
// `

// // const TextContainer = styled(Card)(

// //   {
// //   margin: "20px",
// //   display: "flex",
// //   flex-direction: "column",
// //   max-width: "60%"
// //   }
// // )

// const TextContainerStyle = makeStyles({
// root : {
//   margin: "20px",
//   display: "flex",
//   // flex-direction: "column",
//   // max-width: "60%"
// },

// })

// const Name = styled.h2``

// const Period = styled.p``

// const Description = styled.p``

// const FindOutMore = styled.div`
//   flex-grow: 1;
//   align-self: flex-end;
//   display: flex;
//   flex-direction: column-reverse;
//   text-align: right;
//   margin: 10px;

//   :before {
//     width: 0%;
//     content: ".";
//     color: transparent;
//     background: #301681;
//     height: 3px;
//     transition: all 0.4s ease-in;
//   }
// `

// //container has to be declared after FindOutMore
// const Container = styled(Link)`
//   position: relative;
//   display: flex;
//   margin: 20px;
//   text-decoration: none;
//   flex-flow: row wrap;
//   justify-content: space-evenly;
//   color: black;
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);

//   &:hover {
//     transform: scale(1.05);
//   }

//   &:hover ${FindOutMore}:before {
//     width: 100%;
//   }
// `

// const ProgrammeCard = ({ data }) => {
//   const link = data.node.frontmatter.link
//   const image = data.node.frontmatter.image.childImageSharp.fluid
//   const name = data.node.frontmatter.name
//   const description = data.node.frontmatter.description
//   const period = data.node.frontmatter.period


//   return (
//       <Card raised={true}>
//         <Container to={link}>

//           {/* <TextContainer>
//             <Name>{name}</Name>
//             <Period>{period}</Period>
//             <Description>{description}</Description>
//             <FindOutMore>Find Out More</FindOutMore>
//           </TextContainer> */}

//           <Card>
//           {/* <ImageContainer>
//           </ImageContainer> */}
//           <CardMedia image={image} />

//             <Name>{name}</Name>
//             <Period>{period}</Period>
//             <Description>{description}</Description>
//             <FindOutMore>Find Out More</FindOutMore>
//           </Card>
//         </Container>
//       </Card>
//   )
// }

// export default ProgrammeCard


import React from 'react';
import cx from 'clsx';
import Color from 'color';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Row, Item } from '@mui-treasury/components/flex';
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Card, CardMedia } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"

// import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover"
// import cx from "clsx"
// import Color from "color"
// const ImageContainer = styled.div`
//   height: 360px;
//   width: 400px;
//   overflow: hidden;
//   flex-shrink: 0;
// `

// const Image = styled(Img)`
//   height: 100%;
// `

// const TextContainer = styled.div`
//   margin: 20px;
//   display: flex;
//   flex-direction: column;
//   max-width: 60%;
// `

// // const TextContainer = styled(Card)(

// //   {
// //   margin: "20px",
// //   display: "flex",
// //   flex-direction: "column",
// //   max-width: "60%"
// //   }
// // )

// const TextContainerStyle = makeStyles({
// root : {
//   margin: "20px",
//   display: "flex",
//   // flex-direction: "column",
//   // max-width: "60%"
// },

// })

// const Name = styled.h2``

// const Period = styled.p``

// const Description = styled.p``

// const FindOutMore = styled.div`
//   flex-grow: 1;
//   align-self: flex-end;
//   display: flex;
//   flex-direction: column-reverse;
//   text-align: right;
//   margin: 10px;

//   :before {
//     width: 0%;
//     content: ".";
//     color: transparent;
//     background: #301681;
//     height: 3px;
//     transition: all 0.4s ease-in;
//   }
// `

// //container has to be declared after FindOutMore
// const Container = styled(Link)`
//   position: relative;
//   display: flex;
//   margin: 20px;
//   text-decoration: none;
//   flex-flow: row wrap;
//   justify-content: space-evenly;
//   color: black;
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);

//   &:hover {
//     transform: scale(1.05);
//   }

//   &:hover ${FindOutMore}:before {
//     width: 100%;
//   }
// `

// const ProgrammeCard = ({ data }) => {
//   const link = data.node.frontmatter.link
//   const image = data.node.frontmatter.image.childImageSharp.fluid
//   const name = data.node.frontmatter.name
//   const description = data.node.frontmatter.description
//   const period = data.node.frontmatter.period


//   return (
//       <Card raised={true}>
//         <Container to={link}>

//           {/* <TextContainer>
//             <Name>{name}</Name>
//             <Period>{period}</Period>
//             <Description>{description}</Description>
//             <FindOutMore>Find Out More</FindOutMore>
//           </TextContainer> */}

//           <Card>
//           {/* <ImageContainer>
//           </ImageContainer> */}
//           <CardMedia image={// const ImageContainer = styled.div`
//   height: 360px;
//   width: 400px;
//   overflow: hidden;
//   flex-shrink: 0;
// `

// const Image = styled(Img)`
//   height: 100%;
// `

// const TextContainer = styled.div`
//   margin: 20px;
//   display: flex;
//   flex-direction: column;
//   max-width: 60%;
// `

// // const TextContainer = styled(Card)(

// //   {
// //   margin: "20px",
// //   display: "flex",
// //   flex-direction: "column",
// //   max-width: "60%"
// //   }
// // )

// const TextContainerStyle = makeStyles({
// root : {
//   margin: "20px",
//   display: "flex",
//   // flex-direction: "column",
//   // max-width: "60%"
// },

// })

// const Name = styled.h2``

// const Period = styled.p``

// const Description = styled.p``

// const FindOutMore = styled.div`
//   flex-grow: 1;
//   align-self: flex-end;
//   display: flex;
//   flex-direction: column-reverse;
//   text-align: right;
//   margin: 10px;

//   :before {
//     width: 0%;
//     content: ".";
//     color: transparent;
//     background: #301681;
//     height: 3px;
//     transition: all 0.4s ease-in;
//   }
// `

// //container has to be declared after FindOutMore
// const Container = styled(Link)`
//   position: relative;
//   display: flex;
//   margin: 20px;
//   text-decoration: none;
//   flex-flow: row wrap;
//   justify-content: space-evenly;
//   color: black;
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);

//   &:hover {
//     transform: scale(1.05);
//   }

//   &:hover ${FindOutMore}:before {
//     width: 100%;
//   }
// `

// const ProgrammeCard = ({ data }) => {
//   const link = data.node.frontmatter.link
//   const image = data.node.frontmatter.image.childImageSharp.fluid
//   const name = data.node.frontmatter.name
//   const description = data.node.frontmatter.description
//   const period = data.node.frontmatter.period


//   return (
//       <Card raised={true}>
//         <Container to={link}>

//           {/* <TextContainer>
//             <Name>{name}</Name>
//             <Period>{period}</Period>
//             <Description>{description}</Description>
//             <FindOutMore>Find Out More</FindOutMore>
//           </TextContainer> */}

//           <Card>
//           {/* <ImageContainer>
//           </ImageContainer> */}
//           <CardMedia image={image} />

//             <Name>{name}</Name>
//             <Period>{period}</Period>
//             <Description>{description}</Description>
//             <FindOutMore>Find Out More</FindOutMore>
//           </Card>
//         </Container>
//       </Card>
//   )
// }image} />

//             <Name>{name}</Name>
//             <Period>{period}</Period>
//             <Description>{description}</Description>
//             <FindOutMore>Find Out More</FindOutMore>
//           </Card>
//         </Container>
//       </Card>
//   )
// }
const ImageContainer = styled.div`
  height: 360px;
  width: 400px;
  overflow: hidden;
  flex-shrink: 0;
`

const Image = styled(Img)`
  height: 100%;
`

const TextContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  max-width: 60%;
`


const TextContainerStyle = makeStyles({
root : {
  margin: "20px",
  display: "flex",
  // flex-direction: "column",
  // max-width: "60%"
},

})

const Name = styled.h2``

const Period = styled.p``

const Description = styled.p``

const FindOutMore = styled.div`
  flex-grow: 1;
  align-self: flex-end;
  display: flex;
  flex-direction: column-reverse;
  text-align: right;
  margin: 10px;

  :before {
    width: 0%;
    content: ".";
    color: transparent;
    background: #301681;
    height: 3px;
    transition: all 0.4s ease-in;
  }
`

//container has to be declared after FindOutMore
const Container = styled(Link)`
  position: relative;
  display: flex;
  margin: 20px;
  text-decoration: none;
  flex-flow: row wrap;
  justify-content: space-evenly;
  color: black;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: scale(1.05);
  }

  &:hover ${FindOutMore}:before {
    width: 100%;
  }
`




const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    overflow: 'auto',
    [breakpoints.only('xs')]: {
      '& > *:not(:first-child)': {
        paddingLeft: 0,
      },
    },
    [breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(({ palette }) => ({
  color: ({ color }) => ({
    '&:before': {
      backgroundColor: Color(color)
        .darken(0.3)
        .desaturate(0.2)
        .toString(),
    },
  }),
  root: {
    position: 'relative',
    borderRadius: '1rem',
    minWidth: 320,
    '&:before': {
      transition: '0.2s',
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      borderRadius: '1rem',
      zIndex: 0,
      bottom: 0,
    },
    '&:hover': {
      '&:before': {
        bottom: -6,
      },
      '& $logo': {
        transform: 'scale(1.1)',
        boxShadow: '0 6px 20px 0 rgba(0,0,0,0.38)',
      },
    },
  },
  cover: {
    borderRadius: '1rem',
  },
  content: ({ color }) => ({
    position: 'relative',
    zIndex: 1,
    borderRadius: '1rem',
    boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 0,
      width: '100%',
      height: '100%',
      clipPath:
        'polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)',
      borderRadius: '1rem',
      background: `linear-gradient(to top, ${color}, ${Color(color)
        .rotate(24)
        .lighten(0.12)})`,
    },
  }),
  title: {
    fontFamily: 'Fjalla One',
    fontSize: '1.25rem',
    color: '#fff',
    margin: 0,
  },
  logo: {
    transition: '0.3s',
    width: 100,
    height: 100,
    boxShadow: '0 4px 12px 0 rgba(0,0,0,0.24)',
    borderRadius: '1rem',
  },
  team: {
    fontFamily: 'Sen',
    fontSize: '0.75rem',
    color: palette.text.hint,
  },
  date: {
    fontFamily: 'Sen',
    color: '#fff',
    backgroundColor: palette.text.hint,
    opacity: 0.72,
    fontSize: '0.75rem',
    padding: '0 0.5rem',
    borderRadius: 12,
  },
}));

const CustomCard = ({ styles, cover, logo, title, brand, date }) => {
  const mediaStyles = useCoverCardMediaStyles();
  return (
    <Box className={cx(styles.root, styles.color)} pt={20}>
      <CardMedia image={cover} className={styles.cover} classes={mediaStyles} />
      <Box className={styles.content} p={2}>
        <Box position={'relative'} zIndex={1}>
          <Row p={0} gap={2}>
            <Item>
              <Avatar className={styles.logo} src={logo} />
            </Item>
            <Item position={'bottom'}>
              <h2 className={styles.title}>{title}</h2>
            </Item>
          </Row>
          <Row mt={4} alignItems={'center'}>
            <Item>
              <div className={styles.team}>{brand}</div>
            </Item>
            <Item position={'right'}>
              <div className={styles.date}>{date}</div>
            </Item>
          </Row>
        </Box>
      </Box>
    </Box>
  );
};

const HighlightCardDemo = React.memo(function HighlightCard() {
  const styles1 = useStyles({ color: 'red' });
  const styles2 = useStyles({ color: 'black' });
  const gridStyles = useGridStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[{ font: 'Fjalla One' }, { font: 'Sen', weights: [500] }]}
        />
      </NoSsr>
      <Grid
        style={{ padding: 16 }}
        classes={gridStyles}
        wrap={'nowrap'}
        container
        spacing={4}
      >
        <Grid item>
          <CustomCard
            styles={styles1}
            brand={'Data Science'}
            date={'July - August 2020'}
            cover={
              'https://blog.learningtree.com/wp-content/uploads/2018/07/datasci.jpg'
            }
            logo={'https://image.freepik.com/free-vector/brain-logo-template_15146-28.jpg'}
            title={
              <>
                Data Science
                <br /> Jazz Up Yo Data
              </>
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            styles={styles2}
            brand={'Project Kickstart'}
            date={'July - August 2020'}
            cover={
              'https://gradepowerlearning.com/wp-content/uploads/2018/04/inquiry-based-learning.jpeg'
            }
            logo={
              'https://www.pixelstalk.net/wp-content/uploads/2016/05/All-Blacks-Logo-Backgrounds.jpg'
            }
            title={
              <>
                Project Kickstart
                <br /> Kick em'
              </>
            }
          />
        </Grid>
      </Grid>
    </>
  );
});


const ProgrammeCard = ({ data }) => {
  const link = data.node.frontmatter.link
  const image = data.node.frontmatter.image.childImageSharp.fluid
  const name = data.node.frontmatter.name
  const description = data.node.frontmatter.description
  const period = data.node.frontmatter.period


  return (
      // <Card raised={true}>
      //   <Container to={link}>

      //     {/* <TextContainer>
      //       <Name>{name}</Name>
      //       <Period>{period}</Period>
      //       <Description>{description}</Description>
      //       <FindOutMore>Find Out More</FindOutMore>
      //     </TextContainer> */}

      //     <HighlightCardDemo></HighlightCardDemo>
      //     <Card>
      //     {/* <ImageContainer>
      //     </ImageContainer> */}
      //     <CardMedia image={image} />

      //       <Name>{name}</Name>
      //       <Period>{period}</Period>
      //       <Description>{description}</Description>
      //       <FindOutMore>Find Out More</FindOutMore>
      //     </Card>
      //   </Container>
      // </Card>

      <HighlightCardDemo>
        <Name> { name }</Name>
      </HighlightCardDemo>
  )
}

export default ProgrammeCard
