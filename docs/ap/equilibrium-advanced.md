# Advanced Equilibrium

## Explanation

Advanced equilibrium extends basic concepts to solubility, weak acids/bases, buffers, and complex ion equilibria. These topics are essential for AP Chemistry and require careful attention to stoichiometry, equilibrium expressions, and approximation validity.

### Key Concepts

**Solubility Equilibrium (Ksp)**:
- For sparingly soluble salt: \(AB_{(s)} \rightleftharpoons A^+_{(aq)} + B^-_{(aq)}\)
- **Solubility product constant (\(K_{sp}\))**: \(K_{sp} = [A^+][B^-]\)
- **Important**: \(K_{sp}\) relates to **equilibrium concentrations**, not solubility directly
- For \(A_xB_y\): \(K_{sp} = [A^{y+}]^x[B^{x-}]^y\) (match stoichiometry!)
- Relationship to solubility: If solubility = \(s\) mol/L, then concentrations depend on stoichiometry
  - Example: \(CaF_2 \rightleftharpoons Ca^{2+} + 2F^-\) gives \([Ca^{2+}] = s\), \([F^-] = 2s\)
  - So \(K_{sp} = s(2s)^2 = 4s^3\) (not just \(s^2\)!)
- Larger \(K_{sp}\) generally means more soluble (but only compare compounds with same stoichiometry)
- **Common ion effect**: Adding a common ion shifts equilibrium left, decreasing solubility
  - Example: \(AgCl\) is less soluble in \(NaCl\) solution than pure water

**Predicting Precipitation**:
- Calculate **ion product** (\(Q\)) using **actual concentrations** (before equilibrium)
- \(Q < K_{sp}\): No precipitate (unsaturated solution)
- \(Q = K_{sp}\): Saturated equilibrium (on the edge)
- \(Q > K_{sp}\): Precipitate forms (supersaturated)
- When mixing solutions, remember to account for dilution: \(M_1V_1 = M_2V_2\)

**ICE Tables (Initial, Change, Equilibrium)**:
- Systematic method for equilibrium calculations
- **Initial**: Starting concentrations (products = 0 for weak acids/bases)
- **Change**: Use variable \(x\) with stoichiometric coefficients (±1x, ±2x, etc.)
- **Equilibrium**: Initial ± Change
- Substitute equilibrium row into \(K\) expression and solve for \(x\)
- **5% Rule**: If \(\frac{C}{K} > 100\) (or equivalently \(\frac{K}{C} < 0.05\)), approximation \(C - x \approx C\) is valid
- Always check approximation: Is \(\frac{x}{C} < 0.05\)? If not, use quadratic formula

**Weak Acid Equilibrium**:
- \(HA \rightleftharpoons H^+ + A^-\)
- \(K_a = \frac{[H^+][A^-]}{[HA]}\)
- Larger \(K_a\) = stronger acid (more dissociation)
- For weak acids: \(K_a < 10^{-2}\), typically \(10^{-3}\) to \(10^{-14}\)

**Weak Base Equilibrium**:
- \(B + H_2O \rightleftharpoons BH^+ + OH^-\)
- \(K_b = \frac{[BH^+][OH^-]}{[B]}\)
- **Conjugate pair relationship**: \(K_a \times K_b = K_w = 1.0 \times 10^{-14}\) at 25°C
- Use this to convert between \(K_a\) and \(K_b\) for conjugate pairs

**pH of Weak Acid**:
- For weak acid at concentration \(C\): \([H^+] \approx \sqrt{K_a \cdot C}\) (only if 5% rule applies)
- More exact: Use ICE table and solve quadratic: \(x^2 + K_a x - K_a C = 0\)
- Then \(pH = -\log[H^+]\)

**Buffer Solutions**:
- Resist pH change when small amounts of acid/base are added
- Must contain both:
  - Weak acid and its conjugate base (e.g., \(CH_3COOH\) + \(CH_3COO^-\)), OR
  - Weak base and its conjugate acid (e.g., \(NH_3\) + \(NH_4^+\))
- **Henderson-Hasselbalch equation** (for acid/conjugate base buffer):
\[pH = pK_a + \log\frac{[A^-]}{[HA]}\]
- Where \(pK_a = -\log K_a\)
- Best buffering occurs when \(pH = pK_a\) (equal amounts of acid and base)
- **Buffer range**: Effective within \(pK_a \pm 1\) pH unit
- For weak base buffers, convert to acid form or use: \(pOH = pK_b + \log\frac{[BH^+]}{[B]}\), then \(pH = 14 - pOH\)

**Buffer Capacity**:
- The amount of acid or base a buffer can neutralize before significant pH change (>1 pH unit)
- Depends on **concentration** of buffer components (higher concentration = greater capacity)
- Also depends on **ratio**: maximum capacity when \([A^-] = [HA]\) (ratio = 1)

**Titration Curves**:
- **Strong acid + strong base**: pH = 7 at equivalence point (neutral salt)
- **Weak acid + strong base**: pH > 7 at equivalence point (conjugate base present, acts as weak base)
- **Weak base + strong acid**: pH < 7 at equivalence point (conjugate acid present, acts as weak acid)
- **Half-equivalence point**: pH = \(pK_a\) for weak acid titration (equal amounts HA and A^-)
- **Buffer region**: Before equivalence point in weak acid/base titrations

**Complex Ion Equilibria**:
- Metal ion + ligands → complex ion
- Example: \(Ag^+ + 2NH_3 \rightleftharpoons [Ag(NH_3)_2]^+\)
- **Formation constant** (\(K_f\)): Large \(K_f\) = very stable complex (equilibrium far right)
- Complex formation can increase solubility of precipitates

---

## Common Mistakes to Avoid

