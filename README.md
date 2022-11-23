# MQM.js

## Mini quest maker

Создание текстовых квестов с `определителями` и `mini-javascript`.

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
- Наборы стилей и цветов.
- Читалка голосом, а может еще и управлялка.
- Свой сайт с регистрацией, редактором и публикацией квестов.

______

### Правила создания квеста

- Создать `html-файл`, например `quest.html`.
- Добавить в него `html-теги`, либо только `<head><meta charset="UTF-8"></head>`, если квест на русском.
- Подключить файл с классом `<script src="MQM.js"></script>`. `MQM.js` должен лежать в той же папке.
- Создать тег `<script>` и в нем создать экземпляр класса `MQM` с параметрами настройки в переменную `Mqm`. `const Mqm = new MQM()`.
- В поле `Mqm.text` задать текст сценария, который распознается классом. Для многострочного ввода использовать апострофы "Mqm.text = ``".
- Запустить `html-файл` в любом браузере.

Пример файла `quest.html`:

```html
<head><meta charset="UTF-8"></head>
<script src="MQM.js"></script>
<script>
const Mqm = new MQM()
Mqm.text = `
>name Квест

*** Страница 1
Текст текст текст текст текст текст текст.
== Кнопка 1
.. Страница 2

*** Страница 2
Текст текст текст.
^^ Конец
`
</script>
```

В консоль (хром F12 console) выводится результат анализа квеста на совпадение страниц и ссылок на них. Если есть несовпадения, то они выведутся в консоль. Стартовая страница там выводится, потому что на нее обычно не ссылается ни одна кнопка.

______

### Определители в тексте сценария Mqm.text

Создание квеста через текст с определителями сделано для людей без знаний программирования, и для визуального освобождения текстовой части квеста от конструкций `javascript`.

**Определитель** - группа символов в начале строки для указания способа обработки дальнейшего текста в строке или в следующих строках. Например `++ Img/p1.jpg` задает путь к изображению для страницы.

Весь текст **без определителей** будет включен в текст страницы, чье имя указано было выше.

В тексте можно использовать `html-теги` и `css-стили`.


**Страница**

`***` - Задать имя страницы. Ее текст и параметры будут указываться ниже, до следующего имени новой страницы (***).

`++` - Задать изображение.

`^^` - Тест строки выровнен по центру.

`//` - Комментарий, текст, который не будет включен в вывод на экран.

`... %var% ...` - Внутри текста можно выводит значения переменных, либо выводить ячейки массивов `arr[10]`. Так же можно выполнять `javascript-процедуры`: `% points += 5 %`, но это крайне не рекомендуется, потому что может приводить к ошибкам при использовании многократного пересохранения. Все `javascript-процедуры` с переменными лучше указывать в кнопках.


**Кнопки**

`==` - Создать кнопку и задать ей текст.

`..` - Куда перейти по нажатию на кнопку, `имя страницы` (***).

`??` - условие при котором эта кнопка будет показана. Если условие не выполняется, то кнопка будет скрыта.

`::` - `javascript-код`, который будет выполнен при нажатии на кнопку. Таких строчек допускается несколько на одну кнопку.


**Перенаправление**

`??-` - условие при котором страница будет сразу перенаправлена. Если есть такой определитель, то страница не будет выводиться на экран, и будет перенаправлена согласно таким условиям в ней. `..` - то, куда будет перенаправлена страница при соблюдении условия. `::` - код который выполнится перед перенаправлением.

Определитель `??-` похож по своей конструкции на обычную кнопку `==`, только вместо текста в ней условие ее мгновенного автоматического нажатия.

Если написать `??- 1`, то условие выполнится в обязательном порядке, и произойдет перенаправление именно сюда. Это можно использоваться как вариант перенаправления - если не сработали предыдущие. То есть перечислить перенаправления с условиями, и в конце сделать `??- 1`, чтобы если не сработали никакие из направлений, то перешло в это.

```
*** Развилка
??- очки == 10
.. выигрыш
??- очки == 9
.. финал
??- 1
.. игра
```
То есть, если очков 10, то перейти на страницу `выигрыш`, если 9, то на страницу `финал`, а во всех остальных случаях перейти на страницу `игра`.

Еще можно указать `??- 1`, если хочется выполнить несколько операций с переменными на промежуточной странице. Такое может понадобиться, если хочется выполнить на отдельном блоке более сложный `javascript-код`. По сути, в перечислении `::` код выполнятся последовательно и можно полноценно управлять его условиями. То есть `:: хп -= 1` вычтет из `хп` единицу и только потом проверит его величину и изменит `скорость`.

```
*** Обработка
??- 1
:: очки += 3
:: патрон -= 1
:: хп -= 1
:: if (хп < 5) скорость = 0.5
```


**Последовательность**

Важно соблюдать последовательность определителей. Все данные в страницу вводятся между определителями `***` и следующим `***` на новой строке. Все данные для кнопки вводятся под заданием текста для кнопки `==`, и продолжается до следующего `==`, либо начала новой страницы, как и определители перенаправлений `??-`. Параметры внутри кнопки (`..`, `??`, `::`) можно указывать в любой последовательности.



**Стиль и настройки квеста**

`>name` - Название страницы.

`>icon` - Иконка страницы.

`>back` - Цвет фона (css).

`>text` - Цвет текста (css).

`>border` - Цвет бортиков (css).

`>filter` - Эффект для изображений (css filter).

`>var` - Список переменных для использования в квесте, через `,`. Если использовать не объявленные здесь переменные, то в консоль разработчика в браузере будет выдаваться ошибка, и работа квеста нарушится.

`>nocss` - Если указан этот определитель, то подготовленные классом `css-стили` не используются, и можно указывать свои в теге `<style>`. Так же в теге `<style>` можно дополнять стили класса, например можно уменьшить отступы в кнопках, если их будет слишком много:

```html
<style>
    .btn {
        padding-top: 10px!important;
        padding-bottom: 10px!important;
    }
</style>
```

**Концовки**

`!!!` - Задать концовку квеста. Если указать этот определитель после имени страницы, то она будет внесена в список концовок.

Если в квесте указана хотя бы одна концовка, то на первой странице квеста внизу будут выведены кнопки со ссылками на каждую из них. Каждая кнопка активируется (появляется номер и переход), если концовка была открыта игроком. В концовке сохраняются значения переменных. Если концовка открыта несколько раз, то эти значения перезаписываются.

Так же внизу есть кнопка `X`, которая стирает все пройденные концовки.

______

### Примеры

Текст, картинки, минимум переменных

[Самосбор - Слизень](http://innercat.ru/mqm/Examples/smsbr-slizen.html)

[Самосбор - Синяя рука](http://innercat.ru/mqm/Examples/smsbr-sin_rook.html)

Текст, много переменных, js-вставки (условия)

[Самосбор - Лаборатория](http://innercat.ru/mqm/Examples/Laba/index.html)

______

Удачного использования. Все вопросы по работе конструктора можно задать на [дискрд-сервере](https://discord.gg/mzmgJqH6Vj)