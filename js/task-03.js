const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const newArray = images.map((el) => {
  return `<li>
    <img src="${el.url}" alt="${el.alt}" />
  </li>`;
  // const item = document.createElement('li');
  // const img = document.createElement('img');
  // img.src = el.url;
  // img.alt = el.alt;
  // item.append(img);
  // console.log(item)
  // return item;
  
})
const image = document.querySelector('.gallery');
image.insertAdjacentHTML("afterbegin",newArray.join(""));

image.style.display = "flex";
image.style.padding = "0";
image.style.flexWrap = "wrap";
image.style.width = "100%";
image.style.listStyle = "none";

const li = image.querySelectorAll("li");
li.forEach(el => {
el.style.margin = "0 0 20px 0"
})