### Mistake 1: Confusing Ksp with Solubility
**Error**: Thinking \(K_{sp}\) equals solubility directly.

**Why it's wrong**: \(K_{sp}\) is an equilibrium constant involving concentrations with stoichiometric coefficients. Solubility is in mol/L (or g/L).

**Example**: For \(Mg(OH)_2\), \(K_{sp} = 1.8 \times 10^{-11}\)
- WRONG: "Solubility = \(1.8 \times 10^{-11}\) M"
- CORRECT: \(Mg(OH)_2 \rightleftharpoons Mg^{2+} + 2OH^-\), so \(K_{sp} = [Mg^{2+}][OH^-]^2 = (s)(2s)^2 = 4s^3\)
- Therefore: \(s = \sqrt[3]{\frac{K_{sp}}{4}} = 1.7 \times 10^{-4}\) M

**Key Point**: Always write the equilibrium equation and account for stoichiometric coefficients.

### Mistake 2: Ignoring Dilution When Calculating Q
**Error**: Using original concentrations instead of diluted concentrations when predicting precipitation.

**Why it's wrong**: When two solutions are mixed, both get diluted. You must use the concentrations **after mixing**.

**Example**: Mix 50 mL of 0.010 M \(Ca^{2+}\) with 50 mL of 0.020 M \(CO_3^{2-}\)
- WRONG: \(Q = (0.010)(0.020) = 2.0 \times 10^{-4}\)
- CORRECT: After mixing, total volume = 100 mL
  - \([Ca^{2+}] = \frac{0.010 \times 50}{100} = 0.0050\) M
  - \([CO_3^{2-}] = \frac{0.020 \times 50}{100} = 0.010\) M
  - \(Q = (0.0050)(0.010) = 5.0 \times 10^{-5}\)

**Key Point**: Always calculate diluted concentrations: \(M_{final} = \frac{M_{initial} \times V_{initial}}{V_{total}}\)

### Mistake 3: Using 5% Approximation When It's Invalid
**Error**: Assuming \(C - x \approx C\) without checking validity.

**Why it's wrong**: For stronger weak acids or dilute solutions, \(x\) can be significant (>5% of \(C\)), making the approximation give incorrect results.

**Example**: 0.10 M \(HF\) with \(K_a = 6.8 \times 10^{-4}\)
- Check: \(\frac{K_a}{C} = \frac{6.8 \times 10^{-4}}{0.10} = 0.0068 = 0.68\%\)... Wait, check \(\frac{C}{K_a} = \frac{0.10}{6.8 \times 10^{-4}} = 147\)
- Since this is > 100, approximation might work, BUT...
- Using approximation: \(x = \sqrt{K_a \cdot C} = 8.2 \times 10^{-3}\), which is 8.2% of 0.10 (>5%!)
- WRONG to use approximation; must use quadratic formula
- CORRECT answer: \(x = 7.9 \times 10^{-3}\) M (about 4% different)

**Key Point**: Always check if \(x/C < 0.05\) (5%) **after** solving. If not, use quadratic formula.

### Mistake 4: Misapplying Henderson-Hasselbalch to Non-Buffer Systems
**Error**: Using H-H equation for weak acid solutions without conjugate base present.

**Why it's wrong**: Henderson-Hasselbalch requires **both** weak acid and conjugate base in significant amounts. It doesn't work for pure weak acid solutions.

**Example**: 0.10 M \(CH_3COOH\) alone (no acetate added)
- WRONG: "Use H-H equation"
- CORRECT: This is NOT a buffer. Use ICE table or \([H^+] = \sqrt{K_a \cdot C}\)

**When H-H works**: When you have both \(HA\) and \(A^-\) from added salt, OR in the buffer region of a titration.

**Key Point**: H-H is only for buffers (weak acid + conjugate base system).

### Mistake 5: Forgetting That Buffer Capacity Depends on Concentration
**Error**: Thinking buffer capacity only depends on the ratio \([A^-]/[HA]\).

**Why it's wrong**: Two buffers can have the same pH (same ratio) but very different capacities.

**Example**:
- Buffer A: 0.10 M \(HA\) + 0.10 M \(A^-\)
- Buffer B: 1.0 M \(HA\) + 1.0 M \(A^-\)
- Both have \(pH = pK_a\) (same ratio of 1:1)
- But Buffer B can neutralize 10× more acid/base before significant pH change!

**Key Point**: Buffer capacity increases with total concentration of buffer components, not just the ratio.

---

## Worked Examples

### Example 1: Calculating Solubility from \(K_{sp}\)

**Problem**: The \(K_{sp}\) of \(AgCl\) is \(1.8 \times 10^{-10}\). Calculate the molar solubility of \(AgCl\) in pure water.

**Solution**:
1. Equilibrium: \(AgCl_{(s)} \rightleftharpoons Ag^+_{(aq)} + Cl^-_{(aq)}\)
2. \(K_{sp} = [Ag^+][Cl^-]\)
3. Let \(s\) = molar solubility (mol/L)
4. At equilibrium: \([Ag^+] = s\), \([Cl^-] = s\)
5. \(K_{sp} = s \cdot s = s^2\)
6. \(1.8 \times 10^{-10} = s^2\)
7. \(s = \sqrt{1.8 \times 10^{-10}} = 1.34 \times 10^{-5} \text{ M}\)

**Answer**: Molar solubility = \(1.3 \times 10^{-5} \text{ M}\)

---

### Example 2: Buffer pH Calculation

**Problem**: A buffer contains 0.50 M acetic acid (\(CH_3COOH\), \(K_a = 1.8 \times 10^{-5}\)) and 0.30 M sodium acetate (\(CH_3COONa\)). Calculate the pH.

