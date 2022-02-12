import './Navbar.css';
// import AppBar from '@mui/material/AppBar';
import { Avatar, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Button, IconButton } from '@material-ui/core';
import { Container } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Tooltip } from '@mui/material';

// const pages = ['Home', 'Mock Test', 'All Quizzes', 'Blog'];
// const links = ['/', '/mock-test', '/all-quizzes', '/blog'];
const pages = [
    {
        name: 'Home',
        link: '/'
    },
    // {
    //     name: 'All Quizzes',
    //     link: '/all-quizzes'
    // },
    {
        name: 'Blog',
        link: '/blog'
    },
    {
        name: 'Register',
        link: '/register'
    },
    {
        name: 'Login',
        link: '/login'
    }
]
const settings = [
    {
        name: 'Profile',
        link: '/profile'
    },
    {
        name: 'Dashboard',
        link: '/dashboard'
    },
    {
        name: 'Logout',
        link: '/logout'
    }
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = (event) => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position='static'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant='h5' fontWeight={600} noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        <NavLink to='/' style={{ color: 'white', textDecoration: 'none' }}>QUIZ</NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup="true" color='inherit' onClick={handleOpenNavMenu}>
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {
                                pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign='center'>
                                            <NavLink to={page.link} style={{ color: 'black', fontSize: 16, textDecoration: 'none' }}>{page.name}</NavLink>
                                        </Typography>
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>

                    <Typography variant='h5' fontWeight={600} noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <NavLink to='/' underline='none' style={{ color: 'white', textDecoration: 'none' }}>QUIZ</NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {
                            pages.map((page) => (
                                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                    <NavLink to={page.link} style={{ color: 'white', fontSize: 16, textDecoration: 'none' }}>{page.name}</NavLink>
                                </Button>
                            ))
                        }
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Nitesh Jangid" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {
                                settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">
                                            <NavLink to={setting.link} style={{ color: 'black', textDecoration: 'none' }}>{setting.name}</NavLink>
                                        </Typography>
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
