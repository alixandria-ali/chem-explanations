# Chemical Kinetics

## Video Resources

<div class="video-container" markdown="1">

**Reaction Rates and Equilibrium Playlist** - Collision theory and kinetics

<iframe width="100%" height="400" src="https://www.youtube.com/embed/videoseries?list=PLSQl0a2vh4HDruddqk-uDm8j82CintX6V" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>

---

## Explanation

Chemical kinetics is the study of reaction rates and the factors that affect them. Understanding kinetics helps predict how fast reactions proceed and how to control them.

### Key Concepts

**Reaction Rate**:
- Change in concentration of reactant or product per unit time
- Rate \(= \frac{\Delta[\text{concentration}]}{\Delta t}\)
- Units: M/s (mol/L·s)
- Reactants: rate = \(-\frac{\Delta[\text{reactant}]}{\Delta t}\) (negative because decreasing)
- Products: rate = \(+\frac{\Delta[\text{product}]}{\Delta t}\) (positive because increasing)

**Factors Affecting Rate**:
1. **Concentration**: Higher concentration → more collisions → faster rate
2. **Temperature**: Higher temperature → more kinetic energy → faster rate
3. **Surface area**: Greater surface area → more collisions → faster rate
4. **Catalyst**: Lowers activation energy → faster rate (not consumed)
5. **Nature of reactants**: Some substances react faster than others

**Collision Theory**:
- For reaction to occur, particles must:
  1. Collide with sufficient energy (≥ activation energy, \(E_a\))
  2. Collide with proper orientation
- **Activation energy (\(E_a\))**: Minimum energy needed for reaction
- Higher \(E_a\) → slower reaction

**Rate Laws**:
- For reaction: \(aA + bB \rightarrow \text{products}\)
- Rate law: \(\text{Rate} = k[A]^m[B]^n\)
  - \(k\) = rate constant (depends on temperature)
  - \(m\), \(n\) = orders (determined experimentally, not from stoichiometry)
  - Overall order = \(m + n\)
- **Zero order**: Rate independent of concentration
- **First order**: Rate proportional to concentration
- **Second order**: Rate proportional to concentration squared

#### Step-by-Step: Determining Rate Law from Experimental Data

**Step 1: Set up the general rate law**
- For reaction \(aA + bB \rightarrow \text{products}\), write: \(\text{Rate} = k[A]^m[B]^n\)
- Need to find \(m\), \(n\), and \(k\)

