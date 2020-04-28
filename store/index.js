
export const state = () => ({
  blogList: [],
  totalCount: 0,
  goTopShow: false
});
export const mutations = {
  blogListArray (state, settings) {
    state.blogList = settings.blogList
    state.totalCount = settings.totalCount
    state.goTopShow = settings.goTopShow
  }
};
// export const actions = {
//   async GET_STARS ({ commit }) {
//     const {list, count, goTopShow, code } = await API.request(
//       "/api/blog/list",
//       {
//         pageSize: 1,
//         itemSize: 100
//       },
//       {
//         method: "get"
//       }
//     )
//     if (code === 0) {
//       const listArray = {
//         blogList: list,
//         totalCount: Math.ceil(count/10),
//         goTopShow: goTopShow
//       }
//       commit('blogListArray', listArray)
//     }
//   }
// };
