import React, {Component} from 'react'
import logo from '../onclogo_135x135_1.png'

class LoginContainer extends Component {
    state={user: ''}
    handleChange = (e) => {
        this.setState({user: e.target.value})
    }
    render(){
        return(
            <div className="ui middle aligned center aligned grid" style={{height: '100vh'}}>
                <div className="ui column" style={{maxWidth: '500px'}}>
                    <h2 className="ui black image header" style={{color: "rgb(77, 179, 208)"}}>
                        <img src={logo} alt="onc logo" className="image"/>
                        <div className="content">
                            Login to your dashboard.
                        </div>
                    </h2>
                    <form className="ui large form" onSubmit={()=>this.props.handleSubmit(this.state.user)}>
                        <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="email" placeholder="Username" value={this.state.user} onChange={this.handleChange}/>
                            </div>
                        </div>
                    
                            <div className="ui fluid large black submit button" 
                                style={{backgroundColor: "rgb(77, 179, 208)"}}
                                onClick={()=>this.props.handleSubmit(this.state.user)}
                            >
                                Login
                            </div>
                        </div>

                    </form>
                    <div className="ui four column centered segment">
                        <strong>Disclaimer </strong>
                        <p>
                            This application has been developed for the ECE 399 class at the University of Victoria as a prototype project.
                            It is not developed or officially endorsed by Ocean Networks Canada and any likeness is purely for representational
                            purposes.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginContainer


/*
<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <img src="assets/images/logo.png" class="image">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password">
          </div>
        </div>
        <div class="ui fluid large teal submit button">Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
</div>
*/