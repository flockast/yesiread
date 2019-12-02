const state = {
	theme: 'default', // dark | black | default
	size: 6 // from 1 to 10
};

const getters = {
	theme (state) {
		return state.theme;
	},
	size (state) {
		return state.size;
	},
	sizePx (state) {
		return Math.floor((10/9) * state.size + 35/9);
	}
};

const mutations = {
	changeTheme(state, newTheme) {
		state.theme = newTheme;
	},
	changeSize(state, newSize) {
		state.size = newSize;
	}
};

const actions = {
	changeTheme({ commit }, newTheme) {
		commit('changeTheme', newTheme);
	},
	changeSize({ commit }, newSize) {
		commit('changeSize', newSize);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
