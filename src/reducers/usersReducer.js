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
            // El payload es el ID del usuario que queremos eliminar.
            // Usamos .filter para crear un nuevo array excluyendo al usuario con ese ID.
            // Esto mantiene la inmutabilidad: no modificamos el array original, devolvemos uno nuevo.
        
        case 'updateUser':
            return state.map( u => {
                if(u.id === action.payload.id){
                    return {
                        ...action.payload
                    };
                }
                return u
            })
        default:
            return state;
    }
}