**Step 2: Determine the order with respect to each reactant**
- Find two experiments where only ONE reactant concentration changes
- If [A] changes by factor \(x\) and rate changes by factor \(y\):
  - First order: \(y = x\) (rate changes by same factor)
  - Second order: \(y = x^2\) (rate changes by square of factor)
  - Zero order: \(y = 1\) (rate doesn't change)
- Use the relationship: \(\frac{\text{Rate}_2}{\text{Rate}_1} = \left(\frac{[A]_2}{[A]_1}\right)^m\)

**Step 3: Write the complete rate law**
- Substitute the orders found in Step 2
- Example: if \(m = 2\) and \(n = 1\), then \(\text{Rate} = k[A]^2[B]\)

**Step 4: Calculate the rate constant \(k\)**
- Use any experiment's data
- Substitute concentration and rate values into rate law
- Solve for \(k\)
- Include proper units (depends on overall order)

#### Factors Affecting Rate (Detailed)

**1. Concentration**
- Higher concentration → more particles per unit volume
- Increases collision frequency
- More collisions → faster rate
- Quantified by rate law: \(\text{Rate} = k[A]^m[B]^n\)

**2. Temperature**
- Temperature increases → average kinetic energy increases
- More molecules have \(E \geq E_a\)
- Exponential relationship: \(k = Ae^{-E_a/RT}\) (Arrhenius equation)
- Rule of thumb: 10°C increase approximately doubles reaction rate

**3. Surface Area**
- Only surface particles can collide with other reactants
- Greater surface area → more particles exposed
- Powder reacts faster than solid block (same mass)
- Important for heterogeneous reactions (different phases)

**4. Catalyst**
- Lowers activation energy (\(E_a\))
- Provides alternative reaction pathway
- Not consumed in reaction
- Doesn't change thermodynamics (ΔH, ΔG, K)
- Only affects kinetics (how fast, not how far)

**5. Nature of Reactants**
- Bond strength: weaker bonds break more easily
- Phase: gases and solutions react faster than solids
- Molecular complexity: simple molecules often react faster
- Ionic vs molecular: ionic reactions often very fast

**Reaction Mechanisms**:
- Step-by-step pathway from reactants to products
- **Elementary step**: Single-step process
- **Rate-determining step**: Slowest step controls overall rate
- **Intermediate**: Produced in one step, consumed in another
- **Catalyst**: Speeds reaction but not consumed overall

**Catalysts**:
- Lower activation energy by providing alternate pathway
- Increase rate of both forward and reverse reactions
- Do not change equilibrium position, only how fast equilibrium is reached
- Types: homogeneous (same phase) and heterogeneous (different phase)

---

## Worked Examples

### Example 1: Calculating Average Rate

**Problem**: For the reaction \(A \rightarrow B\), the concentration of A decreases from 0.80 M to 0.60 M over 40 seconds. Calculate the average rate of reaction.

**Solution**:
1. Change in concentration: \(\Delta[A] = 0.60 - 0.80 = -0.20 \text{ M}\)
2. Time interval: \(\Delta t = 40 \text{ s}\)
3. Rate \(= -\frac{\Delta[A]}{\Delta t}\) (negative sign makes rate positive)
4. Rate \(= -\frac{-0.20 \text{ M}}{40 \text{ s}} = \frac{0.20}{40} = 0.0050 \text{ M/s}\)

**Answer**: Average rate = 0.0050 M/s (or \(5.0 \times 10^{-3}\) M/s)

---

### Example 2: Determining Rate Law from Data

**Problem**: For the reaction \(A + B \rightarrow C\), experimental data shows:

| Exp | [A] (M) | [B] (M) | Initial Rate (M/s) |
|-----|---------|---------|---------------------|
| 1   | 0.10    | 0.10    | 0.0050              |
| 2   | 0.20    | 0.10    | 0.020               |
| 3   | 0.10    | 0.20    | 0.0050              |

Determine the rate law and calculate \(k\).

**Solution**:
1. Compare Exp 1 and 2 ([B] constant, [A] doubles):
   - Rate increases from 0.0050 to 0.020 (4× increase)
   - [A] doubles → rate quadruples → second order in A (\(m = 2\))
2. Compare Exp 1 and 3 ([A] constant, [B] doubles):
   - Rate stays same (0.0050)
   - [B] doubles → no change → zero order in B (\(n = 0\))
3. Rate law: \(\text{Rate} = k[A]^2[B]^0 = k[A]^2\)
4. Solve for \(k\) using Exp 1: \(0.0050 = k(0.10)^2\)
5. \(k = \frac{0.0050}{0.010} = 0.50 \text{ M}^{-1}\text{s}^{-1}\)

**Answer**: Rate law: \(\text{Rate} = k[A]^2\), \(k = 0.50 \text{ M}^{-1}\text{s}^{-1}\)

---

### Example 3: Effect of Catalyst on Activation Energy

**Problem**: A reaction has an activation energy of 75 kJ/mol. Adding a catalyst lowers the activation energy to 50 kJ/mol. Explain how this affects the reaction rate and whether the equilibrium position changes.

**Solution**:
1. Lower activation energy means:
   - More molecules have sufficient energy to react
   - Higher fraction of collisions are successful
   - Reaction rate increases
2. Catalyst provides alternate pathway with lower \(E_a\)
3. Catalyst increases rate of both forward and reverse reactions equally
4. Equilibrium is reached faster, but equilibrium constant \(K\) doesn't change
5. Equilibrium position (concentrations at equilibrium) remains the same

**Answer**: The catalyst increases the reaction rate by lowering \(E_a\) from 75 to 50 kJ/mol, allowing more successful collisions. The equilibrium position does not change; equilibrium is just reached faster.

---

## Common Mistakes in Chemical Kinetics

### Mistake 1: Confusing Rate with Rate Constant

**Wrong thinking**: "The rate constant \(k\) changes when concentration changes."

**Why it's wrong**: The rate constant \(k\) is constant at a given temperature. It only changes with temperature. What changes with concentration is the **rate** itself, not \(k\).

**Correct understanding**:
- Rate law: \(\text{Rate} = k[A]^m[B]^n\)
- \(k\) = constant (at constant temperature)
- Rate = variable (depends on concentrations)
- If [A] doubles in first-order reaction: rate doubles, but \(k\) stays the same

**Example**: For \(\text{Rate} = k[A]^2\) with \(k = 0.5\) M\(^{-1}\)s\(^{-1}\):
- When [A] = 0.1 M: Rate = 0.5(0.1)\(^2\) = 0.005 M/s
- When [A] = 0.2 M: Rate = 0.5(0.2)\(^2\) = 0.020 M/s
- Notice: Rate changed, but \(k\) remained 0.5 M\(^{-1}\)s\(^{-1}\)

---

### Mistake 2: Determining Reaction Order from Stoichiometry

**Wrong thinking**: "For \(2A + B \rightarrow C\), the rate law must be \(\text{Rate} = k[A]^2[B]\)."

**Why it's wrong**: Reaction order is determined **experimentally**, not from coefficients. The stoichiometric coefficients apply only to elementary steps, not overall reactions.

**Correct understanding**:
- Stoichiometry tells you mole ratios, not rate law
- Must use experimental data to find orders
- Only for elementary steps do coefficients = orders
- Overall reactions usually have multi-step mechanisms

**Example**: The reaction \(2NO_2 + F_2 \rightarrow 2NO_2F\) actually has rate law \(\text{Rate} = k[NO_2][F_2]\), not \(k[NO_2]^2[F_2]\)

---

### Mistake 3: Thinking Catalysts Increase Product Yield

**Wrong thinking**: "Adding a catalyst will make more product form."

**Why it's wrong**: Catalysts speed up reactions but don't change equilibrium position. The same amount of product forms at equilibrium, just faster.

**Correct understanding**:
- Catalysts lower \(E_a\) for both forward and reverse reactions
- Equilibrium constant \(K\) unchanged
- Equilibrium concentrations unchanged
- Only the time to reach equilibrium decreases
- Catalysts affect **kinetics** (rate), not **thermodynamics** (position)

**Example**: \(N_2 + 3H_2 \rightleftharpoons 2NH_3\)
- Without catalyst: reaches 30% yield in 100 hours
- With catalyst: reaches 30% yield in 2 hours
- Both reach same final yield, catalyst just makes it faster

---

### Mistake 4: Using Wrong Concentration Changes in Rate Calculations

**Wrong thinking**: "When [A] changes from 0.2 M to 0.4 M, it changes by 0.2, so I use 0.2 in my calculation."

**Why it's wrong**: For rate law determination, you need the **ratio** or **factor** by which concentration changes, not the absolute change.

**Correct understanding**:
- Use ratios: \(\frac{[A]_2}{[A]_1}\), not differences
- If [A] goes from 0.2 M to 0.4 M: factor = \(\frac{0.4}{0.2} = 2\) (doubled)
- Then check how rate changes by comparing \(\frac{\text{Rate}_2}{\text{Rate}_1}\)
- Relationship: \(\frac{\text{Rate}_2}{\text{Rate}_1} = \left(\frac{[A]_2}{[A]_1}\right)^m\)

**Example**:
- **Wrong**: [A] increases by 0.1 M, so rate increases by 0.1 M/s
- **Correct**: [A] doubles (factor of 2), so check if rate doubles (first order), quadruples (second order), or stays same (zero order)

---

### Mistake 5: Forgetting Units for Rate Constant

**Wrong thinking**: "The rate constant is just a number without units."

**Why it's wrong**: The rate constant \(k\) has units that depend on the overall reaction order. Units ensure dimensional consistency in the rate law.

**Correct understanding**:
- Units of \(k\) depend on overall order \(= m + n\)
- Rate always has units of M/s (or mol/L·s)
- Work backwards from rate law to find \(k\) units

**Units by order**:
- **Zero order**: \(k\) has units M/s
  - \(\text{Rate} = k\) → M/s = \(k\)
- **First order**: \(k\) has units s\(^{-1}\)
  - \(\text{Rate} = k[A]\) → M/s = \(k\)(M) → \(k\) = s\(^{-1}\)
- **Second order**: \(k\) has units M\(^{-1}\)s\(^{-1}\) (or L/mol·s)
  - \(\text{Rate} = k[A]^2\) → M/s = \(k\)(M)\(^2\) → \(k\) = M\(^{-1}\)s\(^{-1}\)
- **Third order**: \(k\) has units M\(^{-2}\)s\(^{-1}\)

**Example**: For \(\text{Rate} = k[A][B]^2\) (third order):
- M/s = \(k\)(M)(M)\(^2\) = \(k\)(M)\(^3\)
- \(k\) = M\(^{-2}\)s\(^{-1}\)

---

## SAT Chemistry Practice Questions

### Question 1
For the reaction \(2NO(g) + O_2(g) \rightarrow 2NO_2(g)\), the rate law is found to be \(\text{Rate} = k[NO]^2[O_2]\). If the concentration of NO is doubled while [O\(_2\)] remains constant, the rate will:

A) Remain the same
B) Double
C) Triple
D) Quadruple
E) Increase by a factor of 8

