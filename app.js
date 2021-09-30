
// action to select the modal
const modal = document.querySelector(".modal");

// action that selects the button to close the modal
const btnCloseModal = document.querySelector(".close-modal");

// action the selects the button to show the modal
const btnOpenModal = document.querySelector('.show-modal');

// action that selects the overlay
const overlay = document.querySelector('.overlay');


// function that adds or removes the class "hidden" that hides the modal and overlay
const toggleModal = function () {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
};

// a function that makes toggleModal to run using event listener
btnOpenModal.addEventListener("click", toggleModal);

btnCloseModal.addEventListener("click", toggleModal);

overlay.addEventListener("click", toggleModal);
