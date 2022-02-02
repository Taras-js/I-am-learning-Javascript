// function createModal (options) {
//     const modal = document.createElement('div')
//
// }
//
//
// $.modal = function(options) {
//
//     return {
//         open() {
//         },
//         close() {
//
//         },
//         destroy() {
//
//         },
//     }
// }
// <div data-close='true'></div> // Пример как слушать события
// const _modal = _createModal(options);
// $modal.addEventListener('click', event => {
//     console.log('Clicked', event.target.dataset.close)
// })
// _modalParentMode.removeChild(_modal) // пример как удалять элементы в дом дереве
//
// const listener = event => {
//     if (event.target.dataset.close) {
//         modal.close()
//     }
// }
// _modal.removeEventListener('click', listener)// так удалять слушателей