import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import logo from "./Anon.png"

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
      },
      avatar: {
        width: 60,
        height: 60
      },
      name: {
        marginTop: theme.spacing(1)
      }
});

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: this.props.profile.firstName,
            lastName: this.props.profile.lastName,
            email: this.props.profile.email,
            pk: this.props.profile.pk,
            img: this.props.profile.img
        }
    }

    componentDidMount = () => {
        const props_ = this.props
        this.setState({
            props_
        })
    }

    logout = () => {
        localStorage.removeItem('token')
    }

    render() {
        // //const {classes} = this.props
        // console.log(this.state)
        return (
        <div>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5" display="flex" style={{flex:1}}>
                            TrulyVote
                        </Typography> 
                        <Button color='inherit' justify="flex-end" onClick={()=>this.logout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <br/>
            <div align="left">
                <img src={logo} width="20%" alt="cuny" />
            </div>
                <br/>
                    <div style={{width: '100%'}} align ="center">
                        <Typography variant="h5">Welcome, {this.state.firstName} {this.state.lastName}</Typography>
                        <Box display="flex" justifyContent="center" flexWrap="wrap">
                            <img src={logo} style={{width: 200, height:200}}/>
                        </Box>
                        <br/>
                        <Typography variant="h5">your email: {this.state.email}</Typography>
                        <Typography variant="h5">public key: {this.state.pk}</Typography>
                        <br/><br/>
                        <Typography component="h1" color = 'primary' variant="h4" align="center">At TrulyVote,</Typography>
                        <Typography variant="h5" align="center">Your vote is not held in any central repository, by any government or any organization.</Typography> 
                        <Typography align="center" variant="h5" >Instead, your vote is held in a decentralized blockchain system.</Typography>
                        <Box display="flex" justifyContent="center" flexWrap="noWrap">
                            {/* <Grid container> */}

                                    {/* <Typography variant="h5">Welcome, {this.state.firstName} {this.state.lastName}</Typography>
                                    <Typography variant="h5">email: {this.state.email}</Typography>
                                    <Typography variant="h5">public key: {this.state.pk}</Typography>
                                    <br/><br/> */}
                                    {/* <Typography component="h1" color = 'primary' variant="h4">At TrulyVote,</Typography>
                                    <Typography variant="h5" >Your vote is not held in any central repository, by any government or any organization.</Typography> 
                                    <Typography align="center" variant="h5" >Instead, your vote is held in a decentralized blockchain system.</Typography> */}
                            {/* </Grid> */}
                        </Box>
                    </div>         
        </div>
        )
    }
}