**Solution**:
1. Use Henderson-Hasselbalch: \(pH = pK_a + \log\frac{[A^-]}{[HA]}\)
2. \(pK_a = -\log(1.8 \times 10^{-5}) = 4.74\)
3. \([HA] = 0.50 \text{ M}\) (acetic acid)
4. \([A^-] = 0.30 \text{ M}\) (acetate ion from sodium acetate)
5. \(pH = 4.74 + \log\frac{0.30}{0.50}\)
6. \(pH = 4.74 + \log(0.60) = 4.74 + (-0.22) = 4.52\)

**Answer**: pH = 4.52

---

### Example 3: Weak Acid pH Calculation

**Problem**: Calculate the pH of a 0.10 M solution of \(HF\) (\(K_a = 6.8 \times 10^{-4}\)).

**Solution**:
1. Equilibrium: \(HF \rightleftharpoons H^+ + F^-\)
2. ICE table:
   - Initial: [HF] = 0.10, [H^+] = 0, [F^-] = 0
   - Change: -x, +x, +x
   - Equilibrium: 0.10-x, x, x
3. \(K_a = \frac{[H^+][F^-]}{[HF]} = \frac{x \cdot x}{0.10-x} = 6.8 \times 10^{-4}\)
4. Check if approximation valid: \(\frac{K_a}{C} = \frac{6.8 \times 10^{-4}}{0.10} = 0.0068 < 0.05\), so can't ignore \(x\)
5. \(\frac{x^2}{0.10-x} = 6.8 \times 10^{-4}\)
6. \(x^2 = 6.8 \times 10^{-5} - 6.8 \times 10^{-4}x\)
7. \(x^2 + 6.8 \times 10^{-4}x - 6.8 \times 10^{-5} = 0\)
8. Using quadratic formula: \(x = 7.9 \times 10^{-3}\)
9. \([H^+] = 7.9 \times 10^{-3} \text{ M}\)
10. \(pH = -\log(7.9 \times 10^{-3}) = 2.10\)

**Answer**: pH = 2.10

---

## AP Practice Problems

### Problem 1: Complex Ksp Calculation with Common Ion Effect
The \(K_{sp}\) of \(PbCl_2\) is \(1.7 \times 10^{-5}\) at 25°C. Calculate the molar solubility of \(PbCl_2\) in:
(a) Pure water
(b) 0.10 M \(NaCl\) solution

### Problem 2: Precipitation with Dilution
A chemist mixes 25.0 mL of \(0.0040\) M \(Pb(NO_3)_2\) with 35.0 mL of \(0.0060\) M \(NaI\). Will \(PbI_2\) precipitate? \(K_{sp}(PbI_2) = 7.9 \times 10^{-9}\). Show all calculations.

### Problem 3: ICE Table with Quadratic Formula
Calculate the pH of a \(0.050\) M solution of chlorous acid (\(HClO_2\)), which has \(K_a = 1.1 \times 10^{-2}\). Show that the approximation method fails and use the quadratic formula.

### Problem 4: Buffer Preparation
You need to prepare 500 mL of a buffer with \(pH = 5.00\). You have solid sodium acetate (\(CH_3COONa\)) and \(6.0\) M acetic acid (\(CH_3COOH\), \(K_a = 1.8 \times 10^{-5}\)). You want the total buffer concentration to be \(0.20\) M.
(a) Calculate the required ratio of \([CH_3COO^-]/[CH_3COOH]\)
(b) Calculate the volumes and masses needed

### Problem 5: Buffer Response to Added Strong Base
A buffer contains \(0.30\) M \(CH_3COOH\) and \(0.25\) M \(CH_3COONa\) (\(K_a = 1.8 \times 10^{-5}\)). Calculate the pH:
(a) Initially
(b) After adding \(0.020\) mol of solid \(NaOH\) to 1.00 L of this buffer

### Problem 6: Comparing Solubility
Without calculating exact values, predict which compound is more soluble in pure water:
- \(AgCl\): \(K_{sp} = 1.8 \times 10^{-10}\)
- \(Ag_2CrO_4\): \(K_{sp} = 1.1 \times 10^{-12}\)

Explain your reasoning and verify by calculating molar solubilities.

### Problem 7: Weak Base pH Calculation
Calculate the pH of a \(0.15\) M solution of methylamine (\(CH_3NH_2\)), a weak base with \(K_b = 4.4 \times 10^{-4}\). Determine if the approximation method is valid.

### Problem 8: Titration Curve Analysis
A \(25.0\) mL sample of \(0.100\) M benzoic acid (\(C_6H_5COOH\), \(K_a = 6.3 \times 10^{-5}\)) is titrated with \(0.100\) M \(NaOH\). Calculate the pH:
(a) Initially (before any \(NaOH\) added)
(b) At the half-equivalence point
(c) At the equivalence point

### Problem 9: Conjugate Pair Relationships
A solution contains \(0.50\) M \(NH_4Cl\). Calculate the pH. \(K_b(NH_3) = 1.8 \times 10^{-5}\).

### Problem 10: Multi-Step Solubility Problem
Silver chloride (\(AgCl\), \(K_{sp} = 1.8 \times 10^{-10}\)) can dissolve in ammonia solution due to complex ion formation:
\[Ag^+ + 2NH_3 \rightleftharpoons [Ag(NH_3)_2]^+ \quad K_f = 1.6 \times 10^7\]

Calculate the molar solubility of \(AgCl\) in \(1.0\) M \(NH_3\) solution. (Hint: Combine the two equilibria)

---

## Answer Key with Full Solutions

