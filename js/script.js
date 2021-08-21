
	async function getDo () {

		let response = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10');
   
		return response.json()
		
	   }

   
	   async function start () {

		   let data = await getDo();

			data.forEach(obj => {

				createCard(obj)
			})   
	   }
	 start();


const container = document.querySelector('.container');

function createCard(obj) {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('title');
	const cardTitleH1 = document.createElement('h1');
	cardTitleH1.innerHTML = obj.name;
	cardTitle.append(cardTitleH1);

	const cardStatus = document.createElement('div');
	cardStatus.classList.add('status');
	const cardLiveStatus = document.createElement('div');
	cardLiveStatus.classList.add('live-status');

	const cardStatusP = document.createElement('p');
	const cardStatusPText = document.createTextNode(`${obj.species} -- ${obj.status}`);
	cardStatus.append(cardLiveStatus);
	cardStatusP.append(cardStatusPText);
	cardStatus.append(cardStatusP);
	cardTitle.append(cardStatus);
	cardInfo.append(cardTitle);

	const cardContent = document.createElement('div');
	cardContent.classList.add('content');
	const cardContentText = document.createTextNode('Their location');
	cardContent.append(cardContentText);
	cardInfo.append(cardContent);

	card.append(cardInfo);

	const cardImage = document.createElement('div');
	cardImage.classList.add('card-image');
	const image = document.createElement('img');
	image.src = `${obj.image}`;
	image.alt = 'Some image';
	cardImage.append(image);
	card.append(cardImage);

	container.append(card);
}