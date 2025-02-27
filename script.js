function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (dob==="") {
        document.getElementById("result").innerText = "Please select your birth date‼";
        return;
    }
    let dobDate = new Date(dob);
    let todayDate = new Date();
    let ageYears = todayDate.getFullYear() - dobDate.getFullYear();
    let ageMonths = todayDate.getMonth() - dobDate.getMonth();
    let ageDays = todayDate.getDate() - dobDate.getDate();
    
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    
    document.getElementById("result").innerText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old🎉`;
    document.getElementById("dob").value = "";
    
 
}