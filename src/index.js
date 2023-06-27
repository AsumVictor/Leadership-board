import './style.css';
import DomEvent from './modules/DOMevents';
import displayElement from './modules/displayElements';
import getScores from './modules/api';
import refresh from './modules/refreshAPI';
import { refreshBtn } from './modules/Variables';

DomEvent(document, 'DOMContentLoaded', async () => {
  const scores = await getScores()
  displayElement(scores);
});

DomEvent(refreshBtn, 'click', refresh)
