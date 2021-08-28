const shrinkable = document.querySelector('.slider');
shrinkable.addEventListener('click', onLinkClick);

function onLinkClick(event) {
  const id = event.target.parentNode.id;
  switch (event.target.text) {
    case ' Read more':
      document.getElementById(id + 'Overflow').className = '';
      document.getElementById(id + 'MoreLink').className = 'link-text-toggle hidden';
      document.getElementById(id + 'dots').className = 'hidden';
      document.getElementById(id + 'LessLink').className = 'link-text-toggle';
      break;
    case 'less':
      document.getElementById(id + 'Overflow').className = 'hidden';
      document.getElementById(id + 'MoreLink').className = 'link-text-toggle';
      document.getElementById(id + 'LessLink').className = 'link-text-toggle hidden';
      break;
  }
}
