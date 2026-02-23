# Acids and Bases

## Video Resources

<div class="video-container" markdown="1">

**Solutions, Acids and Bases Playlist** - pH, molarity, strong/weak acids & bases

<iframe width="100%" height="400" src="https://www.youtube.com/embed/videoseries?list=PLSQl0a2vh4HAHzfFIPU3q0hDdHKTEPrz5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Introduction to Acids & Bases (Arrhenius)**

<iframe width="100%" height="400" src="https://www.youtube.com/embed/ja7p_tzTTEA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>

---

## Explanation

Acids and bases are fundamental classes of compounds in chemistry. Understanding their properties, strength, and reactions is essential for many applications.

### Key Concepts

**Definitions**:

**Arrhenius Theory**:
- **Acid**: Produces \(H^+\) ions in water (e.g., \(HCl \rightarrow H^+ + Cl^-\))
- **Base**: Produces \(OH^-\) ions in water (e.g., \(NaOH \rightarrow Na^+ + OH^-\))

**Brønsted-Lowry Theory** (broader):
- **Acid**: Proton (\(H^+\)) donor
- **Base**: Proton (\(H^+\)) acceptor
- Example: \(HCl + H_2O \rightarrow H_3O^+ + Cl^-\)
  - \(HCl\) donates \(H^+\) (acid), \(H_2O\) accepts \(H^+\) (base)

### pH and pOH: Detailed Explanation

**Understanding pH**:
The pH scale is a logarithmic measure of hydrogen ion concentration. The formula \(pH = -\log[H^+]\) means:
- When \([H^+] = 1.0 \times 10^{-3}\) M, pH = 3
- When \([H^+] = 1.0 \times 10^{-7}\) M, pH = 7 (neutral)
- When \([H^+] = 1.0 \times 10^{-11}\) M, pH = 11

**Key points about pH**:
- Scale: 0-14 (at 25°C)
  - \(pH < 7\): acidic
  - \(pH = 7\): neutral
  - \(pH > 7\): basic
- Each pH unit represents a **10-fold change** in \([H^+]\)
  - A solution with pH 3 has 10 times more \([H^+]\) than pH 4
  - A solution with pH 2 has 100 times more \([H^+]\) than pH 4

**Converting between pH and \([H^+]\)**:
- **Given pH, find \([H^+]\)**: \([H^+] = 10^{-pH}\)
  - Example: pH = 5 → \([H^+] = 10^{-5} = 1.0 \times 10^{-5}\) M
- **Given \([H^+]\), find pH**: \(pH = -\log[H^+]\)
  - Example: \([H^+] = 1.0 \times 10^{-8}\) M → \(pH = -\log(10^{-8}) = 8\)

**Understanding pOH**:
Similar to pH, but measures hydroxide ion concentration:
- \(pOH = -\log[OH^-]\)
- Converting: \([OH^-] = 10^{-pOH}\)

**The pH-pOH relationship**:
- At 25°C: \(pH + pOH = 14\)
- This comes from the water ionization constant: \(K_w = [H^+][OH^-] = 1.0 \times 10^{-14}\)
- Taking the negative log of both sides: \(-\log(K_w) = -\log[H^+] - \log[OH^-]\)
- This gives us: \(14 = pH + pOH\)

**Practical applications**:
- If you know pH, you can find pOH: \(pOH = 14 - pH\)
- If you know \([H^+]\), you can find \([OH^-]\): \([OH^-] = \frac{K_w}{[H^+]} = \frac{1.0 \times 10^{-14}}{[H^+]}\)

### Water Ionization and the Ion Product

**Water Ionization**:
- Pure water undergoes autoionization: \(H_2O \rightleftharpoons H^+ + OH^-\)
- At equilibrium at 25°C: \(K_w = [H^+][OH^-] = 1.0 \times 10^{-14}\)
- In pure water: \([H^+] = [OH^-] = 1.0 \times 10^{-7}\) M, so pH = 7

**Important principle**: \(K_w\) is constant at a given temperature, so:
- If \([H^+]\) increases, \([OH^-]\) must decrease (and vice versa)
- In acidic solutions: \([H^+] > [OH^-]\)
- In basic solutions: \([OH^-] > [H^+]\)

### Strong vs. Weak Acids and Bases

**Strong acids** (completely ionize in water):
- Common strong acids: \(HCl\), \(HBr\), \(HI\), \(HNO_3\), \(H_2SO_4\), \(HClO_4\)
- For strong acids: \([H^+] = \text{initial acid concentration}\)
- Example: 0.01 M HCl → \([H^+] = 0.01\) M, pH = 2

**Weak acids** (partially ionize in water):
- Examples: \(CH_3COOH\) (acetic acid), \(HF\), \(H_2CO_3\)
- Acid strength determined by \(K_a\) (acid dissociation constant)
- For weak acids: \([H^+] < \text{initial acid concentration}\)

**Strong bases** (completely dissociate in water):
- Common strong bases: \(NaOH\), \(KOH\), \(Ca(OH)_2\), \(Ba(OH)_2\)
- For strong bases: \([OH^-] = \text{initial base concentration}\) (×2 for \(Ca(OH)_2\))