??? note "Click to reveal full solutions"

    ### Solution 1: Complex Ksp Calculation with Common Ion Effect

    **(a) In pure water:**

    **Step 1**: Write equilibrium equation
    \[PbCl_2(s) \rightleftharpoons Pb^{2+}(aq) + 2Cl^-(aq)\]

    **Step 2**: Write \(K_{sp}\) expression
    \[K_{sp} = [Pb^{2+}][Cl^-]^2 = 1.7 \times 10^{-5}\]

    **Step 3**: Set up in terms of solubility \(s\)
    - If \(s\) mol/L of \(PbCl_2\) dissolves:
    - \([Pb^{2+}] = s\)
    - \([Cl^-] = 2s\) (two chloride ions per formula unit)

    **Step 4**: Substitute and solve
    \[K_{sp} = (s)(2s)^2 = 4s^3\]
    \[1.7 \times 10^{-5} = 4s^3\]
    \[s^3 = 4.25 \times 10^{-6}\]
    \[s = 1.6 \times 10^{-2} \text{ M}\]

    **(b) In 0.10 M NaCl:**

    **Step 1**: Initial \([Cl^-] = 0.10\) M from NaCl (common ion effect)

    **Step 2**: ICE table
    |  | \(Pb^{2+}\) | \(Cl^-\) |
    |---|---|---|
    | Initial | 0 | 0.10 |
    | Change | +s | +2s |
    | Equilibrium | s | 0.10 + 2s |

    **Step 3**: Since \(K_{sp}\) is small, assume \(0.10 + 2s \approx 0.10\)
    \[K_{sp} = s(0.10)^2 = 1.7 \times 10^{-5}\]
    \[s = \frac{1.7 \times 10^{-5}}{0.01} = 1.7 \times 10^{-3} \text{ M}\]

    **Step 4**: Check approximation: \(2s = 3.4 \times 10^{-3}\), which is 3.4% of 0.10 (valid)

    **Answer**: (a) \(1.6 \times 10^{-2}\) M in pure water; (b) \(1.7 \times 10^{-3}\) M in 0.10 M NaCl

    **Key concept**: Common ion effect reduces solubility by ~10-fold here.

    ---

    ### Solution 2: Precipitation with Dilution

    **Step 1**: Calculate diluted concentrations
    - Total volume: \(25.0 + 35.0 = 60.0\) mL
    - \([Pb^{2+}]_{diluted} = \frac{0.0040 \times 25.0}{60.0} = 1.67 \times 10^{-3}\) M
    - \([I^-]_{diluted} = \frac{0.0060 \times 35.0}{60.0} = 3.5 \times 10^{-3}\) M

    **Step 2**: Write equilibrium for \(PbI_2\)
    \[PbI_2(s) \rightleftharpoons Pb^{2+}(aq) + 2I^-(aq)\]
    \[K_{sp} = [Pb^{2+}][I^-]^2 = 7.9 \times 10^{-9}\]

    **Step 3**: Calculate ion product \(Q\)
    \[Q = [Pb^{2+}][I^-]^2 = (1.67 \times 10^{-3})(3.5 \times 10^{-3})^2\]
    \[Q = (1.67 \times 10^{-3})(1.23 \times 10^{-5})\]
    \[Q = 2.05 \times 10^{-8}\]

    **Step 4**: Compare \(Q\) to \(K_{sp}\)
    - \(Q = 2.05 \times 10^{-8}\)
    - \(K_{sp} = 7.9 \times 10^{-9}\)
    - Since \(Q > K_{sp}\), **precipitate forms**

    **Answer**: Yes, \(PbI_2\) will precipitate because \(Q (2.05 \times 10^{-8}) > K_{sp} (7.9 \times 10^{-9})\)

    ---

    ### Solution 3: ICE Table with Quadratic Formula

    **Step 1**: Check if approximation is valid
    \[\frac{C}{K_a} = \frac{0.050}{1.1 \times 10^{-2}} = 4.5\]
    Since this is < 100, approximation will likely fail.

    **Step 2**: Set up ICE table
    \[HClO_2 \rightleftharpoons H^+ + ClO_2^-\]

    |  | \(HClO_2\) | \(H^+\) | \(ClO_2^-\) |
    |---|---|---|---|
    | Initial | 0.050 | 0 | 0 |
    | Change | -x | +x | +x |
    | Equilibrium | 0.050-x | x | x |

    **Step 3**: Write \(K_a\) expression
    \[K_a = \frac{[H^+][ClO_2^-]}{[HClO_2]} = \frac{x^2}{0.050-x} = 1.1 \times 10^{-2}\]

    **Step 4**: Try approximation first
    \[x^2 \approx 0.050 \times 1.1 \times 10^{-2} = 5.5 \times 10^{-4}\]
    \[x \approx 0.023\] M

    **Step 5**: Check: \(\frac{x}{C} = \frac{0.023}{0.050} = 0.46 = 46\%\) >> 5%, so approximation FAILS

    **Step 6**: Use quadratic formula
    \[x^2 = 1.1 \times 10^{-2}(0.050-x)\]
    \[x^2 = 5.5 \times 10^{-4} - 1.1 \times 10^{-2}x\]
    \[x^2 + 1.1 \times 10^{-2}x - 5.5 \times 10^{-4} = 0\]

    Using quadratic formula: \(x = \frac{-b + \sqrt{b^2 + 4ac}}{2a}\)
    \[x = \frac{-0.011 + \sqrt{(0.011)^2 + 4(5.5 \times 10^{-4})}}{2}\]
    \[x = \frac{-0.011 + \sqrt{1.21 \times 10^{-4} + 2.2 \times 10^{-3}}}{2}\]
    \[x = \frac{-0.011 + \sqrt{2.32 \times 10^{-3}}}{2}\]
    \[x = \frac{-0.011 + 0.0482}{2} = 0.0186\] M

    **Step 7**: Calculate pH
    \[pH = -\log(0.0186) = 1.73\]

    **Answer**: pH = 1.73

    ---

    ### Solution 4: Buffer Preparation

    **(a) Calculate required ratio:**

    **Step 1**: Use Henderson-Hasselbalch equation
    \[pH = pK_a + \log\frac{[CH_3COO^-]}{[CH_3COOH]}\]

    **Step 2**: Calculate \(pK_a\)
    \[pK_a = -\log(1.8 \times 10^{-5}) = 4.74\]

    **Step 3**: Solve for ratio
    \[5.00 = 4.74 + \log\frac{[CH_3COO^-]}{[CH_3COOH]}\]
    \[0.26 = \log\frac{[CH_3COO^-]}{[CH_3COOH]}\]
    \[\frac{[CH_3COO^-]}{[CH_3COOH]} = 10^{0.26} = 1.82\]

    **(b) Calculate volumes and masses:**

    **Step 4**: Set up equations
    - Total concentration: \([CH_3COO^-] + [CH_3COOH] = 0.20\) M
    - Ratio: \([CH_3COO^-] = 1.82[CH_3COOH]\)

    **Step 5**: Solve system
    \[1.82[CH_3COOH] + [CH_3COOH] = 0.20\]
    \[2.82[CH_3COOH] = 0.20\]
    \[[CH_3COOH] = 0.071\] M
    \[[CH_3COO^-] = 0.129\] M

    **Step 6**: Calculate volume of 6.0 M acetic acid needed
    \[M_1V_1 = M_2V_2\]
    \[6.0 \times V_1 = 0.071 \times 500\]
    \[V_1 = 5.9\] mL

    **Step 7**: Calculate mass of sodium acetate (MW = 82.03 g/mol)
    - Moles needed: \(0.129 \text{ M} \times 0.500 \text{ L} = 0.0645\) mol
    - Mass: \(0.0645 \times 82.03 = 5.3\) g

    **Answer**: (a) Ratio = 1.82:1; (b) Add 5.9 mL of 6.0 M acetic acid and 5.3 g of sodium acetate, dilute to 500 mL

    ---

    ### Solution 5: Buffer Response to Added Strong Base

    **(a) Initial pH:**

    **Step 1**: Use Henderson-Hasselbalch
    \[pK_a = -\log(1.8 \times 10^{-5}) = 4.74\]
    \[pH = 4.74 + \log\frac{0.25}{0.30} = 4.74 + \log(0.833)\]
    \[pH = 4.74 + (-0.079) = 4.66\]

    **(b) After adding 0.020 mol NaOH:**

    **Step 2**: \(NaOH\) reacts with \(CH_3COOH\)
    \[CH_3COOH + OH^- \rightarrow CH_3COO^- + H_2O\]

    **Step 3**: Calculate new amounts (in 1.00 L)
    - Initial moles \(CH_3COOH\): 0.30 mol
    - Initial moles \(CH_3COO^-\): 0.25 mol
    - Moles \(OH^-\) added: 0.020 mol

    After reaction:
    - \(CH_3COOH\): \(0.30 - 0.020 = 0.28\) mol (0.28 M)
    - \(CH_3COO^-\): \(0.25 + 0.020 = 0.27\) mol (0.27 M)

    **Step 4**: Calculate new pH
    \[pH = 4.74 + \log\frac{0.27}{0.28} = 4.74 + \log(0.964)\]
    \[pH = 4.74 + (-0.016) = 4.72\]

    **Answer**: (a) Initial pH = 4.66; (b) pH after adding NaOH = 4.72

    **Key concept**: Buffer resists pH change (only 0.06 pH unit increase despite adding strong base)

    ---

    ### Solution 6: Comparing Solubility

    **Step 1**: Write equilibria
    - \(AgCl \rightleftharpoons Ag^+ + Cl^-\), \(K_{sp} = [Ag^+][Cl^-]\)
    - \(Ag_2CrO_4 \rightleftharpoons 2Ag^+ + CrO_4^{2-}\), \(K_{sp} = [Ag^+]^2[CrO_4^{2-}]\)

    **Step 2**: Reasoning
    Can't directly compare \(K_{sp}\) values because stoichiometries differ. Must calculate actual solubilities.

    **Step 3**: Calculate solubility of \(AgCl\)
    - Let \(s_1\) = solubility
    - \(K_{sp} = s_1 \cdot s_1 = s_1^2\)
    - \(1.8 \times 10^{-10} = s_1^2\)
    - \(s_1 = 1.3 \times 10^{-5}\) M

    **Step 4**: Calculate solubility of \(Ag_2CrO_4\)
    - Let \(s_2\) = solubility
    - \([Ag^+] = 2s_2\), \([CrO_4^{2-}] = s_2\)
    - \(K_{sp} = (2s_2)^2(s_2) = 4s_2^3\)
    - \(1.1 \times 10^{-12} = 4s_2^3\)
    - \(s_2^3 = 2.75 \times 10^{-13}\)
    - \(s_2 = 6.5 \times 10^{-5}\) M

    **Answer**: \(Ag_2CrO_4\) is more soluble (\(6.5 \times 10^{-5}\) M) than \(AgCl\) (\(1.3 \times 10^{-5}\) M), despite having a smaller \(K_{sp}\). This demonstrates that you cannot compare \(K_{sp}\) values directly for compounds with different stoichiometries.

    ---

    ### Solution 7: Weak Base pH Calculation

    **Step 1**: Write equilibrium
    \[CH_3NH_2 + H_2O \rightleftharpoons CH_3NH_3^+ + OH^-\]
    \[K_b = \frac{[CH_3NH_3^+][OH^-]}{[CH_3NH_2]} = 4.4 \times 10^{-4}\]

    **Step 2**: Check if approximation valid
    \[\frac{C}{K_b} = \frac{0.15}{4.4 \times 10^{-4}} = 341 > 100\]
    Approximation should work, but verify after solving.

    **Step 3**: Use approximation
    \[[OH^-] = \sqrt{K_b \cdot C} = \sqrt{(4.4 \times 10^{-4})(0.15)}\]
    \[[OH^-] = \sqrt{6.6 \times 10^{-5}} = 8.1 \times 10^{-3}\] M

    **Step 4**: Verify approximation
    \[\frac{[OH^-]}{C} = \frac{8.1 \times 10^{-3}}{0.15} = 0.054 = 5.4\%\]
    This is slightly > 5%, so approximation is marginal but acceptable for 2 sig figs.

    **Step 5**: Calculate pH
    \[pOH = -\log(8.1 \times 10^{-3}) = 2.09\]
    \[pH = 14.00 - 2.09 = 11.91\]

    **Answer**: pH = 11.91 (approximation is marginally valid at 5.4%)

    ---

    ### Solution 8: Titration Curve Analysis

    **(a) Initial pH (before any NaOH added):**

    **Step 1**: This is a weak acid problem
    \[C_6H_5COOH \rightleftharpoons H^+ + C_6H_5COO^-\]
    \[K_a = 6.3 \times 10^{-5}\]

    **Step 2**: Check approximation
    \[\frac{C}{K_a} = \frac{0.100}{6.3 \times 10^{-5}} = 1587 >> 100\]
    Approximation valid.

    **Step 3**: Calculate \([H^+]\)
    \[[H^+] = \sqrt{K_a \cdot C} = \sqrt{(6.3 \times 10^{-5})(0.100)}\]
    \[[H^+] = \sqrt{6.3 \times 10^{-6}} = 2.5 \times 10^{-3}\] M

    **Step 4**: Calculate pH
    \[pH = -\log(2.5 \times 10^{-3}) = 2.60\]

    **(b) At half-equivalence point:**

    **Step 5**: At half-equivalence, \([HA] = [A^-]\)
    \[pH = pK_a = -\log(6.3 \times 10^{-5}) = 4.20\]

    **(c) At equivalence point:**

    **Step 6**: Calculate moles and concentration of conjugate base
    - Initial moles acid: \(0.100 \times 0.0250 = 0.00250\) mol
    - Volume of NaOH to reach equivalence: 25.0 mL (same concentration)
    - Total volume: \(25.0 + 25.0 = 50.0\) mL
    - \([C_6H_5COO^-] = \frac{0.00250}{0.0500} = 0.0500\) M

    **Step 7**: Conjugate base acts as weak base
    \[K_b = \frac{K_w}{K_a} = \frac{1.0 \times 10^{-14}}{6.3 \times 10^{-5}} = 1.59 \times 10^{-10}\]

    **Step 8**: Calculate \([OH^-]\)
    \[[OH^-] = \sqrt{K_b \cdot C} = \sqrt{(1.59 \times 10^{-10})(0.0500)}\]
    \[[OH^-] = \sqrt{7.95 \times 10^{-12}} = 2.8 \times 10^{-6}\] M

    **Step 9**: Calculate pH
    \[pOH = -\log(2.8 \times 10^{-6}) = 5.55\]
    \[pH = 14.00 - 5.55 = 8.45\]

    **Answer**: (a) Initial pH = 2.60; (b) Half-equivalence pH = 4.20; (c) Equivalence point pH = 8.45

    ---

    ### Solution 9: Conjugate Pair Relationships

    **Step 1**: Recognize that \(NH_4^+\) is a weak acid (conjugate of \(NH_3\))
    \[NH_4^+ \rightleftharpoons H^+ + NH_3\]

    **Step 2**: Find \(K_a\) of \(NH_4^+\)
    \[K_a = \frac{K_w}{K_b} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.6 \times 10^{-10}\]

    **Step 3**: Check approximation
    \[\frac{C}{K_a} = \frac{0.50}{5.6 \times 10^{-10}} = 8.9 \times 10^8 >> 100\]
    Approximation definitely valid.

    **Step 4**: Calculate \([H^+]\)
    \[[H^+] = \sqrt{K_a \cdot C} = \sqrt{(5.6 \times 10^{-10})(0.50)}\]
    \[[H^+] = \sqrt{2.8 \times 10^{-10}} = 1.7 \times 10^{-5}\] M

    **Step 5**: Calculate pH
    \[pH = -\log(1.7 \times 10^{-5}) = 4.77\]

    **Answer**: pH = 4.77

    ---

    ### Solution 10: Multi-Step Solubility Problem

    **Step 1**: Write both equilibria
    1. \(AgCl(s) \rightleftharpoons Ag^+(aq) + Cl^-(aq)\), \(K_{sp} = 1.8 \times 10^{-10}\)
    2. \(Ag^+ + 2NH_3 \rightleftharpoons [Ag(NH_3)_2]^+\), \(K_f = 1.6 \times 10^7\)

    **Step 2**: Add equations to get overall reaction
    \[AgCl(s) + 2NH_3(aq) \rightleftharpoons [Ag(NH_3)_2]^+(aq) + Cl^-(aq)\]

    **Step 3**: Calculate overall \(K\)
    \[K_{overall} = K_{sp} \times K_f = (1.8 \times 10^{-10})(1.6 \times 10^7) = 2.88 \times 10^{-3}\]

    **Step 4**: Set up ICE table (let \(s\) = solubility)

    |  | \(NH_3\) | \([Ag(NH_3)_2]^+\) | \(Cl^-\) |
    |---|---|---|---|
    | Initial | 1.0 | 0 | 0 |
    | Change | -2s | +s | +s |
    | Equilibrium | 1.0-2s | s | s |

    **Step 5**: Write equilibrium expression
    \[K = \frac{[[Ag(NH_3)_2]^+][Cl^-]}{[NH_3]^2} = \frac{s \cdot s}{(1.0-2s)^2} = 2.88 \times 10^{-3}\]

    **Step 6**: Check if approximation valid
    If \(s\) is small: \(1.0 - 2s \approx 1.0\)
    \[\frac{s^2}{1.0^2} = 2.88 \times 10^{-3}\]
    \[s = 0.054\] M

    **Step 7**: Check approximation
    \(2s = 0.108\), so \(1.0 - 0.108 = 0.892\) (about 11% error)
    Should iterate or solve exactly.

    **Step 8**: Solve more accurately
    \[\frac{s^2}{(1.0-2s)^2} = 2.88 \times 10^{-3}\]
    \[\frac{s}{1.0-2s} = 0.0537\]
    \[s = 0.0537(1.0-2s)\]
    \[s = 0.0537 - 0.107s\]
    \[1.107s = 0.0537\]
    \[s = 0.049\] M

    **Answer**: Molar solubility of \(AgCl\) in 1.0 M \(NH_3\) is approximately \(0.049\) M or \(4.9 \times 10^{-2}\) M

    **Key concept**: Complex ion formation dramatically increases solubility (by factor of ~250,000!)

