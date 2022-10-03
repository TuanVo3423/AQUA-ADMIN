import React, { useEffect } from 'react'
import ButtonAppBar from "../components/header";
import MuiDrawer from '@mui/material/Drawer';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { systemSelector } from '../../redux/Selector';
import EditProduct from '../../components/EditProduct';
export default function MainLayout({children , path}) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return (
       <Grid container spacing={2}>
        <Grid item xs={1}>
       <ButtonAppBar />
        </Grid>
        <Grid item xs={11}>
        <div style={{marginTop : '80px'}}>
            {children}
            {/* <EditProduct /> */}
        </div>
        </Grid>
       </Grid>
  )
}
