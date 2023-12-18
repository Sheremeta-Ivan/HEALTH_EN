export const selectUserName = state => state.auth.userForm.name;

export const selectUserEmail= state => state.auth.userForm.email;

export const selectUserPassword = state => state.auth.userForm.password;

export const selectUserGoal = state => state.auth.goalForm.goal;

export const selectUserGender = state => state.auth.genderAgeForm.gender;

export const selectUserAge = state => state.auth.genderAgeForm.age;

export const selectUserHeight = state => state.auth.bodyParamForm.height;

export const selectUserWeight = state => state.auth.bodyParamForm.weight.kg;

export const selectUserWeightCurrentDate = state => state.auth.bodyParamForm.weight.createdAt;

export const selectUserActivity = state => state.auth.activityForm.activity;

export const selectLoggedUser = state => state.auth.isLoggedIn;

export const selectLoading = state => state.auth.isLoading;

export const selectRefreshing = state => state.auth.isRefreshing;