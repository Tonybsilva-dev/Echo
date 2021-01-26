import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCall from '@material-ui/icons/VideoCall'
import Apps from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert';
import { IconButton, InputBase, Paper, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    cursor: 'pointer',
    height: 25,
    marginLeft: theme.spacing(3)
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    left: 0,
    alignItems: 'center',
    height: 35,
    width: 700
  },
  input: {
    flex: 1,
    padding: '4px 4px'
  }
}))

export default function topBar() {

  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img src="/Echo.png" alt="logo" className={classes.logo} />
        </Box>

        {/* <Box>
          <Paper component="form" className={classes.search}>
            <InputBase
              className={classes.input}
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton
              type="submit"
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box> */}

        <Box display="flex">
        <IconButton className={classes.icons}>
          <VideoCall />
        </IconButton>
        <IconButton className={classes.icons}>
          <Apps />
        </IconButton>
        <IconButton className={classes.icons}>
          <MoreVert />
        </IconButton>
        <Button
        color="primary"
        component="a"
        variant="outlined"
        startIcon={<AccountCircle />}
        >
          Fazer Login
        </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
