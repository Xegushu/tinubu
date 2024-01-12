'use client'

import * as React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  InputBase,
  TextField,
  Toolbar,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import BrokerManagementCard from './components/BrokerManagementCard';
import { AccountCircle, Notifications, Star } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Box
            component='img'
            sx={{
              height: 44,
              width: 60,
              mr: 1,
            }}
            src='/logo.png'
          />
          <Typography
            sx={{ flexGrow: 1, paddingTop: 1, fontSize: 10 }}
          >
            Credit Solution Vanilla
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton sx={{ color: 'white' }}>
            <Star />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <Notifications />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <BrokerManagementCard />
      </Container>
    </>
  )
}
