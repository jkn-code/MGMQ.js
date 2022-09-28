# MGMQ.js

## Mini game maker - Quest

Создание текстовых квестов на javascript, либо текстом с определителями.

Плюсы:
- Легкий запуск.
Не нужны дополнительные установки, программы, сторонние библиотеки.
- Легкий запуск в интернете.
На хостинге так же не нужно ничего устанавливать, нужно просто разместить html-файл и изображения для квеста.
- Свободное использование javascript.
При желании, можно как угодно расширять возможности: функционал, количество js-файлов со сценарием, подключение стилей и js-библиотек.
- Сохранение и загрузка. Показ количества страниц.

Минусы:
- Их нет! (но это не точно)

Может быть добавится в будущем:
- Больше эффектов для перехода между страницами
- Готовые стили цветов
- Читалка голосом, а может еще и управлялка
- Свой сайт с регистрацией, редактором и публикацией квестов

______

### Примеры

Пример создания квеста с помощью кода - 
[код](https://github.com/jkn-code/mgm-quest/blob/main/example_code.html) / 
[страница](https://jkn-code.github.io/mgmq-examples/example_code.html)

Пример создания квеста с помощью текста - 
[код](https://github.com/jkn-code/mgm-quest/blob/main/example_text.html) /
[страница](https://jkn-code.github.io/mgmq-examples/example_text.html)

Пример создания квеста с помощью текста и дополнений в виде кода, а так же через подключение сценария через отдельный файл - 
[код](https://github.com/jkn-code/mgm-quest/blob/main/example_file.html) /
[страница](https://jkn-code.github.io/mgmq-examples/example_file.html)

______

### Правила создания квеста

- Создать html-файл, и теги
- Подключить `MGMQ.js`
- Создать тег скрипта и в нем создать экземпляр класса `MGMQ` с параметрами настройки в переменную `MQ`
- В строку `MQ.text` можно задать текст сценария, который распознается классом
- В объект `MQ.page` можно создавать объекты страниц
- Запустить html-файл

Если используется `MQ.text` и `MQ.page`, то первыми создаются страницы из `MQ.text`, а уже после надстраиваются из `MQ.page`.

В консоль выводится результат анализа квеста на совпадение страниц и ссылок на них. Если есть несовпадения, то они выведутся в консоль.

Далее все поля объектов ниже не являются обязательными.
______

### Настройки MGMQ({})

`name` - Название страницы.

`icon` - Иконка страницы.

`bodyColor` - Фоновый цвет.

`textColor` - Цвет текста.

`borderColor` - Цвет линий. Если `borderColor` не указан, то он берется из `textColor`.

`start` - Имя первой страницы. Если `start` не указано, то берется первая по счету страница.

`filter` - CSS-свойство, которое будет задано изображениям.

______

### Поля MQ

`page` - Объекты страниц. У каждой страницы должно быть свое уникальное имя.

`text` - Текст сценария с определителями.

`var` - Переменные квеста, их имена можно указывать в тексте для вывода - `%name%`.

`keys` - Ключи квеста. Массив строк, в который можно добавлять или удалять ключи через `setKey` в кнопках.

______

### Поля MQ.page['name']

`text` - Тест страницы. Каждая новая строка - параграф с отступом. Лучше использовать кавычки для многострочного текста - ``

`img` - Путь к файлу изображения для страницы.

`btns` - Массив объектов кнопок.

### Поля MQ.page['name'].btns

`text` - Текст кнопки.

`goto` - Имя страницы на которую надо перейти по нажатию.

`init` - Функция, которая выполнится при создании кнопки на странице. В эту функцию можно отправить переменную `btn`, у которой в функции можно управлять параметром видимости через `btn.hidden`.

`click` - Функция, которая выполнится при нажатии на кнопку. Можно задавать код для обработки ключей и переменных.

`setKey` - Изменить ключ при нажатии на кнопку. Если указано просто имя ключа, то он добавляется в список ключей `MQ.keys`. Если имя указано с `!` в первом символе, то он удаляется из списка ключей `MQ.keys`.

`ifKey` - Видимость кнопки при наличии или отсутствии ключа. Если указано просто имя ключа, то кнопка будет видна **только** при наличии его в списке ключей `MQ.keys`. Если имя указано с `!` в первом символе, то кнопка будет видна **только** при отсутствии указанного ключа.
 
`btn.hidden` - Параметр, который задается в `init()`. `btn.hidden = True` - не отображать кнопку на экране.
______

### Определители в тексте сценария MQ.text

Создание квеста через текст с определителями сделано для людей без знаний программирования, и для визуального освобождения текстовой части квеста от конструкций js.

**Определитель** - группа символов для указания параметров страницы с помощью коротких указателей. Определитель указывает что именно делать с данными, которые следуют после него на этой строке. Например `== Img/p1.jpg` задает путь к изображению для страницы (`MQ.page['name'].img = 'Img/p1.jpg'`).

Весь текст **без определителей** будет включен в текст страницы (`MQ.page['name'].text`).

`***` - Задать имя страницы, текст и параметры которой будут указываться ниже, до следующего имени новой страницы (`MQ.page['name']`).

`==` - Задать изображение.

`--` - Создать кнопку и задать ей текст.

`..` - Куда перейти по нажатию на кнопку, имя страницы.

`++` - Установить ключ `key`, удалить ключ `!key`.

`??` - Показывать кнопку если точно есть ключ `key`, или если точно нет ключа `!key`.

`//` - Комментарий, текст, который не будет включен в вывод на экран.

`^^` - Тест строки выровнен по центру.

Важно соблюдать последовательность определителей. Все данные в страницу вводятся между определителями `***` и следующим `***` на новой строке. Все данные для кнопки вводятся под заданием текста для кнопки `--`, и продолжается до следующего `--`, либо начала новой страницы. Параметры кнопки можно указывать в любой последовательности.
______

### Редактор

Редактор работает только на хостинге. В папку с редактором лучше положить MGMQ.js, потому что новые файлы квестов будут создаваться с такой ссылкой на этот файл `<script src="MGMQ.js"></script>`.

`editor.html` - Файл редактора. `S` - Save, сохранить файл квеста, имя которого указано в поле для имени. `V` - View, посмотреть файл, квест откроется в новой вкладке браузера. При нажатии на поле для ввода имени появляется список `html-файлов`, в папке с редактором.

`editor_srv.php` - Файл работы с хостингом. Выполняет команды по сохранению, открытию и получению списка фалов.

`list.html` - Файл списка квестов. Просто `html-документ` для относительно приятного вывода списка ссылок на свои квесты. Редактировать надо вручную, добавлять, изменять, удалять ссылки внизу документа `<a href="file.html" target="_blank">Имя квеста</a>`. Можно переименовать в `index.html`, чтобы файл автоматически запускался при отрытии папки с квестами.

*Не создавать квесты с именами `editor` и `list`, потому что это рабочие фалы редактора.