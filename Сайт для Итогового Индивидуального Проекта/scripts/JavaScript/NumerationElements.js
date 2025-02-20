const numerationElementsList = document.querySelectorAll('.numeration');

for (i = 0; i < numerationElementsList.length; i++){
	numerationElementsList[i].innerHTML = `${i + 1}.&nbsp;`;
}