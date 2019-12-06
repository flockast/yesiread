const state = {
	name: 'kostya',
	token: ''
};

const getters = {
	isAuth(state) {
		return state.token.length > 0
	}
};

const mutations = {

};

const actions = {

};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
