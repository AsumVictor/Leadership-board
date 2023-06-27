import './style.css';
import DomEvent from './modules/DOMevents';
import displayElement from './modules/displayElements';
import GAME_DATA from './modules/GAME_DATA';
import refresh from './modules/refreshAPI';

DomEvent(document, 'DOMContentLoaded', () => {
  refresh()
  displayElement(GAME_DATA);
});
