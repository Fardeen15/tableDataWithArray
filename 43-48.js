// no:3
var nameArray =["shagsdh","ghasus","basdhgvdfh"];
var classArray =["5","6","7"];
var ageArray =["12","13","14"];
// console.log(array);
function delRow(index) {
    console.log(index)
    // var lenght = document.getElementById("tabel").length;
    // var del = document.getElementById("tabel").delRow(lenght)
    // return del;
    // var tabel = document.getElementById("tabel");
    // if (tabel.rows.length > 0) {
    //     tabel.deleteRow(0);
    // }
    nameArray.splice(index,1);
    ageArray.splice(index,1);
    classArray.splice(index,1);
    console.log(nameArray)
    intialData();

}
function intialData() {
    // var name = nameArray[0];
    // var age = ageArray[0];
    // var stage = classArray[0];
    document.getElementById("tabel").innerHTML = `
    <tr>
    <th>s.no</th>
    <th>name</th>
    <th>age</th>
    <th>class</th>
    </tr>
`
for(var i = 0; i < nameArray.length; i++ ){
    console.log(i)
    document.getElementById("tabel").innerHTML += `<tr>
    <td>${i + 1} </td>
    <td>${nameArray[i]}</td>
    <td>${ageArray[i]}</td>
    <td>${classArray[i]}</td>
    <td><input type="button" value="delete" onclick="delRow(${i})"></td>
</tr>
    `
}
// console.log(name)1
// console.log(age)
// console.log(stage)
// document.getElementById("tabel").innerHTML += `<tr>
//             <td>${name}</td>
//              <td>${age}</td>
//             <td>${stage}</td>
//     <td><input type="button" value="delete" onclick="delRow()"></td>

//             </tr>`
}
intialData();
function addData(){
     var name = document.getElementById("name").value;
     var age = document.getElementById("age").value;
     var stage = document.getElementById("class").value;
     nameArray.push(name);
     ageArray.push(age);
     classArray.push(stage);
     document.getElementById("tabel").innerHTML = ""
     intialData();
// console.log(nameArray)
    }
// <td><input type="button" value="delete" onClick = ${delRow()} ></td>



// function formClear() {
//     $("#name").value("");
//     $("#age").value("");
//     $("#stage").value("");
// }