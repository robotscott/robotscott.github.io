const header = document.querySelector('header');
const title = header.querySelector('.title-wrapper');
const nav = document.querySelector('nav');
const topSection = document.querySelector('section');
const modal = document.querySelector('.modal');

header.classList.add('fixed');
setTopSectionPosition();

window.addEventListener('scroll', onScroll);
$('#workModal').on('show.bs.modal', selectImg);

window.addEventListener('resize', setTopSectionPosition);

function onScroll() {
  const navOffset = nav.offsetHeight + nav.getBoundingClientRect().top;
  const sectionOffset = topSection.getBoundingClientRect().top;
  const titleOffset = title.getBoundingClientRect().top;

  if ((sectionOffset - navOffset) <= 0) {
    nav.classList.add('gray-bg');
  } else {
    nav.classList.remove('gray-bg');
  }

  if (sectionOffset < titleOffset) {
    title.classList.add('invisible');
  } else {
    title.classList.remove('invisible');
  }

  if (sectionOffset <= 0) {
    header.classList.add('hide-border');
  } else {
    header.classList.remove('hide-border');
  }
}

function setTopSectionPosition() {
  const headerHeight = header.offsetHeight;
  topSection.style.marginTop = headerHeight + 'px';
}

function openWorkModal(e, img) {
  e.preventDefault();
  $('#workModal').modal('toggle', img);
}

function selectImg(e) {
  const prevActive = document.querySelector('.carousel-item.active');
  if (prevActive) {
    prevActive.classList.remove('active');
  }
  document.querySelector('.' + e.relatedTarget).classList.add('active');
}