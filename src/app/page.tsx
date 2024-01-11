'use client'

import * as React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
} from '@mui/material';
import BrokerManagementCard from './Components/BrokerManagementCard';

export default function Home() {
  return (
    <>
      <AppBar position='static'>

      </AppBar>
      <BrokerManagementCard />
    </>
  )
}
