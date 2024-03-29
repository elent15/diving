# Многостраничный сайт [Diving](https://elent15.github.io/diving) (в процессе работы)

### Сайт дайвинг-компании (туризм, обучение дайвингу)
 
* Html, css, js
* Шаблонизатор Pug, методология БЭМ, препроцессор Sass в синтаксисе Scss
* Валидная, адаптивная (до 320px), кроссбраузерная вёрстка
* SVG-спрайт
* Слайдеры (плагин swiper), табы (js), аккордеон (js), селект (js), скролл (плагин simplebar)
* Модальные окна: вход в личный кабинет, восстановление пароля
* Стилизованы состояния hover и focus для ссылок, кнопок и полей для ввода данных
  
#### Структура сайта

* Главная страница [index.html](https://elent15.github.io/diving): табы, слайдеры, адаптивное видео
* Страница "Обучение" [training.html](https://elent15.github.io/diving/training.html)
* Страница "Туризм" [tourism.html](https://elent15.github.io/diving/tourism.html)
* Страница "Дайвинг-центры" [centers.html](https://elent15.github.io/diving/centers.html): кастомный скролл (плагин simplebar), яндекс карты, модальное окно "Забронировать"
* Страница "О нас" [about.html](https://elent15.github.io/diving/about.html): слайдеры, аккордеон
* Страница "Контакты" [contacts.html](https://elent15.github.io/diving/contacts.html): двухуровневые табы
* Страница "Дайвинг в океанариумах" [oceanariums.html](https://elent15.github.io/diving/oceanariums.html): фоновое видео, аккордеон в секции "Вопросы и ответы", аккордеон в секции "Стоимость дайвинга" при ширине экрана меньше 720px, модальные окна "Купить" и "Забронировать"
* Страница "Цены на обучение" [prices.html](https://elent15.github.io/diving/prices.html): аккордеон, модальные окна "Купить" и "Записаться"
* Страница "Расписание клубных поездок" [schedule.html](https://elent15.github.io/diving/schedule.html): кастомные селекты, аккордеон в секции "Дисконтно-бонусная система" при ширине экрана меньше 720px, модальное окно "Забронировать"
* Страница "Расписание курсов по дайвингу" [courses.html](https://elent15.github.io/diving/courses.html): табы, аккордеон в секции "Дисконтно-бонусная система" при ширине экрана меньше 720px, модальное окно "Записаться"
* Страница "Книги" [books.html](https://elent15.github.io/diving/books.html)
* Страница "Подарки" [gifts.html](https://elent15.github.io/diving/gifts.html)
* Страница "Наша команда" [team.html](https://elent15.github.io/diving/team.html): табы
* Страница "Описание специалиста" [specialist.html](https://elent15.github.io/diving/specialist.html): слайдер с горизонтальным превью

#### Gulp-сборка (Gulp 4)

* команда gulp - сборка проекта в режиме разработки (папка dev):
  * pug-файлы из папки src/partials объединены в html-файлы страниц;
  * scss-файлы из папки src/scss объединены в файл main.css;
  * css-файлы из папки src/scss/vendor (сторонние css-файлы) объединены в файл vendor.css;
  * js-файлы из папки src/js/components объединены в файл main.js;
  * изображения в форматах png и jpg из папки src/images конвертированы в формат webp;
  * изображения в формате svg из папки src/images/svg/sprite минифицированы и объединены в svg-спрайт (sprite.svg);
  * шрифты из папки src/fonts конвертированы в форматы woff и woff2
* команда gulp build - итоговая сборка проекта (папка docs):
  * в файле стилей main.css добавлены вендорные префиксы, сгруппированы медиа-запросы;
  * к файлу main.js применён транспайлер babel;
  * минимизированы html-файлы, файлы main.css, vendor.css, main.js;
  * сжаты файлы изображений в форматах jpg, png, svg