**Weak bases** (partially ionize in water):
- Examples: \(NH_3\) (ammonia), amines
- Base strength determined by \(K_b\) (base dissociation constant)

### Titration: Detailed Step-by-Step Process

**What is titration?**
Titration is an analytical technique used to determine the unknown concentration of an acid or base by reacting it with a standard solution (known concentration) until the equivalence point is reached.

**Titration procedure**:
1. **Setup**: Place the unknown solution in a flask with an indicator
2. **Add titrant**: Slowly add the standard solution from a buret
3. **Watch for endpoint**: The indicator changes color when neutralization is complete
4. **Record volume**: Note the volume of titrant used

**Key titration concepts**:

**Equivalence Point vs. Endpoint**:
- **Equivalence point**: The point where moles of acid = moles of base (stoichiometrically complete)
- **Endpoint**: The point where the indicator changes color (should be very close to equivalence point)

**Titration calculations**:
The fundamental relationship at equivalence point:
\[n_{acid} = n_{base} \times \frac{\text{stoichiometric ratio}}{\text{stoichiometric ratio}}\]

For monoprotic acids and monobasic bases (1:1 ratio):
\[M_a V_a = M_b V_b\]

Where:
- \(M_a\) = molarity of acid
- \(V_a\) = volume of acid
- \(M_b\) = molarity of base
- \(V_b\) = volume of base

**Step-by-step titration calculation**:
1. Write the balanced neutralization equation
2. Determine the stoichiometric ratio (mole ratio of acid to base)
3. Calculate moles of the known substance: \(n = M \times V\) (V in liters)
4. Use stoichiometry to find moles of unknown substance
5. Calculate molarity of unknown: \(M = \frac{n}{V}\)

**Example with different stoichiometry**:
For \(H_2SO_4 + 2NaOH \rightarrow Na_2SO_4 + 2H_2O\) (1:2 ratio):
- 1 mole of \(H_2SO_4\) reacts with 2 moles of \(NaOH\)
- Formula: \(M_a V_a = \frac{1}{2} M_b V_b\) or \(2 M_a V_a = M_b V_b\)

**Common indicators**:
- **Phenolphthalein**: Clear in acid, pink in base (pH transition: 8.2-10)
- **Methyl orange**: Red in acid, yellow in base (pH transition: 3.1-4.4)
- **Bromothymol blue**: Yellow in acid, blue in base (pH transition: 6.0-7.6)

### Neutralization Reactions

**General form**:
\[\text{Acid} + \text{Base} \rightarrow \text{Salt} + \text{Water}\]

**Examples**:
- \(HCl + NaOH \rightarrow NaCl + H_2O\)
- \(H_2SO_4 + 2KOH \rightarrow K_2SO_4 + 2H_2O\)
- \(2HNO_3 + Ca(OH)_2 \rightarrow Ca(NO_3)_2 + 2H_2O\)

**Important notes**:
- Always balance the equation first
- Pay attention to polyprotic acids (like \(H_2SO_4\)) and polyhydroxy bases (like \(Ca(OH)_2\))
- The salt formed depends on the cation from the base and anion from the acid

---

## Common Mistakes to Avoid

### Mistake 1: Confusing the negative sign in the logarithm

**Wrong approach**: Thinking \(pH = \log[H^+]\) (forgetting the negative sign)

**Why it's wrong**: The formula is \(pH = -\log[H^+]\). Without the negative sign, you'd get a negative pH for normal concentrations.

**Example**:
- If \([H^+] = 1.0 \times 10^{-4}\) M
- Wrong: \(pH = \log(10^{-4}) = -4\)
- Correct: \(pH = -\log(10^{-4}) = -(-4) = 4\)

**How to avoid**: Always remember the negative sign. The pH of acidic solutions (high \([H^+]\)) should be a positive number less than 7.

### Mistake 2: Forgetting to convert volumes to liters in calculations

**Wrong approach**: Using mL directly in the formula \(n = M \times V\)

**Why it's wrong**: Molarity is defined as moles per liter, so volume must be in liters.

**Example**:
- Given: 25.0 mL of 0.100 M NaOH
- Wrong: \(n = 0.100 \times 25.0 = 2.50\) mol
- Correct: \(n = 0.100 \times 0.0250 = 0.00250\) mol

**How to avoid**: Always convert mL to L by dividing by 1000, or use the conversion factor: 1 L = 1000 mL.

### Mistake 3: Confusing equivalence point with endpoint

**Wrong approach**: Assuming the equivalence point is always at pH 7

**Why it's wrong**:
- The equivalence point is where moles of acid = moles of base (stoichiometrically)
- pH at equivalence point depends on the strength of the acid and base:
  - Strong acid + strong base → pH = 7
  - Weak acid + strong base → pH > 7
  - Strong acid + weak base → pH < 7
- The endpoint is where the indicator changes color (chosen to match equivalence point as closely as possible)

**How to avoid**: Remember that equivalence point refers to stoichiometry (moles), while pH at that point depends on the nature of the reactants.

### Mistake 4: Ignoring stoichiometric ratios in neutralization reactions

