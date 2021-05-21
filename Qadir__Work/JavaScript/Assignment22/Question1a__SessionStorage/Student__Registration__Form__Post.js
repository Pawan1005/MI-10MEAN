function getData() {
    let rollNumber  = document.getElementById('rollNo').value;
    let stdname = document.getElementById('stdName').value;
    let maths = document.getElementById('maths').value;
    let science = document.getElementById('science').value;
    let history = document.getElementById('history').value;
    let biology = document.getElementById('biology').value;
    let physics = document.getElementById('physics').value;

    let numberPattern = /^[0-9]*$/;
    let namePattern = /^[a-z]*$/i;

    try {
        if (numberPattern.test(rollNumber) && namePattern.test(stdname) && numberPattern.test(maths) && numberPattern.test(science) && numberPattern.test(history) && numberPattern.test(physics) && numberPattern.test(biology) && (parseInt(history) <=100) && (parseInt(maths) <=100) && (parseInt(science) <=100) && (parseInt(biology) <=100) && (parseInt(physics) <=100)) {
            sessionStorage.setItem('rollNo', rollNumber);
            sessionStorage.setItem('stdName', stdname);
            sessionStorage.setItem('maths', maths);
            sessionStorage.setItem('science', science);
            sessionStorage.setItem('physics', physics);
            sessionStorage.setItem('history', history);
            sessionStorage.setItem('biology', biology);

            alert("SuccessFully Submit");
        }
        else {
           
            alert("Please Enter proper Marks or Name");
        }
    }
    catch(error) {
        let errorMessage = error.message;
        alert(errorMessage);
    }
}
