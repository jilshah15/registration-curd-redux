import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditPost from './EditPost';
class AllPost extends React.Component{
	render(){
		const post=this.props
		console.log(post)
		return(
			<div>
				<h1>Registered Data</h1>
				<table>
					<thead>
						<tr>
							<th>FirstName</th> 
							<th>LastName</th>
							<th>UserName</th>
							<th>Password</th>
							<th>Gender</th>
							<th>Country</th>
						</tr>
					</thead>
						<tbody>
							{this.props.posts.map((item,index)=>(
								<div>
									{item.editing?
										<EditPost key={index} post={item}/>
									:<Post key={index} post={item}/>
									}

								</div>


								))}
						</tbody>
				</table>
			</div>
			)
	}
}
	const mapStateToProps=(state)=>{
		return{
			posts:state,
		}
	}


export default connect(mapStateToProps)(AllPost);