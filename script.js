"use strict";

const searchInput = document.querySelector(".contact-search__input");

const contactAddBtn = document.querySelector(".contact-search-btn");

const contactStatus = document.querySelector(".contacts__status");

const contactsContainer = document.querySelector(".contacts__container");

const addModal = document.querySelector(".add-modal");
const addModalTitle = document.querySelector(".add-modal__title");
const addModalConfirmBtn = document.querySelector(".add-modal__btn-confirm");
const addModalCancelBtn = document.querySelector(".add-modal__btn-cancel");
const inputNameError = document.querySelector(".input__name-error");
const inputEmailError = document.querySelector(".input__email-error");
const inputPhoneError = document.querySelector(".input__phone-error");
const inputPhoneError2 = document.querySelector(".input__phone-error2");
const inputTagError = document.querySelector(".input__tag-error");
const contactInputName = document.querySelector("#contact-input__name");
const contactInputEmail = document.querySelector("#contact-input__email");
const contactInputPhone = document.querySelector("#contact-input__phone");
const contactInputTag = document.querySelector("#contact-input__tag");

const removeModal = document.querySelector(".remove-modal");
const removeModalConfirm = document.querySelector(".remove-modal__btn-confirm");
const removeModalCancel = document.querySelector(".remove-modal__btn-cancel");

const editModal = document.querySelector(".edit-modal");
const editModalConfirm = document.querySelector(".edit-modal__btn-confirm");
const editModalCancel = document.querySelector(".edit-modal__btn-cancel");
const editInputName = document.querySelector("#edit-input__name");
const editInputEmail = document.querySelector("#edit-input__email");
const editInputPhone = document.querySelector("#edit-input__phone");
const editInputTag = document.querySelector("#edit-input__tag");

const contacts = [];

let contactIdToRemove = null;
let contactIdToUpdate = null;

const showAddModal = () => {
  addModal.classList.remove("hidden");
};

const hideAddModal = () => {
  addModal.classList.add("hidden");
  clearInputs();
};

const showEditModal = (contact) => {
  editModal.classList.remove("hidden");
  contactIdToUpdate = contact.id;

  editInputName.value = contact.name;
  editInputEmail.value = contact.email;
  editInputPhone.value = contact.phone;
  editInputTag.value = contact.tag;
};

const hideEditModal = () => {
  editModal.classList.add("hidden");
  contactIdToUpdate = null;
  clearEditInputs();
};

const showRemoveModal = (contactId) => {
  removeModal.classList.remove("hidden");
  contactIdToRemove = contactId;
};

const hideRemoveModal = () => {
  removeModal.classList.add("hidden");
  contactIdToRemove = null;
};

const contactsCount = () => {
  contactStatus.innerHTML = `مخاطبین: ${contacts.length}`;
};

const createContact = () => {
  const name = contactInputName.value;
  const email = contactInputEmail.value;
  const phone = contactInputPhone.value;
  const tag = contactInputTag.value;

  // validateInputs();

  // name.length >= 2 &&
  //   email.includes("@gmail.com") &&
  //   phone.length === 11 &&
  //   !isNaN(phone) &&
  //   tag.length >= 2;

  const newContact = {
    id: contacts.length + 1,
    name,
    email,
    phone,
    tag,
  };

  contacts.push(newContact);

  showContact();
  clearInputs();
  hideAddModal();
  contactsCount();
};

