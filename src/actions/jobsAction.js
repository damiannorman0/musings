import {getJobs, getJob} from "../api";

const jobsAction = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOADING_ACTION'
    });

    try {
				const data = await getJobs();
				dispatch({
					type: 'GET_JOBS_ACTION',
					payload: {
						...data,
					}
				});
		} catch (err) {
    	console.error(err);
		}
  };
};

const jobAction = (id) => {
	return async (dispatch) => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		try {
			const data = await getJob(id);
			dispatch({
				type: 'GET_JOB_ACTION',
				payload: {
					...data,
				}
			});
		} catch (err) {
			console.error(err);
		}
	};
};

export {
	jobsAction,
	jobAction,
}
