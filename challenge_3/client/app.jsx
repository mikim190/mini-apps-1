
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClick: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleClick(e) {  
    e.preventDefault(); 
    if (this.state.isClick === 3) {
      this.setState({
        
      })
    
    } else {
    
    this.setState({
    isClick: this.state.isClick + 1  
    })
  }
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
  
    })
  }



  render() {
    
    const isClick = this.state.isClick;
    let button;

    if (isClick === 0) {
      button = <Checkout handleClick={this.handleClick} />
    }
    else if (isClick === 1) {
      button = <UserForm handleClick={this.handleClick} handleChange={this.handleChange} />
    }
    else if (isClick === 2) {
      button = <AddressForm handleClick={this.handleClick} handleChange={this.handleChange}/>
    }
    else if (isClick === 3) {
      button = <PaymentForm handleClick={this.handleClick} handleChange={this.handleChange}/>
    } else if (isClick === 4) {
      button = <UserInfo handleClick={this.handleClick} handleChange={this.handleChange} />
    }

    return (
      
    <div className="main">   
      <h1>Home Page</h1>    
      {button}
      
    </div>
    )   
  }
}


var Checkout = (props) => {
  return (
  <button onClick={(e) => props.handleClick(e)}>CHECKOUT</button>
  )
}

var UserForm = (props) => {
    return (
      <form id="form_1" >
        <div>Name<input type="text" name="name" onChange={props.handleChange}/></div>
        <div>Email<input type="text" name="email" onChange={props.handleChange}/></div>
        <div>Password<input type="text" name="password" onChange={props.handleChange}/></div>
        <button onClick={(e) => props.handleClick(e)}>NEXT</button>
        
      </form>  
      
    )
};


var AddressForm = (props) => {

  return (
    <form id="form_2">
      <div>Line 1<input type="text" name="line1" onChange={props.handleChange}/></div>
      <div>Line 2<input type="text" name="line2" onChange={props.handleChange}/></div>
      <div>City<input type="text" name="city" onChange={props.handleChange}/></div>
      <div>State<input type="text"name="state" onChange={props.handleChange}/></div>
      <div>Zip code<input type="text" name="zip" onChange={props.handleChange}/></div>
      
      <button onClick={(e) => props.handleClick(e)}>NEXT</button>
    </form>
  )
}

var PaymentForm = (props) => {
  return (
    <form id="form_3">
      <div>Credit card #<input type="text" name="cc#" onChange={props.handleChange}/></div>
      <div>Expiry data<input type="text" name="exp" onChange={props.handleChange}/></div>
      <div>CVV<input type="text" name="cvv" onChange={props.handleChange}/></div>
      <div>Billing zip code<input type="text" name="billing" onChange={props.handleChange}/></div>
      
      <button onClick={(e) => props.handleClick(e)}>NEXT</button>
    </form>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));



