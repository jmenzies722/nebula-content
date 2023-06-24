    // Given the following list:
    // Change the element at index zero to equal itself times 10 
    let numArr = [1,2,3,4,5];
    numArr[0] = numArr[0] * 10
    console.log(numArr)
    // Add an additional element to the prior array
    numArr.push(6)
    console.log(numArr)
    // In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
    let removedItem = numArr.pop()
    console.log(removedItem)
    // Check if the prior array contains the number 1
    //   If it does, log true, if it doesn't, log false
    console.log(numArr.includes(1))
    // Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
    let removedFirstItem = numArr.shift()
    console.log(removedFirstItem)
    // Add that item back
    numArr.unshift(removedFirstItem);
    console.log(numArr); 
    // Given the following array, sort it using an array method
    let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
    sortThis.sort()
    console.log(sortThis)
    // Now reverse the prior array
    sortThis.reverse()
    console.log(sortThis)  
    // Write a string stating your favorite 3 foods. 
    //  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
    let favoriteFoods = 'My favorite foods are pizza, chicken, ice-cream'
    // Convert the prior string into an array of words (don't worry about where punctuation lands). 
    //  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']
    let favoriteFoodsArray = favoriteFoods.split(' ');
    console.log(favoriteFoodsArray);
    // Convert the output from the prior example back into a string, but with dashes between the words. 
    //  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'
    let favoriteFoodsString = favoriteFoodsArray.join('-');
    console.log(favoriteFoodsString);
    // Given the following array: [1,2,3,4,5,7,8,9,10]
    // insert the number 6 into its logical location
    let numArrr = [1,2,3,4,5,7,8,9,10];
    numArrr.splice(5,0,6) 
    console.log(numArrr)
    // Create two arrays and, using JavaScript join them together
    let arrOne = [100,200,300,400,500]
    let arrTwo = [600,700,800,900,1000]
    let joinArr = arrOne.concat(arrTwo)
    console.log(joinArr)
    // Create a multi-dimensional array
    let multiDimensional = [[100,200,300],
                            [400,500,600],
                            [700,800,900,1000]]

    console.log(multiDimensional)
