interface IMainTable {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  job: string;
  salary: string;
}

export const createMainTableRow = ({
  firstName,
  lastName,
  email,
  gender,
  job,
  salary,
}: IMainTable) => {
  return `SELECT *
          FROM create_main_element('${firstName}', '${lastName}', '${email}', '${gender}', '${job}', ${salary});`;
};

export const updateMainTableRow = ({
  id,
  firstName,
  lastName,
  email,
  gender,
  job,
  salary,
}: IMainTable & { id: string }) =>
  `SELECT *
   from update_table(${id}, '${firstName}', '${lastName}', '${email}', '${gender}', '${job}', ${salary});`;

export const deleteMainTableRow = (id: string) =>
  `SELECT *
   FROM delete_element(${id});`;

export const getMainTableRows = (offset?: string, limit?: string) =>
  `SELECT *
   FROM display_table(${offset ?? "0"}, ${limit ?? "20"});`;

export const getMax = () => `SELECT *
                             FROM get_max();`;

export const getMin = () => `SELECT *
                             FROM get_min();`;

export const getBetween = (from: string, to: string) =>
  `SELECT *
   FROM get_between(${from}, ${to});`;

export const searchDataQuery = (search: string) =>
  `select *
   from search_data('${search}');`;
export const searchSalaryQuery = (search: string) =>
  `select *
   from search_data_by_salary(${search});`;
