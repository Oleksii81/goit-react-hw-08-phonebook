export const selectUser = state => state.auth.user.name;
export const selectLoggedUser = state => state.auth.isLoggedIn;
export const selectLoading = state => state.auth.isLoading;
export const selectRefreshing = state => state.auth.isRefreshing;