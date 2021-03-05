import startEat from './components/eat';
import startPlay from './components/play';
import startFight from './components/fight';
import startSleep from './components/sleep';

import '../styles/main.scss';

const init = () => {
  startEat();
  startPlay();
  startFight();
  startSleep();
};

init();
