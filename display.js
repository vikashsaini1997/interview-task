$(document).ready(function () {
    // Retrieve checked data from localStorage
    const checkedData = JSON.parse(localStorage.getItem("checkedData")) || [];
  
    // Display checked data
    checkedData.forEach(item => {
      $("#checkedData").append(`<div>${item.department}: ${item.name}</div>`);
    });
  });
  