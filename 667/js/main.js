console.log(1);
const kollektion = document.querySelectorAll('input')
const btn = document.querySelector('button')
const kiste = document.querySelector('p')
const lenta = document.querySelector('figure')

btn.addEventListener(
	'click',
	function(){
		const limit = +kollektion[0].value
		const anfrage = +kollektion[1].value

		let a = `https://jsonplaceholder.typicode.com/photos?_page=${anfrage}&_limit=${limit}`

		if( isNaN(limit) || isNaN(anfrage) ){
			kiste.innerHTML = 'error'
			console.log(limit);
		}
		else{
			fetch( a, {method : 'GET'} ).then( // сделали запрос в облако и в случае успеха:
				function(antwort){
					// каждый then должен что-то возвращать
					return antwort.json() // получили ответ с облака в формате json и конвертируем ответ в js-объект
				}
			).then(
				function(ergebniss){
					for(let i = 0; i < ergebniss.length; i++){
						let bild = document.createElement('img')
						bild.src = ergebniss[i].thumbnailUrl
						lenta.appendChild(bild)
					}
				}
			)
		}
	}
)

