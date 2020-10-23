/*
** -----------
** RANDOMIZERS
** -----------
*/

// Generate Random Time
const randomTime = () => {
  let min1 = Math.floor(Math.random() * 3)
  if (min1 == 0) {
    min1 = '';
  }
  let min2 = Math.floor(Math.random() * 10)
  let sec1 = Math.floor(Math.random() * 6)
  let sec2 = Math.floor(Math.random() * 10)

  return `${min1}${min2}:${sec1}${sec2}`;
}

// Generate Random View Count
const randomViewCount = () => {
  let views = Math.floor(Math.random() * 100000);

  if (views >= 1000000) {
    return `${views.toString().slice(0, -6)}M`;
  } else if (views >= 1000) {
    return `${views.toString().slice(0, -3)}K`;
  } else if (views < 1000) {
    return views.toString();
  }
}

// Generate Random Upload Date
let uploadNum;
const uploadUnit = ['minutes', 'hours', 'days', 'weeks', 'months', 'years'];

const randomDate = () => {

  let randUnit = Math.floor(Math.random() * uploadUnit.length);
  let randomDate = uploadUnit[randUnit];

  switch (randomDate) {
    case uploadUnit[0]:
      uploadNum = Math.floor(Math.random() * 59 + 1)
      if (uploadNum == 1) {
        return `${uploadNum} ${uploadUnit[0].slice(0, -1)}`;
      } else {
        return `${uploadNum} ${uploadUnit[0]}`;
      }
      break;
    case uploadUnit[1]:
      uploadNum = Math.floor(Math.random() * 23 + 1)
      if (uploadNum == 1) {
        return `${uploadNum} ${uploadUnit[1].slice(0, -1)}`;
      } else {
        return `${uploadNum} ${uploadUnit[1]}`;
      }
      break;
    case uploadUnit[2]:
      uploadNum = Math.floor(Math.random() * 6 + 1)
      if (uploadNum == 1) {
        return `${uploadNum} ${uploadUnit[2].slice(0, -1)}`;
      } else {
        return `${uploadNum} ${uploadUnit[2]}`;
      }
      break;
    case uploadUnit[3]:
      uploadNum = Math.floor(Math.random() * 3 + 1)
      if (uploadNum == 1) {
        return `${uploadNum} ${uploadUnit[3].slice(0, -1)}`;
      } else {
        return `${uploadNum} ${uploadUnit[3]}`;
      }
      break;
    case uploadUnit[4]:
      uploadNum = Math.floor(Math.random() * 11 + 1)
      if (uploadNum == 1) {
        return `${uploadNum} ${uploadUnit[4].slice(0, -1)}`;
      } else {
        return `${uploadNum} ${uploadUnit[4]}`;
      }
      break;
    case uploadUnit[5]:
      uploadNum = Math.floor(Math.random() * 9 + 1)
      if (uploadNum == 1) {
        return `${uploadNum} ${uploadUnit[5].slice(0, -1)}`;
      } else {
        return `${uploadNum} ${uploadUnit[5]}`;
      }
      break;
  }
}

/*
** -------------------
** SECTION: CATEGORIES
** -------------------
*/

// Generate Categories
const categoryCount = 24;
const categorySection = document.querySelector('section.category-section');

const newCategory = () => {

  // Create elements
  const newCategory = document.createElement('button');
  newCategory.classList.add('category');
  newCategory.append(faker.commerce.product());

  // Add to DOM
  categorySection.append(newCategory);

}

const addCategories = count => {
  for (let i = 0; i < count; i++) {
    newCategory();
  }
}

addCategories(categoryCount)


/*
** ---------------
** SECTION: VIDEOS
** ---------------
*/

// Generate Videos
const videoCount = 12;
const videoSection = document.querySelector('section.video-section');

const newVideo = () => {

  // Create elements
  const newVideo = document.createElement('article');
  newVideo.classList.add('video-container');

  const videoContentWrapper = document.createElement('div');
  videoContentWrapper.classList.add('video-content-wrapper');

  const thumbnail = document.createElement('a');
  thumbnail.setAttribute('href', '#');
  thumbnail.classList.add('thumbnail');
  thumbnail.setAttribute('data-duration', randomTime());

  const thumbnailImage = document.createElement('img');
  thumbnailImage.classList.add('thumbnail-image');

  const videoBottomSection = document.createElement('div');
  videoBottomSection.classList.add('video-bottom-section');

  const channelIconLink = document.createElement('a');
  channelIconLink.setAttribute('href', '#');

  const channelIcon = document.createElement('img');
  channelIcon.classList.add('channel-icon');
  channelIcon.setAttribute('src', faker.random.image())

  const videoDetails = document.createElement('div');
  videoDetails.classList.add('video-details');

  const videoTitle = document.createElement('a');
  videoTitle.setAttribute('href', '#');
  videoTitle.classList.add('video-title');
  videoTitle.append(faker.random.words());

  const videoChannelName = document.createElement('a');
  videoChannelName.setAttribute('href', '#');
  videoChannelName.classList.add('video-channel-name');
  videoChannelName.append(faker.name.findName())

  const videoMetadata = document.createElement('div');
  videoMetadata.classList.add('video-metadata');

  const viewSpan = document.createElement('span');
  viewSpan.append(`${randomViewCount()} views`)

  const dateSpan = document.createElement('span');
  dateSpan.append(`${randomDate()} ago`)

  // Add to DOM
  videoSection.append(newVideo);
  newVideo.append(videoContentWrapper);
  videoContentWrapper.append(thumbnail, videoBottomSection);
  thumbnail.append(thumbnailImage)
  videoBottomSection.append(channelIconLink, videoDetails);
  channelIconLink.append(channelIcon);
  videoDetails.append(videoTitle, videoChannelName, videoMetadata);
  videoMetadata.append(viewSpan, ' • ', dateSpan)
}

const addVideos = count => {
  for (let i = 0; i < count; i++) {
    newVideo();
  }
}

addVideos(videoCount);

// Generate Random Thumbnail Image
const thumbnailImages = document.querySelectorAll('.thumbnail-image');

fetch(`https://picsum.photos/v2/list?limit=${videoCount}`)
  .then(response => response.json())
  .then(json => {
    for (let i = 0; i < thumbnailImages.length; i++) {
      thumbnailImages[i].setAttribute('src', json[i].download_url)
    }
  });