import galleryItems from "./app.js";
// Створення і рендер розмітки по масиву даних `galleryItems` з `app.js` і
//   наданим шаблоном.
const gallery = document.querySelector("ul.js-gallery");
const modal = document.querySelector("div.lightbox");
const modalPicture = document.querySelector("img.lightbox__image");
const btnClose = document.querySelector("button.lightbox__button");
gallery.innerHTML = ` ${galleryItems
  .map(
    (picture) => `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${picture.original}"
  >
    <img
      class="gallery__image"
      src="${picture.preview}"
      data-source="${picture.original}"
      alt="${picture.description}"
    />
  </a>
</li>`
  )
  .join("")}`;
//   - Реалізація делегування на галереї `ul.js-gallery` і отримання `url` великого
//   зображення.
const gettingALaregeImageLinkHandler = (event) => {
  if (event.target.tagName === "IMG") {
    const newSrc = event.target.src;
    // - Відкриття модального вікна при натисканні на елементі галереї.
    modal.classList.add("is-open");
    // - Підміна значення атрибута `src` елемента `img.lightbox__image`.
    modalPicture.src = newSrc;
  }
};
// - Закриття модального вікна при натисканні на кнопку
//   `button[data-action=""close-lightbox"]`.
const closeModal = () => {
  modal.classList.remove("is-open");
  //   - Очищення значення атрибута `src` елемента `img.lightbox__image`. Це необхідно
  //     для того, щоб при наступному відкритті модального вікна, поки вантажиться
  //     зображення, ми не бачили попереднє.
  modalPicture.src = "";
};
gallery.addEventListener("click", gettingALaregeImageLinkHandler);
btnClose.addEventListener("click", closeModal);
