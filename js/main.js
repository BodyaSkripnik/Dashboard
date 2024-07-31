import { customers } from "./data.js";

const content = document.querySelector(".customer-box");

function createList({ name, company, phone, email, country, status}) {
  return `
    <ul class="customer__list">
        <li class="customer__item customer__item--info">
            <p class="customer__point">${name}</p>
        </li>
        <li class="customer__item customer__item--info">
            <p class="customer__point">${company}</p>
        </li>
        <li class="customer__item customer__item--info">
            <p class="customer__point">${phone}</p>
        </li>
        <li class="customer__item customer__item--info">
            <p class="customer__point">${email}</p>
        </li>
        <li class="customer__item customer__item--info">
            <p class="customer__point">${country}</p>
        </li>
        <li class="customer__item customer__item--info">
            <p class="customer__point ${status === "Active" ? "active" : "inactive"}">${status}</p>
        </li>
    </ul>
    `;
}

function renderList(data) {
  let fragment = "";
  data.forEach((list) => {
    fragment += createList(list);
  });
  content.insertAdjacentHTML('beforeend', fragment);
}

renderList(customers);
