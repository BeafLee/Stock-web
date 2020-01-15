function counterId() {
  let next

  if (localStorage.getItem('counter') === null) {
    next = 0;
    let counter = [next];
    localStorage.setItem('counter', JSON.stringify(counter));
  } else {
    let counter = JSON.parse(localStorage.getItem('counter'));
    next = counter.length;
    counter.push(next);
    localStorage.setItem('counter', JSON.stringify(counter));
  }

  let tag = document.getElementById('id');
  tag.value = next;

}
