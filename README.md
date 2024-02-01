# Многостраничный сайт [Diving](https://elent15.github.io/diving) (в процессе работы)

### Сайт дайвинг-компании (туризм, обучение дайвингу)
 
* Html, css, js
* Шаблонизатор Pug, методология БЭМ, препроцессор Sass в синтаксисе Scss
* Валидная, адаптивная (до 320px), кроссбраузерная вёрстка
* SVG-спрайт
* Слайдеры (плагин swiper), табы (js), аккордеон (js)
* Модальные окна: вход в личный кабинет, восстановление пароля
* Стилизованы состояния hover и focus для ссылок, кнопок и полей для ввода данных
  
#### Структура сайта

* Главная страница [index.html](https://elent15.github.io/diving): табы, слайдеры, адаптивное видео
* Страница "Обучение" [training.html](https://elent15.github.io/diving/training.html)
* Страница "Туризм" [tourism.html](https://elent15.github.io/diving/tourism.html)
* Страница "Дайвинг-центры" [centers.html](https://elent15.github.io/diving/centers.html): кастомный скролл (плагин simplebar), яндекс карты
* Страница "О нас" [about.html](https://elent15.github.io/diving/about.html): слайдеры, аккордеон

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