### Question 2
Which of the following will NOT increase the rate of a chemical reaction?

A) Increasing the temperature
B) Adding a catalyst
C) Increasing the concentration of reactants
D) Increasing the pressure (for gaseous reactions)
E) Adding an inert gas at constant volume

### Question 3
The rate constant for a first-order reaction is 0.0150 s\(^{-1}\). What are the correct units for this rate constant?

A) M/s
B) s\(^{-1}\)
C) M\(^{-1}\)s\(^{-1}\)
D) M\(^{-2}\)s\(^{-1}\)
E) No units (dimensionless)

### Question 4
For the reaction \(A + B \rightarrow C\), the following data were obtained:

| Exp | [A] (M) | [B] (M) | Initial Rate (M/s) |
|-----|---------|---------|---------------------|
| 1   | 0.10    | 0.10    | 0.015               |
| 2   | 0.10    | 0.30    | 0.045               |
| 3   | 0.20    | 0.10    | 0.015               |

What is the rate law for this reaction?

A) Rate = k[A][B]
B) Rate = k[A]^2[B]
C) Rate = k[B]
D) Rate = k[A][B]^2
E) Rate = k[B]^2

### Question 5
Activation energy is best defined as:

A) The energy released during a reaction
B) The minimum energy required for a reaction to occur
C) The difference between products and reactants energy
D) The energy absorbed to break all bonds
E) The heat of reaction

