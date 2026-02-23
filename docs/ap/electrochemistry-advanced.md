# Advanced Electrochemistry

## Explanation

Advanced electrochemistry extends redox concepts to quantitative calculations involving cell potentials, the Nernst equation, and electrolysis. These are key topics for AP Chemistry.

### Key Concepts

**Standard Cell Potential (\(E°_{\text{cell}}\))**:
- Measure of cell's ability to produce electrical energy
- \(E°_{\text{cell}} = E°_{\text{cathode}} - E°_{\text{anode}}\)
- \(E°_{\text{cell}} > 0\): Spontaneous (galvanic cell)
- \(E°_{\text{cell}} < 0\): Non-spontaneous (requires energy input)
- Standard conditions: 25°C, 1 M, 1 atm

**Relationship to Free Energy**:
\[\Delta G° = -nFE°_{\text{cell}}\]

- \(n\) = moles of electrons transferred
- \(F\) = Faraday constant = \(96,485 \text{ C/mol } e^-\) (or 96,500 C/mol)
- More positive \(E°_{\text{cell}}\) = more negative \(\Delta G°\) = more spontaneous

**Understanding the \(\Delta G°\) and \(E°\) Relationship**:

The relationship \(\Delta G° = -nFE°_{\text{cell}}\) is fundamental to electrochemistry. Here's why it matters:

1. **The negative sign**: The negative sign indicates that a positive cell potential corresponds to a negative Gibbs free energy, meaning the reaction is thermodynamically favorable (spontaneous).

2. **Quantitative connection**: This equation allows us to convert between electrochemical measurements (voltage) and thermodynamic quantities (free energy). Since \(F = 96,485 \text{ C/mol}\) and voltage is joules per coulomb (1 V = 1 J/C), multiplying gives energy in joules.

3. **Effect of electron transfer**: The more electrons transferred (\(n\)), the more energy is available from the same cell potential. For example, a 2-electron process at 1.0 V releases twice as much energy as a 1-electron process at 1.0 V.

4. **Spontaneity criterion**:
   - If \(E°_{\text{cell}} > 0\), then \(\Delta G° < 0\) (spontaneous)
   - If \(E°_{\text{cell}} < 0\), then \(\Delta G° > 0\) (non-spontaneous, requires energy input)
   - If \(E°_{\text{cell}} = 0\), then \(\Delta G° = 0\) (system at equilibrium)

**Relationship to Equilibrium**:
\[E°_{\text{cell}} = \frac{RT}{nF}\ln K = \frac{0.0592}{n}\log K \quad \text{(at 25°C)}\]

Or: \(\log K = \frac{nE°}{0.0592}\) at 25°C

This relationship connects electrochemistry to equilibrium:
- Large positive \(E°\) means very large \(K\) (products strongly favored)
- Negative \(E°\) means \(K < 1\) (reactants favored)
- For every 0.0592 V increase in \(E°\) (at n=1), \(K\) increases by a factor of 10

**Nernst Equation**:

The Nernst equation calculates cell potential under non-standard conditions:
\[E_{\text{cell}} = E°_{\text{cell}} - \frac{RT}{nF}\ln Q\]

At 25°C:
\[E_{\text{cell}} = E°_{\text{cell}} - \frac{0.0592}{n}\log Q\]

**Understanding the Nernst Equation**:

1. **What it tells us**: The actual cell potential depends on both the standard potential (\(E°\)) and the current concentrations/pressures (via \(Q\)).

2. **The correction term**: \(\frac{0.0592}{n}\log Q\) represents how far the system is from standard conditions:
   - If \(Q < 1\): Reactants dominate, correction is negative (adds to \(E°\)), cell potential increases
   - If \(Q > 1\): Products dominate, correction is positive (subtracts from \(E°\)), cell potential decreases
   - If \(Q = 1\): Standard conditions, \(E = E°\)

3. **As reaction proceeds**:
   - Products form, reactants consumed
   - \(Q\) increases continuously
   - \(E_{\text{cell}}\) decreases continuously
   - At equilibrium: \(Q = K\) and \(E_{\text{cell}} = 0\) (no driving force)

