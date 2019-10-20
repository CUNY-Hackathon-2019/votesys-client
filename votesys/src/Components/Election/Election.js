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

export default class Election extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasVoted: false
        }
    }
    render() {
        if (this.state.hasVoted) {
            return (
                <div>
                    <h1>Thanks for voting!</h1>
                    <h2>Your vote has now been updated on the public ledger</h2>
                </div>
            )
        }
        return (
            <div>
                <div>
                    <input type="text" placeholder="Search for elections on the blockchain" />
                    <button>Search</button>
                </div>
                <div>
                    <h1>Baruch Student Government Elections</h1>
                    <hr></hr>
                    <form>
                        <div>
                            <h2>President:</h2>
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
                                <label>
                                    <input type="radio" name="president" value="1" />
                                    Aleena Sheikh
                                </label>
                            </div>
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
                                <label>
                                    <input type="radio" name="president" value="2" />
                                    Sami Hussein
                                </label>
                            </div>
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
                                <label>
                                    <input type="radio" name="president" value="3" />
                                    Tushar Malakar
                                </label>
                            </div>
                        </div>
                        <submit><button>VOTE!</button></submit>
                    </form>  
                </div>
                <hr></hr>
            </div>
        )
    }
}

