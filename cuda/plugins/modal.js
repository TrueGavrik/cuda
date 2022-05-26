function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('modal1')
    modal.insertAdjacentHTML('afterbegin', `
            <div class="modal1__overlay" id="modal1__overlay">
                <div class="modal1__window">
                    <div class="modal__window-header">
                        <div class="modal__window-title">Modal Title</div>
                        <div id="modal__window-close" class="modal__window-close">&times;</div>
                    </div>
                    <div class="modal__window-body">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="modal__window-footr">
                        <button>Ok</button>
                        <button id="modal__window-cancel">Cancel</button>
                    </div>
                </div>
    
            </div>
    `)
    document.body.appendChild(modal)
    return modal
}


$.modal = function (options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing

    return {
        open() { 
            !closing && $modal.classList.add('open')
        },
        close() { 
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout( () => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy() { }
    }
};

