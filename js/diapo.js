let diapos = [
    `
    `,
    `
    `
];


document.addEventListener('DOMContentLoaded', function() {

    let diapoContainer = document.getElementById('diapo');
    let numDiapo = document.getElementById('numDiapo');
    let totalDiapo = document.getElementById('totalDiapo');

    numDiapo.innerHTML = 1;
    totalDiapo.innerHTML = diapos.length;

    //diapoContainer.innerHTML = diapos[0];

});