**Wrong approach**: Always using \(M_a V_a = M_b V_b\) regardless of the balanced equation

**Why it's wrong**: This formula only works for 1:1 reactions. For reactions with different stoichiometry, you must account for the mole ratio.

**Example**:
- Reaction: \(H_2SO_4 + 2NaOH \rightarrow Na_2SO_4 + 2H_2O\)
- Wrong: \(M_a V_a = M_b V_b\)
- Correct: \(M_a V_a \times 2 = M_b V_b\) or \(\frac{n_{H_2SO_4}}{1} = \frac{n_{NaOH}}{2}\)

**How to avoid**:
1. Always write the balanced equation first
2. Identify the mole ratio
3. Use \(n = M \times V\) and apply stoichiometry

### Mistake 5: Mixing up pH and pOH relationships

**Wrong approach**:
- Using \(pH = 14 + pOH\) or \(pH = 14 \times pOH\)
- Finding \([OH^-]\) from pH without first finding \([H^+]\)

**Why it's wrong**: The correct relationship is \(pH + pOH = 14\) (addition, not multiplication)

**Example**:
- Given: \([OH^-] = 1.0 \times 10^{-3}\) M
- Wrong path: Try to find pH directly from \([OH^-]\)
- Correct path:
  1. \(pOH = -\log(10^{-3}) = 3\)
  2. \(pH = 14 - 3 = 11\)

  Or alternatively:
  1. \([H^+] = \frac{K_w}{[OH^-]} = \frac{10^{-14}}{10^{-3}} = 10^{-11}\) M
  2. \(pH = -\log(10^{-11}) = 11\)

**How to avoid**: Remember the formula \(pH + pOH = 14\) and that you can always use \(K_w = [H^+][OH^-] = 1.0 \times 10^{-14}\) to convert between \([H^+]\) and \([OH^-]\).

---

## Worked Examples

### Example 1: Calculating pH from \([H^+]\)

**Problem**: A solution has \([H^+] = 1.0 \times 10^{-3} \text{ M}\). Calculate the pH. Is the solution acidic, basic, or neutral?

**Solution**:
1. Use formula: \(pH = -\log[H^+]\)
2. \(pH = -\log(1.0 \times 10^{-3})\)
3. \(pH = -(-3) = 3\)
4. Since \(pH < 7\), the solution is acidic

**Answer**: pH = 3, acidic

---

### Example 2: Calculating \([OH^-]\) from pH

**Problem**: A solution has pH = 11. Calculate \([H^+]\) and \([OH^-]\).

**Solution**:
1. From pH, find \([H^+]\): \(pH = -\log[H^+]\)
2. \(11 = -\log[H^+]\)
3. \([H^+] = 10^{-11} \text{ M}\)
4. Use \(K_w = [H^+][OH^-] = 1.0 \times 10^{-14}\)
5. \([OH^-] = \frac{K_w}{[H^+]} = \frac{1.0 \times 10^{-14}}{1.0 \times 10^{-11}} = 1.0 \times 10^{-3} \text{ M}\)

**Answer**: \([H^+] = 1.0 \times 10^{-11} \text{ M}\), \([OH^-] = 1.0 \times 10^{-3} \text{ M}\)

---

### Example 3: Neutralization Titration Calculation

**Problem**: It takes 25.0 mL of 0.100 M \(NaOH\) to neutralize 50.0 mL of \(HCl\) solution. Calculate the molarity of the \(HCl\) solution.

**Solution**:
1. Equation: \(HCl + NaOH \rightarrow NaCl + H_2O\) (1:1 ratio)
2. At equivalence: moles \(HCl\) = moles \(NaOH\)
3. Moles \(NaOH = M \times V = (0.100 \text{ M})(0.0250 \text{ L}) = 0.00250 \text{ mol}\)
4. Moles \(HCl = 0.00250 \text{ mol}\)
5. Molarity \(HCl = \frac{\text{moles}}{V} = \frac{0.00250 \text{ mol}}{0.0500 \text{ L}} = 0.0500 \text{ M}\)

**Answer**: The \(HCl\) solution is 0.0500 M (or 0.050 M)

---

## SAT Chemistry Practice Problems

### Problem 1
A solution has a hydroxide ion concentration of \(1.0 \times 10^{-5}\) M. What is the pH of this solution?

(A) 5
(B) 9
(C) 10
(D) 12
(E) 14

??? note "Click to reveal solution"
    **Answer: B (pH = 9)**

    **Step-by-step solution**:
    1. Given: \([OH^-] = 1.0 \times 10^{-5}\) M
    2. Find \([H^+]\) using \(K_w = [H^+][OH^-] = 1.0 \times 10^{-14}\)
    3. \([H^+] = \frac{K_w}{[OH^-]} = \frac{1.0 \times 10^{-14}}{1.0 \times 10^{-5}} = 1.0 \times 10^{-9}\) M
    4. \(pH = -\log[H^+] = -\log(1.0 \times 10^{-9}) = 9\)

    **Alternative method**:
    1. \(pOH = -\log[OH^-] = -\log(1.0 \times 10^{-5}) = 5\)
    2. \(pH = 14 - pOH = 14 - 5 = 9\)

