const cookieparser = process.server ? require('cookieparser') : undefined;

export const state = () => ({
  token: null,
  _id: null,
  admin: null,
})

export const mutations = {
  setAuth(state, data){
    state.token = data.token;
    state._id = data._id;
  },
  setProfile(state, data){
    state.admin = data;
  },
  removeAuth(state){
    state.token = null;
    state._id = null;
    state.admin = null;
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app, $axios }){
    const parsed = {id: app.$cookies.get('id'), token: app.$cookies.get('token')};
    $axios.setToken(parsed.token);
    let res = await $axios.$get(process.env.apiUrl + '/admin')
    if(res.success){
      commit('setAuth', parsed);
      commit('setProfile', res.data.users);
    } else {
      commit('removeAuth')
    }
  },
  login({ commit }, data){
    commit('setAuth', data);
    this.$axios.setToken(data.token);
  },
  profile({commit}, data){
    commit('setProfile', data);
  },
  logout({commit}){
    commit('removeAuth');
  }
}
