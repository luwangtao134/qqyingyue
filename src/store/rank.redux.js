import { TOP_LIST} from '../api'

export default(state,action)=>{
state = state || {data:[]}
switch (action.type){
case 'INIT':
return {data:action.data}
default :
return state
}
}
export const getRank = ()=> (dispatch) =>{
fetch(TOP_LIST).then((data)=>data.json()).then(res=>{
console.log(res)
dispatch({type:'INIT',data:res.data})
})
}