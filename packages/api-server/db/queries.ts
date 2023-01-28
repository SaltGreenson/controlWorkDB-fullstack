interface IMainTable {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  jobId?: string;
}

export const createMainTableRow = ({
  firstName,
  lastName,
  email,
  gender,
  jobId,
}: IMainTable) => {
  return `SELECT * FROM create_main_element('${firstName}', '${lastName}', '${email}', '${gender}'${
    jobId ? `, '${jobId}'` : ""
  });`;
};

export const updateMainTableRow = ({
  id,
  firstName,
  lastName,
  email,
  gender,
  jobId,
}: IMainTable & { id: string }) =>
  `SELECT * from update_main_table(${id}, '${firstName}', '${lastName}', '${email}', '${gender}'${
    jobId ? `, ${jobId}` : ""
  });`;

export const deleteMainTableRow = (id: string) =>
  `SELECT * FROM delete_element_from_main_table(${id});`;

export const getMainTableRows = (offset?: string, limit?: string) =>
  `SELECT * FROM display_main_table_with_relatable(${offset}, ${limit});`;

export const getMainTableRow = (id: string) =>
  `SELECT * FROM get_main_element(${id});`;

export const getMax = () => `SELECT * FROM get_max();`;

export const getMin = () => `SELECT * FROM get_min();`;

export const getBetween = (from: string, to: string) =>
  `SELECT * FROM get_between(${from}, ${to});`;