---

## Step-by-Step Checker

Use these checklists to verify your work on buffer and Ksp problems.

### Buffer pH Calculation Checklist

**Problem Type**: Calculate pH of a buffer solution

- [ ] **Step 1**: Identify the weak acid (\(HA\)) and its conjugate base (\(A^-\))
  - If given a weak base buffer (\(B\) and \(BH^+\)), convert: \(K_a(BH^+) = K_w/K_b(B)\)

- [ ] **Step 2**: Calculate \(pK_a\)
  - \(pK_a = -\log K_a\)
  - Write down the value (usually between 3 and 11)

- [ ] **Step 3**: Identify concentrations
  - \([HA]\) = concentration of weak acid
  - \([A^-]\) = concentration of conjugate base
  - If given amounts (moles or grams), convert to molarity first

- [ ] **Step 4**: Apply Henderson-Hasselbalch equation
  - \(pH = pK_a + \log\frac{[A^-]}{[HA]}\)
  - Check: If \([A^-] > [HA]\), then pH > pK_a
  - Check: If \([A^-] < [HA]\), then pH < pK_a
  - Check: If \([A^-] = [HA]\), then pH = pK_a

- [ ] **Step 5**: Calculate the logarithm
  - Use calculator to find \(\log(\text{ratio})\)
  - Remember: \(\log(1) = 0\), \(\log(10) = 1\), \(\log(0.1) = -1\)

