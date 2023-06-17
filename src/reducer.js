export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
// Temp for developing
    token:"BQAAmcPIIRYjcAHYrTUyoaasceuYLsPyuEKadaPXEmgii34tAcnUcVmUY1nbIJN34vv2NXqzR3FEVC_q1IgZI7sBc5y2sgLejGs8WsBqQH7cCTElRgCzmw-Jp_sP23HubpRA12mSHQXwy0RsZbJRNnf6oT2UNKroV_XkiPEa_BwqSZ0pGdKNiIgL8QBIIDlbfu4Pkc5BFXbiLdJUnNt4eNJE"

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
        case 'SET_TOKEN':
            return{
                ...state,  ///Keep whateve state it was in else it will be replaced
                token:action.token
            }
        default:
            return state;
}

}

export default reducer;