# Chemistry Calculators & Tools

Interactive tools to help you solve chemistry problems faster and check your work!

---

## Molar Mass Calculator

<div class="widget-container" id="molar-mass-calc">
  <h3>🧮 Calculate Molar Mass</h3>
  <p>Enter a chemical formula (e.g., H2O, Ca(OH)2, Fe2(SO4)3)</p>

  <div class="widget-input">
    <label for="formula-input">Chemical Formula:</label>
    <input type="text" id="formula-input" placeholder="H2O" />
  </div>

  <button class="widget-button" onclick="calculateMolarMass()">Calculate</button>

  <div id="molar-mass-result" class="widget-result" style="display:none;"></div>
</div>

<script>
function calculateMolarMass() {
  const formula = document.getElementById('formula-input').value.trim();
  const resultDiv = document.getElementById('molar-mass-result');

  if (!formula) {
    resultDiv.innerHTML = '⚠️ Please enter a chemical formula';
    resultDiv.style.display = 'block';
    return;
  }

  const atomicMasses = {
    'H': 1.008, 'C': 12.011, 'N': 14.007, 'O': 15.999, 'F': 18.998,
    'Na': 22.990, 'Mg': 24.305, 'Al': 26.982, 'Si': 28.085, 'P': 30.974,
    'S': 32.06, 'Cl': 35.45, 'K': 39.098, 'Ca': 40.078, 'Fe': 55.845,
    'Cu': 63.546, 'Zn': 65.38, 'Br': 79.904, 'Ag': 107.868, 'I': 126.904
  };

  try {
    let mass = 0;
    let breakdown = [];

    // Simple parser for common formulas
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;

    while ((match = regex.exec(formula)) !== null) {
      const element = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;

      if (atomicMasses[element]) {
        const elementMass = atomicMasses[element] * count;
        mass += elementMass;
        breakdown.push(`${count} × ${element} = ${elementMass.toFixed(3)} g/mol`);
      } else {
        throw new Error(`Unknown element: ${element}`);
      }
    }

    resultDiv.innerHTML = `
      <strong>Molar Mass of ${formula}:</strong> <span style="font-size: 1.3em; color: var(--learning-success);">${mass.toFixed(3)} g/mol</span>
      <br><br>
      <strong>Breakdown:</strong><br>
      ${breakdown.join('<br>')}
    `;
    resultDiv.style.display = 'block';
  } catch (error) {
    resultDiv.innerHTML = `⚠️ Error: ${error.message}`;
    resultDiv.style.display = 'block';
  }
}
</script>

---

## pH Calculator

<div class="widget-container" id="ph-calc">
  <h3>🧪 pH and pOH Calculator</h3>

  <div class="widget-input">
    <label for="calc-type">Calculate from:</label>
    <select id="calc-type" onchange="updatePHInputs()">
      <option value="h">H⁺ Concentration</option>
      <option value="oh">OH⁻ Concentration</option>
      <option value="ph">pH</option>
      <option value="poh">pOH</option>
    </select>
  </div>

  <div class="widget-input">
    <label for="ph-input" id="ph-label">Enter [H⁺] concentration (M):</label>
    <input type="number" id="ph-input" placeholder="1e-7" step="any" />
  </div>

  <button class="widget-button" onclick="calculatePH()">Calculate</button>

  <div id="ph-result" class="widget-result" style="display:none;"></div>
</div>

<script>
function updatePHInputs() {
  const calcType = document.getElementById('calc-type').value;
  const label = document.getElementById('ph-label');
  const input = document.getElementById('ph-input');

  const labels = {
    'h': 'Enter [H⁺] concentration (M):',
    'oh': 'Enter [OH⁻] concentration (M):',
    'ph': 'Enter pH:',
    'poh': 'Enter pOH:'
  };

  label.textContent = labels[calcType];
  input.value = '';
}

