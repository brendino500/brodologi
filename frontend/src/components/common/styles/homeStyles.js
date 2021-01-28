import { makeStyles } from '@material-ui/core/styles'
import image from '../../../assets/canva-photo-editor.png'

const useStyles = makeStyles((theme) => ({
  // '@global': {
  // background: {
  //   backgroundImage: `url(${image})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center center',
  //   backgroundSize: 'cover',
  //   backgroundAttachment: 'fixed',
  //   height: '100%',
  // },
  // },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    letterSpacing: 8,
    fontSize: '15vh',
    textTransform: 'uppercase',
    color: '#495464',
    marginTop: '70vh',
  },
}))

export default useStyles
