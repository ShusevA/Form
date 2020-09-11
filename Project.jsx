import React from "react";

class Project extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:"", last:"", tel:"", email:"", emailAll: "", telAll: ""};
       
        this.checkTel = this.checkTel.bind(this);
        this.check = this.check.bind(this);
        this.inputRef = React.createRef();
    }

    componentDidUpdate(){
        if(this.state.name.length > 0  && this.state.last.length > 0 && this.state.telAll && this.state.emailAll) {
            subm.removeAttribute("disabled");
        } else {
            subm.setAttribute("disabled", true)
       }
    }

    
    checkTel(e){
        if(!this.inputRef.current.value.match(/^\+/)){
            e.target.value =  "+44" + this.inputRef.current.value;
    }
    if(this.state.tel.length == 12){
        if(this.inputRef.current.value.match(/^\+\d{12,}/)){
            this.setState({telAll: true});
        }
    } else {
        this.setState({telAll: false})
    }
    }

    check(e){
        if(!e.target.value.match(/.+@.+\../i)){
            this.setState({emailAll: false})
        } else {
            this.setState({emailAll: true})
        }
    }

    render(){
        
    return(
        <form className="neon_border" >
            <h4 className="form-title">Welcome to OMG </h4>
            <div className="all">
            <div className="form-item m">
                 <input name="" id="form-text" placeholder=" " onChange={(e) => this.setState({name: e.target.value})} required/>
                 <label htmlFor="form-text">First Name</label>
            </div>
            <div className="form-item">
                <input type="text" id="person-name" placeholder=" " onChange={(e) => this.setState({last: e.target.value})} required/>
                <label htmlFor="person-name">Last Name</label>
            </div>
            </div>
            <div className="form-item">
                <input type="text" id="person-phone" placeholder=" " onChange={(e) => this.setState({tel: e.target.value})} onInput={this.checkTel} ref={this.inputRef} maxLength={13}/>
                <label htmlFor="person-phone">Phone</label>
            </div>
            <div className="form-item" id='er'>
                <input type="text" id="person-email" placeholder=" " onChange={(e) => this.setState({email: e.target.value})} onBlur={this.check} required/>
                <label htmlFor="person-phone">Email</label>
            </div>
            <button type="submit" id='subm' formAction="img/let.png" disabled>Create Account</button>
        </form>

    )
}
}

export default Project;