4. **Practical applications**:
   - pH meters (measure \(E\), calculate \([H^+]\))
   - Concentration cells (same half-reactions, different concentrations)
   - Predicting battery performance as it discharges

**Constructing the Reaction Quotient \(Q\)**:

For a general cell reaction: \(aA + bB \rightarrow cC + dD\)

\[Q = \frac{[C]^c[D]^d}{[A]^a[B]^b}\]

Important notes:
- Include aqueous ions and gases (with partial pressures)
- Omit pure solids and pure liquids (activity = 1)
- For metals in half-cells, they don't appear in \(Q\)
- Use molarity for solutions, atmospheres for gases

**Electrolysis Calculations**:

Electrolysis uses electrical energy to drive non-spontaneous reactions. The key is Faraday's Law.

**Understanding Faraday's Law**:
The amount of substance produced or consumed at an electrode is directly proportional to the quantity of electricity (charge) passed through the circuit.

1. **Charge calculation**:
   \[Q = I \times t\]
   - \(Q\) = charge in coulombs (C)
   - \(I\) = current in amperes (A)
   - \(t\) = time in seconds (s)

2. **Moles of electrons**:
   \[\text{mol } e^- = \frac{Q}{F} = \frac{It}{F}\]
   - \(F = 96,485 \text{ C/mol}\) (often approximated as 96,500 C/mol)

3. **Stoichiometry**: Use the balanced half-reaction to convert moles of electrons to moles of substance:
   - \(Cu^{2+} + 2e^- \rightarrow Cu\): 2 moles \(e^-\) per 1 mole Cu
   - \(Al^{3+} + 3e^- \rightarrow Al\): 3 moles \(e^-\) per 1 mole Al
   - \(2Cl^- \rightarrow Cl_2 + 2e^-\): 2 moles \(e^-\) per 1 mole \(Cl_2\)

4. **Mass or volume**: Convert moles to grams (using molar mass) or liters (using 22.4 L/mol at STP for gases)

**Common Electrolysis Reactions**:
- **Water**: \(2H_2O \rightarrow 2H_2 + O_2\) (requires 4 \(e^-\) per \(O_2\), 2 \(e^-\) per \(H_2\))
- **Molten NaCl**: Cathode: \(Na^+ + e^- \rightarrow Na\); Anode: \(2Cl^- \rightarrow Cl_2 + 2e^-\)
- **Aqueous NaCl**: Cathode: \(2H_2O + 2e^- \rightarrow H_2 + 2OH^-\); Anode: \(2Cl^- \rightarrow Cl_2 + 2e^-\)

**Electroplating**: Depositing metal using electrolysis
- Metal cation reduced at cathode (object being plated)
- Metal oxidized at anode (if active anode, replenishes metal ions)
- Thickness of plating depends on current, time, and surface area

---

## Common Mistakes to Avoid

### 1. Sign Convention Errors in Cell Potential Calculations

**The Mistake**: Confusing which electrode is the cathode vs. anode, or incorrectly applying the formula \(E°_{\text{cell}} = E°_{\text{cathode}} - E°_{\text{anode}}\).

**Why it happens**: Students sometimes subtract in the wrong order or forget that the anode is where oxidation occurs (loses electrons).

**Example of error**:
Given \(E°_{Cu^{2+}/Cu} = +0.34 \text{ V}\) and \(E°_{Zn^{2+}/Zn} = -0.76 \text{ V}\), incorrectly calculating:
\(E°_{\text{cell}} = -0.76 - 0.34 = -1.10 \text{ V}\)

**Correct approach**:
- Identify reduction (cathode): \(Cu^{2+} + 2e^- \rightarrow Cu\) (more positive \(E°\))
- Identify oxidation (anode): \(Zn \rightarrow Zn^{2+} + 2e^-\)
- Calculate: \(E°_{\text{cell}} = E°_{\text{cathode}} - E°_{\text{anode}} = 0.34 - (-0.76) = +1.10 \text{ V}\)

**Key reminder**: The more positive (or less negative) reduction potential becomes the cathode. The anode value is subtracted as-is from the table of reduction potentials.

---

### 2. Incorrect Electron Stoichiometry in Faraday's Law

**The Mistake**: Using the wrong number of electrons (\(n\)) in electrolysis calculations, especially for polyatomic ions or molecular products.

