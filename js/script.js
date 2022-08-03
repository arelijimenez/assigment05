const $ = selector => document.querySelector(selector);
window.addEventListener('load', (event) => {

    const processEntries = (event) => {
        
        event.preventDefault();

        console.log('ID: ' + $("#employeeID").value);
        console.log('Name: ' + $("#name").value);
        console.log('Extension: ' + $("#ext").value);
        console.log('Email: ' + $("#email").value);
        console.log('Department: ' + $("#department").value);
    }
    $('form').addEventListener("submit", processEntries);
})