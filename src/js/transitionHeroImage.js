const images = [
  "../public/img/sepeda-balap-5.jpg",
  "../public/img/sepeda-balap-6.jpg",
  "../public/img/sepeda-balap-7.jpg",
];

export let currentImage = images[0];

export function handleChangeImage() {
  let currentValue = 0;
  setInterval(() => {
    currentImage = images[currentValue];
  }, 1000);
  return console.log(currentImage);
}
