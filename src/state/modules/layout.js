export const state = {
  layoutMode: 'light',
  layoutScrollable: false,
  sidebarColor: 'light',
  layoutType: 'vertical',
  layoutWidth: 'fluid',
  leftSidebarType: 'default',
  topbar: 'light'
}

export const mutations = {
  CHANGE_LAYOUT(state, layoutType) {
    state.layoutType = layoutType;
  },
  CHANGE_LAYOUT_MODE(state, layoutMode) {
    state.layoutMode = layoutMode;
  },
  CHANGE_LAYOUT_POSITION(state, layoutScrollable) {
    state.layoutScrollable = layoutScrollable
  },
  CHANGE_LAYOUT_WIDTH(state, layoutWidth) {
    state.layoutWidth = layoutWidth;
  },
  CHANGE_LEFT_SIDEBAR_TYPE(state, leftSidebarType) {
    state.leftSidebarType = leftSidebarType;
  },
  CHANGE_LEFT_SIDEBAR_COLOR(state, sidebarColor) {
    state.sidebarColor = sidebarColor;
  },
  CHANGE_TOPBAR(state, topbar) {
    state.topbar = topbar;
  }
}

export const actions = {
  changeLayoutType({ commit }, { layoutType }) {
    commit('CHANGE_LAYOUT', layoutType);
  },
  changeLayoutMode({ commit }, { layoutMode }) {
    commit('CHANGE_LAYOUT_MODE', layoutMode);
  },
  changeLayoutPosition({ commit }, { layoutScrollable }) {
    commit('CHANGE_LAYOUT_POSITION', layoutScrollable);
  },
  changeLayoutWidth({ commit }, { layoutWidth }) {
    commit('CHANGE_LAYOUT_WIDTH', layoutWidth)
  },
  changeSidebarColor({ commit }, { sidebarColor }) {
    commit('CHANGE_LEFT_SIDEBAR_COLOR', sidebarColor )
  },
  changeLeftSidebarType({ commit }, { leftSidebarType }) {
    commit('CHANGE_LEFT_SIDEBAR_TYPE', leftSidebarType)
  },
  changeTopbar({ commit }, { topbar }) {
    commit('CHANGE_TOPBAR', topbar)
  }
}
