const selectElFromDOM = (el) =>{
   let element =  document.querySelector(el)
   return element
}

export const tableBody = selectElFromDOM('tbody')