**Why it happens**: Students don't carefully balance the half-reaction or forget to account for stoichiometric coefficients.

**Example of error**:
For the production of \(Cl_2\) gas from \(Cl^-\), using \(n = 1\) instead of \(n = 2\):
\(2Cl^- \rightarrow Cl_2 + 2e^-\) requires 2 electrons per molecule of \(Cl_2\)

**Correct approach**:
1. Write the balanced half-reaction
2. Identify electrons per formula unit of the substance of interest
3. For \(O_2\) from water: \(2H_2O \rightarrow O_2 + 4H^+ + 4e^-\) means 4 electrons per \(O_2\)
4. For \(Al\) from \(Al^{3+}\): \(Al^{3+} + 3e^- \rightarrow Al\) means 3 electrons per Al atom

**Key reminder**: Always write out the half-reaction and count the electrons explicitly. Don't assume the charge equals the number of electrons for molecular species.

---

### 3. Confusing \(Q\) and \(K\) in Nernst Equation Applications

**The Mistake**: Using the equilibrium constant \(K\) instead of the reaction quotient \(Q\) in the Nernst equation, or vice versa.

**Why it happens**: Both \(Q\) and \(K\) have the same mathematical form, but they represent different conditions.

**Example of error**:
At equilibrium, trying to calculate \(E_{\text{cell}}\) using \(Q\) values from current concentrations rather than recognizing that \(E_{\text{cell}} = 0\) at equilibrium.

**Correct approach**:
- **Use \(Q\)** with the Nernst equation to find \(E_{\text{cell}}\) at non-standard conditions:
  \[E_{\text{cell}} = E° - \frac{0.0592}{n}\log Q\]

- **Use \(K\)** when relating standard potential to equilibrium:
  \[E° = \frac{0.0592}{n}\log K\]

- **At equilibrium**: \(Q = K\) and \(E_{\text{cell}} = 0\) (not \(E°\))

**Key reminder**: \(Q\) is calculated from current concentrations (any point in time), while \(K\) is calculated from equilibrium concentrations. Use \(Q\) in Nernst unless you're asked about equilibrium conditions.

---

### 4. Forgetting to Convert Time to Seconds in Electrolysis

**The Mistake**: Using time in minutes or hours directly in the formula \(Q = It\) without converting to seconds.

**Why it happens**: The problem gives time in convenient units (minutes or hours), but coulombs require amperes times seconds.

**Example of error**:
Current = 5.0 A for 30 minutes
Incorrectly: \(Q = (5.0)(30) = 150 \text{ C}\)

**Correct approach**:
1. Convert time: 30 minutes = 30 × 60 = 1800 seconds
2. Calculate charge: \(Q = (5.0)(1800) = 9000 \text{ C}\)
3. Then use \(\text{mol } e^- = \frac{Q}{F}\)

**Key reminder**: Always convert time to seconds before using \(Q = It\). Set up a conversion factor: 1 min = 60 s, 1 hr = 3600 s.

---

### 5. Incorrect Sign or Missing Negative Sign in \(\Delta G° = -nFE°\)

**The Mistake**: Forgetting the negative sign in the relationship between \(\Delta G°\) and \(E°_{\text{cell}}\), leading to wrong conclusions about spontaneity.

**Why it happens**: Students memorize the formula incompletely or don't understand the inverse relationship.

**Example of error**:
Given \(E°_{\text{cell}} = +1.0 \text{ V}\), \(n = 2\), incorrectly calculating:
\(\Delta G° = (2)(96,500)(1.0) = +193,000 \text{ J}\) (wrong sign)

**Correct approach**:
1. Use the complete formula with the negative sign: \(\Delta G° = -nFE°\)
2. \(\Delta G° = -(2)(96,500)(1.0) = -193,000 \text{ J} = -193 \text{ kJ}\)
3. Negative \(\Delta G°\) confirms the reaction is spontaneous

**Key reminder**: The negative sign is crucial. Positive \(E°\) means spontaneous reaction, which requires negative \(\Delta G°\). Always include the negative sign in your calculation.

---

---

## Worked Examples

### Example 1: Calculating \(\Delta G°\) from \(E°_{\text{cell}}\)

