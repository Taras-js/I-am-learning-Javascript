function _createModal (options) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title"> ${options.title || ''} </span>
                <span class="modal-close" data-close="data-close" autofocus>&times;</span>
            </div>
            <div class="modal-body">
                <p> ${options.parameterOne || ''} </p>
                <p> ${options.parameterTwo || ''} </p>
            </div>
            <div class="modal-footer">
                <button class="modal-ok" data-close="data-close"> Ok </button>
                <button class="modal-cancel" data-close="data-close"> Cancel </button>
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
    const okButton = document.querySelector('.modal-ok');
        okButton.addEventListener('click', event => {
            event.currentTarget.dataset.close ? modal.close() : !closing

        })
        const listener = event => {event.currentTarget.dataset.close && modal.close()};
        const cancelButton = document.querySelector('.modal-cancel');
        cancelButton.addEventListener('click', listener)
        const deleteModal = document.querySelector('.delete-modal');
        deleteModal.addEventListener('click', event =>{
            if(event.currentTarget.dataset.delete) {
                return modal.destroy()
            }
        });
        const createModalWindow = document.querySelector('.create-modal');
        createModalWindow.addEventListener('click', event =>{
            event.currentTarget.dataset.create && modal.onOpen()
        })
    return {

        open() {
            runModal.classList.add('open');
        },
        close() {
            closing = true;
            runModal.classList.remove('open');
        },
        destroy() {
            runModal.parentNode.removeChild(runModal);
            // cancelButton.removeEventListener('click', listener);
        },
        onOpen() {
            if (runModal) {_createModal(options)}
        }
    }
}

