function calculateEPF() {
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const employeeContributionRate = parseFloat(document.getElementById("employeeContributionRate").value);
    const employerContributionRate = parseFloat(document.getElementById("employerContributionRate").value);
    
    if (isNaN(basicSalary) || isNaN(employeeContributionRate) || isNaN(employerContributionRate)) {
        document.getElementById("result-box").textContent = "Please fill all fields correctly!";
        return;
    }
    const employeeContribution = (basicSalary * employeeContributionRate) / 100;
    const employerContribution = (basicSalary * employerContributionRate) / 100;
    const totalContribution = employeeContribution + employerContribution;
    document.getElementById("result-box").innerHTML = `<p>Result:</p><br>Employee Contribution: &#8377;${employeeContribution.toFixed(2)}<br>
    Employer Contribution: &#8377;${employerContribution.toFixed(2)}<br>
    Total EPF: &#8377;${totalContribution.toFixed(2)}<br>`;
}