- [ ] **Step 6**: Add to get final pH
  - pH should be reasonable (0-14)
  - For weak acid buffers, pH typically 3-7
  - For weak base buffers, pH typically 7-11

**Common errors to avoid**:
- Using H-H equation when no buffer present (need both acid and base!)
- Mixing up numerator and denominator in log term
- Forgetting to convert \(pOH\) to pH for weak base buffers
- Using moles instead of molarity

---

### Buffer Response to Added Acid/Base Checklist

**Problem Type**: Calculate pH after adding strong acid or base to a buffer

- [ ] **Step 1**: Calculate initial pH (use H-H equation)
  - Record initial \([HA]\) and \([A^-]\)

- [ ] **Step 2**: Determine what reacts
  - If adding strong acid (\(H^+\) or \(HCl\)): reacts with \(A^-\)
    - \(A^- + H^+ \rightarrow HA\)
  - If adding strong base (\(OH^-\) or \(NaOH\)): reacts with \(HA\)
    - \(HA + OH^- \rightarrow A^- + H_2O\)

- [ ] **Step 3**: Calculate moles before reaction
  - Moles \(HA\) = \([HA] \times V\)
  - Moles \(A^-\) = \([A^-] \times V\)
  - Moles of acid/base added (given or calculate from mass/volume)

