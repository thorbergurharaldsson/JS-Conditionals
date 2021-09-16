// Get the current year to be able to calculate users age
const currentYear = (new Date()).getFullYear();

/*
let people = [
    {
        "name": "Valina Morston",
        "dateOfBirth": new Date('1994-4-10'),
        "country": "Ireland",
        "programKnowlage": false
    }
]
*/





//var csv is the CSV file with headers
function csvJSON(csv){

    var lines=csv.split("\n");
  
    var result = [];
  
    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step 
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
  
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }


 csvJSON("/Users/thorbergurharaldsson/Documents/Tskoli-WebDev/Module3/JS-Conditionals/People CSV.csv")

  console.log(csvJSON('People\ CSV.csv'))