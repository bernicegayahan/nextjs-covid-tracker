//we will create a logic that will convert the string API result to numberic data types.

//we want to use this function in out top.js page
export default function toNum(str) {
    //convert the string to an array to gain access to array methods
    let arr = [...str]
    //visualize= ["" ,"", ""]
    //lets filter of the commas in the string
    const elementNaWalangComma = arr.filter(element => element !== ",")
    //visualize= ["" "" ""]
    //reduce the filtered array back into a single string 

    //this string can now be parsed into a number via the parseInt method
    return parseInt(elementNaWalangComma.reduce((firstElement, nextElement) => firstElement + nextElement))
}
