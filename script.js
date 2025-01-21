//your code here!

function generateListItems(count) {
	const list = document.getElementById('infi-list');

	for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

function checkScroll() {
  const list = document.getElementById('infi-list');
  
  if (list.scrollHeight - list.scrollTop === list.clientHeight) {
    generateListItems(2);
  }
}
generateListItems(10);
document.getElementById('infi-list').addEventListener('scroll', checkScroll);