### Question 6
A catalyst increases the rate of a chemical reaction by:

A) Increasing the temperature of the reaction
B) Increasing the concentration of reactants
C) Changing the equilibrium constant
D) Lowering the activation energy
E) Providing additional reactant molecules

### Question 7
For the reaction \(X \rightarrow Y\), the concentration of X decreases from 0.80 M to 0.20 M in 60 seconds. What is the average rate of disappearance of X?

A) 0.010 M/s
B) 0.013 M/s
C) 0.020 M/s
D) 0.60 M/s
E) 48 M/s

### Question 8
Which statement about reaction mechanisms is true?

A) The slowest step is called the rate-determining step
B) All steps in a mechanism occur at the same rate
C) The coefficients in the overall equation determine the rate law
D) Catalysts appear in the overall balanced equation
E) Intermediates appear in the final products

### Question 9
In collision theory, for a reaction to occur, colliding molecules must:

I. Have sufficient energy
II. Have proper orientation
III. Be in the same phase

A) I only
B) II only
C) I and II only
D) I and III only
E) I, II, and III

### Question 10
The rate law for a reaction is \(\text{Rate} = k[A]^2[B]\). What is the overall order of this reaction?

A) First order
B) Second order
C) Third order
D) Fourth order
E) Cannot be determined

