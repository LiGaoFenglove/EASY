import { CHANGE_DETAIL } from './actionTypes'


const defaultState = {
	title : '1',
	date : '2',
	content : '3'

}
//到出到总store 在index.js里面到出
export default (state = defaultState,action) =>{
	switch(action.type) {
		case CHANGE_DETAIL:
			return {
				...state,
				...action.value
			}
		default:
			return state
	}

}