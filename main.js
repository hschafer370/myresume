window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://pagecounterschafer.azurewebsites.net/api/HttpTrigger1?code=LHHVQ6NpsWDsnpAJlihntLW_0XTd3p3xm-tPjZ880JcxAzFuAWbbkw=='; 

const getVisitCount = () => {
	
    let count = 0;
    fetch(apiGateway, {
        mode: 'cors',
    })
    .then(response => {
        return response.json()
		
    })
    .then(res => {
		document.getElementById('counter').innerText = res;
        const count = res.Attributes.visitcount;
    })
    return count;
}
