const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const ctx = document.getElementById('myChart').getContext('2d')

// Creating a chart instance
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: monthList,
        datasets: [{
            label: 'Downloads',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})


let dataList = []
let copyList = []

// Creating a socket.io instance
const socket = io('https://data.gdscnsut.com')

socket.on('random_number', (data) => {
    dataList.push(data.number * 100) // Updating dataList
    copyList = [...dataList] // Copying dataList as copyList

    updateData(dataList) // Function is called every 1 sec
})

function updateData(dataList) {
    // Updating chart data
    myChart.data.datasets[0].data = dataList
    myChart.update()

    // Stopping socket connection
    if (dataList.length === 12 && socket.connected) {
        socket.disconnect()
    }

    let currentValue = dataList[dataList.length - 1]

    // Updating total downloads
    let tdElement = document.getElementById('td')
    let tdValue = parseInt(tdElement.textContent)
    tdElement.innerHTML = `<b>${tdValue + currentValue}</b>`

    let hdValue = copyList.sort((a, b) => b - a)[0]
    if (currentValue === hdValue) {

        // Updating highest downloads
        document.getElementById('hd').innerHTML = `<b>${currentValue}</b>`

        // Updating peak month
        let peakMonthsList = []
        dataList.forEach((item, index) => {
            if (item === hdValue) {
                peakMonthsList.push(monthList[index])
            }
        })
        let peakMonths = peakMonthsList.join(', ')

        document.getElementById('pm').innerHTML = `<b>${peakMonths}</b>`
    }

}
