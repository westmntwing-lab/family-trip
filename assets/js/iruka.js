
function showTable(type, button){

    document
        .querySelectorAll('.table-content')
        .forEach(el => el.classList.remove('active'));

    document
        .querySelectorAll('.tab-btn')
        .forEach(el => el.classList.remove('active'));

    document
        .getElementById('table-' + type)
        .classList.add('active');

    button.classList.add('active');
}