- [ ] **Step 4**: Perform stoichiometry (limiting reactant)
  - Subtract moles of added acid/base from appropriate component
  - Add same amount to the other component
  - Example for added base:
    - New moles \(HA\) = initial moles - moles \(OH^-\) added
    - New moles \(A^-\) = initial moles + moles \(OH^-\) added

- [ ] **Step 5**: Calculate new concentrations
  - If volume changes, use new total volume
  - If solid added, volume usually stays same
  - New \([HA]\) and \([A^-]\)

- [ ] **Step 6**: Calculate new pH (use H-H equation again)
  - \(pH = pK_a + \log\frac{[A^-]_{new}}{[HA]_{new}}\)

- [ ] **Step 7**: Verify reasonableness
  - Adding base should increase pH slightly
  - Adding acid should decrease pH slightly
  - pH change should be small (<1 unit) for a good buffer

**Common errors to avoid**:
- Forgetting which component reacts with added acid/base
- Not accounting for volume change when solutions are mixed
- Subtracting from wrong component
- Using old concentrations instead of new ones

---

### Ksp Solubility Calculation Checklist

**Problem Type**: Calculate molar solubility from \(K_{sp}\)

- [ ] **Step 1**: Write the dissolution equilibrium equation
  - Example: \(AB_2(s) \rightleftharpoons A^{2+}(aq) + 2B^-(aq)\)
  - Check stoichiometric coefficients carefully!

- [ ] **Step 2**: Write the \(K_{sp}\) expression
  - Include exponents that match stoichiometric coefficients
  - Example: \(K_{sp} = [A^{2+}][B^-]^2\)
  - Solids do NOT appear in expression

- [ ] **Step 3**: Define solubility variable \(s\)
  - Let \(s\) = molar solubility (mol/L of solid that dissolves)

