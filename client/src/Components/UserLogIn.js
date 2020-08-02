import React, { Component } from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classes from '../App.module.css'
import {UserLogIn} from '../Actions/LogInAction';
import { Redirect } from "react-router-dom";

class UserLogInPage extends Component{
  constructor(props)
  {
    super();
    this.state = {
      UserName: "",
      Password: ""
    };
  }

  componentWillReceiveProps()
  {
    
  }

  OnLogIn = (event) =>{
    debugger;
    event.preventDefault();
    this.props.UserLogIn({...this.state});
  }

  OnValueChange = (event) =>
  {
    debugger;
    event.preventDefault();
    switch(event.target.id)
    {
        case "userName":
            {
                this.setState({UserName: event.target.value});
                break;
            }
        case "password":
            {
                this.setState({Password: event.target.value});
                break;
            }
    }
    this.setState({
      UserName: event.target.value,
      Password: event.target.value
    }) 
  }

  render()
  {
      debugger;
    if(this.props.isUserLoggedIn)
    {
        //this.props.history.push('/User/Landing')
        return <Redirect to='/User/Landing' ></Redirect>
    }   
    return (    
      <div className= {classes.LogInForm}>
         <input id="userName" className={classes.UserInputs} onChange={this.OnValueChange} type="text"></input>
         <input id = "password" className={classes.UserInputs} onChange={this.OnValueChange} type="password"></input>
         <input className={classes.UserActionButton} type="button" value="Log In" onClick={this.OnLogIn}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    userDetails : state.LogInReducer.UserDetails,
    isUserLoggedIn : state.LogInReducer.IsUserLoggedIn
  }
};

UserLogIn.propTypes = {
  UserLogIn : PropTypes.func.isRequired,
  userDetails: PropTypes.object.isRequired,
  isUserLoggedIn : PropTypes.bool.isRequired
};

const mapDispatchToProps = {
  UserLogIn
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserLogInPage));