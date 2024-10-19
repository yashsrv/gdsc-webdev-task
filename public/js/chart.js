const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const ctx = document.getElementById('myChart').getContext('2d')

// creating a chart instance
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

//creating a socket.io instance
const socket = io('https://data.gdscnsut.com')

socket.on('random_number', (data) => {
    dataList.push(data.number * 100) //updating dataList
    copyList = [...dataList] //copying dataList as copyList

    updateData(dataList) //function is called every 1 sec
})

function updateData(dataList) {
    //updating chart data
    myChart.data.datasets[0].data = dataList
    myChart.update()

    //stopping socket connection
    if (dataList.length === 12 && socket.connected) {
        socket.disconnect()
    }

    let currentValue = dataList[dataList.length - 1]
    //updating total downloads
    let tdElement = document.getElementById('td')
    let tdValue = parseInt(tdElement.textContent)
    tdElement.innerHTML = `<b>${tdValue + currentValue}</b>`

    //sorting copyList in decreasing order
    let hdValue = copyList.sort((a, b) => b - a)[0]
    if (currentValue === hdValue) {
        //updating highest downloads
        document.getElementById('hd').innerHTML = `<b>${currentValue}</b>`
        
        //updating peak month
        let peakMonthsList = []
        dataList.forEach((item,index)=>{
            if (item === hdValue){
                peakMonthsList.push(monthList[index])
            }
        })
        let peakMonths = peakMonthsList.join(', ')

        document.getElementById('pm').innerHTML = `<b>${peakMonths}</b>`
    }

}