function calculatePH() {
  const calcType = document.getElementById('calc-type').value;
  const value = parseFloat(document.getElementById('ph-input').value);
  const resultDiv = document.getElementById('ph-result');

  if (isNaN(value) || value <= 0) {
    resultDiv.innerHTML = '⚠️ Please enter a valid positive number';
    resultDiv.style.display = 'block';
    return;
  }

  let h, oh, ph, poh;

  try {
    switch(calcType) {
      case 'h':
        h = value;
        ph = -Math.log10(h);
        poh = 14 - ph;
        oh = Math.pow(10, -poh);
        break;
      case 'oh':
        oh = value;
        poh = -Math.log10(oh);
        ph = 14 - poh;
        h = Math.pow(10, -ph);
        break;
      case 'ph':
        ph = value;
        poh = 14 - ph;
        h = Math.pow(10, -ph);
        oh = Math.pow(10, -poh);
        break;
      case 'poh':
        poh = value;
        ph = 14 - poh;
        h = Math.pow(10, -ph);
        oh = Math.pow(10, -poh);
        break;
    }

    const acidicBasic = ph < 7 ? 'Acidic' : (ph > 7 ? 'Basic' : 'Neutral');
    const color = ph < 7 ? '#ef4444' : (ph > 7 ? '#3b82f6' : '#10b981');

    resultDiv.innerHTML = `
      <div style="text-align: center;">
        <strong style="font-size: 1.5em; color: ${color};">${acidicBasic}</strong>
      </div>
      <br>
      <strong>Results:</strong><br>
      <table style="width: 100%; margin-top: 1rem;">
        <tr><td><strong>pH:</strong></td><td>${ph.toFixed(2)}</td></tr>
        <tr><td><strong>pOH:</strong></td><td>${poh.toFixed(2)}</td></tr>
        <tr><td><strong>[H⁺]:</strong></td><td>${h.toExponential(2)} M</td></tr>
        <tr><td><strong>[OH⁻]:</strong></td><td>${oh.toExponential(2)} M</td></tr>
      </table>
    `;
    resultDiv.style.display = 'block';
  } catch (error) {
    resultDiv.innerHTML = `⚠️ Error in calculation`;
    resultDiv.style.display = 'block';
  }
}
</script>

---

## Stoichiometry Calculator

<div class="widget-container" id="stoich-calc">
  <h3>⚖️ Moles, Mass, and Particles Converter</h3>

  <div class="widget-input">
    <label for="stoich-from">Convert from:</label>
    <select id="stoich-from">
      <option value="moles">Moles</option>
      <option value="mass">Mass (grams)</option>
      <option value="particles">Particles/Molecules</option>
    </select>
  </div>

  <div class="widget-input">
    <label for="stoich-value">Value:</label>
    <input type="number" id="stoich-value" placeholder="Enter value" step="any" />
  </div>

  <div class="widget-input" id="molar-mass-input">
    <label for="stoich-molar">Molar Mass (g/mol):</label>
    <input type="number" id="stoich-molar" placeholder="e.g., 18.015 for H₂O" step="any" />
  </div>

  <button class="widget-button" onclick="calculateStoich()">Convert</button>

  <div id="stoich-result" class="widget-result" style="display:none;"></div>
</div>

<script>
const AVOGADRO = 6.022e23;

function calculateStoich() {
  const from = document.getElementById('stoich-from').value;
  const value = parseFloat(document.getElementById('stoich-value').value);
  const molarMass = parseFloat(document.getElementById('stoich-molar').value);
  const resultDiv = document.getElementById('stoich-result');

  if (isNaN(value) || value < 0) {
    resultDiv.innerHTML = '⚠️ Please enter a valid positive value';
    resultDiv.style.display = 'block';
    return;
  }

  if ((from === 'mass' || from === 'moles') && (isNaN(molarMass) || molarMass <= 0)) {
    resultDiv.innerHTML = '⚠️ Please enter a valid molar mass';
    resultDiv.style.display = 'block';
    return;
  }

  let moles, mass, particles;

  switch(from) {
    case 'moles':
      moles = value;
      mass = moles * molarMass;
      particles = moles * AVOGADRO;
      break;
    case 'mass':
      mass = value;
      moles = mass / molarMass;
      particles = moles * AVOGADRO;
      break;
    case 'particles':
      particles = value;
      moles = particles / AVOGADRO;
      mass = moles * molarMass;
      break;
  }

  resultDiv.innerHTML = `
    <strong>Conversions:</strong><br>
    <table style="width: 100%; margin-top: 1rem;">
      <tr><td><strong>Moles:</strong></td><td>${moles.toExponential(3)} mol</td></tr>
      ${from !== 'particles' ? `<tr><td><strong>Mass:</strong></td><td>${mass.toFixed(3)} g</td></tr>` : ''}
      <tr><td><strong>Particles:</strong></td><td>${particles.toExponential(3)}</td></tr>
    </table>
    <br>
    <em>Note: Avogadro's number = 6.022 × 10²³</em>
  `;
  resultDiv.style.display = 'block';
}
</script>

---