---

## SAT Chemistry Solutions

### Solution 1: **Answer: D) Quadruple**

**Explanation**:
- Given rate law: \(\text{Rate} = k[NO]^2[O_2]\)
- If [NO] doubles: new rate = \(k(2[NO])^2[O_2] = k \cdot 4[NO]^2[O_2] = 4 \times\) original rate
- The exponent of 2 on [NO] means doubling [NO] increases rate by \(2^2 = 4\)
- [O\(_2\)] remains constant, so it doesn't affect the comparison

**Key concept**: When a reactant with order \(n\) changes by factor \(x\), rate changes by factor \(x^n\)

---

### Solution 2: **Answer: E) Adding an inert gas at constant volume**

**Explanation**:
- Options A-D all increase reaction rate:
  - A: Higher temperature → more kinetic energy → more successful collisions
  - B: Catalyst → lowers \(E_a\) → faster rate
  - C: Higher concentration → more collisions
  - D: Increasing pressure → effectively increases concentration for gases
- Option E: Adding inert gas at constant volume
  - Total pressure increases, but partial pressures of reactants unchanged
  - Concentrations of reactants unchanged
  - No effect on collision frequency between reactant molecules
  - Rate remains the same

**Key concept**: Only changes that affect reactant concentration, energy, or \(E_a\) affect rate

---

### Solution 3: **Answer: B) s\(^{-1}\)**

**Explanation**:
- For first-order reactions: \(\text{Rate} = k[A]\)
- Rate has units M/s
- Setting up dimensional analysis: M/s = \(k\)(M)
- Solving for \(k\): \(k\) = M/s ÷ M = s\(^{-1}\)
- The problem already states the units are 0.0150 s\(^{-1}\), confirming this is first order

**Units by order**:
- Zero order: M/s
- First order: s\(^{-1}\)
- Second order: M\(^{-1}\)s\(^{-1}\)
- Third order: M\(^{-2}\)s\(^{-1}\)

---

### Solution 4: **Answer: C) Rate = k[B]**

**Explanation**:

**Step 1**: Find order with respect to [A]
- Compare Exp 1 and 3 ([B] constant, [A] doubles)
- [A]: 0.10 → 0.20 (factor of 2)
- Rate: 0.015 → 0.015 (factor of 1, no change)
- Since rate doesn't change when [A] doubles: zero order in A

**Step 2**: Find order with respect to [B]
- Compare Exp 1 and 2 ([A] constant, [B] triples)
- [B]: 0.10 → 0.30 (factor of 3)
- Rate: 0.015 → 0.045 (factor of 3)
- Since rate triples when [B] triples: first order in B

**Step 3**: Write rate law
- Rate = k[A]\(^0\)[B]\(^1\) = k[B]

**Verification**: Use Exp 2: if Rate = k[B], then k = 0.045/0.30 = 0.15 s\(^{-1}\)

---

### Solution 5: **Answer: B) The minimum energy required for a reaction to occur**

