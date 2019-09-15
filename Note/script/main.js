var quill = new Quill('#editor', {
  theme: 'snow'
});
var noteLists = [
  {
    'title': '第一篇文章',
    'time': '2 min ago',
    'content': '<p>第一篇內容</p>',
    'star': false
  },
];
var cancel = document.querySelector('.cancel');
var enter = document.querySelector('.enter');
var dialog = document.querySelector('.dialog');
var newNote = document.querySelector('.new');
var lists = document.querySelector('.lists');
var editor = document.querySelector('.ql-editor');
var inbox = document.querySelector('.inbox');
var nowIdx = 0;
function dialogHind(){
  dialog.style.display = 'none';
}
function itemClick(item) {
  item.addEventListener('click', function(){
    var activeItem = document.querySelector('.active');    
    var idx = this.getAttribute('data-idx');
    if(nowIdx !== idx) {
      if(activeItem !== null) {
        activeItem.classList.remove('active');
      }      
      item.classList.add('active');
      nowIdx = idx;
      editor.innerHTML = noteLists[idx].content;
    }
  });
}
function startClick(img){
  img.addEventListener('click', function(e){
    e.stopPropagation();
    var ppEl = img.parentElement.parentElement;
    var idx = ppEl.getAttribute('data-idx');
    var star = noteLists[idx].star;
    if(star) {
      img.src = 'assests/images/star_border.svg';
      noteLists[idx].star = false;
    } else {
      img.src = 'assests/images/star.svg';
      noteLists[idx].star = true;
    }
  });  
}
function appendItem(el, idx) {
  var title = document.createElement('div');
    var item = document.createElement('div');
    var start = document.createElement('div');
    var time = document.createElement('div');
    var img = document.createElement('img');
    itemClick(item);
    title.innerText = el.title;
    if(el.star) {
      img.src = 'assests/images/star.svg';
    } else {
      img.src = 'assests/images/star_border.svg';
    }    
    startClick(img);
    title.classList.add('title');
    item.classList.add('item');  
    item.setAttribute('data-idx', idx);
    start.classList.add('start');
    time.classList.add('time');
    time.innerText = el.time;
    start.appendChild(img);
    item.appendChild(title);
    item.appendChild(start);
    item.appendChild(time);
    lists.appendChild(item);
}
function itemRender(list) {
  list.forEach(function(el, idx){
    appendItem(el, idx);
  });
}
function save(idx){
  noteLists[idx].content = editor.innerHTML;
}
itemRender(noteLists);
cancel.addEventListener('click', function() {
  dialogHind()
});
newNote.addEventListener('click', function() {
  dialog.style.display = 'block';
});
enter.addEventListener('click', function(){
  var titleVal = document.querySelector('.content input').value;
  var element = {
    'title': titleVal,
    'time': new Date().toDateString(),
    'content': '',
    'star': false
  };
  appendItem(element, noteLists.length);
  dialogHind();
  noteLists.push(element);
});document.addEventListener('keydown',function(e) {
  if(e.keyCode === 83 && e.keyCode) {
    e.preventDefault();
  }
});document.addEventListener('keyup', function(e) {
  e.preventDefault();
  if(e.keyCode === 83 && e.keyCode) {
    save(nowIdx);
  }
});
inbox.addEventListener('click', function () {
  var star = document.querySelector('.inbox img');
  var src = star.src;
  lists.innerHTML = '';
  if(src.indexOf('star_border.svg') !== -1) {
    star.src = 'assests/images/star.svg';
    var filterData = noteLists.filter(function(item) {
      return item.star === true;
    });
    itemRender(filterData);
  } else {
    star.src = 'assests/images/star_border.svg';
    itemRender(noteLists);
  }

});
