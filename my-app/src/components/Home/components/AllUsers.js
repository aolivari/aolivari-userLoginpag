import React from "react";

function AllUsers() {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalpage, setTotalPage] = React.useState();
  const [perpage, setPerPage] = React.useState(1);

  const userPerPage = [1, 2, 5, 10];

  const f = async () => {
    const res = await fetch(
      `https://reqres.in/api/users?per_page=${perpage}&&page=${page}`
    );
    const json = await res.json();
    console.log(json.total_pages);
    setUsers(json.data);
    setPage(json.page);
    setTotalPage(json.total_pages);
    setPerPage(json.per_page);
  };

  React.useEffect(() => {
    f();
  }, []);

  return (
    <div>
      <h2>This are all user</h2>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
      <button>next page>></button> <p>actual page {page}</p>
      <p>total pages {totalpage}</p>
      <select>
        <option selected> users per page </option>
        {userPerPage.map((user) => {
          return <option value={user}>{user}</option>;
        })}
      </select>
    </div>
  );
}

export default AllUsers;
