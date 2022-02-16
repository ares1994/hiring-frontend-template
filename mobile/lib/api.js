export function fetchUsers() {
  return new Promise((resolve, reject) => {



      fetch("http://localhost:4000/api/users", {
        method:"GET",
      })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {

            console.log({error});
            reject(error);
          });

  });
  // return fetch("http://localhost:4000/api/users").then((res) => res.json());
}
