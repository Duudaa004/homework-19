// work 1

const users = [
    {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    
    },
    {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    
    },
    {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    
    },
    {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    
    },
    {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    
    },
    {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    
    }
    ];
    

    const tableDiv = document.createElement("div")
    tableDiv.setAttribute("id", "tableDiv")
    document.body.appendChild(tableDiv)


    const table = document.createElement("table")
    tableDiv.appendChild(table)
    table.setAttribute("id", "infoTable")

    const headerRow = document.createElement("tr")
    table.appendChild(headerRow)

    const headers = ["ID", "Email", "First Name", "Last Name", "Remove"]

    headers.forEach(headerContent => {
        const header = document.createElement("th")
        const textNode = document.createTextNode(headerContent)
        header.appendChild(textNode)
        headerRow.appendChild(header)
    })


    users.forEach(user => {
        const row = document.createElement("tr")
        Object.values(user).forEach(text => {
            const cell = document.createElement("td")
            const textNode = document.createTextNode(text)
            cell.appendChild(textNode)
            row.appendChild(cell)
        })
        const removeUser = document.createElement("td")
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "delete"
        deleteButton.addEventListener("click", () => {
            table.removeChild(row)
        })
        removeUser.appendChild(deleteButton)
        row.appendChild(removeUser)
        table.appendChild(row)
    })




    const openModal = document.createElement("button")
    const modalDiv = document.getElementById("modal_div")
    const modalAdd = document.getElementById("modal_add")
    const modalClose = document.getElementById("modal_close")

    openModal.textContent = "add"
    openModal.setAttribute("id", "open_modal")
    document.body.appendChild(openModal)

    openModal.addEventListener("click", () => {
        modalDiv.classList.add("show")
    })
    modalClose.addEventListener("click", () => {
        modalDiv.classList.remove("show")
    })

    const modalId = document.getElementById("modal_id")
    const modalEmail = document.getElementById("modal_email")
    const modalFirstName = document.getElementById("modal_first_name")
    const modalLastName = document.getElementById("modal_last_name")
    const result = document.createElement("span")
    const modalForm = document.getElementById("modal_form")


    modalForm.appendChild(result)
    modalForm.addEventListener("submit", (e) => {
        e.preventDefault
    })

    try {
        if(modalId.value.length === 0) 
            {
                throw new Error("ID field shouldn't be empty")
              }
        if(modalFirstName.value === "")
            {
                throw new Error("First Name field shouldn't be empty")
              } 
        if(modalLastName.value === "")
            {
                throw new Error ("Last Name field shouldn't be empty")

            }
          
    } catch (e) {
        result.textContent = e.message
        result.style.color = "red"
    }

    // const data = {
    //     id: modalId.value,
    //     email: modalEmail.value,
    //     first_name: modalFirstName.value,
    //     last_name: modalLastName.value,
        
    // }

    // // // modalAdd.addEventListener("click", () =>
    // // // {
    // // //     users.push(data)
    // // // })
    // const callFunction =  () => {
    //     users.push("data")
    // }
    // console.log(data)


// work 2


const textAmount = (word) => {
    return new Promise((resolve, reject) => {
        if (word.length >10 ) {
            setTimeout(() => {
                resolve(word)
            },5000)
        }else {
            setTimeout(() => {
                reject("This is async function")
            }, 5000);
        }
    })
}

textAmount("web-developer").then((data) => {
    console.log(data)
}).catch((e) => {
    console.log(e)
})
