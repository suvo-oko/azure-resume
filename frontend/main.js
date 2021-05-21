window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const functionApi = 'https://resumecounter.azurewebsites.net/api/GetCounter?code=jYxRGLQ35qTrNqBdK5nk3xhlspiQYhiO7Arfl4K4r0M7Qa4HfVhQxw=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}