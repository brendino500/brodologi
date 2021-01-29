import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '10vh',
  },
  formContainer: {
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    justify: 'center',
    alignItems: 'center',
    marginLeft: '10vw',
  },
  form: {},

  title: {
    fontFamily: 'Montserrat',
    fontSize: '8vh',
    color: '#495464',
    textTransform: 'uppercase',
    letterSpacing: 12,
    textAlign: 'center',
  },
  creditCardTextLayout: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex start',
    width: '70vw',
  },
  creditCardIconLayout: {
    display: 'flex',
    justify: 'flex end',
    alignItems: 'center',
  },
  creditCardText: {
    fontFamily: 'Montserrat',
    fontSize: '1.2em',
    letterSpacing: 3,
    color: '#495464',
  },
  cardIcons: {
    margin: 5,
    fontSize: '1.5em',
    color: '#495464',
  },
  textField: {
    fontFamily: 'Montserrat',
  },
}))

export default useStyles
