import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '10vh',
  },
  formContainer: {
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    marginLeft: '17vw',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: '8vh',
    color: '#495464',
    textTransform: 'uppercase',
    letterSpacing: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontSize: '2.5vh',
    color: '#495464',
    textAlign: 'center',
  },
  footer: {
    fontFamily: 'Montserrat',
    fontSize: '0.7em',
    color: '#495464',
    marginTop: '0.3em',
  },
  fieldDouble: {
    display: 'flex',
    flexDirection: 'row',
  },
  creditCardTextLayout: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex start',
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

  inputText: {
    fontFamily: 'Montserrat',
    letterSpacing: 1,
    color: '#495464',
    fontSize: 13,
  },
  textField: {
    margin: '0.2em 0',
  },
  submitButton: {
    backgroundColor: '#495464',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '1em',
    letterSpacing: 4,
    color: '#f4f4f2',
    marginTop: '0.3em',
  },
  link: {
    textDecoration: 'none',
  },
  lockIcon: {
    color: '#495464',
  },
}))

export default useStyles
