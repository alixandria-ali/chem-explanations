# Advanced Electrochemistry

## Explanation

Advanced electrochemistry extends redox concepts to quantitative calculations involving cell potentials, the Nernst equation, and electrolysis. These are key topics for AP Chemistry.

### Key Concepts

**Standard Cell Potential ($E°_{\text{cell}}$)**:
- Measure of cell's ability to produce electrical energy
- $E°_{\text{cell}} = E°_{\text{cathode}} - E°_{\text{anode}}$
- $E°_{\text{cell}} > 0$: Spontaneous (galvanic cell)
- $E°_{\text{cell}} < 0$: Non-spontaneous (requires energy input)
- Standard conditions: 25°C, 1 M, 1 atm

**Relationship to Free Energy**:
$$\Delta G° = -nFE°_{\text{cell}}$$

- $n$ = moles of electrons transferred
- $F$ = Faraday constant = $96,485 \text{ C/mol } e^-$ (or 96,500 C/mol)
- More positive $E°_{\text{cell}}$ = more negative $\Delta G°$ = more spontaneous

**Relationship to Equilibrium**:
$$E°_{\text{cell}} = \frac{RT}{nF}\ln K = \frac{0.0592}{n}\log K \quad \text{(at 25°C)}$$

Or: $\log K = \frac{nE°}{0.0592}$ at 25°C

**Nernst Equation**:
Calculates cell potential under non-standard conditions:
$$E_{\text{cell}} = E°_{\text{cell}} - \frac{RT}{nF}\ln Q$$

At 25°C:
$$E_{\text{cell}} = E°_{\text{cell}} - \frac{0.0592}{n}\log Q$$

- $Q$ = reaction quotient
- As reaction proceeds: $Q$ increases, $E_{\text{cell}}$ decreases
- At equilibrium: $Q = K$, $E_{\text{cell}} = 0$

**Electrolysis Calculations**:
- **Faraday's Law**: Amount of substance produced/consumed is proportional to charge passed
- Charge: $Q = I \times t$ (coulombs = amperes × seconds)
- Moles of electrons: $\text{mol } e^- = \frac{Q}{F} = \frac{It}{F}$
- Use stoichiometry to find moles of substance

**Common Electrolysis Reactions**:
- **Water**: $2H_2O \rightarrow 2H_2 + O_2$ (requires 4 $e^-$ per $O_2$, 2 $e^-$ per $H_2$)
- **Molten NaCl**: Cathode: $Na^+ + e^- \rightarrow Na$; Anode: $2Cl^- \rightarrow Cl_2 + 2e^-$
- **Aqueous NaCl**: Cathode: $2H_2O + 2e^- \rightarrow H_2 + 2OH^-$; Anode: $2Cl^- \rightarrow Cl_2 + 2e^-$

**Electroplating**: Depositing metal using electrolysis
- Metal cation reduced at cathode
- Metal oxidized at anode (if active anode)

---

## Worked Examples

### Example 1: Calculating $\Delta G°$ from $E°_{\text{cell}}$

**Problem**: A galvanic cell has $E°_{\text{cell}} = +1.10 \text{ V}$ and involves the transfer of 2 moles of electrons. Calculate $\Delta G°$.

**Solution**:
1. Use formula: $\Delta G° = -nFE°_{\text{cell}}$
2. $n = 2$ moles $e^-$, $F = 96,500 \text{ C/mol}$, $E° = 1.10 \text{ V}$
3. $\Delta G° = -(2)(96,500)(1.10)$
4. $\Delta G° = -212,300 \text{ J} = -212 \text{ kJ}$
5. Negative $\Delta G°$ confirms spontaneous reaction

**Answer**: $\Delta G° = -212 \text{ kJ}$

---

### Example 2: Using the Nernst Equation

**Problem**: For the cell $Zn|Zn^{2+}(0.10 \text{ M})||Cu^{2+}(0.50 \text{ M})|Cu$ at 25°C, calculate $E_{\text{cell}}$ if $E°_{\text{cell}} = +1.10 \text{ V}$.

**Solution**:
1. Overall reaction: $Zn + Cu^{2+} \rightarrow Zn^{2+} + Cu$
2. Number of electrons: $n = 2$
3. Reaction quotient: $Q = \frac{[Zn^{2+}]}{[Cu^{2+}]} = \frac{0.10}{0.50} = 0.20$
4. Nernst equation: $E_{\text{cell}} = E°_{\text{cell}} - \frac{0.0592}{n}\log Q$
5. $E_{\text{cell}} = 1.10 - \frac{0.0592}{2}\log(0.20)$
6. $\log(0.20) = -0.699$
7. $E_{\text{cell}} = 1.10 - \frac{0.0592}{2}(-0.699) = 1.10 - (-0.0207) = 1.10 + 0.021 = 1.12 \text{ V}$

**Answer**: $E_{\text{cell}} = 1.12 \text{ V}$

---

### Example 3: Electrolysis Calculation

**Problem**: How many grams of copper are deposited when a current of 2.50 A passes through a $CuSO_4$ solution for 1.00 hour?

