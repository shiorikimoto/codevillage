const DOM = document.createElement('h1')
DOM.textContent = 'DOM'

const jshtml = document.createElement('p')
jshtml.textContent = 'JavaScriptからHTMLを扱うための仕組み'

const topic = document.createElement('h2')
topic.textContent = '印象に残っているトピック'

const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.textContent = 'documentオブジェクト'

const li2 = document.createElement('li')
li2.textContent = 'getElementById'

const li3 = document.createElement('li')
li3.textContent = 'イベントリスナ'


document.body.appendChild(DOM)
document.body.appendChild(jshtml)
document.body.appendChild(topic)
document.body.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)