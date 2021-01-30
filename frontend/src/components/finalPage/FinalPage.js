import React from 'react'
import { Typography, Switch, ThemeProvider } from '@material-ui/core'

import useStyles from './styles/finalPageStyles'
import colorTheme from '../../colorTheme'

export default function FinalPage() {
  const classes = useStyles()
  const [isNorwegian, setIsNorwegian] = React.useState(true)

  const handleChange = (event) => {
    setIsNorwegian(!isNorwegian)
    console.log(event.target.checked)
  }

  const getText = () => {
    if (isNorwegian) {
      return (
        <div>
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
        <div>
          <Typography className={classes.title}>Hi, I'm Brenda</Typography>
          <Typography className={classes.text}>
            I'm a software developer living in London. Unfortunately this bakery
            isn't real and I definitely can't bake these myself!
          </Typography>
          <Typography className={classes.text}>
            If you like what you see, give me a stalk:
          </Typography>
        </div>
      )
    }
  }

  return (
    <ThemeProvider theme={colorTheme}>
      <div>
        {getText()}
        NOR
        <Switch
          className={classes.switch}
          checked={isNorwegian}
          onChange={handleChange}
          name="checkedNorwegian"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        EN
      </div>
    </ThemeProvider>
  )
}
