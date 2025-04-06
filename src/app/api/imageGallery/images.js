async function fetchData(){
    const response = await fetch("http://localhost:5000/imageGallery", {
        method: "GET",
    });
return response.json();
}

async function postData(newImages){

}