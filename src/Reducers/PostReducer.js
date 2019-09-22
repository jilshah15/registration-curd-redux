export const PostReducer=(state=[],action)=>{
	switch(action.type){
		case 'ADD_REGISTRATION':
			return state.concat([action.payload])
		case 'DELETE_REGISTRATION':
			return state.filter((post)=>post.id!==action.id)
		case 'EDIT_REGISTRATION':
			return state.map((post)=>post.id===action.id?{...post,editing : !post.editing}:post)
		case 'UPDATE_REGISTRATION':
			return state.map((post)=>{
				if(post.id===action.id){
					return{
						...post,
						fname:action.payload.fname,
						lname:action.payload.lname,
						uname:action.payload.uname,
						password:action.payload.password,
						gender:action.payload.gender,
						country:action.payload.country,
						editing:!post.editing
				
					}
				}
				else return post;
			})









		default:
			return state;	
	}
}