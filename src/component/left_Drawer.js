import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import LocationCity from '@material-ui/icons/LocationCity';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NavTop from '../component/NavTop';
import Covid_Chart from '../component/covidChart'
import MyContext from './context'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import iState from '../state'




const drawerWidth = 240;
let newAry = iState.countries;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function DrawerLeft(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [Search, setSearch] = React.useState(undefined);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (

        <MyContext.Consumer>
            {(props) => {
                return (
                    <div>
                        <div className={classes.toolbar} />
                        <div className="Drawer-Margin">
                            <TextField
                                style={{ padding: 0 }}
                                fullWidth={true}
                                id="outlined-textarea"
                                label="Search Country"

                                placeholder="Search"
                                type="search"
                                variant="outlined"
                                onChange={(e) => {

                                    newAry = []

                                    let newObj = Object.keys(props.state.cityData)
                                    newObj.pop()

                                    newObj.forEach((element, index) => {

                                        if (Object(props.state.cityData)[element].title.toLowerCase().indexOf(e.target.value) != -1) {
                                            newAry.push(Object(props.state.cityData)[element].title)
                                        }

                                    })

                                    props.setCityName(newAry)
                                }
                                }
                            />
                            <Divider />
                            <List>

                                {props.state.cityName.map((value, index) => {

                                    return (
                                        <ListItem button key={value}
                                            onClick={
                                                () => {
                                                    props.setDataCity(props.state.cityData[index + 1].title)
                                                    props.setDeaths(props.state.cityData[index + 1].total_deaths);
                                                    props.setRecovered(props.state.cityData[index + 1].total_recovered);
                                                    props.setConfirmed(props.state.cityData[index + 1].total_cases);
                                                    props.setActive(props.state.cityData[index + 1].total_serious_cases);

                                                }
                                            }
                                        >
                                            <ListItemIcon ><LocationCity color="primary" /></ListItemIcon>
                                            <ListItemText primary={value} id="asdf" />
                                        </ListItem>
                                    )

                                }

                                )
                                }

                            </List>
                            <Divider />
                        </div>
                    </div>

                )
            }}

        </MyContext.Consumer >

    )


    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <MyContext.Consumer>
            {(props) => {
                return (

                    <div className={classes.root}>
                        <CssBaseline />
                        <AppBar position="fixed" className={classes.appBar}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" noWrap >
                                    COVID-19 <p style={{display:"inline",fontWeight:"bold"}}>{props.state.dataCity}</p>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <nav className={classes.drawer} aria-label="mailbox folders">
                            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                            <Hidden smUp implementation="css">
                                <Drawer
                                    container={container}
                                    variant="temporary"
                                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                    open={mobileOpen}
                                    onClose={handleDrawerToggle}
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    ModalProps={{
                                        keepMounted: true, // Better open performance on mobile.
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                            </Hidden>
                            <Hidden xsDown implementation="css">
                                <Drawer
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    variant="permanent"
                                    open
                                >
                                    {drawer}
                                </Drawer>
                            </Hidden>
                        </nav>
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <div className="tollbar-content">
                                <Typography paragraph >
                                    <NavTop />
                                </Typography>
                                <Typography paragraph>
                                    <Covid_Chart />
                                </Typography>
                            </div>
                        </main>
                    </div>

                )
            }}

        </MyContext.Consumer >



    );
}

DrawerLeft.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerLeft;
