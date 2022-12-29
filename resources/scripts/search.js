function searchbar() {

    let input = document.getElementById('searchbar').value.toLowerCase();
    let listItems = document.getElementsByClassName('dogs');

    for(let i = 0; i < listItems.length; i++) {

        let name = listItems[i].innerText.toLowerCase();

        listItems[i].style.display = name.includes(input) ? '' : 'none';
    }
}