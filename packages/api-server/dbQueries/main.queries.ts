interface IMainTable {
  region: string;
  capital: string;
  square: string;
  population: string;
}

export const createMainTableRow = ({
  region,
  square,
  capital,
  population,
}: IMainTable) => {
  return `SELECT *
          FROM create_main_element('${region}', '${capital}', ${square}, ${population});`;
};

export const updateMainTableRow = ({
  id,
  region,
  square,
  capital,
  population,
}: IMainTable & { id: string }) =>
  `SELECT *
   from update_table(${id}, '${region}', '${capital}', ${square}, ${population});`;

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

export const getCountLessAvg = () => `
    select *
    from get_count_less_than_average();
`;
export const getRegionsLessAvg = () => `
    select *
    from get_regions_less_than_average();
`;

export const getMaxSquare = () => `
 select * from get_max_square();
`;

export const getAvgPopulation = () => `select * from get_average_population();
`;
