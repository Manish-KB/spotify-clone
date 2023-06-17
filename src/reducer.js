export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
}

const reducer=(state,action)=>
{
console.log(action);
// Action has: type and [payload]
switch(action.type){
    case 'SET_USER':
        return{
            ...state,  ///Keep whateve state it was in else it will be replaced
            user:action.user
        }
        
        default:
            return state;
}

}

export default reducer;