// import poColor from './constants';
const poColor = {
    'error': '#FF8371',
    'success': '#43B034',
    'primary': '#7B7B7B',
}
function poToastHTML(text, className) {
    return '<div style="' +
        'padding: 6px 12px;' +
        'transform: translateX(-50%);' +
        'margin-left: 50%;' +
        'max-width: 80%;' +
        'font-size: 14px;' +
        'border-radius: 8px;' +
        'position: fixed;' +
        'bottom: 80px;' +
        'text-align: center;' +
        'color: white;' +
        'display: none;' +
        'opacity: 1;"' +
        'class="' + className + '">' +
        text +
        '</div>';
}

// 插入toast
function poDidToast(text, duration, type) {
    var id = new Date().getTime();
    var className = '';
    var _duration = 2000;
    var _text = text || '';
    if (duration && typeof duration === 'number') {
        _duration = duration;
    }
    if (typeof _text !== 'string') {
        _text = JSON.stringify(_text);
    }
    if (_text.length > 36) {
        _text = _text.substr(0, 36)
    }
    className = 'po-toast' + id;
    $('body').append(poToastHTML(_text, className));
    $('.' + className).css('background-color', poColor[type]).fadeIn();
    poRemoveToast(className, _duration);
}

// 移除toast
function poRemoveToast(className, duration) {
    setTimeout(function () {
        $('.' + className).fadeOut({
            done: function () {
                this.remove();
            }
        });
    }, duration)
}

// var poToast = {
//     error: function (text, duration) {
//         poDidToast(text, duration, 'error');
//     },
//     primary: function (text, duration) {
//         poDidToast(text, duration, 'primary');
//     },
//     success: function (text, duration) {
//         poDidToast(text, duration, 'success');
//     }
// }

// export default poToast;

var poToast = (function () {
    var _error = function (text, duration) {
        poDidToast(text, duration, 'error');
    };
    var _primary = function (text, duration) {
        poDidToast(text, duration, 'primary');
    };
    var _success = function (text, duration) {
        poDidToast(text, duration, 'success');
    };
    return {
        error: _error,
        primary: _primary,
        success: _success, 
    }
})();

window.poToast = poToast;
