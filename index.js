const ancientsData = [
    {
      id: 'cthulhu',
      name: 'cthulhu',
      firstStage: {
        greenCards: 0,
        brownCards: 2,
        blueCards: 2,        
      },
      secondStage: {
        greenCards: 1,
        brownCards: 3,
        blueCards: 0,        
      },
      thirdStage: {
        greenCards: 3,
        brownCards: 4,
        blueCards: 0,        
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
      firstStage: {
        greenCards: 1,
        brownCards: 2,
        blueCards: 1,        
      },
      secondStage: {
        greenCards: 3,
        brownCards: 2,
        blueCards: 1,        
      },
      thirdStage: {
        greenCards: 2,
        brownCards: 4,
        blueCards: 0,        
      },
    },     
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
      firstStage: {
        greenCards: 0,
        brownCards: 2,
        blueCards: 1,        
      },
      secondStage: {
        greenCards: 2,
        brownCards: 3,
        blueCards: 1,        
      },
      thirdStage: {
        greenCards: 3,
        brownCards: 4,
        blueCards: 0,        
      },
    },
    {
      id: 'azathoth',
      name: 'azathoth',
      firstStage: {
        greenCards: 1,
        brownCards: 2,
        blueCards: 1,        
      },
      secondStage: {
        greenCards: 2,
        brownCards: 3,
        blueCards: 1,        
      },
      thirdStage: {
        greenCards: 2,
        brownCards: 4,
        blueCards: 0,        
      },
    },
  ]

const ancients = document.querySelectorAll('.ancient-card');
const ancientsContainer = document.querySelector('.ancients-container');
const stages = document.querySelectorAll('.stage');

ancientsContainer.addEventListener('click', (e) => {
    let target = e.target;
    if(target.classList.contains('ancient-card')) {
        for(let i = 0; i < ancients.length; i++) {
            ancients[i].classList.remove('active');
        }
        target.classList.add('active');
    }
    for(let i = 0; i < ancients.length; i++) {
        if (ancients[i].classList.contains('active')) {
            stages[0].textContent = ancientsData[i].firstStage.greenCards;
            stages[1].textContent = ancientsData[i].firstStage.brownCards;
            stages[2].textContent = ancientsData[i].firstStage.blueCards;
            stages[3].textContent = ancientsData[i].secondStage.greenCards;
            stages[4].textContent = ancientsData[i].secondStage.brownCards;
            stages[5].textContent = ancientsData[i].secondStage.blueCards;
            stages[6].textContent = ancientsData[i].thirdStage.greenCards;
            stages[7].textContent = ancientsData[i].thirdStage.brownCards;
            stages[8].textContent = ancientsData[i].thirdStage.blueCards;
        }
    }
})

const difficulty = document.querySelectorAll('.difficulty');
const difficultyContainer = document.querySelector('.difficulty-container');

difficultyContainer.addEventListener('click', (e) => {
    let target = e.target;
    if(target.classList.contains('difficulty')) {
        for(let i = 0; i < difficulty.length; i++) {
            difficulty[i].classList.remove('active');
        }
        target.classList.add('active');
    }
})