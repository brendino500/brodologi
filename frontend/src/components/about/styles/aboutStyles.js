import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexGrow: 1,
    width: '70vw',
    margin: '15vh 10vw 0 10vw',
  },
  textContainer: {
    display: 'flex',
    direction: 'column',
    flexGrow: 1,
  },
  textWithPhoto: {
    display: 'flex',
    justify: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    letterSpacing: 10,
    fontSize: '9vh',
    color: '#495464',
  },
  text: {
    fontFamily: 'Montserrat',
    textAlign: 'justify',
    fontSize: 18,
    marginTop: '5vh',
    color: '#495464',
  },
  image: {
    height: '40vh',
    margin: '2vw',
  },
  link: {
    textDecoration: 'none',
  },
}))
export default useStyles
