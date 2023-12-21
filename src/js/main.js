//DATE PICKER DYNAMIC DATA


const startDateLabel = document.querySelector('#start_date_label')
const startDateInput = document.querySelector('#start_date')

const endDateLabel = document.querySelector('#end_date_label')
const endDateInput = document.querySelector('#end_date')

const footerYear = document.querySelector('#footer_year')

const today = new Date()

const year = today.getFullYear()



    const formattedDate = (date) =>{

         return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
    } 


startDateInput ? startDateInput.value =formattedDate(today) : ''
endDateInput ? endDateInput.value =formattedDate(today) : ''





const setTodaysDate = () => {
    const months = ["STY", "LUT", "MAR", "KWI", "MAJ", "CZE", "LIP", "SIE", "WRZ", "PAŹ", "LIS", "GRU"];
    
    let today = new Date();
    let futureDate = new Date();
    futureDate.setDate(today.getDate() + 7); // Dodajemy 7 dni do obecnej daty

    const formattedToday = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    const formattedFutureDate = `${months[futureDate.getMonth()]} ${futureDate.getDate()}, ${futureDate.getFullYear()}`;

    startDateLabel ? startDateLabel.innerHTML = formattedToday : ''
    endDateLabel ?  endDateLabel.innerHTML = formattedFutureDate : ''
};





const cookieBox = document.querySelector("#cookieBox");
const acceptBtn = document.querySelector("#acceptBtn");

const addCookie = () => {
    document.cookie = "Polityka Prywatności; max-age=" + 60 * 60 * 24 * 30;

    if (document.cookie.indexOf("Polityka Prywatności") !== -1) {
        cookieBox.classList.add("hidden");
    }
};

const checkCookie = () => {
    if (document.cookie.indexOf("Polityka Prywatności") !== -1) {
        cookieBox.classList.add("hidden");
    } else {
        cookieBox.classList.remove("hidden");
    }
};

checkCookie();

acceptBtn.addEventListener("click", () => {
    addCookie();
    checkCookie();
});






setTodaysDate();

footerYear ? footerYear.innerHTML = year : ''




//SHUFFLE OTHER PRODUCTS

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('other-products__container');
    const divs = Array.from(container.children); 
    const shuffledDivs = divs.sort(() => 0.5 - Math.random()); 

    container.innerHTML = '';

    shuffledDivs.forEach(div => container.appendChild(div));
});

//SHUFFLE ALL PRODUCTS

// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.getElementById('products__container');
//     const divs = Array.from(container.children); 
//     const shuffledDivs = divs.sort(() => 0.5 - Math.random()); 

//     container.innerHTML = '';

//     shuffledDivs.forEach(div => container.appendChild(div));
// });




//GALLERY 
const filterItem = document.querySelector('.items-links');
const filterImages = document.querySelectorAll('.project-img');
const filterInfo = document.querySelector('.info');

if (filterItem && filterImages.length > 0) {
    window.addEventListener('load', () => {
        const initialFilter = 'sklep';

        filterImages.forEach((image) => {
            let filterImageName = image.getAttribute('data-name');
            if (filterImageName === initialFilter) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });

        if (filterInfo) {
            filterInfo.querySelectorAll('[data-name]').forEach((infoItem) => {
                let infoName = infoItem.getAttribute('data-name');
                if (infoName === initialFilter) {
                    infoItem.style.display = "block";
                } else {
                    infoItem.style.display = "none";
                }
            });
        }

        filterItem.querySelector(`[data-name="${initialFilter}"]`).classList.add('menu-active');

        filterItem.addEventListener('click', (selectedItem) => {
            if (selectedItem.target.classList.contains('item-link')) {
                document.querySelector('.menu-active').classList.remove('menu-active');
                selectedItem.target.classList.add('menu-active');
                let filterName = selectedItem.target.getAttribute('data-name');

                filterImages.forEach((image) => {
                    let filterImageName = image.getAttribute('data-name');
                    if (filterImageName === filterName || filterName === 'all') {
                        image.style.display = "block";
                    } else {
                        image.style.display = "none";
                    }
                });

                if (filterInfo) {
                    filterInfo.querySelectorAll('[data-name]').forEach((infoItem) => {
                        let infoName = infoItem.getAttribute('data-name');
                        if (infoName === filterName || filterName === 'all') {
                            infoItem.style.display = "block";
                        } else {
                            infoItem.style.display = "none";
                        }
                    });
                }
            }
        });
    });
}
