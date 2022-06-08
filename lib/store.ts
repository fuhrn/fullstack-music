import {createStore, action} from 'easy-peasy'

export const store = createStore({
  activeSongs: [],
  activeSong: null,
  changeActiveSongs: action((state: any, payload) => {
    // internamente esta lib usa immer que transforma mutable operation into inmutable
    state.activeSongs = payload;
  }),
  changeActiveSong: action((state: any, payload) => {
    state.activeSong = payload;
  })
});