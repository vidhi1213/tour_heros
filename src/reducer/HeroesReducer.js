
import { CREATE_HERO, FEATCH_MESSAGE, UPDATE_HERO,DELETE_HERO,CLEAR_CONTACT } from '../constant/type';

const intialState = {
  heroData: [],
  messages: [],
}
export const HeroesReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_HERO:
      state.heroData.push({
        name: action.payload,
        _id: Math.round(Math.random() * 1000000 + 1),
      });
      return state;

    case DELETE_HERO:
      return {
        ...state,
        heroData: state.heroData.filter(
          (_) => _._id !== action.payload
        ),
      };
      // const deleteData = state.heroData.filter((_) => _._id == action.payload);
      // console.log(deleteData)
      // state.heroData.splice(0, state.heroData.length, ...deleteData);
      // return state;


    case UPDATE_HERO:
      const updateHero = state.heroData.map((_) => {
        if (_._id === +action.payload.id) _.name = action.payload.hero;
        return _;
      });
      state.heroData.splice(0, state.heroData.length, ...updateHero);
      return state;

      case FEATCH_MESSAGE:
       
        return Object.assign({}, state, {
          messages: [...state.messages, { msg: action.payload }]
        })

        case CLEAR_CONTACT:
      return {
        ...state,
        messages: [],
      };
    default: return state;
  }
}