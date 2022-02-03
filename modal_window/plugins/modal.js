function _createModal (options) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title"> Title modal window for Javascript </span>
                <span class="modal-close" data-close="data-close" autofocus>&times;</span>
            </div>
            <div class="modal-body">
                <p>Информация о товаре: В соответствии с ним организовано рассмотрение на заседаниях кафедр военной педагогики и психологии и гуманитарных и социальных наук вопросов:
                    - о включении в рабочую программу дисциплины «Организационные и правовые основы высшего профессионального образования» вопросов, связанных с изучением  нормативно-правовых актов Федеральной службы войск национальной гвардии в области высшего образования;
                </p>
                <p>Информация о порядке приобретения товара: 1.Слабое знание адъюнктами нормативно-правовых актов, в том числе приказов Федеральной службы войск национальной гвардии Российской Федерации, регламентирующих образовательную и научную деятельность.
                    2.В ответах на вопросы экзаменационных билетов адъюнктов не в достаточной мере показали связь теоретических положений с практикой будущей преподавательской деятельности и примерами из личного служебного опыта.
                    3.Формулировка ряда вопросов выносимых на государственный экзамен, имеет двусмысленное толкование и не в полном объеме отражает содержание целевой установки, заявленной в программе государственной итоговой аттестации.
                    4.Отдельные научно-квалификационные работы (диссертации) оформляются с нарушением требований государственного стандарта .
                    5.В текстах научных докладов и выступлениях адъюнктов недостаточно полно представлена практическая значимость исследований для деятельности войск национальной гвардии Российской Федерации и образовательной деятельности ВООВО.
                    6.В отдельных научных докладах недостаточно четко определены критерии и показатели оценки полученных результатов исследований.
                </p>
            </div>
            <div class="modal-footer">
                <button class="modal-ok"> Ok </button>
                <button class="modal-cancel"> Cancel </button>
            </div>

        </div>
    </div>

    `;
    document.body.appendChild(modal)
    return modal
}


$.modal = function(options) {
    const runModal = _createModal(options);
    let closing = false;
    const openButton = document.querySelector('.open-button');
        openButton.addEventListener('click', event => event.currentTarget.dataset.open ? modal.open() : closing)
    const closeSpan = document.querySelector('.modal-close');
        closeSpan.addEventListener('click', event => {
            event.currentTarget.dataset.close ? modal.close() : !closing
        })
    return {

        open() {
            runModal.classList.add('open')
        },
        close() {
            closing = true;
            runModal.classList.remove('open');
            closing = false;
        },
        destroy() {

        },
        onOpen() {
            return runModal.classList.add('open')
        }
    }
}
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