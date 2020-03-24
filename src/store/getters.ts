const getters = {
  permission_routers(state:any) {
    return state.sidebar.routers;
  },
  addRouters: (state:any) => state.sidebar.addRouters,
  roles: (state:any) => state.sidebar.roles,
  getuser: (state:any) => state.longin_info.user,
  sbar_width: (state:any) => state.sidebar.sbar_width
};

export default getters;
