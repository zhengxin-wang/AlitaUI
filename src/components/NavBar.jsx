import MailIcon from "@mui/icons-material/Mail.js";
import MenuIcon from "@mui/icons-material/Menu.js";
import NotificationsIcon from "@mui/icons-material/Notifications.js";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from "@mui/icons-material/Search.js";
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
} from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../reducers/user";
import { SearchIconWrapper, SearchPanel, StyledInputBase } from "./SearchPanel.jsx";


const NavActions = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = () => {
        handleClose()
        dispatch(logout())
        navigate('/forward-auth/oidc/logout')
    }

    const handleProfile = () => {
        handleClose()
        navigate('/profile')
    }

    const {email} = useSelector(state => state.user)

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
                <PersonIcon/>
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
                <ListItem sx={{justifyContent: 'center'}}>
                    <Typography variant='caption'>
                        {email}
                    </Typography>
                </ListItem>
                <Divider/>
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <Divider/>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
        </>
    )
};

const TitleBread = () => {
    const {pathname} = useLocation()
    const [path, setPath] = useState([])

    useEffect(() => {
        setPath(['PromptLib', ...pathname.split('/').filter(i => i !== '')])
    }, [pathname])
    return (
        <Breadcrumbs aria-label="breadcrumb" color={'text.primary'}>
            {path.map(i => {
                return <Typography key={i} textTransform={'capitalize'}>{i}</Typography>
            })}
        </Breadcrumbs>
    )
}

const NavBar = () => {
    return (
        <AppBar position="static" sx={{mb: 1}}>
            <Toolbar variant={'regular'}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{mr: 2}}
                >
                    <MenuIcon/>
                </IconButton>
                <TitleBread/>
                <SearchPanel sx={{flexGrow: 1}}>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{'aria-label': 'search'}}
                    />
                </SearchPanel>
                <Box>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                </Box>
                <NavActions/>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar