export const insertUser = (name: string, surname: string) =>
  `INSERT INTO person(name, surname) values (${name}, ${surname}) RETURNING *`;

export const getUsers = () => `SELECT * FROM person`;

export const getUser = (id: string) => `SELECT * FROM person WHERE id = ${id}`;

export const updateUser = (id: string, name?: string, surname?: string) => {
  return (
    `UPDATE person set ${name ? `name='${name}'` : ""}` +
    `${name && surname ? "," : ""}` +
    `${surname ? `surname='${surname}'` : ""}` +
    ` WHERE id=${id} RETURNING *`
  );
};

export const deleteUser = (id: string) => {
  return `DELETE FROM person WHERE id=${id} RETURNING *`;
};
