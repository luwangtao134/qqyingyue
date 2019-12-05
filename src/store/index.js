
import recommend from './recommend.redux';
import player from './player.redux';
import rank from './rank.redux';
import search from './search.redux';
import songList from './songList.redux';
import {combineReducers} from 'redux';
export default combineReducers({recommend,player,rank,search,songList});