**Explanation**:
- Activation energy (\(E_a\)) is the energy barrier that must be overcome
- Represents minimum kinetic energy needed for successful collision
- Not all collisions lead to reaction—only those with \(E \geq E_a\)
- Higher \(E_a\) → fewer molecules have sufficient energy → slower reaction

**Why other answers are wrong**:
- A: Energy released is ΔH (enthalpy change), not \(E_a\)
- C: Difference between products and reactants is ΔH, not \(E_a\)
- D: Bond breaking energy is related but not the definition of \(E_a\)
- E: Heat of reaction is ΔH

**Key concept**: \(E_a\) is about the energy barrier height, not the overall energy change

---

### Solution 6: **Answer: D) Lowering the activation energy**

**Explanation**:
- Catalysts provide an alternative reaction pathway with lower \(E_a\)
- Lower \(E_a\) → more molecules have \(E \geq E_a\) → more successful collisions
- Catalyst is not consumed in the overall reaction
- Increases rate of both forward and reverse reactions equally

**Why other answers are wrong**:
- A: Catalysts don't change temperature
- B: Catalysts don't change concentration of reactants
- C: Catalysts don't change K (equilibrium constant)
- E: Catalysts don't provide reactants

**Important**: Catalysts affect kinetics (how fast) but not thermodynamics (how far)

---

### Solution 7: **Answer: A) 0.010 M/s**

**Explanation**:

**Step 1**: Calculate change in concentration
- Δ[X] = final - initial = 0.20 - 0.80 = -0.60 M
- Negative because concentration is decreasing

**Step 2**: Calculate time interval
- Δt = 60 s

**Step 3**: Calculate average rate
- Rate of disappearance = -Δ[X]/Δt
- Rate = -(-0.60 M)/(60 s) = 0.60/60 = 0.010 M/s
- Negative sign makes rate positive

**Answer**: 0.010 M/s

**Note**: Rate of disappearance is always expressed as positive value

---

### Solution 8: **Answer: A) The slowest step is called the rate-determining step**

**Explanation**:
- In multi-step mechanisms, the slowest step limits overall rate
- Reaction can't go faster than its slowest step
- Like traffic bottleneck—overall flow limited by narrowest point
- Rate law derived from rate-determining step (for elementary steps)

**Why other answers are wrong**:
- B: Steps have different rates; slowest controls overall rate
- C: Coefficients don't determine rate law (only experiments do)
- D: Catalysts don't appear in overall equation (consumed then regenerated)
- E: Intermediates are produced then consumed; don't appear in overall equation

**Key concept**: Rate-determining step = molecular "bottleneck" of reaction

---

### Solution 9: **Answer: C) I and II only**

**Explanation**:

**Statement I (True)**: Must have sufficient energy
- Need \(E \geq E_a\) (activation energy)
- If energy too low, particles bounce apart without reacting
- This is the energy requirement

**Statement II (True)**: Must have proper orientation
- Molecules must collide in right geometry
- Reactive sites must come into contact
- This is the orientation requirement

**Statement III (False)**: Don't need to be in same phase
- Heterogeneous reactions occur between different phases
- Example: solid catalyst with gas reactants
- Example: metal reacting with acid solution

**Both I and II are necessary conditions according to collision theory**

---

### Solution 10: **Answer: C) Third order**

**Explanation**:
- Rate law: \(\text{Rate} = k[A]^2[B]\)
- Order with respect to A: 2 (exponent on [A])
- Order with respect to B: 1 (exponent on [B])
- Overall order = sum of all exponents = 2 + 1 = 3

**Overall order formula**: Add all exponents in rate law

**Examples**:
- Rate = k[A]: first order overall
- Rate = k[A][B]: second order overall (1 + 1)
- Rate = k[A]\(^2\)[B]: third order overall (2 + 1)
- Rate = k[A]\(^2\)[B]\(^2\): fourth order overall (2 + 2)

