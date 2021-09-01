/* load the data  */
const loadData = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;

    inputField.value = '';
    const url = (`http://openlibrary.org/search.json?q=${inputFieldValue}`)
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data));
}
/* data show function */
const showData = (books) => {
    console.log(books);
    // error handle
    const error = document.getElementById('error');
    if (books.numFound === 0) {
        error.innerText = 'No result found';

    }
    else {
        error.innerText = '';
        // total result
        const totalResult = document.getElementById('total-result');
        totalResult.innerText = ` Total result found : ${books.num_found}`
        const booksLists = books.docs;

        const parent = document.getElementById('parent');
        parent.textContent = '';
        booksLists.forEach((booksLists) => {
            console.log(booksLists);


            const div = document.createElement('div');
            div.innerHTML = `
        
        <div class="">
        <div class="col">
            <div class="card h-100 shadow-lg p-3 mb-5 bg-body rounded">
            <img src="https://covers.openlibrary.org/b/id/${booksLists.cover_i}-M.jpg" class="card-img-top img-fluid" alt="...">
           
        <div class="card-body">
            <h3 class="card-title">Book name : ${booksLists.title}</h3>
            <h5 class="card-text">Author : ${booksLists.author_name}</h5>
            <h5 class="card-text">First published : ${booksLists.first_publish_year}</h5>
            <h5 class="card-text">Publisher : ${booksLists.publisher}</h5>
        </div>
            </div >
        </div >
    </div >


    `
            parent.appendChild(div);

        })
    }


}
