import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import cx from 'clsx';
import Color from 'color';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Row, Item } from '@mui-treasury/components/flex';
import { Link } from "gatsby"
import { Card, CardMedia } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"



const Container = styled.div`
  width: 320px;
  height: 350px;
  margin: 20px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 270px auto;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
`

const ImageContainer = styled.div`
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Image = styled(Img)`
  height: 100%;
`

const Text = styled.h3`
  grid-row: 2 / 3;
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

const HighlightCardDemo = ({data}) => {

React.memo(function HighlightCard(data) {
  const styles1 = useStyles({ color: 'red' });
  const styles2 = useStyles({ color: 'black' });
  const gridStyles = useGridStyles();
  const image = data.node.frontmatter.image.childImageSharp.fluid
  const name = data.node.frontmatter.name

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
            brand= "nice"
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
}

const PastProgrammesCard = ({ data }) => {
  const image = data.node.frontmatter.image.childImageSharp.fluid
  const name = data.node.frontmatter.name

  return (
    <Container>
      <ImageContainer>
        <Image fluid={image} />
      </ImageContainer>
      <Text>{name}</Text>
    </Container>
  )
}

export default PastProgrammesCard