### Problem 2
Which of the following is the strongest acid?

(A) A solution with pH = 3
(B) A solution with \([H^+] = 1.0 \times 10^{-4}\) M
(C) A solution with \([OH^-] = 1.0 \times 10^{-13}\) M
(D) A solution with pOH = 12
(E) A solution with pH = 2

??? note "Click to reveal solution"
    **Answer: C**

    **Step-by-step solution**:
    Convert all to pH for comparison:

    - **(A)** pH = 3

    - **(B)** \([H^+] = 1.0 \times 10^{-4}\) M → \(pH = -\log(10^{-4}) = 4\)

    - **(C)** \([OH^-] = 1.0 \times 10^{-13}\) M → \([H^+] = \frac{10^{-14}}{10^{-13}} = 10^{-1} = 0.1\) M → \(pH = -\log(0.1) = 1\)

    - **(D)** pOH = 12 → pH = 14 - 12 = 2

    - **(E)** pH = 2

    **Comparison**: pH values are 3, 4, 1, 2, 2. The lowest pH (most acidic) is **pH = 1** (option C).

    **Key concept**: Lower pH = stronger acid. Option C has the highest \([H^+]\) concentration.

### Problem 3
How many times more acidic is a solution with pH = 2 compared to a solution with pH = 5?

(A) 3 times
(B) 10 times
(C) 100 times
(D) 1000 times
(E) 5000 times

??? note "Click to reveal solution"
    **Answer: D (1000 times)**

    **Step-by-step solution**:
    1. pH = 2: \([H^+] = 10^{-2} = 0.01\) M
    2. pH = 5: \([H^+] = 10^{-5} = 0.00001\) M
    3. Ratio = \(\frac{[H^+]_{pH=2}}{[H^+]_{pH=5}} = \frac{10^{-2}}{10^{-5}} = 10^{-2-(-5)} = 10^3 = 1000\)

    **Key concept**: Each pH unit represents a 10-fold change in \([H^+]\). The difference is 3 pH units, so \(10^3 = 1000\) times more acidic.

### Problem 4
What volume of 0.250 M NaOH is required to completely neutralize 50.0 mL of 0.150 M HCl?

(A) 20.0 mL
(B) 30.0 mL
(C) 40.0 mL
(D) 50.0 mL
(E) 83.3 mL

??? note "Click to reveal solution"
    **Answer: B (30.0 mL)**

    **Step-by-step solution**:
    1. Balanced equation: \(HCl + NaOH \rightarrow NaCl + H_2O\) (1:1 ratio)
    2. Calculate moles of HCl: \(n_{HCl} = M \times V = 0.150 \text{ M} \times 0.0500 \text{ L} = 0.00750\) mol
    3. At equivalence point: \(n_{NaOH} = n_{HCl} = 0.00750\) mol (1:1 ratio)
    4. Calculate volume of NaOH: \(V = \frac{n}{M} = \frac{0.00750 \text{ mol}}{0.250 \text{ M}} = 0.0300 \text{ L} = 30.0 \text{ mL}\)

    **Alternative using \(M_aV_a = M_bV_b\)**:
    - \((0.150)(50.0) = (0.250)(V_b)\)
    - \(V_b = \frac{(0.150)(50.0)}{0.250} = 30.0\) mL

### Problem 5
In the reaction \(NH_3 + H_2O \rightleftharpoons NH_4^+ + OH^-\), which species are acting as Brønsted-Lowry bases?

(A) \(NH_3\) only
(B) \(H_2O\) only
(C) \(NH_3\) and \(OH^-\)
(D) \(H_2O\) and \(NH_4^+\)
(E) \(NH_4^+\) and \(OH^-\)

??? note "Click to reveal solution"
    **Answer: C** (\(NH_3\) and \(OH^-\))

    **Step-by-step solution**:

    A Brønsted-Lowry base is a proton (\(H^+\)) acceptor.

    **Forward reaction** (\(NH_3 + H_2O \rightarrow NH_4^+ + OH^-\)):
    - \(NH_3\) accepts \(H^+\) from water to become \(NH_4^+\) → **\(NH_3\) is a base**
    - \(H_2O\) donates \(H^+\) to ammonia → \(H_2O\) is an acid

    **Reverse reaction** (\(NH_4^+ + OH^- \rightarrow NH_3 + H_2O\)):
    - \(OH^-\) accepts \(H^+\) from \(NH_4^+\) to become \(H_2O\) → **\(OH^-\) is a base**
    - \(NH_4^+\) donates \(H^+\) → \(NH_4^+\) is an acid

    **Answer**: Both \(NH_3\) (forward reaction) and \(OH^-\) (reverse reaction) act as bases.

### Problem 6
A solution has a pH of 11.0. What is the concentration of hydroxide ions in this solution?

(A) \(1.0 \times 10^{-11}\) M
(B) \(1.0 \times 10^{-3}\) M
(C) \(1.0 \times 10^{3}\) M
(D) \(3.0 \times 10^{-11}\) M
(E) \(3.0 \times 10^{-3}\) M

