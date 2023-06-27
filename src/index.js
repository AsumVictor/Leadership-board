import './style.css';
import DomEvent from './modules/DOMevents';
import displayElement from './modules/displayElements';
import GAME_DATA from './modules/GAME_DATA';

DomEvent(document, 'DOMContentLoaded', () => {
  displayElement(GAME_DATA);
});