**Key concept**: Overall order = sum of individual orders, found experimentally

---

## Practice Problems

1. List four factors that increase reaction rate.

2. For the reaction \(2A \rightarrow B\), [A] decreases from 1.00 M to 0.80 M in 20 seconds. Calculate the average rate of consumption of A.

3. Explain why increasing temperature increases reaction rate using collision theory.

4. What is activation energy? How does a catalyst affect it?

5. For the rate law \(\text{Rate} = k[X]^2[Y]\), what is the order with respect to X? What is the overall order?

6. Given the rate law \(\text{Rate} = k[A][B]^2\), what happens to the rate if [A] is doubled and [B] is tripled?

7. For the reaction \(X + Y \rightarrow Z\):

   | [X] (M) | [Y] (M) | Rate (M/s) |
   |---------|---------|------------|
   | 0.10    | 0.10    | 0.020      |
   | 0.20    | 0.10    | 0.040      |
   | 0.10    | 0.30    | 0.020      |

   Determine the rate law.

8. Why do powdered reactants react faster than large chunks of the same substance?

9. In a multi-step mechanism, what is the rate-determining step?

10. Does a catalyst affect the equilibrium constant? Explain.

11. **Step Checker Problem**: For the reaction \(2A + B \rightarrow C + D\), the following data were collected:

    | Exp | [A] (M) | [B] (M) | Initial Rate (M/s) |
    |-----|---------|---------|---------------------|
    | 1   | 0.20    | 0.10    | 0.040               |
    | 2   | 0.40    | 0.10    | 0.160               |
    | 3   | 0.20    | 0.20    | 0.080               |

    Determine the rate law and calculate the rate constant \(k\) with proper units.

---

## Answer Key

