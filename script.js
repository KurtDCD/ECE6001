// Scroll to Calculator Section
function scrollToCalculator() {
  document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
}

// Calculate Energy Function
function calculateEnergy() {
  // Constants
  const powerOutput = 15; // in milliwatts (mW)
  
  // Get User Input
  const activity = document.getElementById('activity').value;
  let hours = parseInt(document.getElementById('hours').value) || 0;
  let minutes = parseInt(document.getElementById('minutes').value) || 0;

  // Convert time to seconds
  let totalSeconds = (hours * 3600) + (minutes * 60);

  if (totalSeconds === 0) {
    alert('Please enter a valid duration.');
    return;
  }

  // Energy Calculation
  let energyJoules = (powerOutput / 1000) * totalSeconds; // Convert mW to W
  energyJoules = Math.round(energyJoules * 100) / 100; // Round to 2 decimals

  // Device Charging Comparison
  const earbudsEnergy = 666; // Joules required to fully charge earbuds
  const smartwatchEnergy = 2664; // Joules required to fully charge smartwatch

  let earbudsCharge = Math.min((energyJoules / earbudsEnergy) * 100, 100);
  earbudsCharge = Math.round(earbudsCharge * 100) / 100; // Round to 2 decimals

  let smartwatchCharge = Math.min((energyJoules / smartwatchEnergy) * 100, 100);
  smartwatchCharge = Math.round(smartwatchCharge * 100) / 100;

  // Display Results
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p>You can generate approximately <strong>${energyJoules} Joules</strong> of energy from your daily activities!</p>
    <p>That's enough to charge your <strong>wireless earbuds</strong> by <strong>${earbudsCharge}%</strong> or your <strong>smartwatch</strong> by <strong>${smartwatchCharge}%</strong>!</p>
  `;
}
