// Кнопка "Заказать" в меню
document.querySelector('.menu button').addEventListener('click', function (e) {
    //Плавно прокрутить страницу до раздела "Заказать"
    document.querySelector('.buy').scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

// Кнопка "Заказать" в вопросах FAQ
document.querySelector('[href="#buy"]').addEventListener('click', function (e) {
    //Плавно прокрутить страницу до раздела "Заказать"
    document.querySelector('.buy').scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

// Кнопка для перехода к футеру в вопросах FAQ
document.querySelector('[href="#footer"]').addEventListener('click', function (e) {
    //Плавно прокрутить страницу до раздела "Заказать"
    document.querySelector('.footer').scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})
// На верх по логотипу
for (let item of document.querySelectorAll('img[src="img/logo.png"]')) {
    item.addEventListener("click", function (e) {
        document.querySelector('body').scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// Автор
document.querySelector('a[href="#author"]').addEventListener("click", function (e) {
    document.querySelector('.author').scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

// Особенности
document.querySelector('a[href="#features"]').addEventListener("click", function (e) {
    document.querySelector('.description').scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

// Содержание курса
document.querySelector('a[href="#about"]').addEventListener("click", function (e) {
    document.querySelector('.about').scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

// Открывать описание урока при клике на него
for (let item of document.querySelectorAll('[mytitle]')) {
    item.addEventListener('click', function (e) {
        for (let item2 of document.querySelectorAll('.myTitleClass')) {
            if (this != item2) {
                item2.classList.remove('myTitleClass')
            }
        }
        this.classList.toggle('myTitleClass')
    })
}
/* Мобильное меню */
/* Превращение линий в крестик (кнопка меню) */
function toggleHamburger() {
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            if (this.classList.contains("is-active") === true) {
                this.classList.remove("is-active")
                document.querySelector('.menu__container-mobile ul').style.transform = 'scaleY(0)'
                document.querySelector('.menu__container-mobile .menu__line').style.backgroundColor = 'var(--mobile-menu-background)'
            } else {
                this.classList.add("is-active");
                document.querySelector('.menu__container-mobile ul').style.transform = 'scaleY(1)'
                document.querySelector('.menu__container-mobile .menu__line').style.backgroundColor = 'var(--background-main)'
            }
        });
    }
}
toggleHamburger()