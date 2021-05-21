import React from 'react'
import Card from "./Card";
import {makeStyles} from "@material-ui/core";
import {Grid} from "@material-ui/core";


export default function GridItems({title,image}) {

    const useStyles = makeStyles({
        gridContainer:{
            paddingLeft:20,
            paddingRight:20
        }
    })

    const classes = useStyles();
    return (
        <Grid container spacing={4}className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={4}>
                <Card title="aiyush" image="https://picsum.photos/300/300"/>
            </Grid>
            <Grid item xs={12} sm={6}  md={4}>
                <Card title="aman" image="https://picsum.photos/300/300"/>
            </Grid>
            <Grid item xs={12} sm={6}  md={4}>
                <Card title="aman" image="https://picsum.photos/300/300"/>
            </Grid>
            <Grid item xs={12} sm={6}  md={4}>
                <Card title="aman" image="https://picsum.photos/300/300"/>
            </Grid>
            <Grid item xs={12} sm={6}  md={4}>
                <Card title="aman"image="https://picsum.photos/300/300"/>
            </Grid>
            <Grid item xs={12} sm={6}  md={4}>
                <Card title="aman"image="https://picsum.photos/300/300"/>
            </Grid>
        </Grid>
    )
}
