const pomeloToast = function(content) {

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
      time = content.time;
    }
    if (content.text) {
      text = content.text;
    }
  }
  if ($('#pomelo-toast-container').length === 0) {
    $('body').append(`
      <div id="pomelo-toast-container">
      </div>
      `);
  }
  pomeloToastAppend({
    id: id,
    text: text,
    type: type,
  });
  pomeloToastRemove({
    id: id,
    time: time,
  })
};

// append DOM
function pomeloToastAppend(content) {
  const {
    id,
    text,
    type,
  } = content;
  $('#pomelo-toast-container').append(`
        <div class="pomelo-toast-${type}" id="${id}">${text}</div>
    `);
}

// reomove DOM
function pomeloToastRemove(content) {
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