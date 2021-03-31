const baseUrl = process.env.REACT_APP_APPID;

const getJobs = async () => {
  const response = await fetch(`https://www.themuse.com/api/public/jobs?page=1`);
  const json = await response.json();
  return json;
};

const getJob = async (id) => {
  const response = await fetch(`https://www.themuse.com/api/public/jobs/${id}`);
  const json = await response.json();
  return json;
};

export {
  getJobs,
  getJob,
}