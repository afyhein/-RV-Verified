window.addEventListener('DOMContentLoaded',() => {
  const selectAll = document.querySelector('#checkmark');
  selectAll.addEventListener('click',()=> {
    selectAll.classList.toggle('checked');
    document.querySelectorAll('.card_container .checkmark').forEach(i => {
      selectAll.classList.contains('checked') ? i.classList.add('checked'): i.classList.remove('checked');
    })
  })
  
  document.querySelectorAll('.card_container .checkmark').forEach(i => {
    i.addEventListener('click',(ev)=> {
          ev.currentTarget.classList.toggle('checked');
    })
  })
})