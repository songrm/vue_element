const getters = {
  permission_routers(state) {
    return state.sidebar.routers;
  },
  addRouters: state => state.sidebar.addRouters,
  roles: state => state.sidebar.roles,
  getuser: state => state.longin_info.user,
  sbar_width: state => state.sidebar.sbar_width
};

export default getters;