??? note "Click to reveal solution"
    **Answer: B** (\(1.0 \times 10^{-3}\) M)

    **Step-by-step solution**:
    1. Given: pH = 11.0
    2. Find pOH: \(pOH = 14 - pH = 14 - 11 = 3\)
    3. Find \([OH^-]\): \([OH^-] = 10^{-pOH} = 10^{-3} = 1.0 \times 10^{-3}\) M

    **Alternative method**:
    1. \([H^+] = 10^{-pH} = 10^{-11}\) M
    2. \([OH^-] = \frac{K_w}{[H^+]} = \frac{1.0 \times 10^{-14}}{1.0 \times 10^{-11}} = 1.0 \times 10^{-3}\) M

### Problem 7
What is the pH at the equivalence point when a strong acid is titrated with a strong base?

(A) Less than 7
(B) Exactly 7
(C) Greater than 7
(D) Depends on the volumes used
(E) Cannot be determined

??? note "Click to reveal solution"
    **Answer: B (Exactly 7)**

    **Explanation**:

    At the equivalence point of a strong acid-strong base titration:
    1. All acid has been neutralized by the base
    2. The solution contains only the salt and water
    3. Example: \(HCl + NaOH \rightarrow NaCl + H_2O\)
    4. The salt (\(NaCl\)) is formed from a strong acid and strong base, so it doesn't hydrolyze
    5. The solution is neutral: pH = 7

    **Important notes**:
    - Weak acid + strong base: pH > 7 at equivalence point
    - Strong acid + weak base: pH < 7 at equivalence point
    - The pH at equivalence point does NOT depend on volumes, only on the nature of the acid and base

### Problem 8
Which of the following solutions would have the highest pH?

(A) 0.1 M HCl
(B) 0.1 M NaOH
(C) 0.1 M \(CH_3COOH\) (weak acid)
(D) 0.1 M \(NH_3\) (weak base)
(E) Pure water

??? note "Click to reveal solution"
    **Answer: B (0.1 M NaOH)**

    **Step-by-step solution**:

    Analyze each option:

    **(A) 0.1 M HCl** (strong acid):
    - \([H^+] = 0.1\) M
    - pH = -log(0.1) = 1 (very acidic)

    **(B) 0.1 M NaOH** (strong base):
    - \([OH^-] = 0.1\) M
    - \(pOH = -\log(0.1) = 1\)
    - \(pH = 14 - 1 = 13\) (very basic)

    **(C) 0.1 M \(CH_3COOH\)** (weak acid):
    - Partially ionizes, so pH > 1 but still < 7
    - Typical pH around 3-4 (acidic)

    **(D) 0.1 M \(NH_3\)** (weak base):
    - Partially ionizes, so pH < 13 but still > 7
    - Typical pH around 11-12 (basic)

    **(E) Pure water**:
    - pH = 7 (neutral)

    **Comparison**: pH values are approximately 1, 13, 3-4, 11-12, and 7. The highest pH is **13** (option B).

### Problem 9
How many moles of \(H_2SO_4\) are needed to neutralize 40.0 mL of 0.200 M \(KOH\)?

(A) 0.00200 mol
(B) 0.00400 mol
(C) 0.00800 mol
(D) 0.0160 mol
(E) 0.0320 mol

??? note "Click to reveal solution"
    **Answer: B (0.00400 mol)**

    **Step-by-step solution**:
    1. Balanced equation: \(H_2SO_4 + 2KOH \rightarrow K_2SO_4 + 2H_2O\)
    2. Note the stoichiometry: 1 mole \(H_2SO_4\) reacts with 2 moles \(KOH\)
    3. Calculate moles of KOH: \(n_{KOH} = M \times V = 0.200 \text{ M} \times 0.0400 \text{ L} = 0.00800\) mol
    4. Use stoichiometry: \(\frac{n_{H_2SO_4}}{1} = \frac{n_{KOH}}{2}\)
    5. \(n_{H_2SO_4} = \frac{n_{KOH}}{2} = \frac{0.00800}{2} = 0.00400\) mol

    **Key concept**: \(H_2SO_4\) is diprotic (has 2 acidic protons), so 1 mole neutralizes 2 moles of a monobasic base like KOH.

### Problem 10
A student mixes 25.0 mL of 0.100 M HCl with 25.0 mL of 0.100 M NaOH. What is the pH of the resulting solution?

(A) 1
(B) 3
(C) 7
(D) 11
(E) 13

??? note "Click to reveal solution"
    **Answer: C (pH = 7)**

    **Step-by-step solution**:
    1. Calculate moles of HCl: \(n_{HCl} = 0.100 \text{ M} \times 0.0250 \text{ L} = 0.00250\) mol
    2. Calculate moles of NaOH: \(n_{NaOH} = 0.100 \text{ M} \times 0.0250 \text{ L} = 0.00250\) mol
    3. Reaction: \(HCl + NaOH \rightarrow NaCl + H_2O\) (1:1 ratio)
    4. Both reactants are completely consumed (stoichiometric amounts)
    5. Products: 0.00250 mol NaCl (neutral salt) in 50.0 mL total volume
    6. Since NaCl doesn't hydrolyze (from strong acid + strong base), the solution is neutral
    7. pH = 7

    **Key concept**: When equal moles of a strong acid and strong base are mixed, they completely neutralize each other, resulting in a neutral solution (pH = 7).

