export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Temp for developing
    //token:"BQCw7hjtpp_yiMKPHIQ9NafQCgBZKtqW1wxgseXxnfh8TUooc8rd61Zdg5uIw9l2ivJxwAtp034JQ_aMM4qvwjjelE1sTNVIWIOHn97EVtkygIdZpCEGMBoMWmigONai_pLTYiW4ZJG8LIWSXvDHmgKHq0Ohre2thiMDAvhL5MKMLbI4ZNqjQ9TrKFDnbm5QDjSfkLVg-PBGk8KcrvHd6dkT"
   

}

const reducer = (state, action) => {
    console.log(action);
    // Action has: type and [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,  ///Keep whateve state it was in else it will be replaced
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,  ///Keep whateve state it was in else it will be replaced
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,  ///Keep whateve state it was in else it will be replaced
                playlists: action.playlists
            }

            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,  ///Keep whateve state it was in else it will be replaced
                    discover_weekly: action.discover_weekly
                }
        default:
            return state;
    }

}

export default reducer;