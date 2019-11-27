const state = {
	theme: 'default', // dark | black | default
	size: 0.65
};

const getters = {
	getTheme (state) {
		return state.theme;
	},
	getSize (state) {
		return state.size;
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