---

## Practice Problems

1. Classify each as Arrhenius acid or base: (a) \(HBr\), (b) \(KOH\), (c) \(Ca(OH)_2\), (d) \(HNO_3\).

2. Calculate the pH of a solution with \([H^+] = 1.0 \times 10^{-8} \text{ M}\). Is it acidic or basic?

3. A solution has pH = 5. What is \([H^+]\)? What is the pOH?

4. If \([OH^-] = 1.0 \times 10^{-4} \text{ M}\), calculate \([H^+]\) and the pH.

5. Which is more acidic: a solution with pH = 2 or pH = 4? By what factor?

6. Identify the acid and base in: \(NH_3 + H_2O \rightleftharpoons NH_4^+ + OH^-\) (Brønsted-Lowry)

7. Write the balanced equation for the neutralization of sulfuric acid (\(H_2SO_4\)) with potassium hydroxide (\(KOH\)).

8. 30.0 mL of 0.200 M \(HNO_3\) is titrated with 0.150 M \(NaOH\). What volume of \(NaOH\) is needed to reach the equivalence point?

9. A solution has pOH = 9. Is it acidic or basic? Calculate the pH.

10. Explain why \(HCl\) is a strong acid but \(CH_3COOH\) (acetic acid) is a weak acid.

---

## Answer Key

??? note "Click to reveal answers"
    1. (a) **Acid** (produces \(H^+\)), (b) **Base** (produces \(OH^-\)), (c) **Base** (produces \(OH^-\)), (d) **Acid** (produces \(H^+\))

    2. \(pH = -\log(1.0 \times 10^{-8}) = 8\). **Basic** (pH > 7)

    3. \([H^+] = 10^{-5} = \mathbf{1.0 \times 10^{-5} \text{ M}}\). \(pOH = 14 - 5 = \mathbf{9}\)

    4. \([H^+] = \frac{K_w}{[OH^-]} = \frac{1.0 \times 10^{-14}}{1.0 \times 10^{-4}} = \mathbf{1.0 \times 10^{-10} \text{ M}}\). \(pH = -\log(1.0 \times 10^{-10}) = \mathbf{10}\)

    5. **pH = 2 is more acidic**. \([H^+]\) at pH 2 = \(10^{-2}\); at pH 4 = \(10^{-4}\). Factor: \(\frac{10^{-2}}{10^{-4}} = 10^2 = \mathbf{100 \text{ times more acidic}}\).

    6. **Base**: \(NH_3\) (accepts \(H^+\) from water to form \(NH_4^+\)). **Acid**: \(H_2O\) (donates \(H^+\)).

    7. \(\mathbf{H_2SO_4 + 2KOH \rightarrow K_2SO_4 + 2H_2O}\) (Note: \(H_2SO_4\) is diprotic, so 2:1 ratio)

    8. Moles \(HNO_3 = (0.200)(0.0300) = 0.00600\) mol. Moles \(NaOH\) needed = 0.00600 mol (1:1 ratio). Volume \(= \frac{0.00600}{0.150} = \mathbf{0.0400 \text{ L} = 40.0 \text{ mL}}\)

    9. \(pH = 14 - 9 = \mathbf{5}\). **Acidic** (pH < 7)

    10. \(HCl\) **completely ionizes** in water (\(HCl \rightarrow H^+ + Cl^-\), 100% dissociation), making it a strong acid. \(CH_3COOH\) **partially ionizes** (\(CH_3COOH \rightleftharpoons H^+ + CH_3COO^-\), <5% dissociation), making it a weak acid.

---

## Step Checker: Verify Your Work

Use these step-by-step checklists to verify your pH and titration calculations.

### pH Calculation Checker

#### Type 1: Given \([H^+]\), find pH

**Problem setup**: You are given \([H^+]\) concentration and need to find pH.

**Step-by-step checklist**:
- [ ] **Step 1**: Identify the given \([H^+]\) concentration (should be in M or mol/L)
- [ ] **Step 2**: Use the formula: \(pH = -\log[H^+]\)
- [ ] **Step 3**: Calculate using a calculator: \(pH = -\log(\text{your value})\)
- [ ] **Step 4**: Check if the answer makes sense:
  - If \([H^+] > 1.0 \times 10^{-7}\) M → pH should be < 7 (acidic)
  - If \([H^+] = 1.0 \times 10^{-7}\) M → pH should be = 7 (neutral)
  - If \([H^+] < 1.0 \times 10^{-7}\) M → pH should be > 7 (basic)
- [ ] **Step 5**: Verify the negative sign was included in the formula

**Example check**:
- Given: \([H^+] = 1.0 \times 10^{-4}\) M
- Step 1: \([H^+] = 1.0 \times 10^{-4}\) M (identified)
- Step 2: Use \(pH = -\log[H^+]\)
- Step 3: \(pH = -\log(1.0 \times 10^{-4}) = -(-4) = 4\)
- Step 4: \(10^{-4} > 10^{-7}\), so pH < 7. pH = 4 makes sense (acidic)
- Step 5: Negative sign included

