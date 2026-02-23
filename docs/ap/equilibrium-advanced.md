# Advanced Equilibrium

## Explanation

Advanced equilibrium extends basic concepts to solubility, weak acids/bases, buffers, and complex ion equilibria. These topics are essential for AP Chemistry.

### Key Concepts

**Solubility Equilibrium**:
- For sparingly soluble salt: \(AB_{(s)} \rightleftharpoons A^+_{(aq)} + B^-_{(aq)}\)
- **Solubility product constant (\(K_{sp}\))**: \(K_{sp} = [A^+][B^-]\)
- Larger \(K_{sp}\) = more soluble
- **Common ion effect**: Adding common ion decreases solubility

**Predicting Precipitation**:
- Calculate ion product (\(Q\))
- \(Q < K_{sp}\): No precipitate (unsaturated)
- \(Q = K_{sp}\): Saturated equilibrium
- \(Q > K_{sp}\): Precipitate forms

**Weak Acid Equilibrium**:
- \(HA \rightleftharpoons H^+ + A^-\)
- \(K_a = \frac{[H^+][A^-]}{[HA]}\)
- Larger \(K_a\) = stronger acid
- **ICE table**: Initial, Change, Equilibrium

**Weak Base Equilibrium**:
- \(B + H_2O \rightleftharpoons BH^+ + OH^-\)
- \(K_b = \frac{[BH^+][OH^-]}{[B]}\)
- \(K_a \times K_b = K_w = 1.0 \times 10^{-14}\) (conjugate pairs)

**pH of Weak Acid**:
- For weak acid at concentration \(C\): \([H^+] \approx \sqrt{K_a \cdot C}\) (if \(K_a\) is small)
- More exact: Use ICE table and quadratic equation

**Buffer Solutions**:
- Resist pH change when small amounts of acid/base added
- Contains weak acid and its conjugate base (or weak base and conjugate acid)
- **Henderson-Hasselbalch equation**:
\[pH = pK_a + \log\frac{[A^-]}{[HA]}\]
- \(pK_a = -\log K_a\)
- Best buffering at \(pH = pK_a\)

**Buffer Capacity**: Amount of acid/base a buffer can neutralize before significant pH change

**Titration Curves**:
- **Strong acid + strong base**: pH = 7 at equivalence point
- **Weak acid + strong base**: pH > 7 at equivalence point (conjugate base present)
- **Weak base + strong acid**: pH < 7 at equivalence point (conjugate acid present)
- **Half-equivalence point**: pH = \(pK_a\) (for weak acid titration)

**Complex Ion Equilibria**:
- Metal ion + ligands → complex ion
- Example: \(Ag^+ + 2NH_3 \rightleftharpoons [Ag(NH_3)_2]^+\)
- Formation constant (\(K_f\)): Large \(K_f\) = stable complex

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

## Practice Problems

1. What is the difference between \(K_{sp}\) and molar solubility?

2. The \(K_{sp}\) of \(CaF_2\) is \(3.9 \times 10^{-11}\). Write the \(K_{sp}\) expression.

3. For \(Mg(OH)_2\) with \(K_{sp} = 1.8 \times 10^{-11}\), calculate the molar solubility. (Hint: If \(s\) is solubility, \([Mg^{2+}] = s\) and \([OH^-] = 2s\))

4. A solution contains \([Ca^{2+}] = 0.010 \text{ M}\) and \([CO_3^{2-}] = 0.020 \text{ M}\). Will \(CaCO_3\) precipitate? (\(K_{sp} = 3.8 \times 10^{-9}\))

5. Calculate the pH of a 0.20 M solution of ammonia (\(NH_3\), \(K_b = 1.8 \times 10^{-5}\)). Use \([OH^-] \approx \sqrt{K_b \cdot C}\) approximation.

6. A buffer is made with 0.40 M \(NH_3\) (\(K_b = 1.8 \times 10^{-5}\)) and 0.25 M \(NH_4Cl\). Calculate pH. (First find \(K_a\) of \(NH_4^+\): \(K_a = K_w/K_b\))

7. At the half-equivalence point of a weak acid titration, \(pH = 4.75\). What is \(K_a\) of the acid?

8. Explain why the equivalence point of a weak acid titrated with strong base has pH > 7.

9. If \(K_a = 1.0 \times 10^{-6}\) for an acid, what is \(K_b\) for its conjugate base?

10. A buffer contains equal concentrations of \(HA\) and \(A^-\). What is the pH in terms of \(pK_a\)?

---

## Answer Key

??? note "Click to reveal answers"
    1. **\(K_{sp}\)** is an equilibrium constant (no units typically, or \(M^2\), \(M^3\), etc.). **Molar solubility** is the concentration of dissolved salt in solution (units: M). They're related but not the same value.

    2. \(CaF_2 \rightleftharpoons Ca^{2+} + 2F^-\). \(\mathbf{K_{sp} = [Ca^{2+}][F^-]^2}\)

    3. \(Mg(OH)_2 \rightleftharpoons Mg^{2+} + 2OH^-\). \(K_{sp} = [Mg^{2+}][OH^-]^2 = (s)(2s)^2 = 4s^3\). \(1.8 \times 10^{-11} = 4s^3\), \(s^3 = 4.5 \times 10^{-12}\), \(s = \mathbf{1.7 \times 10^{-4} \text{ M}}\)

    4. \(Q = [Ca^{2+}][CO_3^{2-}] = (0.010)(0.020) = 2.0 \times 10^{-4}\). Since \(Q (2.0 \times 10^{-4}) > K_{sp} (3.8 \times 10^{-9})\), **yes, precipitate forms**.

    5. \([OH^-] = \sqrt{(1.8 \times 10^{-5})(0.20)} = \sqrt{3.6 \times 10^{-6}} = 1.9 \times 10^{-3}\) M. \(pOH = -\log(1.9 \times 10^{-3}) = 2.72\). \(pH = 14 - 2.72 = \mathbf{11.28}\) or **11.3**.

    6. \(K_a = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.6 \times 10^{-10}\). \(pK_a = 9.25\). \(pH = 9.25 + \log\frac{0.40}{0.25} = 9.25 + 0.20 = \mathbf{9.45}\)

    7. At half-equivalence, \(pH = pK_a\). So \(pK_a = 4.75\), meaning \(K_a = 10^{-4.75} = \mathbf{1.8 \times 10^{-5}}\)

    8. At equivalence, all weak acid is converted to its **conjugate base** (\(A^-\)). The conjugate base is a weak base that reacts with water: \(A^- + H_2O \rightleftharpoons HA + OH^-\), producing \(OH^-\) and making the solution **basic** (pH > 7).

    9. \(K_b = \frac{K_w}{K_a} = \frac{1.0 \times 10^{-14}}{1.0 \times 10^{-6}} = \mathbf{1.0 \times 10^{-8}}\)

    10. \(pH = pK_a + \log\frac{[A^-]}{[HA]} = pK_a + \log(1) = pK_a + 0 = \mathbf{pK_a}\)
