selection = null;


function stars(s){
    selection = s;
    const allRates = document.querySelectorAll(".rating .circle");
    allRates.forEach(circle => {circle.classList.remove('selected')});
    allRates[s-1].classList.add('selected');   
}

function submit() {
    const popupitem = document.querySelectorAll('.card');
    console.log(selection);
    console.log(popupitem);
    document.getElementById('rate').innerText = selection;
    popupitem[0].classList.add('hidden');
    popupitem[1].classList.add('active');
}