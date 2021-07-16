const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];

let insertY = ['the soup kitchen','Disneyland','the White House'];

let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//resultを実行。何回も変えるためnewStoryでワンクッションおいている
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  // newStory = newStory.replace(':insertx:',xItem);
  // newStory = newStory.replace(':inserty:',yItem);
  // newStory = newStory.replace(':insertz:',zItem);
  // newStory = newStory.replace(':insertx:',xItem);
  //下記のように一括で書ける
  newStory = newStory
     .replace(':insertx:',xItem)
     .replace(':inserty:',yItem)
     .replace(':insertz:',zItem)
     .replace(':insertx:',xItem)

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 * 0.071429) + ' stone';
    let temperature =  Math.round( 5/9 * (94 -32)) + ' setigrade';

    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
