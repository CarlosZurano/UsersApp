import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

export const UsersApp = () => {
  const initialUsers = [
    {
      id: 1,
      username: "pepe",
      password: 12345,
      email: "pepe@gmail.com",
    },
  ];

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <UserForm />
          </div>

          <div className="col">
            <UsersList users = {initialUsers}/>
          </div>
        </div>
      </div>
    </>
  );
};
