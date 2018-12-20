import btnBack from './btn-back.js';
import timer from './timer.js';
import lives from './lives.js';

export default (state) => `<header class="header">
${btnBack()}
${state ? timer(state.time) + lives(state.lives) : ``}
</header>`;
