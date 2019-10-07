class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: '',
            fNameValue: '',
            pNameValue: '',
        };
      }
    
    render() {
        return (
            <div className="card-body ">
                <p className="h4 text-center py-4 ">Stay Updated</p>
                <form action="https://gmail.us20.list-manage.com/subscribe/post" method="POST" className="px-5">
                    <input type="hidden" name="u" value="d3d3bb204705bc189b8f60f9e"/>
                <input type="hidden" name="id" value="da4a6bf8e6"/>
                
                <label htmlFor='mce-FULLNAME' className="font-weight-light">
                    <i class="material-icons mr-2 align-middle">account_box</i>
                    Full name
                    <input 
                        type="text" 
                        name="FULLNAME" 
                        id="mce-FULLNAME" 
                        className="form-control "
                        value={this.state.fNameValue} 
                        onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                    />
                </label>

                <label htmlFor='mce-PROJECT' className="font-weight-light"> 
                <i class="material-icons mr-2 align-middle">business</i>
                    Project name
                    <input 
                        type="text" 
                        name="PROJECT" 
                        id="mce-PROJECT" 
                        className="form-control"
                        value={this.state.pNameValue} 
                        onChange={(e)=>{this.setState({pNameValue: e.target.value});}}
                    />
                </label>

                <label htmlFor='mce-EMAIL' className="font-weight-light">
                <i class="material-icons mr-2 align-middle">email</i>
                    Email *
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="mce-EMAIL"
                        className="form-control required"
                        value={this.state.emailValue} 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        /> 
                </label>
                    <input type="submit" value="Stay Updated" name="subscribe" id="mc-embedded-subscribe" className="button btn btn-danger px-5"/>

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_d3d3bb204705bc189b8f60f9e_da4a6bf8e6" tabIndex="-1" value="" placeholder="Sam" id="b_name"/>

                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                </div>
                </form>
            </div>
        )
    }
}
export default Form;