**Solution**:
1. Cathode reaction: $Cu^{2+} + 2e^- \rightarrow Cu$ (2 electrons per Cu atom)
2. Calculate charge: $Q = It = (2.50 \text{ A})(3600 \text{ s}) = 9000 \text{ C}$
3. Moles of electrons: $\text{mol } e^- = \frac{Q}{F} = \frac{9000}{96,500} = 0.0933 \text{ mol } e^-$
4. Moles of Cu: $\text{mol Cu} = \frac{0.0933 \text{ mol } e^-}{2} = 0.0466 \text{ mol}$
5. Mass of Cu: $m = n \times M = (0.0466)(63.5) = 2.96 \text{ g}$

**Answer**: 2.96 g of copper is deposited (or 3.0 g)

---

## Practice Problems

1. If $E°_{\text{cell}} = +0.46 \text{ V}$ for a 2-electron process, calculate $\Delta G°$ in kJ.

2. A cell has $\Delta G° = -150 \text{ kJ}$ and $n = 3$. Calculate $E°_{\text{cell}}$.

3. For $E°_{\text{cell}} = +1.20 \text{ V}$ with $n = 2$, calculate $K$ at 25°C.

4. Using the Nernst equation, what happens to $E_{\text{cell}}$ as the reaction proceeds toward equilibrium?

5. For the cell $Zn|Zn^{2+}(0.01 \text{ M})||H^+(1.0 \text{ M})|H_2(1 \text{ atm})|Pt$, if $E° = +0.76 \text{ V}$, calculate $E_{\text{cell}}$ at 25°C.

6. In the electrolysis of molten $NaCl$, how many grams of Na (atomic mass = 23 g/mol) are produced by 10.0 A for 30.0 minutes?

7. How long (in seconds) must a 5.00 A current run to deposit 10.0 g of silver (Ag, atomic mass = 108 g/mol) from $Ag^+$ solution?

8. For the reaction $2Cr^{3+} + 3Zn \rightarrow 2Cr + 3Zn^{2+}$, if $E° = -0.50 \text{ V}$, is this reaction spontaneous under standard conditions?

9. At equilibrium in an electrochemical cell, what is the value of $E_{\text{cell}}$?

10. In the electrolysis of water ($2H_2O \rightarrow 2H_2 + O_2$), what volume of $O_2$ gas at STP is produced by 0.20 mol of electrons?

---

## Answer Key

??? note "Click to reveal answers"
    1. $\Delta G° = -nFE° = -(2)(96,500)(0.46) = -88,780 \text{ J} = \mathbf{-89 \text{ kJ}}$ (or -88.8 kJ)

    2. $\Delta G° = -nFE°$, so $E° = -\frac{\Delta G°}{nF} = -\frac{-150,000}{(3)(96,500)} = \frac{150,000}{289,500} = \mathbf{0.52 \text{ V}}$

    3. $\log K = \frac{nE°}{0.0592} = \frac{(2)(1.20)}{0.0592} = 40.5$. $K = 10^{40.5} = \mathbf{3 \times 10^{40}}$ (very large, products highly favored)

    4. As reaction proceeds, **$E_{\text{cell}}$ decreases**. $Q$ increases, making the correction term larger, reducing $E_{\text{cell}}$ until it reaches 0 at equilibrium.

    5. Reaction: $Zn + 2H^+ \rightarrow Zn^{2+} + H_2$, $n = 2$. $Q = \frac{[Zn^{2+}]P_{H_2}}{[H^+]^2} = \frac{(0.01)(1)}{(1.0)^2} = 0.01$. $E = 0.76 - \frac{0.0592}{2}\log(0.01) = 0.76 - (0.0296)(-2) = 0.76 + 0.059 = \mathbf{0.82 \text{ V}}$

    6. $Q = It = (10.0)(30.0 \times 60) = 18,000 \text{ C}$. Mol $e^- = \frac{18,000}{96,500} = 0.187$ mol. Reaction: $Na^+ + e^- \rightarrow Na$ (1:1 ratio). Mol Na = 0.187. Mass $= (0.187)(23) = \mathbf{4.3 \text{ g}}$

    7. $Ag^+ + e^- \rightarrow Ag$ (1:1). Mol Ag $= \frac{10.0}{108} = 0.0926$ mol. Mol $e^- = 0.0926$. $Q = nF = (0.0926)(96,500) = 8,940 \text{ C}$. $t = \frac{Q}{I} = \frac{8,940}{5.00} = \mathbf{1,788 \text{ s}}$ or **1,790 s** (29.8 min)

    8. **No, not spontaneous**. $E° < 0$ means $\Delta G° > 0$, indicating non-spontaneous under standard conditions.

    9. **$E_{\text{cell}} = 0$**. At equilibrium, no net driving force remains, so cell potential is zero.

    10. $2H_2O \rightarrow 2H_2 + O_2$ requires 4 $e^-$ total (2 per $H_2$, 4 per $O_2$). For 0.20 mol $e^-$: mol $O_2 = \frac{0.20}{4} = 0.050$ mol. At STP: $V = nRT/P = (0.050)(22.4) = \mathbf{1.12 \text{ L}}$ (or use 22.4 L/mol directly: $0.050 \times 22.4 = 1.1$ L)
