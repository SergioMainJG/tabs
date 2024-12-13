const main = () => {
  const firstTab: HTMLMenuElement = document.querySelector('#first-tab')!;
  const secondTab: HTMLMenuElement = document.querySelector('#second-tab')!;
  const thirdTab: HTMLMenuElement = document.querySelector('#third-tab')!;
  const fourthTab: HTMLMenuElement = document.querySelector('#fourth-tab')!;
  const imageCharacter: HTMLImageElement = document.querySelector('#image-character')!;

  firstTab.onclick =  (_event) => {
    imageCharacter.src = 'imgs/goku-ui.avif';
    firstTab.classList.add('currently');
    secondTab.classList.remove('currently');
    thirdTab.classList.remove('currently');
    fourthTab.classList.remove('currently');
  };
  secondTab.addEventListener('click', () => {
    imageCharacter.src = 'imgs/batman.avif'
    secondTab.classList.add('currently');
    firstTab.classList.remove('currently');
    thirdTab.classList.remove('currently');
    fourthTab.classList.remove('currently');
  });
  thirdTab.addEventListener('click', () => {
    imageCharacter.src = 'imgs/hollow-knight.avif'
    thirdTab.classList.add('currently');
    secondTab.classList.remove('currently');
    firstTab.classList.remove('currently');
    fourthTab.classList.remove('currently');
  });
  fourthTab.addEventListener('click', () => {
    imageCharacter.src = 'imgs/leon.avif'
    fourthTab.classList.add('currently');
    secondTab.classList.remove('currently');
    thirdTab.classList.remove('currently');
    firstTab.classList.remove('currently');
  });

}
main();