import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  switchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5em',
  },
  textContainer: {
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: '15vw',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: '8vh',
    color: '#495464',
    textTransform: 'uppercase',
    letterSpacing: 12,
    textAlign: 'center',
    marginTop: '5vh',
  },
  switch: {
    color: '#495464',
  },
  languageOption: {
    fontFamily: 'Montserrat',
    fontSize: '1em',
    color: '#495464',
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: '1.3em',
    color: '#495464',
    marginTop: '1em',
  },
  linksContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  socialText: {
    fontFamily: 'Montserrat',
    fontSize: '1.3em',
    color: '#495464',
    marginTop: '0.3em',
    textTransform: 'uppercase',
    letterSpacing: 4,
    marginLeft: '0.5em',
  },
  socialIcons: {
    fontSize: '4vh',
  },
  socialLinks: {
    margin: '5vh 0 0 15vw',
  },
}))

export default useStyles
