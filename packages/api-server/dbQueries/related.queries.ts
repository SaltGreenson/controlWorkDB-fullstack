interface IRelatedTable {
  title: string;
  salary: string;
}

export const createRelatedTableRow = ({ title, salary }: IRelatedTable) =>
  `SELECT * FROM create_related_row('${title}', ${salary});`;

export const deleteRelatedTableRow = (id: string) =>
  `SELECT * FROM delete_related_row(${id});`;

export const updateRelatedTableRow = ({
  id,
  salary,
  title,
}: IRelatedTable & { id: string }) =>
  `SELECT * FROM update_related_row(${id}, '${title}', '${salary}');`;

export const getRelatedTableRow = (id: string) =>
  `SELECT * FROM get_related_row(${id});`;

export const getRelatedTableRows = (offset?: string, limit?: string) =>
  `SELECT * FROM get_related_table(${offset ?? "0"}, ${limit ?? "20"});`;