**Problem**: A galvanic cell has \(E°_{\text{cell}} = +1.10 \text{ V}\) and involves the transfer of 2 moles of electrons. Calculate \(\Delta G°\).

**Solution**:
1. Use formula: \(\Delta G° = -nFE°_{\text{cell}}\)
2. \(n = 2\) moles \(e^-\), \(F = 96,500 \text{ C/mol}\), \(E° = 1.10 \text{ V}\)
3. \(\Delta G° = -(2)(96,500)(1.10)\)
4. \(\Delta G° = -212,300 \text{ J} = -212 \text{ kJ}\)
5. Negative \(\Delta G°\) confirms spontaneous reaction

**Answer**: \(\Delta G° = -212 \text{ kJ}\)

---

### Example 2: Using the Nernst Equation

**Problem**: For the cell \(Zn|Zn^{2+}(0.10 \text{ M})||Cu^{2+}(0.50 \text{ M})|Cu\) at 25°C, calculate \(E_{\text{cell}}\) if \(E°_{\text{cell}} = +1.10 \text{ V}\).

**Solution**:
1. Overall reaction: \(Zn + Cu^{2+} \rightarrow Zn^{2+} + Cu\)
2. Number of electrons: \(n = 2\)
3. Reaction quotient: \(Q = \frac{[Zn^{2+}]}{[Cu^{2+}]} = \frac{0.10}{0.50} = 0.20\)
4. Nernst equation: \(E_{\text{cell}} = E°_{\text{cell}} - \frac{0.0592}{n}\log Q\)
5. \(E_{\text{cell}} = 1.10 - \frac{0.0592}{2}\log(0.20)\)
6. \(\log(0.20) = -0.699\)
7. \(E_{\text{cell}} = 1.10 - \frac{0.0592}{2}(-0.699) = 1.10 - (-0.0207) = 1.10 + 0.021 = 1.12 \text{ V}\)

**Answer**: \(E_{\text{cell}} = 1.12 \text{ V}\)

---

### Example 3: Electrolysis Calculation

**Problem**: How many grams of copper are deposited when a current of 2.50 A passes through a \(CuSO_4\) solution for 1.00 hour?

**Solution**:
1. Cathode reaction: \(Cu^{2+} + 2e^- \rightarrow Cu\) (2 electrons per Cu atom)
2. Calculate charge: \(Q = It = (2.50 \text{ A})(3600 \text{ s}) = 9000 \text{ C}\)
3. Moles of electrons: \(\text{mol } e^- = \frac{Q}{F} = \frac{9000}{96,500} = 0.0933 \text{ mol } e^-\)
4. Moles of Cu: \(\text{mol Cu} = \frac{0.0933 \text{ mol } e^-}{2} = 0.0466 \text{ mol}\)
5. Mass of Cu: \(m = n \times M = (0.0466)(63.5) = 2.96 \text{ g}\)

**Answer**: 2.96 g of copper is deposited (or 3.0 g)

---

## Practice Problems

### Challenging AP-Level Problems

1. A galvanic cell is constructed with a silver electrode in 0.10 M \(AgNO_3\) and a copper electrode in 0.50 M \(Cu(NO_3)_2\). Given \(E°_{Ag^+/Ag} = +0.80 \text{ V}\) and \(E°_{Cu^{2+}/Cu} = +0.34 \text{ V}\), calculate the cell potential at 25°C. Write the overall cell reaction.

2. For the reaction \(Fe^{2+} + Ce^{4+} \rightarrow Fe^{3+} + Ce^{3+}\), \(E°_{\text{cell}} = +0.43 \text{ V}\). Calculate \(\Delta G°\) and the equilibrium constant \(K\) at 25°C. Is this reaction product-favored?

3. A concentration cell is constructed using two zinc electrodes: one in 0.001 M \(Zn^{2+}\) and the other in 1.0 M \(Zn^{2+}\). Calculate the cell potential at 25°C. Which electrode is the anode?

4. In the electrolysis of molten \(AlCl_3\), a current of 8.50 A runs for 2.00 hours. Calculate:
   a) The charge passed in coulombs
   b) The moles of electrons transferred
   c) The mass of aluminum produced (Al = 27.0 g/mol)

