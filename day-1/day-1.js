import { dataToArray, getData } from "../utils/getData.js"

const separateIntoTwoArrays = () => {
    getData('../day-1/day-1-p1-large.txt').then((data) => {
        const dataArray = dataToArray(data)

        let firstArray = []
        let secondArray = []
        let totalDistance = 0

        dataArray.map((string) => {
            const stringArray = string.split(' ')
            stringArray.map((element, index) => {
                if (element !== "" && index == 0) {
                    firstArray.push(Number(element))
                }
                if (element !== "" && index == stringArray.length - 1) {
                    secondArray.push(Number(element))
                }
            })
        })

        const sortedFirstArray = firstArray.sort()
        const sortedSecondArray = secondArray.sort()

        // day 1 part 1
        // for (let i = 0; i < sortedFirstArray.length; i++) {
        //     const numberFirstArray = sortedFirstArray[i]
        //     const numberSecondArray = sortedSecondArray[i]

        //     if (numberFirstArray > numberSecondArray) {
        //         totalDistance += numberFirstArray - numberSecondArray
        //     } else {
        //         totalDistance += numberSecondArray - numberFirstArray
        //     }
        // }
        let timesNumberAppears = 0

        // day 1 part 2
        sortedFirstArray.map((number, index) => {
            sortedSecondArray.map((secondNumber) => {
                if (number == secondNumber) {
                    timesNumberAppears += 1
                }
            })
            
            totalDistance += (timesNumberAppears * number)
            timesNumberAppears = 0
        })
        console.log(totalDistance)
    })
}

separateIntoTwoArrays()