## Dilution Calculator

<div class="widget-container" id="dilution-calc">
  <h3>💧 M₁V₁ = M₂V₂ Calculator</h3>
  <p>Calculate dilution values using M₁V₁ = M₂V₂</p>

  <div class="widget-input">
    <label for="solve-for">Solve for:</label>
    <select id="solve-for">
      <option value="v2">V₂ (Final Volume)</option>
      <option value="m2">M₂ (Final Concentration)</option>
      <option value="v1">V₁ (Initial Volume)</option>
      <option value="m1">M₁ (Initial Concentration)</option>
    </select>
  </div>

  <div class="widget-input">
    <label for="m1-input">M₁ (Initial Molarity):</label>
    <input type="number" id="m1-input" placeholder="e.g., 6.0" step="any" />
  </div>

  <div class="widget-input">
    <label for="v1-input">V₁ (Initial Volume):</label>
    <input type="number" id="v1-input" placeholder="e.g., 50" step="any" />
  </div>

  <div class="widget-input">
    <label for="m2-input">M₂ (Final Molarity):</label>
    <input type="number" id="m2-input" placeholder="e.g., 2.0" step="any" />
  </div>

  <div class="widget-input">
    <label for="v2-input">V₂ (Final Volume):</label>
    <input type="number" id="v2-input" placeholder="e.g., ?" step="any" />
  </div>

  <button class="widget-button" onclick="calculateDilution()">Calculate</button>

  <div id="dilution-result" class="widget-result" style="display:none;"></div>
</div>

<script>
function calculateDilution() {
  const solveFor = document.getElementById('solve-for').value;
  const m1 = parseFloat(document.getElementById('m1-input').value);
  const v1 = parseFloat(document.getElementById('v1-input').value);
  const m2 = parseFloat(document.getElementById('m2-input').value);
  const v2 = parseFloat(document.getElementById('v2-input').value);
  const resultDiv = document.getElementById('dilution-result');

  let result, calculation;

  try {
    switch(solveFor) {
      case 'v2':
        if (isNaN(m1) || isNaN(v1) || isNaN(m2)) throw new Error('Missing values');
        result = (m1 * v1) / m2;
        calculation = `V₂ = (M₁ × V₁) / M₂ = (${m1} × ${v1}) / ${m2} = ${result.toFixed(2)}`;
        break;
      case 'm2':
        if (isNaN(m1) || isNaN(v1) || isNaN(v2)) throw new Error('Missing values');
        result = (m1 * v1) / v2;
        calculation = `M₂ = (M₁ × V₁) / V₂ = (${m1} × ${v1}) / ${v2} = ${result.toFixed(4)}`;
        break;
      case 'v1':
        if (isNaN(m1) || isNaN(m2) || isNaN(v2)) throw new Error('Missing values');
        result = (m2 * v2) / m1;
        calculation = `V₁ = (M₂ × V₂) / M₁ = (${m2} × ${v2}) / ${m1} = ${result.toFixed(2)}`;
        break;
      case 'm1':
        if (isNaN(v1) || isNaN(m2) || isNaN(v2)) throw new Error('Missing values');
        result = (m2 * v2) / v1;
        calculation = `M₁ = (M₂ × V₂) / V₁ = (${m2} × ${v2}) / ${v1} = ${result.toFixed(4)}`;
        break;
    }

    resultDiv.innerHTML = `
      <strong>Result:</strong><br>
      <div style="font-size: 1.3em; color: var(--learning-success); margin: 1rem 0;">
        ${calculation}
      </div>
      <em>Note: Units must be consistent (e.g., both volumes in mL)</em>
    `;
    resultDiv.style.display = 'block';
  } catch (error) {
    resultDiv.innerHTML = '⚠️ Please enter all required values';
    resultDiv.style.display = 'block';
  }
}
</script>

---

## Quick Reference: Common Molar Masses

| Compound | Formula | Molar Mass (g/mol) |
|----------|---------|-------------------|
| Water | H₂O | 18.015 |
| Carbon Dioxide | CO₂ | 44.009 |
| Sodium Chloride | NaCl | 58.443 |
| Glucose | C₆H₁₂O₆ | 180.156 |
| Sulfuric Acid | H₂SO₄ | 98.079 |
| Ammonia | NH₃ | 17.031 |
| Calcium Carbonate | CaCO₃ | 100.087 |
| Methane | CH₄ | 16.043 |

---

*These calculators are designed to help you learn and check your work. Always show your work on exams!*
