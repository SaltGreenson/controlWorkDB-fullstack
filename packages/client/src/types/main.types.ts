export interface IMainWithRelatable {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  job_title?: string;
  salary: string;
}

export interface IMain {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  job_id?: string;
}
