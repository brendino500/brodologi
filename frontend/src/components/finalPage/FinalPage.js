import React from 'react'
import Fade from 'react-reveal/Fade'
import { Typography, Switch, ThemeProvider } from '@material-ui/core'
import { FiGithub, FiLink, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { GiCroissant } from 'react-icons/gi'

import Links from './Links'
import useStyles from './styles/finalPageStyles'
import colorTheme from '../../colorTheme'

export default function FinalPage() {
  const classes = useStyles()
  const [isNorwegian, setIsNorwegian] = React.useState(true)

  const handleChange = (event) => {
    setIsNorwegian(!isNorwegian)
  }

  const getText = () => {
    if (isNorwegian) {
      return (
        <div className={classes.textContainer}>
          <Typography className={classes.title}>Hei, jeg er Brenda</Typography>
          <Typography className={classes.text}>
            Jeg er programvareutvikler som bor i London. Unnskyld hvis
            oversettelsene er litt av, har jeg brukt Google Translate.
          </Typography>
          <Typography className={classes.text}>
            Hvis du liker det du ser, gi meg en stilk:
          </Typography>
        </div>
      )
    } else {
      return (
        <div className={classes.textContainer}>
          <Typography className={classes.title}>Hi, I'm Brenda</Typography>
          <Typography className={classes.text}>
            I'm a software developer living in London. Unfortunately this bakery
            isn't real and I'm too inept to attempt to bake these myself!
          </Typography>
          <Typography className={classes.text}>
            If you like what you see, give me a stalk:
          </Typography>
        </div>
      )
    }
  }

  const github = <FiGithub className={classes.socialIcons} />
  const personal = <FiLink className={classes.socialIcons} />
  const linkedIn = <FiLinkedin className={classes.socialIcons} />
  const twitter = <FiTwitter className={classes.socialIcons} />
  const foodBlog = <GiCroissant className={classes.socialIcons} />

  return (
    <ThemeProvider theme={colorTheme}>
      <Fade cascade>
        <div>
          <div className={classes.switchContainer}>
            <Typography className={classes.languageOption}>EN</Typography>
            <Switch
              className={classes.switch}
              checked={isNorwegian}
              onChange={handleChange}
              name="checkedNorwegian"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography className={classes.languageOption}>NOR</Typography>
          </div>
          {getText()}
          <div className={classes.socialLinks}>
            <Links
              website="https://github.com/brendino500"
              icon={github}
              social="Github"
            />
            <Links
              website="https://www.brendaty.com/"
              icon={personal}
              social="Portfolio"
            />
            <Links
              website="https://twitter.com/btcodes"
              icon={twitter}
              social="@btcodes"
            />
            <Links
              website="https://www.linkedin.com/in/brendaty/"
              icon={linkedIn}
              social="LinkedIn"
            />
            <Links
              website="https://trinesmatblogg.no/"
              icon={foodBlog}
              social="Trines Matblogg"
            />
          </div>
        </div>
      </Fade>
    </ThemeProvider>
  )
}
