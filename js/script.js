window.onload = function() {
  const title = document.querySelector('.title');
  const changeTitle = document.querySelector('.changer');
  changeTitle.addEventListener('click',
  ()=> title.innerHTML='<h2>ajaxIsHere JS is awesome</h2>',
  {once: true});
};
