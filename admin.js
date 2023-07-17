// DOM VARIABLES
const gearForm = document.getElementById("gearForm")
const gearRows = document.getElementById("gearRows")

const gearController = new GearController()



const displayGear = function(){
    let gearArr = gearController.getLocalStorage()
    gearRows.innerHTML = ''
    gearArr.forEach(gear => {
        let row = document.createElement("tr")
        row.setAttribute("data-id", gear.id)
        row.innerHTML = `
        <td><img src="${gear.url}"></td>
        <td>${gear.type}</td>
        <td>${gear.category}</td>
        <td>${gear.price}</td>
        `
        gearRows.append(row)
    })

    console.log(gearArr)

}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  


// EVENT LISTENERS
gearForm.addEventListener("submit", function(event){
    event.preventDefault()
    const gearUrl = document.getElementById("gearURL").value
    const gearType = document.getElementById("gearType").value
    const gearPrice = document.getElementById("gearPrice").value
    const gearCategory = document.getElementById("gearCategory").value

    gearController.addGear(gearUrl, gearCategory, gearPrice, gearType)
    gearController.setLocalStorage()
    
    displayGear()


    gearForm.reset()
})

displayGear()