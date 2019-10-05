class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fullName: '',
          projectName: '',
          email: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {
        alert('Thanks for checking out IPXS, ' + this.state.fullName);
        console.log(this.state);
        event.preventDefault();
      }

    render() {
        return (
            <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                    <p className="h4 text-center py-4">Decentralize Now</p>
                    <div className="md-form ">
                        <input type="text" required placeholder="First Last" name="fullName" className="form-control" value={this.state.fullName} onChange={this.handleInputChange}/>
                        <i className="material-icons mr-2 align-middle">account_box</i>
                        <label className="font-weight-light"> Full name *</label>
                    </div>
                    <div className="md-form">
                        <input type="text" name="projectName" className="form-control" value={this.state.projectName} onChange={this.handleInputChange}/>
                        <i className="material-icons mr-2 align-middle">business</i>
                        <label className="font-weight-light"> Your project</label>
                    </div>
                    <div className="md-form">
                        <input type="email" required name="email" className="form-control" value={this.state.email} onChange={this.handleInputChange}/>
                        <i className="material-icons mr-2 align-middle">email</i>
                        <label className="font-weight-light"> Your email * </label> 
                    </div>
                    <div className="text-center pb-4 mt-3">
                        <button className="btn btn-primary" type="submit">Stay Updated</button>
                        <small name="emailHelp" className="form-text text-muted">We'll never share your email.</small>
                    </div>
                </form>
            </div>
        );
    }
}
export default Form;