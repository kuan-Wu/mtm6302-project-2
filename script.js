



let selectedRow = null

// function exceuted when form is submitted
function onFormSubmit() {

    if (validate()) {
      var apiKey = "api_key=MLABtboNIAZvo0MAYiOuUB5vN37oC7Qlk2NabeNm";
      var apiUrl = "https://api.nasa.gov/planetary/apod?" + apiKey;
      var apiDateUrl = "https://api.nasa.gov/planetary/apod?";
      $.ajax({
        url: apiUrl,
        success: function(response){

        },
        error: function(r){

        }
      });
      const date = $("input").val();
      let formData = readFormData();
      $.get(apiDateUrl + "date="+formData.date+ "&"+ apiKey, function(response){
        let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
        // create a new row and insert data continuosly over the lenght of table
        let newRow = table.insertRow(table.length); // table.length for the subsquent data to be submitted
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = response.title; //cell 1 of row 1
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = response.date; //cell 2 of row 1
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = response.explanation; //cell 3 of row 1
        cell4 = newRow.insertCell(3);
        cell4.className = "formfield";
        cell4.innerHTML = "<img src="+response.hdurl+" id='myImg' height='200px' width='200px'>";
     // rest of the code
        //cell4.innerHTML = $("<img src="+response.hdurl+" height='200px' width='200px'>").insertAfter('.formfield');   //cell 4 of row 1
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
        resetForm();

      })
    }
}

// function to read recieve data submitted by user
function readFormData() {
    let formData = {};
    formData.date = document.getElementById("seldate").value;
    return formData;
}



function resetForm() {
    document.getElementById("seldate").value = "";
    selectedRow = null;
}


function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("seldate").value == "") {
        isValid = false;
        document.getElementById("date").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("date").classList.contains("hide"))
            document.getElementById("date").classList.add("hide");
    }
    return isValid;
}

localStorage.setItem('items', JSON.stringify(newRow));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

localStorage.setItem('items', )
