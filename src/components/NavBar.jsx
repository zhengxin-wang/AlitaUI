import MailIcon from '@mui/icons-material/Mail.js';
import NotificationsIcon from '@mui/icons-material/Notifications.js';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search.js';
import {
    AppBar,
    Box,
    Breadcrumbs,
    Divider,
    ListItem,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@mui/material';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../reducers/user';
import AlitaIcon from './Icons/AlitaIcon';
import { SearchIconWrapper, SearchPanel, StyledInputBase } from './SearchPanel.jsx';
import SideBar from './SideBar';

const NavActions = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = useCallback(event => {
        setAnchorEl(event.currentTarget)
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null)
    }, [])

    const handleLogout = useCallback(() => {
        handleClose()
        dispatch(logout())
        navigate('/forward-auth/oidc/logout')
    }, [dispatch, handleClose, navigate])

    const handleProfile = useCallback(() => {
        handleClose()
        navigate('/profile')
    }, [handleClose, navigate]);

    const { email } = useSelector(state => state.user)

    return (
        <>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                <PersonIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <ListItem sx={{ justifyContent: 'center' }}>
                    <Typography variant='caption'>
                        {email}
                    </Typography>
                </ListItem>
                <Divider />
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
        </>
    )
};

const PathSessionMap = {
    '/discover/prompts': 'Discover',
    '/discover/collections': 'Discover',
    '/discover': 'Discover',
    '/my-prompts': 'My prompts',
    '/my-collections': 'My collections'
}

const TitleBread = () => {
    const { pathname } = useLocation()

    return (
        <Breadcrumbs aria-label="breadcrumb" color={'text.primary'}>
            <Typography textTransform={'capitalize'}>{PathSessionMap[pathname]}</Typography>
        </Breadcrumbs>
    )
}

const NavBar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false)
    const onClickIcon = useCallback(
        () => {
            setOpenSideMenu((prevState) => !prevState)
        },
        [],
    )
    const toggleDrawer = useCallback((open) => (event) => {
        if (event?.type === 'keydown' &&
            (event?.key === 'Tab' ||
                event?.key === 'Shift')) {
            return;
        }
        setOpenSideMenu(open);
    }, []);

    return (
        <AppBar position="static" sx={{ mb: 1 }}>
            <Toolbar variant={'regular'}>
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={onClickIcon}
                    >
                        <AlitaIcon />
                    </IconButton>
                    <SideBar
                        open={openSideMenu}
                        anchor={'left'}
                        onClose={toggleDrawer(false)}
                    />
                    <TitleBread />
                </Box>
                <Box  sx={{ flex: 1 }}>
                    <SearchPanel>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Let’s find something amaizing!"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </SearchPanel>
                </Box>
                <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Box>
                <NavActions />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar