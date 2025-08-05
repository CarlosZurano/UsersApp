export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'addUser':
            return[
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),
                }
            ];

        case 'removeUser':
            return state.filter(user => user.id !== action.payload);
    // el payload es el id. Elimina usuarios cuyo id no es igual al id 
    // que queremos eliminar
        default:
            return state;
    }
}