5. A galvanic cell has the reaction \(Ni(s) + 2Ag^+(aq) \rightarrow Ni^{2+}(aq) + 2Ag(s)\) with \(E°_{\text{cell}} = +1.05 \text{ V}\). If \([Ag^+] = 0.0010 \text{ M}\) and \([Ni^{2+}] = 2.0 \text{ M}\), calculate \(E_{\text{cell}}\) at 25°C.

6. The electrolysis of water produces hydrogen and oxygen gases. If 3.50 L of \(H_2\) gas is collected at STP, calculate:
   a) The moles of \(H_2\) produced
   b) The moles of electrons required
   c) The time required if the current is 4.25 A

7. For the cell reaction \(Zn(s) + Cu^{2+}(aq) \rightarrow Zn^{2+}(aq) + Cu(s)\), \(E°_{\text{cell}} = +1.10 \text{ V}\). A cell is constructed with \([Cu^{2+}] = 1.0 \text{ M}\). What concentration of \(Zn^{2+}\) would be needed for the cell potential to be exactly +1.00 V at 25°C?

8. During the electrolysis of aqueous \(CuSO_4\) using copper electrodes, the anode (copper metal) dissolves while copper plates onto the cathode. If 5.08 g of copper is plated onto the cathode, calculate:
   a) The moles of copper deposited
   b) The moles of electrons transferred
   c) The charge passed through the cell
   d) The mass of copper dissolved from the anode

9. A student constructs a cell with \(E°_{\text{cell}} = +0.90 \text{ V}\) and measures an actual cell potential of +0.86 V at 25°C. The cell reaction is \(A + B^{2+} \rightarrow A^{2+} + B\) with \([B^{2+}] = 0.50 \text{ M}\). Calculate the concentration of \(A^{2+}\) in the cell.

10. In an industrial electrolysis process, chlorine gas is produced at the anode according to \(2Cl^- \rightarrow Cl_2 + 2e^-\). If 250 g of \(Cl_2\) must be produced, calculate:
    a) The moles of \(Cl_2\) needed
    b) The moles of electrons required
    c) The total charge needed in coulombs
    d) The time required using a current of 15.0 A
    e) The volume of \(Cl_2\) produced at STP

---

## Answer Key with Full Explanations