??? note "Click to reveal answers"
    1. (1) **Increase concentration**, (2) **Increase temperature**, (3) **Increase surface area**, (4) **Add a catalyst**

    2. Rate \(= -\frac{\Delta[A]}{\Delta t} = -\frac{(0.80-1.00)}{20} = -\frac{-0.20}{20} = \mathbf{0.010 \text{ M/s}}\) (or \(1.0 \times 10^{-2}\) M/s)

    3. Higher temperature increases **kinetic energy** of particles. This means:
       - More collisions occur (particles move faster)
       - Higher fraction of collisions have energy ≥ \(E_a\)
       - Both factors increase successful collision rate

    4. **Activation energy** is the minimum energy needed for a reaction to occur. A **catalyst lowers \(E_a\)** by providing an alternate reaction pathway, increasing the rate without being consumed.

    5. **Second order** with respect to X (exponent is 2). **Overall order = 2 + 1 = 3** (third order overall).

    6. New rate \(= k[2A][3B]^2 = k \cdot 2[A] \cdot 9[B]^2 = 18 \cdot k[A][B]^2\). The rate **increases by a factor of 18**.

    7. Comparing first two rows ([Y] constant): [X] doubles, rate doubles → first order in X. Comparing first and third rows ([X] constant): [Y] triples, rate unchanged → zero order in Y. **Rate law**: \(\mathbf{\text{Rate} = k[X]}\)

    8. Powder has **greater surface area** than chunks. More surface area means more particles exposed and available for collisions, increasing reaction rate.

    9. The **slowest step** in the mechanism. It controls the overall rate because the reaction can't proceed faster than this step.

    10. **No**. A catalyst speeds up both forward and reverse reactions equally, so it helps reach equilibrium faster but doesn't change the equilibrium constant or position.

    11. **Step-by-Step Solution**:

        **Step 1: Set up general rate law**
        - For reaction \(2A + B \rightarrow C + D\)
        - General form: \(\text{Rate} = k[A]^m[B]^n\)
        - Need to find \(m\), \(n\), and \(k\)

        ??? note "Check Step 1"
            - Did you write the general rate law?
            - Did you identify that you need to find \(m\), \(n\), and \(k\)?
            - Remember: Don't use stoichiometric coefficients (2 and 1) as exponents yet!

        **Step 2: Find order with respect to [A]**
        - Compare Exp 1 and 2 (keep [B] constant, vary [A])
        - [A] changes: 0.20 → 0.40 (factor of 2, doubled)
        - Rate changes: 0.040 → 0.160 (factor of 4, quadrupled)
        - Set up ratio: \(\frac{\text{Rate}_2}{\text{Rate}_1} = \left(\frac{[A]_2}{[A]_1}\right)^m\)
        - \(\frac{0.160}{0.040} = \left(\frac{0.40}{0.20}\right)^m\)
        - \(4 = 2^m\)
        - \(m = 2\) (second order in A)

        ??? note "Check Step 2"
            - Did you identify which experiments to compare?
            - Did you calculate the factor by which [A] changed? (Should be 2)
            - Did you calculate the factor by which rate changed? (Should be 4)
            - Did you solve \(4 = 2^m\) to get \(m = 2\)?
            - Common mistake: Don't subtract concentrations, use ratios!

        **Step 3: Find order with respect to [B]**
        - Compare Exp 1 and 3 (keep [A] constant, vary [B])
        - [B] changes: 0.10 → 0.20 (factor of 2, doubled)
        - Rate changes: 0.040 → 0.080 (factor of 2, doubled)
        - Set up ratio: \(\frac{\text{Rate}_3}{\text{Rate}_1} = \left(\frac{[B]_3}{[B]_1}\right)^n\)
        - \(\frac{0.080}{0.040} = \left(\frac{0.20}{0.10}\right)^n\)
        - \(2 = 2^n\)
        - \(n = 1\) (first order in B)

        ??? note "Check Step 3"
            - Did you compare correct experiments (1 and 3)?
            - Did you calculate both factors as 2?
            - Did you conclude \(n = 1\)?
            - When rate changes by same factor as concentration, that's first order!

        **Step 4: Write the complete rate law**
        - Substitute \(m = 2\) and \(n = 1\)
        - \(\text{Rate} = k[A]^2[B]^1\)
        - Simplified: \(\mathbf{\text{Rate} = k[A]^2[B]}\)
        - Overall order = 2 + 1 = 3 (third order)

        ??? note "Check Step 4"
            - Did you substitute the correct exponents?
            - Did you simplify [B]\(^1\) to just [B]?
            - Did you calculate overall order as 3?

        **Step 5: Calculate rate constant \(k\) with units**
        - Use any experiment (let's use Exp 1)
        - \(0.040 = k(0.20)^2(0.10)\)
        - \(0.040 = k(0.04)(0.10)\)
        - \(0.040 = k(0.004)\)
        - \(k = \frac{0.040}{0.004} = 10\)

        - Find units: \(\text{Rate} = k[A]^2[B]\)
        - M/s = \(k\)(M)\(^2\)(M) = \(k\)(M)\(^3\)
        - \(k = \frac{\text{M/s}}{\text{M}^3} = \text{M}^{-2}\text{s}^{-1}\)

        - **Final answer**: \(\mathbf{k = 10 \text{ M}^{-2}\text{s}^{-1}}\)

        ??? note "Check Step 5"
            - Did you substitute concentrations and rate from one experiment?
            - Did you solve for \(k\) correctly? (Should be 10)
            - Did you determine units based on overall order 3?
            - For third order: \(k\) units = M\(^{-2}\)s\(^{-1}\)
            - Verification: Try another experiment to confirm same \(k\) value

        **Complete Answer**:
        - **Rate law**: \(\mathbf{\text{Rate} = k[A]^2[B]}\)
        - **Rate constant**: \(\mathbf{k = 10 \text{ M}^{-2}\text{s}^{-1}}\)
        - **Overall order**: Third order (2 + 1 = 3)
