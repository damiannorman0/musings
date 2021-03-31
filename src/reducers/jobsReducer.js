const initialState = {
	loading: false,
	jobs: [],
	applied: {},
	page: -1,
	page_count: -1,
	total: -1,
	job: {},
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'LOADING_ACTION':
			return {
				...state,
				loading: true
			};
		case 'GET_JOBS_ACTION':
			const {results:jobs, page, page_count, total} = action.payload;
			return {
				...state,
				loading: false,
				jobs: [...jobs],
				page,
				page_count,
				total,
			};
		case 'GET_JOB_ACTION':
			const result = action.payload;
			return {
				...state,
				loading: false,
				job: {...result},
			};
		case 'NOT_FOUND':
			return {
				...state,
				loading: false
			};

		default:
			return state
	}
};

export default reducer;
