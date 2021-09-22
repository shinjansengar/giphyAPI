async function sendApiSearchRequest(){
    var input = document.getElementById('searchbar').value;

    var apiKey="UVUXUR04wWM2woJpSF6tL4mQLmuMBBw8";
    var apiUrl='https://api.giphy.com/v1/gifs/search?q='+input+'&rating=g&limit=20&api_key='+apiKey;
    
    const response = await fetch(apiUrl);
    const json = await response.json();
    var data = json.data;
    
    var newDiv = document.createElement('div');
    data.forEach(element => {
        var imgPath= element.images.fixed_height.url;
        var img = document.createElement('img');
        img.setAttribute("src",imgPath);
        newDiv.appendChild(img);
    });
    document.getElementById('result').innerHTML=newDiv.innerHTML;    

}

async function sendApiTrendingRequest(){
    var apiKey="UVUXUR04wWM2woJpSF6tL4mQLmuMBBw8";
    var apiUrl='https://api.giphy.com/v1/gifs/trending?&rating=g&limit=25&api_key='+apiKey;

    const response = await fetch(apiUrl);
    const json = await response.json();
    var data = json.data;
    
    var newDiv = document.createElement('div');
    data.forEach(element => {
        var imgPath= element.images.fixed_height.url;
        var img = document.createElement('img');
        img.setAttribute("src",imgPath);
        newDiv.appendChild(img);
    });
    document.getElementById('result').innerHTML=newDiv.innerHTML;
}

document.getElementById("searchbar")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});