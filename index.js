const items = document.querySelectorAll('.item');
const container = document.querySelector('.container');
const indicator = document.querySelector('.indicator');

const MAX_ITEM_TRANSLATE_X = 0;
const MIN_ITEM_TRANSLATE_X = window.innerWidth - container.offsetWidth;

items.forEach(item => {
  item.addEventListener('click', () => {
    const halfWindowWidth = window.innerWidth / 2;
    const halfIndicatorWidth = indicator.offsetWidth / 2;
    const itemMiddleLinePos = item.offsetLeft + item.offsetWidth / 2;
    let newItemTranslateX = (itemMiddleLinePos - halfWindowWidth) * -1;
    let newIndicatorTranslateX = itemMiddleLinePos - halfIndicatorWidth;

    newItemTranslateX = Math.max(newItemTranslateX, MIN_ITEM_TRANSLATE_X);
    newItemTranslateX = Math.min(newItemTranslateX, MAX_ITEM_TRANSLATE_X);

    container.style.transform = `translate3d(${newItemTranslateX}px, 0, 0)`;
    indicator.style.transform = `translate3d(${newIndicatorTranslateX}px, 0, 0)`;
  });
});
