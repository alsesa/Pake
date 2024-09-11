/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */

const contentWidthKey = 'cWidthz';

function changeWidth() {
    'use strict';

    // 基础方法
    function getCurrentMaxWidth(element) {
        let currentValue = window.getComputedStyle(element).maxWidth;
        currentValue = currentValue.substring(0, currentValue.indexOf('px'));
        currentValue = parseInt(currentValue);
        return currentValue;
    }

    function changeWidth() {
        const items = document.querySelectorAll(".readerContent .app_content, .readerTopBar");
        const targetValue = window.innerWidth * 1.0;
        items.forEach(item => {
            const currentValue = getCurrentMaxWidth(item);
            if (currentValue !== targetValue) {
                item.style['max-width'] = targetValue + 'px';
            }
        });
        const myEvent = new Event('resize');
        window.dispatchEvent(myEvent)
    }

    // 调整宽度
    changeWidth();

    // 将.readerControls元素距离右边10%
    const readerControls = document.querySelector('.readerControls');
    readerControls.style.right = '0%';
    readerControls.style.left = 'unset';
    readerControls.style.marginLeft = 'unset';
}

document.addEventListener('keydown', function(event) {
  // 检查是否按下的是F11键
  if (event.key === 'F11') {
      fullScreenTrigger()
  }
});

document.addEventListener('click', () => {
  console.log('click docmutmen')
  renderMenu(false)
})

document.addEventListener('DOMContentLoaded', () => {
    // 修改页面宽度
    changeWidth();
});