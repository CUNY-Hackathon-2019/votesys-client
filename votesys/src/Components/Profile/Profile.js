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
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

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

    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <img src={this.state.img} />
                    <div>
                        <div>
                            <h1>Hello {this.state.firstName} {this.state.lastName}</h1>
                            <hr></hr>
                            <h2>Welcome to Truly-Vote. Your vote is not held in any central repository, by any government or any organization. Instead, your vote is held on a decentralized blockchain system. </h2>
                            <hr></hr>
                            <br></br>
                            <h2>Your email is <span>{this.state.email}</span></h2>
                            <h2>Your public key is: <span>{this.state.pk}</span></h2>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
