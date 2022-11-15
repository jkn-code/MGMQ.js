# MGMQ.javascript

## Mini game maker - Quest

Создание текстовых квестов на javascript, либо текстом с определителями.

Плюсы:
- Легкий запуск.
Не нужны дополнительные установки, программы, сторонние библиотеки.
- Легкий запуск в интернете.
На хостинге так же не нужно ничего устанавливать, нужно просто разместить html-файл и изображения для квеста.
- Свободное использование javascript.
При желании, можно как угодно расширять возможности: функционал, количество javascript-файлов со сценарием, подключение стилей и javascript-библиотек.
- Сохранение и загрузка. Показ количества страниц и символов.

Минусы:
- Их нет! (но это не точно)

Может быть добавится в будущем:
- Больше эффектов для перехода между страницами.
- Готовые стили цветов.
- Читалка голосом, а может еще и управлялка.
- Свой сайт с регистрацией, редактором и публикацией квестов.

______

### Примеры

*(в разработке)*

______

### Правила создания квеста

- Создать html-файл, и теги.
- Подключить `MGMQ.js`.
- Создать тег `script` и в нем создать экземпляр класса `MGMQ` с параметрами настройки в переменную `MQ`.
- В поле `MQ.text` задать текст сценария, который распознается классом.
- Запустить html-файл.

В консоль выводится результат анализа квеста на совпадение страниц и ссылок на них. Если есть несовпадения, то они выведутся в консоль. Стартовая страница там выводится, потому что на нее не ссылается обычно ни одна кнопка.

______

### Определители в тексте сценария MQ.text

Создание квеста через текст с определителями сделано для людей без знаний программирования, и для визуального освобождения текстовой части квеста от конструкций `javascript`.

**Определитель** - группа символов в начале строки для указания способа обработки дальнейшего текста в строке или в следующих строках. Например `== Img/p1.jpg` задает путь к изображению для страницы.

Весь текст **без определителей** будет включен в текст страницы, чье имя указано было выше.

В тексте можно использовать `html-теги` и `css-стили`.


**Страница**

`***` - Задать имя страницы. Ее текст и параметры будут указываться ниже, до следующего имени новой страницы (***).

`==` - Задать изображение.

`^^` - Тест строки выровнен по центру.

`//` - Комментарий, текст, который не будет включен в вывод на экран.

`... %var% ...` - Внутри текста можно выводит значения переменных, либо выводить ячейки массивов `arr[10]`. Так же можно выполнять `javascript-процедуры`: `% points += 5 %`, но это крайне не рекомендуется, потому что может приводить к ошибкам при использовании многократного пересохранения. Все `javascript-процедуры` с переменными лучше указывать в кнопках.


**Кнопки**

`---` - Создать кнопку и задать ей текст.

`..` - Куда перейти по нажатию на кнопку, `имя страницы` (***).

`??` - условие при котором эта кнопка будет показана. Если условие не выполняется, то кнопка будет скрыта.

`::` - `javascript-код`, который будет выполнен при нажатии на кнопку. Таких строчек допускается несколько на одну кнопку.


**Перенаправление**

`??-` - условие при котором страница будет сразу перенаправлена. Если есть такой определитель, то страница не будет выводиться на экран, и будет перенаправлена согласно таким условиям в ней. `..` - то, куда будет перенаправлена страница при соблюдении условия. `::` - код который выполнится перед перенаправлением.

Определитель `??-` похож по своей конструкции на обычную кнопку `---`, только вместо текста в ней условие ее мгновенного автоматического нажатия.


Важно соблюдать последовательность определителей. Все данные в страницу вводятся между определителями `***` и следующим `***` на новой строке. Все данные для кнопки вводятся под заданием текста для кнопки `---`, и продолжается до следующего `---`, либо начала новой страницы, как и определители перенаправлений `??-`. Параметры внутри кнопки (`..`, `??`, `::`) можно указывать в любой последовательности.


**Стиль и настройки документа**

`>name` - Название страницы.

`>icon` - Иконка страницы.

`>back` - Цвет фона (css).

`>text` - Цвет текста (css).

`>border` - Цвет бортиков (css).

`>filter` - Эффект для изображений (css filter).

`>nocss` - Если указан этот определитель, то подготовленные `css-стили` не сипользуются, и можно указывать свои в `<style>`.

`>var` - Список переменных для использования в квесте, через `,`. Если использовать не объявленные здесь переменные, то в консоль разработчика в браузере будет выдаваться ошибка, и работа квеста нарушится.


**Концовки**

`>++` - Задать концовку квеста. Если указать этот определитель после имени страницы, то она будет внесена в список концовок.

Если в квесте указана хотя бы одна концовка, то на первой странице квеста внизу будут выведены кнопки со ссылками на каждую из них. Каждая кнопка активируется, если концовка была открыта игроком. В концовке сохраняются значения переменных. Если концовка открыта несколько раз, то значения перезаписываются.

Так же внизу есть кнопка `X`, которая стирает все пройденные концовки.

______

Удачного использования. Все вопросы по работе конструктора можно задать на дискрд-сервере - [https://discord.gg/mzmgJqH6Vj]