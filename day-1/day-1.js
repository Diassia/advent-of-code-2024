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

        for (let i = 0; i < sortedFirstArray.length; i++) {
            const numberFirstArray = sortedFirstArray[i]
            const numberSecondArray = sortedSecondArray[i]

            if (numberFirstArray > numberSecondArray) {
                totalDistance += numberFirstArray - numberSecondArray
            } else {
                totalDistance += numberSecondArray - numberFirstArray
            }
        }

        console.log(totalDistance)
    })
}

separateIntoTwoArrays()