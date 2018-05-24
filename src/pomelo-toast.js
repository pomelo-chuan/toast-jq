class PomeloToast {
    constructor() {
        this.COLOR = {
            white: 'black',
            primary: 'white',
            error: 'white',
            success: 'white',
            warning: 'white',
            blue: 'white',
        };
        this.BG_COLOR = {
            white: 'white',
            primary: '#757575',
            error: '#FF3D00',
            success: '#1DE9B6',
            warning: '#FFC400',
            blue: '#1E88E5',
        };
    }

    checkEnvironment() {
        if (!window.$) {
            throw new Error('Please include Jquery or Zepto before!');
        }
    }

    append(content) {
        const {
            id,
            text,
            type,
        } = content;
        $('#pomelo-toast-container').append(`<div style="${this.color(type)}" id="${id}">${text}</div>`);
    }

    remove(content) {
        const {
            id,
            time,
        } = content;
        setTimeout(() => {
            $(`#${id}`).addClass('pomelo-toast-down');
        }, time - 800);
        setTimeout(() => {
            if ($('#pomelo-toast-container')[0]['children'].length < 2) {
                $('#pomelo-toast-container').remove();
                return;
            }
            $(`#${id}`).remove();
        }, time);
    }

    color(type) {
        return 'color: :color; background-color: :background-color;'
            .replace(':color', this.COLOR[type] ? this.COLOR[type] : 'white')
            .replace(':background-color', this.BG_COLOR[type] ? this.BG_COLOR[type] : '#757575');
    }

    show(content) {
        this.checkEnvironment();
        let type = 'primary';
        let time = 3000;
        let text = '';
        const id = 'pomelo-toast-id-' + new Date().getTime();

        if (typeof content === 'string' || typeof content === 'number') {
            type = 'primary';
            text = content;
        } else {
            if (content.type) {
                type = content.type;
            }
            if (content.time) {
                time = content.time > 2000 ? content.time : 2000;
            }
            if (content.text) {
                text = content.text;
            }
        }
        if ($('#pomelo-toast-container').length === 0) {
            $('body').append('<div id="pomelo-toast-container"></div>');
        }
        this.append({
            id: id,
            text: text,
            type: type,
        });
        this.remove({
            id: id,
            time: time,
        })
    }
}
