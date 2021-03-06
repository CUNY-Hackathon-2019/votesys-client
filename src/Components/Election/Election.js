import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
import Block from '../../Block';
import socket from '../../socket';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// const styles = theme => ({
//     '@global': {
//         body: {
//             backgroundColor: theme.palette.common.white,
//         },
//     },
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//       },
// });
export default class Election extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasVoted: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let x = 0;
        let num = parseInt(event.target.president.value, 10)
        let voteBlock = new Block(x++,this.props.profile.pk,num); //TODO
        socket.emit('voteBlock', {voteBlock});
        this.setState({
            hasVoted: true
        })
    }

    render() {
        const {classes} = this.props
        if (this.state.hasVoted) {
            return (
                <Grid item align="center">
                    <br/><br/>
                    <Typography component="h1" color = 'primary' variant="h4">Thanks for voting!</Typography><br/>
                    <Typography component="h1" color = 'primary' variant="h5">Your vote has now been updated on the public ledger</Typography>
                </Grid>
            )
        }
        return (
            <div>
                {/* <div>
                    <input type="text" placeholder="Search for elections on the blockchain" />
                    <button>Search</button>
                </div> */}
                <div className="search-container" align="right">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        id="search"
                        label="Search"
                        name="search"
                        placeholder='Search for elections on the blockchain'
                        autoFocus
                        onChange={this.handleChange}
                        style={{ width: 300 }}
                        onKeyPress = {this.handleKeyPress}
                    />
                </div>
                <div>
                    <Typography component="h1" color = 'primary' variant="h3" align="center">CUNY Student Government Elections</Typography>
                    <br/><br/>
                    <form onSubmit={this.handleSubmit}>
                        <div align="center">
                            <FormControl component="fieldset">
                                <Typography component="h1" variant="h4">President</Typography>
                                <RadioGroup aria-label="president" name="president">
                                    <div>
                                        <img style={{width:200, height:200}} src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" /><br/>
                                        <FormControlLabel value="1e" control={<Radio color="primary"/>} label="Aleena Sheikh" />
                                    </div>
                                    <div>
                                        <img style={{width:200, height:200}} src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" /><br/>
                                        <FormControlLabel value="2" control={<Radio color="primary"/>} label="Sami Hussein" />
                                    </div>
                                    <div>
                                        <img style={{width:200, height:200}} src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" /><br/>
                                        <FormControlLabel value="3" control={<Radio color="primary"/>} label="Tushar Malakar" />
                                    </div>  
                                    </RadioGroup>
                            </FormControl>                  
                            {/* <Typography component="h1" color = 'primary' variant="h4">President:</Typography>
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
                            </div> */}
                        </div>
                        <Grid item align="center">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                            VOTE
                            </Button>
                        </Grid>  
                    </form>  
                </div>
                <hr></hr>
            </div>
        )
    }
}