??? note "Click to reveal answers"

    ### Problem 1: Galvanic Cell with Ag and Cu

    **Given**: \(E°_{Ag^+/Ag} = +0.80 \text{ V}\), \(E°_{Cu^{2+}/Cu} = +0.34 \text{ V}\), \([Ag^+] = 0.10 \text{ M}\), \([Cu^{2+}] = 0.50 \text{ M}\)

    **Solution**:

    Step 1: Identify cathode and anode. Silver has the more positive reduction potential, so it's reduced (cathode).
    - Cathode: \(2Ag^+ + 2e^- \rightarrow 2Ag\)
    - Anode: \(Cu \rightarrow Cu^{2+} + 2e^-\)
    - Overall: \(Cu + 2Ag^+ \rightarrow Cu^{2+} + 2Ag\)

    Step 2: Calculate \(E°_{\text{cell}}\).
    \[E°_{\text{cell}} = E°_{\text{cathode}} - E°_{\text{anode}} = 0.80 - 0.34 = +0.46 \text{ V}\]

    Step 3: Apply Nernst equation. For this reaction, \(n = 2\).
    \[Q = \frac{[Cu^{2+}]}{[Ag^+]^2} = \frac{0.50}{(0.10)^2} = \frac{0.50}{0.01} = 50\]

    Step 4: Calculate \(E_{\text{cell}}\).
    \[E_{\text{cell}} = E° - \frac{0.0592}{n}\log Q = 0.46 - \frac{0.0592}{2}\log(50)\]
    \[\log(50) = 1.699\]
    \[E_{\text{cell}} = 0.46 - (0.0296)(1.699) = 0.46 - 0.050 = 0.41 \text{ V}\]

    **Answer**: \(E_{\text{cell}} = 0.41 \text{ V}\); Overall reaction: \(Cu + 2Ag^+ \rightarrow Cu^{2+} + 2Ag\)

    ---

    ### Problem 2: Free Energy and Equilibrium Constant

    **Given**: \(Fe^{2+} + Ce^{4+} \rightarrow Fe^{3+} + Ce^{3+}\), \(E°_{\text{cell}} = +0.43 \text{ V}\)

    **Solution**:

    Step 1: Calculate \(\Delta G°\). This is a 1-electron transfer (\(n = 1\)).
    \[\Delta G° = -nFE° = -(1)(96,500)(0.43) = -41,495 \text{ J} = -41.5 \text{ kJ}\]

    Step 2: Calculate \(K\) using the relationship between \(E°\) and \(K\).
    \[\log K = \frac{nE°}{0.0592} = \frac{(1)(0.43)}{0.0592} = 7.26\]
    \[K = 10^{7.26} = 1.8 \times 10^7\]

    Step 3: Interpret results. Since \(\Delta G° < 0\) and \(K >> 1\), the reaction is strongly product-favored.

    **Answer**: \(\Delta G° = -41.5 \text{ kJ}\); \(K = 1.8 \times 10^7\); Yes, the reaction is product-favored.

    ---

    ### Problem 3: Concentration Cell

    **Given**: Two Zn electrodes, one in 0.001 M \(Zn^{2+}\), the other in 1.0 M \(Zn^{2+}\)

    **Solution**:

    Step 1: Understand concentration cells. Both electrodes are identical, so \(E° = 0\). The cell potential comes entirely from the concentration difference.

    Step 2: Determine which electrode is which. Oxidation occurs at the lower concentration (anode), reduction at higher concentration (cathode).
    - Anode (oxidation): \(Zn \rightarrow Zn^{2+} + 2e^-\) in 0.001 M solution
    - Cathode (reduction): \(Zn^{2+} + 2e^- \rightarrow Zn\) in 1.0 M solution

    Step 3: Calculate \(Q\) for the overall reaction: \(Zn^{2+}(1.0 \text{ M}) \rightarrow Zn^{2+}(0.001 \text{ M})\)
    \[Q = \frac{[\text{product}]}{[\text{reactant}]} = \frac{0.001}{1.0} = 0.001\]

    Step 4: Apply Nernst equation with \(E° = 0\) and \(n = 2\).
    \[E_{\text{cell}} = 0 - \frac{0.0592}{2}\log(0.001) = -(0.0296)(-3) = 0.089 \text{ V}\]

    **Answer**: \(E_{\text{cell}} = 0.089 \text{ V}\) (or 0.09 V); The electrode in 0.001 M \(Zn^{2+}\) is the anode.

    ---

    ### Problem 4: Electrolysis of Molten AlCl₃

    **Given**: Current = 8.50 A, time = 2.00 hours

    **Solution**:

    Step 1a: Calculate charge. Convert time to seconds: 2.00 hr × 3600 s/hr = 7200 s
    \[Q = It = (8.50)(7200) = 61,200 \text{ C}\]

    Step 1b: Calculate moles of electrons.
    \[\text{mol } e^- = \frac{Q}{F} = \frac{61,200}{96,500} = 0.634 \text{ mol } e^-\]

    Step 1c: Calculate mass of Al. The reduction half-reaction is: \(Al^{3+} + 3e^- \rightarrow Al\)
    \[\text{mol Al} = \frac{0.634 \text{ mol } e^-}{3} = 0.211 \text{ mol Al}\]
    \[\text{mass} = (0.211)(27.0) = 5.70 \text{ g Al}\]

    **Answer**:
    a) \(Q = 61,200 \text{ C}\)
    b) \(0.634 \text{ mol } e^-\)
    c) \(5.70 \text{ g Al}\)

    ---

    ### Problem 5: Nernst Equation with Dilute Ion

    **Given**: \(Ni(s) + 2Ag^+(aq) \rightarrow Ni^{2+}(aq) + 2Ag(s)\), \(E°_{\text{cell}} = +1.05 \text{ V}\), \([Ag^+] = 0.0010 \text{ M}\), \([Ni^{2+}] = 2.0 \text{ M}\)

    **Solution**:

    Step 1: Identify \(n\). Two electrons are transferred (\(n = 2\)).

    Step 2: Write \(Q\) expression. Solids are omitted.
    \[Q = \frac{[Ni^{2+}]}{[Ag^+]^2} = \frac{2.0}{(0.0010)^2} = \frac{2.0}{0.0000010} = 2.0 \times 10^6\]

    Step 3: Apply Nernst equation.
    \[E_{\text{cell}} = E° - \frac{0.0592}{n}\log Q = 1.05 - \frac{0.0592}{2}\log(2.0 \times 10^6)\]
    \[\log(2.0 \times 10^6) = \log(2.0) + \log(10^6) = 0.301 + 6 = 6.301\]
    \[E_{\text{cell}} = 1.05 - (0.0296)(6.301) = 1.05 - 0.187 = 0.86 \text{ V}\]

    **Answer**: \(E_{\text{cell}} = 0.86 \text{ V}\)

    Note: The very low \([Ag^+]\) significantly reduces the cell potential because the reaction has already proceeded far toward products.

    ---

    ### Problem 6: Electrolysis of Water

    **Given**: 3.50 L of \(H_2\) at STP, current = 4.25 A

    **Solution**:

    Step 1a: Calculate moles of \(H_2\). At STP, 1 mol of gas = 22.4 L.
    \[\text{mol } H_2 = \frac{3.50}{22.4} = 0.156 \text{ mol}\]

    Step 1b: Calculate moles of electrons. The half-reaction is: \(2H_2O + 2e^- \rightarrow H_2 + 2OH^-\)
    This shows 2 electrons per \(H_2\) molecule.
    \[\text{mol } e^- = 2 \times 0.156 = 0.312 \text{ mol } e^-\]

    Step 1c: Calculate time. First find charge needed.
    \[Q = \text{mol } e^- \times F = (0.312)(96,500) = 30,108 \text{ C}\]
    \[t = \frac{Q}{I} = \frac{30,108}{4.25} = 7,084 \text{ s}\]
    Convert to minutes: \(7,084 \div 60 = 118 \text{ min}\) (or 1.97 hours)

    **Answer**:
    a) \(0.156 \text{ mol } H_2\)
    b) \(0.312 \text{ mol } e^-\)
    c) \(7,084 \text{ s}\) (or 118 min)

    ---

    ### Problem 7: Solving for Unknown Concentration

    **Given**: \(Zn(s) + Cu^{2+}(aq) \rightarrow Zn^{2+}(aq) + Cu(s)\), \(E°_{\text{cell}} = +1.10 \text{ V}\), \([Cu^{2+}] = 1.0 \text{ M}\), \(E_{\text{cell}} = +1.00 \text{ V}\)

    **Solution**:

    Step 1: Set up Nernst equation. \(n = 2\)
    \[E_{\text{cell}} = E° - \frac{0.0592}{n}\log Q\]
    \[1.00 = 1.10 - \frac{0.0592}{2}\log Q\]

    Step 2: Solve for \(Q\).
    \[1.00 - 1.10 = -\frac{0.0592}{2}\log Q\]
    \[-0.10 = -0.0296\log Q\]
    \[\log Q = \frac{0.10}{0.0296} = 3.38\]
    \[Q = 10^{3.38} = 2,399 \approx 2.4 \times 10^3\]

    Step 3: Relate \(Q\) to concentrations.
    \[Q = \frac{[Zn^{2+}]}{[Cu^{2+}]} = \frac{[Zn^{2+}]}{1.0} = [Zn^{2+}]\]
    \[[Zn^{2+}] = 2.4 \times 10^3 \text{ M}\]

    **Answer**: \([Zn^{2+}] = 2.4 \times 10^3 \text{ M}\) (or 2400 M)

    Note: This extremely high concentration is not physically realistic, demonstrating that a reduction of only 0.10 V from standard conditions requires a very large shift in \(Q\).

    ---

    ### Problem 8: Electroplating with Copper Electrodes

    **Given**: 5.08 g of Cu plated onto cathode, Cu = 63.5 g/mol

    **Solution**:

    Step 1a: Calculate moles of Cu deposited.
    \[\text{mol Cu} = \frac{5.08}{63.5} = 0.0800 \text{ mol}\]

    Step 1b: Calculate moles of electrons. Cathode reaction: \(Cu^{2+} + 2e^- \rightarrow Cu\)
    \[\text{mol } e^- = 2 \times 0.0800 = 0.160 \text{ mol } e^-\]

    Step 1c: Calculate charge passed.
    \[Q = \text{mol } e^- \times F = (0.160)(96,500) = 15,440 \text{ C}\]

    Step 1d: Calculate mass dissolved from anode. Anode reaction: \(Cu \rightarrow Cu^{2+} + 2e^-\)
    The same number of electrons means the same number of moles of Cu dissolves.
    \[\text{mass} = (0.0800)(63.5) = 5.08 \text{ g Cu}\]

    **Answer**:
    a) \(0.0800 \text{ mol Cu}\)
    b) \(0.160 \text{ mol } e^-\)
    c) \(15,440 \text{ C}\) (or 15,400 C)
    d) \(5.08 \text{ g Cu}\) (same as deposited)

    ---

    ### Problem 9: Calculating Unknown Concentration from Cell Potential

    **Given**: \(A + B^{2+} \rightarrow A^{2+} + B\), \(E° = +0.90 \text{ V}\), \(E_{\text{cell}} = +0.86 \text{ V}\), \([B^{2+}] = 0.50 \text{ M}\)

    **Solution**:

    Step 1: Set up Nernst equation. \(n = 2\)
    \[0.86 = 0.90 - \frac{0.0592}{2}\log Q\]

    Step 2: Solve for \(Q\).
    \[0.86 - 0.90 = -\frac{0.0592}{2}\log Q\]
    \[-0.04 = -0.0296\log Q\]
    \[\log Q = \frac{0.04}{0.0296} = 1.35\]
    \[Q = 10^{1.35} = 22.4\]

    Step 3: Relate \(Q\) to concentrations.
    \[Q = \frac{[A^{2+}]}{[B^{2+}]} = \frac{[A^{2+}]}{0.50}\]
    \[[A^{2+}] = Q \times 0.50 = 22.4 \times 0.50 = 11.2 \text{ M}\]

    **Answer**: \([A^{2+}] = 11.2 \text{ M}\) (or 11 M)

    ---

    ### Problem 10: Industrial Electrolysis of Chlorine

    **Given**: 250 g of \(Cl_2\) needed, current = 15.0 A, Cl = 35.5 g/mol

    **Solution**:

    Step 1a: Calculate moles of \(Cl_2\). Molar mass of \(Cl_2 = 2 \times 35.5 = 71.0 \text{ g/mol}\)
    \[\text{mol } Cl_2 = \frac{250}{71.0} = 3.52 \text{ mol}\]

    Step 1b: Calculate moles of electrons. Anode reaction: \(2Cl^- \rightarrow Cl_2 + 2e^-\)
    This shows 2 electrons per \(Cl_2\) molecule.
    \[\text{mol } e^- = 2 \times 3.52 = 7.04 \text{ mol } e^-\]

    Step 1c: Calculate total charge.
    \[Q = \text{mol } e^- \times F = (7.04)(96,500) = 679,360 \text{ C}\]

    Step 1d: Calculate time required.
    \[t = \frac{Q}{I} = \frac{679,360}{15.0} = 45,291 \text{ s}\]
    Convert to hours: \(45,291 \div 3600 = 12.6 \text{ hours}\)

    Step 1e: Calculate volume at STP.
    \[V = \text{mol} \times 22.4 \text{ L/mol} = (3.52)(22.4) = 78.8 \text{ L}\]

    **Answer**:
    a) \(3.52 \text{ mol } Cl_2\)
    b) \(7.04 \text{ mol } e^-\)
    c) \(679,360 \text{ C}\) (or 6.79 × 10⁵ C)
    d) \(45,291 \text{ s}\) (or 12.6 hours)
    e) \(78.8 \text{ L } Cl_2\) at STP

---

### Summary of Key Formulas for Electrolysis:

1. **Charge**: \(Q = I \times t\) (convert time to seconds)
2. **Moles of electrons**: \(\text{mol } e^- = \frac{Q}{F}\) where \(F = 96,500 \text{ C/mol}\)
3. **Stoichiometry**: Use balanced half-reaction to relate electrons to substance
4. **Mass**: \(\text{mass} = n \times M\) where \(M\) is molar mass