#### Type 2: Given pH, find \([H^+]\)

**Problem setup**: You are given pH and need to find \([H^+]\) concentration.

**Step-by-step checklist**:
- [ ] **Step 1**: Identify the given pH value
- [ ] **Step 2**: Use the formula: \([H^+] = 10^{-pH}\)
- [ ] **Step 3**: Calculate: \([H^+] = 10^{-(\text{your pH value})}\)
- [ ] **Step 4**: Express answer in scientific notation (e.g., \(1.0 \times 10^{-x}\) M)
- [ ] **Step 5**: Check if the answer makes sense:
  - If pH < 7 → \([H^+]\) should be > \(10^{-7}\) M
  - If pH = 7 → \([H^+]\) should be = \(10^{-7}\) M
  - If pH > 7 → \([H^+]\) should be < \(10^{-7}\) M

**Example check**:
- Given: pH = 5
- Step 1: pH = 5 (identified)
- Step 2: Use \([H^+] = 10^{-pH}\)
- Step 3: \([H^+] = 10^{-5}\)
- Step 4: \([H^+] = 1.0 \times 10^{-5}\) M
- Step 5: pH = 5 < 7, so \(10^{-5} = 0.00001 > 10^{-7} = 0.0000001\). Answer makes sense.

#### Type 3: Given \([OH^-]\), find pH

**Problem setup**: You are given \([OH^-]\) concentration and need to find pH.

**Step-by-step checklist**:
- [ ] **Step 1**: Identify the given \([OH^-]\) concentration
- [ ] **Step 2**: Choose a method:
  - **Method A** (using pOH):
    - Calculate \(pOH = -\log[OH^-]\)
    - Then \(pH = 14 - pOH\)
  - **Method B** (using \(K_w\)):
    - Calculate \([H^+] = \frac{K_w}{[OH^-]} = \frac{1.0 \times 10^{-14}}{[OH^-]}\)
    - Then \(pH = -\log[H^+]\)
- [ ] **Step 3**: Perform the calculations
- [ ] **Step 4**: Check if the answer makes sense:
  - If \([OH^-] > 1.0 \times 10^{-7}\) M → pH should be > 7 (basic)
  - If \([OH^-] = 1.0 \times 10^{-7}\) M → pH should be = 7 (neutral)
  - If \([OH^-] < 1.0 \times 10^{-7}\) M → pH should be < 7 (acidic)
- [ ] **Step 5**: Verify that \(pH + pOH = 14\)

**Example check** (Method A):
- Given: \([OH^-] = 1.0 \times 10^{-2}\) M
- Step 1: \([OH^-] = 1.0 \times 10^{-2}\) M (identified)
- Step 2: Using Method A (pOH approach)
- Step 3: \(pOH = -\log(1.0 \times 10^{-2}) = 2\); \(pH = 14 - 2 = 12\)
- Step 4: \(10^{-2} > 10^{-7}\), so pH > 7. pH = 12 makes sense (basic)
- Step 5: \(12 + 2 = 14\) ✓

### Titration Calculation Checker

#### Type 1: Finding unknown concentration (monoprotic acid/monobasic base, 1:1 ratio)

**Problem setup**: You know the concentration and volume of one solution (titrant), and the volume of the unknown. You need to find the unknown concentration.

**Step-by-step checklist**:
- [ ] **Step 1**: Write the balanced neutralization equation
- [ ] **Step 2**: Confirm the stoichiometric ratio is 1:1 (one H+ per one OH-)
- [ ] **Step 3**: Identify known values:
  - Known concentration (\(M_1\))
  - Known volume (\(V_1\))
  - Unknown volume (\(V_2\))
- [ ] **Step 4**: Convert all volumes to liters (divide mL by 1000)
- [ ] **Step 5**: Calculate moles of known substance: \(n_1 = M_1 \times V_1\)
- [ ] **Step 6**: At equivalence point (1:1 ratio): \(n_2 = n_1\)
- [ ] **Step 7**: Calculate unknown molarity: \(M_2 = \frac{n_2}{V_2}\)
- [ ] **Step 8**: Check that your answer has reasonable magnitude (typically 0.01 M to 2 M for lab solutions)

**Example check**:
- Given: 25.0 mL of 0.100 M NaOH neutralizes 50.0 mL of HCl. Find \([HCl]\).
- Step 1: \(HCl + NaOH \rightarrow NaCl + H_2O\)
- Step 2: Ratio is 1:1 ✓
- Step 3: \(M_1 = 0.100\) M (NaOH), \(V_1 = 25.0\) mL (NaOH), \(V_2 = 50.0\) mL (HCl)
- Step 4: \(V_1 = 0.0250\) L, \(V_2 = 0.0500\) L
- Step 5: \(n_{NaOH} = 0.100 \times 0.0250 = 0.00250\) mol
- Step 6: \(n_{HCl} = n_{NaOH} = 0.00250\) mol
- Step 7: \(M_{HCl} = \frac{0.00250}{0.0500} = 0.0500\) M
- Step 8: 0.0500 M is a reasonable concentration ✓