const showContact = () => {
  contactsContainer.innerHTML = "";

  if (contacts.length) {
    contacts.forEach((contact) => {
      contactsContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="contact-box">
          <header class="contact-box__header">
            <span class="contact-box__name">${contact.name}</span>
            <div class="contact-box__buttons">
              <button class="contact-box__remove" onclick = "showRemoveModal(${contact.id})">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="18" height="18">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
                </svg>
              </button>
              <button class="contact-box__edit" onclick = 'showEditModal(${JSON.stringify(contact)})'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="18" height="18">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path>
                </svg>
              </button>
            </div>
          </header>
          <section class="contact-box__content">
            <div class="contact-box__email-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="size-6" width="18" height="18">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
              </svg>
              <span class="contact-box__email">${contact.email}</span>
            </div>
            <div class="contact-box__phone-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="size-6" width="18" height="18">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
              </svg>
              <span class="contact-box__phone" dir="ltr">${contact.phone}</span>
            </div>
            <div class="contact-box__tag-wrapper">
              <span class="contact-box__tag">${contact.tag}</span>
            </div>
          </section>
        </div>
        `,
      );
    });
  } else {
    contactsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class = "no-contact">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="80" height="80" color="rgba(86, 97, 120, 0.42)">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

        <p class= "no-contact__caption">هیچ مخاطبی برای نمایش وجود ندارد.</p>

      </div>

        `,
    );
  }
};

const removeContact = () => {
  const foundIndex = contacts.findIndex((contact) => {
    return contact.id === contactIdToRemove;
  });

  contacts.splice(foundIndex, 1);

  hideRemoveModal();
  showContact();
  contactsCount();
  searchInput.value = "";
};

const editContact = () => {
  const foundIndex = contacts.findIndex((contact) => {
    return contact.id === contactIdToUpdate;
  });

  contacts[foundIndex] = {
    id: foundIndex + 1,
    name: editInputName.value,
    email: editInputEmail.value,
    phone: editInputPhone.value,
    tag: editInputTag.value,
  };

  showContact();
  hideEditModal();
  searchInput.value = "";
};

// const validateInputs = () => {
//   const name = contactInputName.value;
//   const email = contactInputEmail.value;
//   const phone = contactInputPhone.value;
//   const tag = contactInputTag.value;

//   if (name.length < 2) {
//     inputNameError.innerHTML = `<p class = "error">نام باید حداقل 2 کاراکتر یا بیشتر باشد.</p>`;
//   } else {
//     inputNameError.innerHTML = "";
//   }

//   if (!email.includes("@gmail.com")) {
//     inputEmailError.innerHTML = `<p class = "error">ایمیل نامعتبر می‌باشد.</p>`;
//   } else {
//     inputEmailError.innerHTML = "";
//   }

//   if (phone.length < 11) {
//     inputPhoneError.innerHTML = `<p class = "error">شماره تلفن باید 11 کاراکتر باشد.</p>`;
//   } else {
//     inputPhoneError.innerHTML = "";
//   }

//   if (isNaN(phone)) {
//     inputPhoneError2.innerHTML = `<p class = "error">شماره تلفن نمیتواند شامل حروف یا کاراکتر های خاص باشد.</p>`;
//   } else {
//     inputPhoneError2.innerHTML = "";
//   }

//   if (tag.length < 2) {
//     inputTagError.innerHTML = `<p class = "error">تگ باید حداقل 2 کاراکتر یا بیشتر باشد.</p>`;
//   } else {
//     inputTagError.innerHTML = "";
//   }
// };

const clearInputs = () => {
  contactInputName.value = "";
  contactInputEmail.value = "";
  contactInputPhone.value = "";
  contactInputTag.value = "";

  inputNameError.innerHTML = "";
  inputEmailError.innerHTML = "";
  inputPhoneError.innerHTML = "";
  inputTagError.innerHTML = "";
  inputPhoneError2.innerHTML = "";
};

const clearEditInputs = () => {
  editInputName.value = "";
  editInputEmail.value = "";
  editInputPhone.value = "";
  editInputTag.value = "";
};

const showFilteredContacts = (filteredContacts) => {
  contactsContainer.innerHTML = "";

  if (filteredContacts.length) {
    filteredContacts.forEach((contact) => {
      contactsContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="contact-box">
          <header class="contact-box__header">
            <span class="contact-box__name">${contact.name}</span>
            <div class="contact-box__buttons">
              <button class="contact-box__remove" onclick = "showRemoveModal(${contact.id})">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="18" height="18">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
                </svg>
              </button>
              <button class="contact-box__edit" onclick = 'showEditModal(${JSON.stringify(contact)})'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="18" height="18">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path>
                </svg>
              </button>
            </div>
          </header>
          <section class="contact-box__content">
            <div class="contact-box__email-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="size-6" width="18" height="18">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
              </svg>
              <span class="contact-box__email">${contact.email}</span>
            </div>
            <div class="contact-box__phone-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="size-6" width="18" height="18">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
              </svg>
              <span class="contact-box__phone" dir="ltr">${contact.phone}</span>
            </div>
            <div class="contact-box__tag-wrapper">
              <span class="contact-box__tag">${contact.tag}</span>
            </div>
          </section>
        </div>
      `,
      );
    });
  } else {
    contactsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class = "no-contact">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="80" height="80" color="rgba(86, 97, 120, 0.42)">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        <p class= "no-contact__caption">مخاطبی یافت نشد!</p>

      </div>

        `,
    );
  }
};

const searchContact = () => {
  const value = searchInput.value;

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(value);
  });

  showFilteredContacts(filteredContacts);
};

window.addEventListener("load", () => {
  showContact();
  contactsCount();
});

searchInput.addEventListener("keyup", searchContact);
contactAddBtn.addEventListener("click", showAddModal);
addModalCancelBtn.addEventListener("click", hideAddModal);
addModalConfirmBtn.addEventListener("click", createContact);
removeModalCancel.addEventListener("click", hideRemoveModal);
removeModalConfirm.addEventListener("click", removeContact);
editModalConfirm.addEventListener("click", editContact);
editModalCancel.addEventListener("click", hideEditModal);
