const menuIcon = document.querySelector('.humberger');
const menu = document.querySelector('.menu-click');
const closeBtn = document.querySelector('.close-icon');
const navLinks = document.querySelectorAll('.nav-link');
const aboutPage = document.querySelectorAll('.about-page');
const homePage = document.querySelectorAll('.page1');

menuIcon.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});

navLinks.forEach((navLink, index) => {
  navLink.addEventListener('click', () => {
    menu.classList.remove('open');

    if (index === 1) {
      aboutPage[1].classList.add('open-page2');
      homePage[2].classList.add('close');
    }

    if (index === 0) {
      aboutPage[1].classList.toggle('open-page2');
      homePage[2].classList.remove('close');
    }
  });
});

homePage.forEach((backhome, index) => {
  backhome.addEventListener('click', () => {
    if (index !== 2) {
      aboutPage[1].classList.remove('open-page2');
      homePage[2].classList.remove('close');
    }
  });
});

aboutPage.forEach((backhome) => {
  backhome.addEventListener('click', () => {
    aboutPage[1].classList.add('open-page2');
    homePage[2].classList.add('close');
  });
});

const speakersContainer = document.querySelector('.speakersContainer');
const moreBtn = document.querySelector('.show_more');
const lessBtn = document.querySelector('.show_less');

const speakers = [
  {
    id: 0,
    name: 'Ahmed Bash',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe',
    speakerImage: './img/Ahmed-Bash.png',
    publish:
      'Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun',
  },
  {
    id: 1,
    name: 'Amir El Masry',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe',
    speakerImage: './img/Amir-Masry.png',
    publish:
      'Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun',
  },
  {
    id: 3,
    name: 'Habiba Marzouk',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe',
    speakerImage: './img/Haiba.png',
    publish:
      'Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun',
  },
  {
    id: 4,
    name: 'Nour Nabawy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe',
    speakerImage: './img/Noar-Nabawy.png',
    publish:
      'Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun',
  },
];

function speakerCreator() {
  let speakerClass = '';

  speakers.forEach((speaker, index) => {
    const {
      name, description, speakerImage, publish,
    } = speaker;

    // Adding to other speakers another class
    if (index > 1) speakerClass = 'device-state';
    else speakerClass = '';

    // if (moreBtn.classList.contains("close")) {
    speakersContainer.innerHTML += `
      <div class="speaker-container ${speakerClass} ">
      <img
      class="speaker-img"
      src=${speakerImage}
      alt="speaker's image"
      />
      <div class="speaker-des">
      <h3>${name}</h3>
      <p class="speaker-text1">${description}</p>
      <hr class="line2" />
      <p class="speaker-text2">${publish}</p>
      </div>
      </div>
      `;
    // }
  });
}

speakerCreator();
const speakerApear = document.querySelectorAll('.device-state');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.add('close');
  lessBtn.classList.add('open-btn');

  speakerApear.forEach((speaker) => {
    speaker.classList.add('open');
  });
});

lessBtn.addEventListener('click', () => {
  moreBtn.classList.remove('close');
  lessBtn.classList.remove('open-btn');

  speakerApear.forEach((speaker) => {
    speaker.classList.remove('open');
  });
});
