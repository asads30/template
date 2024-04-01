import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}

export const layoutComputed = {
  ...mapState('layout', {
    layoutType: (state) => state.layoutType,
    layoutScrollable: (state) => state.layoutScrollable,
    layoutMode: (state) => state.layoutMode,
    leftSidebarType: (state) => state.leftSidebarType,
    sidebarColor: (state) => state.sidebarColor,
    layoutWidth: (state) => state.layoutWidth,
    topbar: (state) => state.topbar
  })
}

export const authMethods = mapActions('auth', ['logIn', 'logOut', 'register', 'resetPassword'])

export const layoutMethods = mapActions('layout', ['changeLayoutType', 'changeLayoutMode', 'changeLayoutWidth', 'changeLeftSidebarType', 'changeTopbar', 'changeSidebarColor', 'changeLayoutPosition'])

export const authFackMethods = mapActions('authfack', ['login', 'registeruser', 'logout'])

export const notificationMethods = mapActions('notification', ['success', 'error', 'clear'])

export const todoComputed = {
  ...mapState('todo', {
    todos: (state) => state.todos
  })
}
export const todoMethods = mapActions('todo', ['fetchTodos'])