**Alternative approach using** \(M_aV_a = M_bV_b\):
- [ ] **Quick check**: \((M_{HCl})(50.0) = (0.100)(25.0)\)
- [ ] \(M_{HCl} = \frac{(0.100)(25.0)}{50.0} = 0.0500\) M ✓

#### Type 2: Finding volume needed (monoprotic acid/monobasic base, 1:1 ratio)

**Problem setup**: You know the concentrations of both solutions and the volume of one. You need to find the volume of the other needed for neutralization.

**Step-by-step checklist**:
- [ ] **Step 1**: Write the balanced neutralization equation
- [ ] **Step 2**: Confirm the stoichiometric ratio is 1:1
- [ ] **Step 3**: Identify known values:
  - \(M_1\) (known solution)
  - \(V_1\) (known volume)
  - \(M_2\) (solution whose volume you're finding)
- [ ] **Step 4**: Convert known volume to liters if needed
- [ ] **Step 5**: Calculate moles of known substance: \(n_1 = M_1 \times V_1\)
- [ ] **Step 6**: At equivalence point (1:1 ratio): \(n_2 = n_1\)
- [ ] **Step 7**: Calculate unknown volume: \(V_2 = \frac{n_2}{M_2}\)
- [ ] **Step 8**: Convert answer to desired units (mL or L)
- [ ] **Step 9**: Check reasonableness (volumes typically between 1-100 mL in titrations)

**Example check**:
- Given: What volume of 0.250 M NaOH is needed to neutralize 50.0 mL of 0.150 M HCl?
- Step 1: \(HCl + NaOH \rightarrow NaCl + H_2O\)
- Step 2: Ratio is 1:1 ✓
- Step 3: \(M_1 = 0.150\) M (HCl), \(V_1 = 50.0\) mL (HCl), \(M_2 = 0.250\) M (NaOH)
- Step 4: \(V_1 = 0.0500\) L
- Step 5: \(n_{HCl} = 0.150 \times 0.0500 = 0.00750\) mol
- Step 6: \(n_{NaOH} = 0.00750\) mol
- Step 7: \(V_{NaOH} = \frac{0.00750}{0.250} = 0.0300\) L
- Step 8: \(V_{NaOH} = 30.0\) mL
- Step 9: 30.0 mL is a reasonable volume ✓

**Alternative approach**:
- [ ] Use \(M_aV_a = M_bV_b\): \((0.150)(50.0) = (0.250)(V_b)\)
- [ ] \(V_b = 30.0\) mL ✓

#### Type 3: Titration with different stoichiometry (e.g., diprotic acid or dihydroxy base)

**Problem setup**: The acid and base do not have a 1:1 mole ratio (e.g., \(H_2SO_4\) + 2 NaOH).

**Step-by-step checklist**:
- [ ] **Step 1**: Write the balanced neutralization equation
- [ ] **Step 2**: Identify the stoichiometric ratio (e.g., 1:2, 2:1, 1:3, etc.)
- [ ] **Step 3**: Identify known values
- [ ] **Step 4**: Convert volumes to liters
- [ ] **Step 5**: Calculate moles of known substance: \(n_1 = M_1 \times V_1\)
- [ ] **Step 6**: Use stoichiometry to find moles of unknown: \(\frac{n_2}{\text{coefficient}_2} = \frac{n_1}{\text{coefficient}_1}\)
- [ ] **Step 7**: Solve for the unknown (concentration or volume)
- [ ] **Step 8**: Check reasonableness
- [ ] **Step 9**: Verify your stoichiometry is correct

**Example check**:
- Given: How many moles of \(H_2SO_4\) are needed to neutralize 40.0 mL of 0.200 M KOH?
- Step 1: \(H_2SO_4 + 2KOH \rightarrow K_2SO_4 + 2H_2O\)
- Step 2: Ratio is 1:2 (1 \(H_2SO_4\) : 2 KOH) ✓
- Step 3: \(M_{KOH} = 0.200\) M, \(V_{KOH} = 40.0\) mL
- Step 4: \(V_{KOH} = 0.0400\) L
- Step 5: \(n_{KOH} = 0.200 \times 0.0400 = 0.00800\) mol
- Step 6: \(\frac{n_{H_2SO_4}}{1} = \frac{n_{KOH}}{2} = \frac{0.00800}{2}\)
- Step 7: \(n_{H_2SO_4} = 0.00400\) mol
- Step 8: Answer is half the moles of KOH, which makes sense given the 1:2 ratio ✓
- Step 9: 1 molecule of \(H_2SO_4\) has 2 acidic protons, so it neutralizes 2 KOH molecules ✓

### Common Calculation Errors to Check

**Final verification checklist**:
- [ ] Did you include the negative sign in \(pH = -\log[H^+]\)?
- [ ] Did you convert mL to L (divide by 1000)?
- [ ] Did you use the correct stoichiometric ratio?
- [ ] Did you check that pH + pOH = 14?
- [ ] Did you use \(K_w = 1.0 \times 10^{-14}\) correctly?
- [ ] Is your final answer in the correct units?
- [ ] Is your answer reasonable for the type of solution (acidic/basic)?
- [ ] Did you maintain appropriate significant figures?