- [ ] **Step 4**: Express ion concentrations in terms of \(s\)
  - Use stoichiometry: \([A^{2+}] = s\), \([B^-] = 2s\)
  - General rule: coefficient \(\times s\)

- [ ] **Step 5**: Substitute into \(K_{sp}\) expression
  - Example: \(K_{sp} = (s)(2s)^2 = 4s^3\)
  - Simplify the algebra

- [ ] **Step 6**: Solve for \(s\)
  - For \(AB\): \(K_{sp} = s^2\), so \(s = \sqrt{K_{sp}}\)
  - For \(AB_2\) or \(A_2B\): \(K_{sp} = 4s^3\), so \(s = \sqrt[3]{K_{sp}/4}\)
  - For \(AB_3\): \(K_{sp} = 27s^4\), so \(s = \sqrt[4]{K_{sp}/27}\)

- [ ] **Step 7**: Report with correct units and sig figs
  - Units: mol/L (or M)
  - Sig figs: match the sig figs in \(K_{sp}\)

**Common errors to avoid**:
- Forgetting stoichiometric coefficients in ion concentrations
- Setting \(K_{sp} = s\) (almost never correct!)
- Wrong exponents in \(K_{sp}\) expression
- Arithmetic errors with powers (e.g., \((2s)^2 = 4s^2\), not \(2s^2\))

---

### Precipitation Prediction Checklist

**Problem Type**: Will a precipitate form when solutions are mixed?

- [ ] **Step 1**: Calculate concentrations after mixing (account for dilution!)
  - \([Ion_1]_{final} = \frac{[Ion_1]_{initial} \times V_1}{V_{total}}\)
  - \([Ion_2]_{final} = \frac{[Ion_2]_{initial} \times V_2}{V_{total}}\)
  - \(V_{total} = V_1 + V_2\)

- [ ] **Step 2**: Write the \(K_{sp}\) expression for the possible precipitate
  - Identify the compound that might form
  - Example: \(Ca^{2+}\) + \(CO_3^{2-}\) → \(CaCO_3\)
  - \(K_{sp} = [Ca^{2+}][CO_3^{2-}]\)

- [ ] **Step 3**: Calculate the ion product \(Q\)
  - Use the ACTUAL (diluted) concentrations
  - \(Q = [Ion_1][Ion_2]^n\) (match the \(K_{sp}\) expression format)

- [ ] **Step 4**: Look up \(K_{sp}\) value
  - Make sure you have the correct \(K_{sp}\) for the compound
  - Check that it's at the same temperature (usually 25°C)

- [ ] **Step 5**: Compare \(Q\) to \(K_{sp}\)
  - \(Q < K_{sp}\): **No precipitate** (unsaturated)
  - \(Q = K_{sp}\): **Saturated** (equilibrium, no net change)
  - \(Q > K_{sp}\): **Precipitate forms** (supersaturated)

- [ ] **Step 6**: State conclusion clearly
  - "Yes, precipitate will form because \(Q > K_{sp}\)" or
  - "No, precipitate will not form because \(Q < K_{sp}\)"
  - Include numerical values for clarity

**Common errors to avoid**:
- Using concentrations before mixing (forgetting dilution)
- Comparing concentrations to \(K_{sp}\) instead of calculating \(Q\)
- Wrong stoichiometric coefficients in \(Q\) calculation
- Arithmetic errors in dilution calculations

---

### ICE Table for Weak Acid/Base Checklist

**Problem Type**: Calculate pH of a weak acid or weak base solution

- [ ] **Step 1**: Write the equilibrium equation
  - Weak acid: \(HA \rightleftharpoons H^+ + A^-\)
  - Weak base: \(B + H_2O \rightleftharpoons BH^+ + OH^-\)

- [ ] **Step 2**: Check if approximation is valid FIRST
  - Calculate \(\frac{C}{K_a}\) (or \(\frac{C}{K_b}\))
  - If > 100, approximation likely valid (but must verify after)
  - If < 100, must use quadratic formula

- [ ] **Step 3**: Set up ICE table
  ```
            HA    H+    A-
  Initial:   C     0     0
  Change:   -x    +x    +x
  Equil:   C-x    x     x
  ```

- [ ] **Step 4**: Write equilibrium expression
  - \(K_a = \frac{[H^+][A^-]}{[HA]} = \frac{x \cdot x}{C-x}\)

- [ ] **Step 5a**: If using approximation (\(C - x \approx C\))
  - \(K_a \approx \frac{x^2}{C}\)
  - \(x = \sqrt{K_a \cdot C}\)
  - **Must check**: Is \(\frac{x}{C} < 0.05\) (5%)?
  - If yes, approximation valid; if no, use quadratic

- [ ] **Step 5b**: If using quadratic formula
  - \(x^2 = K_a(C-x)\)
  - \(x^2 + K_a x - K_a C = 0\)
  - \(x = \frac{-K_a + \sqrt{K_a^2 + 4K_a C}}{2}\)
  - (Take positive root only)

- [ ] **Step 6**: Calculate pH or pOH
  - For acids: \([H^+] = x\), \(pH = -\log x\)
  - For bases: \([OH^-] = x\), \(pOH = -\log x\), \(pH = 14 - pOH\)

- [ ] **Step 7**: Check reasonableness
  - Weak acids: pH should be < 7 but > 1 (typically 2-6)
  - Weak bases: pH should be > 7 but < 14 (typically 8-12)
  - pH shouldn't be extremely low/high unless \(K_a\)/\(K_b\) is large and concentration is high

**Common errors to avoid**:
- Using approximation when it's invalid (always verify!)
- Forgetting to take square root
- Using \(K_a\) when you should use \(K_b\) (or vice versa)
- Calculating \(pOH\) but reporting it as pH (for bases)
