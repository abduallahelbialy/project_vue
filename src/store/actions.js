import axiosClients from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClients.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setsearchMeals", data.meals);
  });
}

export function searchMealsByLetter({ commit }, Letter) {
  axiosClients.get(`search.php?f=${Letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredents({ commit }, ing) {
  debugger;
  axiosClients.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setMealsByIngredents", data.meals);
  });
}
