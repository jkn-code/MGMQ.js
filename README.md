# MGMQ.js

## Mini game maker - Quest

Создание квестов на javascript, либо просто текстом с определителями.

Плюсы:
- Легкий запуск.
Не нужны дополнительные установки, программы, сторонние библиотеки.
- Легкий запуск в интернете.
На хостинге так же не нужно ничего устанавливать, нужно просто разместить html-файл и изображения для квеста.
- Свободное использование javascript.
При желании, можно как угодно расширять возможности: функционал, количество js-файлов со сценарием, подключение стилей и js-библиотек.

Минусы:
- Их нет! (но это не точно)

Может быть добавится в будущем:
- Больше вариантов эффектов для перехода между страницами
- Заготовленные стили цветов
- Читалка голосом, а может и управлялка
- Свой сайт с регистрацией, редактором и публикацией квестов

______

### Примеры

Пример создания квеста с помощью кода - 
[открыть](https://github.com/jkn-code/mgm-quest/blob/main/example_code.html)

Пример создания квеста с помощью текста - 
[открыть](https://github.com/jkn-code/mgm-quest/blob/main/example_text.html)

Пример создания квеста с помощью текста и дополнений в виде кода, а так же через подключение сценария через отдельный файл - 
[открыть](https://github.com/jkn-code/mgm-quest/blob/main/example_file.html)

______

### Правила создания квеста

- Создать html-файл, и теги
- Подключить `MGMQ.js`
- Создать тег скрипта и в нем создать экземпляр класса `MGMQ` с параметрами настройки в переменную `MQ`
- В объект `MQ.text` можно задать текст сценария, который распознается классом
- В объект `MQ.pages` можно создавать объекты страниц
- Запустить html-файл

______

### Настройки MGMQ({})

**name** - Название страницы.

**icon** - Иконка страницы.

**bodyColor** - Фоновый цвет.

**textColor** - Цвет текста.

**borderColor** - Цвет линий. Если `borderColor` не указан, то он берется из `textColor`.

**start** - Имя первой страницы. Если `start` не указано, то берется первая по счету страница.

______

### Объекты и поля MQ

**pages** - Объекты страниц. У каждой страницы должно быть свое уникальное имя.

**text** - Текст сценария с определителями.

**var** - Переменные квеста, их имена можно указывать в тексте для вывода - `%name%`.

**keys** - Ключи квеста. Массив строк, в который можно добавлять или удалять ключи через `setKey`.

______

### Объекты и поля MQ.pages['name']

**text** - Тест страницы. Каждая новая строка - параграф с отступом. Лучше использовать кавычки для многострочного текста - ``

**img** - Пусть к файлу изображения для страницы.

**btns** - Массив объектов кнопок.

> **text** - Текст кнопки.
> **goto** - Имя страницы на которую надо перейти по нажатию.
> **init** - Функция, которая выполнится при создании кнопки на странице. В эту функцию можно отправить переменную `btn`, у которой в функции можно управлять параметром видимости через `btn.hidden`.
> **click** - Функция, которая выполнится при нажатии на кнопку.
> **setKey** - Изменить ключ. Если указано просто имя ключа, то добавляется в `MQ.keys`. Если имя указано с `!` в первом символе, то удаляется из `MQ.keys`
> **ifKey** - Видимость кнопки при наличии или отсутствии ключа. Если имя указано просто, то кнопка будет видна только при наличии в `MQ.keys` ключа с этим именем. Если имя указано с `!` в первом символе, то кнопка будет видна только при отсутствии указанного ключа.
 

