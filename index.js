let players = [
    { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
    { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
    { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
    { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
    { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')

// write your code here
function displayPlayerList(data) {
    let contentHtml = ''
    const commend = `
        <i class="fa fa-plus-circle" aria-hidden="true"></i>
        <i class="fa fa-minus-circle" aria-hidden="true"></i>
    `

    for (let i = 0; i < data.length; i++) {
        contentHtml += `
            <tr>
                <td><span>${data[i].name}</span></td>
                <td><span>${data[i].pts}</span>${commend}</td>
                <td><span>${data[i].reb}</span>${commend}</td>
                <td><span>${data[i].ast}</span>${commend}</td>
                <td><span>${data[i].stl}</span>${commend}</td>
                <td><span>${data[i].blk}</span>${commend}</td>
            </tr>
        `
    }

    dataPanel.innerHTML = contentHtml
}

displayPlayerList(players)

dataPanel.addEventListener('click', function (event) {

    let value = event.target.parentElement.firstElementChild

    if (event.target.classList.contains('fa-plus-circle')) {
        value.innerHTML++
    } else if (event.target.classList.contains('fa-minus-circle')) {
        value.innerHTML--
    }
})