export const loginReducer = (state ={}, action) => {
    
    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                user: action.payload,
            };
        
        case 'logOut':
            return{
                isAuth:false,
            };
            
        default:
            return state;
    }
}