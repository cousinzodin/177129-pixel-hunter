export default (time = 0, blinking = false) => `<div class="game__timer  ${blinking ? `game__timer--blink` : ``}"">
${time}
</div>`;
