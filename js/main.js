const photoDecription = [
  'Это фото сделано на iPhone',
  'Это фото сделано на Android'
];

const userName = [
  'Диана',
  'Артём',
  'Мария',
  'Нина'
];

const commentMesage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

let lastCommentId = 0;
let lastPhotoId = 0;
function randomNumberMinMax(min, max) {
  const number = Math.random() * (max - min + 1) + min;
  return Math.floor(number);
}
function generateRandomMessage(moreMessage) {
  const randomIndexMessage = randomNumberMinMax(0, commentMesage.length - 1);
  let randomMessage = commentMesage[randomIndexMessage];
  if (moreMessage) {
    let randomIndexMessageMore;
    do {
      randomIndexMessageMore = randomNumberMinMax(0, commentMesage.length - 1);
    } while (randomIndexMessage === randomIndexMessageMore);
    randomMessage += commentMesage[randomIndexMessageMore];
  }
  return randomMessage;
}

function generateComment(numberOfComment) {
  let comments = [];
  for (let i = 0; i < numberOfComment; i++) {
    lastCommentId++;
    const avatarRandom = randomNumberMinMax(1, 6);
    comments.push({
      id: lastCommentId,
      avatar: `img/avatar-${avatarRandom}.svg`,
      message: generateRandomMessage(randomNumberMinMax(0, 1)),
      name: userName[randomNumberMinMax(0, userName.length - 1)]
    });
  }
  return comments;
}

function generatePhoto() {
  lastPhotoId++;
  const photoRandom = randomNumberMinMax(1, 25);
  return {
    id: lastPhotoId,
    url: `photos/${photoRandom}.jpg`,
    description: photoDecription[randomNumberMinMax(0, photoDecription.length - 1)],
    like: randomNumberMinMax(15, 200),
    comments: generateComment(randomNumberMinMax(0, 30))
  }
}

function generatePhotos(numberOfPhotos) {
  let photos = [];
  for (let i = 0; i < numberOfPhotos; i++) {
    photos.push(generatePhoto());
  }
  return photos;
}
// console.log(generatePhotos(25));
