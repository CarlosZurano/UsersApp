import Swal from "sweetalert2";

export const UserRow = ({ handlerUserSelectedForm ,id, username, email, handlerRemoveUser }) => {
    
  const onRemoveUser = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        handlerRemoveUser(id);
        Swal.fire("Eliminado", "El usuario ha sido eliminado.", "success");
      }
    });
  };

  
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          <button 
            type="buttom" 
            className="btn btn-secondary btn-sm"
            onClick={() => handlerUserSelectedForm({
              id,
              username,
              email,
            })}>
            update
          </button>
        </td>

        <td>
          <button 
            type="button" 
            className="btn btn-danger btn-sm"
            onClick={()=> onRemoveUser(id)}>
            remove
          </button>
        </td>
      </tr>
    </>
  );
};
