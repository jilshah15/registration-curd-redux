import React from 'react';
import {connect} from 'react-redux';
class Post extends React.Component{
	render(){
		return(
			<tr>
				<td>{this.props.post.fname}</td>
				<td>{this.props.post.lname}</td>
				<td>{this.props.post.uname}</td>
				<td>{this.props.post.password}</td>
				<td>{this.props.post.gender}</td>
				<td>{this.props.post.country}</td>
				<td><button onClick={()=>this.props.dispatch({
					type:'EDIT_REGISTRATION',
					id:this.props.post.id,
				})}>
				     EDIT
				</button></td>
						<td><button onClick={()=>this.props.dispatch({
							type:'DELETE_REGISTRATION',
							id:this.props.post.id,
							})}>
				     		DELETE
						</button></td>	
			</tr>
			)
	}
}
export default connect()(Post);
