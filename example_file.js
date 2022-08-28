MQ.text = `
*** Старт
Перед тобой игровой автомат.
Ты можешь сыграть.
У тебя %all% монет.
-- Потянуть рычаг
.. Счет


*** Счет
== Img/p2.webp
Выпало %points% монет.
Теперь у тебя %all% монет.
-- Забрать 
.. Старт

`

MQ.var.points = 0
MQ.var.all = 10

MQ.pages['Старт'] = {
    img: 'Img/p1.gif',
    btns: [
        {
            click: btn => {
                MQ.var.points = Math.round(Math.random() * 100)
                MQ.var.all += MQ.var.points
            }
        },
    ],
}