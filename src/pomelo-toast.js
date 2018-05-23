const pomeloToast = function(content) {
  let type = '';
  let time = 3000;
  let text = '';
  if (typeof content === 'string') {
    type = 'primary';  
    text = content;
  } else {
    type = content.type;
    if (content.time) {
        time = content.time;
    }
    text = content.text;
  }
  if ($('#pomelo-toast-container').length === 0) {
    $('body').append(`
      <div id="pomelo-toast-container">
      </div>
      `);
  }
  const id = 'pomelo-toast-id' + new Date().getTime();
  pomeloToastAppend({
    id: id,
    text: text,
    type: type,
  });
  setTimeout(() => {
    pomeloToastRemove({
      id: id,
    })
  }, time)
};

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

function pomeloToastRemove(content) {
  const {
    id,
  } = content;
  $(`#${id}`).remove();
}