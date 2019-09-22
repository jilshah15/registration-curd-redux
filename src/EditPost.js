import React from 'react';
import {connect} from 'react-redux';
class PostForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			fname:this.props.post.fname,
			lname:this.props.post.lname,
			uname:this.props.post.uname,
			password:this.props.post.password,
			gender:this.props.post.gender,
			country:this.props.post.country,
			
		}
	}
		handleChange=(event)=>{
			this.setState({
				[event.target.name]:event.target.value
			})
		}
		handleSubmit=(event)=>{
			event.preventDefault();
			const payload={
			
				fname:this.state.fname,
				lname:this.state.lname,
				uname:this.state.uname,
				password:this.state.password,
				gender:this.state.gender,
				country:this.state.country,
				editing:this.state.editing,
			}
				this.props.dispatch({
					id:this.props.post.id,
					type:'UPDATE_REGISTRATION',
					payload,
				})
		}
		handleClick=(event)=>{
			console.log('Successfully Updated Data')
		}


	render(){
		console.log(this.props);
		return(
			<div>
				<h1>Registration Form</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>FirstName</label>
						<input name="fname" onChange={this.handleChange} 
						defaultValue={this.state.fname}/>
					</div>
						<div>
							<label>LastName</label>
							<input name="lname" onChange={this.handleChange} 
							defaultValue={this.state.lname}/>
						</div>
							<div>
								<label>UserName</label>
								<input name="uname" onChange={this.handleChange} 
								defaultValue={this.state.uname}/>
							</div>
								<div>
									<label>Password</label>
									<input name="password" type="password" 
									onChange={this.handleChange} 
									defaultValue={this.state.password}/>
								</div>
									<div>
										<label>Gender</label>
										<input type="radio"
												name="gender"
												value="male"
												checked={this.state.gender === 'male'}
												onChange={this.handleChange}/>
										Male
										<input type="radio"
											   name="gender"
											   value="female"
											   checked={this.state.gender === 'female'}
											   onChange={this.handleChange} />Female
									</div>
											<div>
											<label>country</label>
											<select name="country"
													onChange={this.handleChange}
													defaultValue={this.state.country}>
											<option>-Select country-</option>
											<option value="India">India</option>
											<option value="Pakistan">Pakistan</option>
											<option value="Australia">Australia</option>		
											</select>
										</div>
											<button onClick={this.handleClick}>UPDATE</button>
				</form>
			</div>
			)
	}
}
export default connect()(PostForm);