/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

function AllUsersData() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState();
  const [perpage, setPerPage] = useState(1);
  const userPerPage = [1, 2, 5, 10];

  const fetching = async () => {
    const res = await fetch(
      `https://reqres.in/api/users?per_page=${perpage}&&page=${page}`
    );
    const json = await res.json();

    setUsers(json.data);
    setPage(json.page);
    setTotalPage(json.total_pages);
    setPerPage(json.per_page);
  };

  if (page > totalpage) {
    setPage(totalpage);
  }

  function pageSelector(value) {
    setPage(value);
  }

  function userSelector(value) {
    setPerPage(value);
    setPage(1);
  }

  function nextPage() {
    let nextPage = page + 1;
    if (nextPage > totalpage) {
      nextPage = totalpage;
    } else setPage(nextPage);
  }

  function previousPage() {
    let previousPage = page - 1;
    if (previousPage < 1) {
      setPage(1);
    } else setPage(previousPage);
  }

  useEffect(() => {
    fetching();
  }, [page, perpage]);

  let i = 0;
  let arrayPages = [];

  while (i < totalpage) {
    i++;
    arrayPages.push(i);
  }

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
      <button onClick={previousPage}>Previous Page</button>
      <button onClick={nextPage}>Next page</button>
      <p>page {page}</p>
      <div className="flex">
        go to page <span></span>
        <select onChange={(e) => pageSelector(e.target.value)}>
          {arrayPages.map((p) => {
            return <option value={p}>{p}</option>;
          })}
        </select>
        <span>users per page</span>
        <select onChange={(e) => userSelector(e.target.value)}>
          {userPerPage.map((user) => {
            return <option value={user}>{user}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default AllUsersData;
