export const state = () => ({
  store: true,
})

export const mutations = {
  changeStore(state) {
    state.store = !state.store
  },
}
