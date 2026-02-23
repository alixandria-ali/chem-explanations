# Chemical Kinetics

## Explanation

Chemical kinetics is the study of reaction rates and the factors that affect them. Understanding kinetics helps predict how fast reactions proceed and how to control them.

### Key Concepts

**Reaction Rate**:
- Change in concentration of reactant or product per unit time
- Rate $= \frac{\Delta[\text{concentration}]}{\Delta t}$
- Units: M/s (mol/L·s)
- Reactants: rate = $-\frac{\Delta[\text{reactant}]}{\Delta t}$ (negative because decreasing)
- Products: rate = $+\frac{\Delta[\text{product}]}{\Delta t}$ (positive because increasing)

**Factors Affecting Rate**:
1. **Concentration**: Higher concentration → more collisions → faster rate
2. **Temperature**: Higher temperature → more kinetic energy → faster rate
3. **Surface area**: Greater surface area → more collisions → faster rate
4. **Catalyst**: Lowers activation energy → faster rate (not consumed)
5. **Nature of reactants**: Some substances react faster than others

**Collision Theory**:
- For reaction to occur, particles must:
  1. Collide with sufficient energy (≥ activation energy, $E_a$)
  2. Collide with proper orientation
- **Activation energy ($E_a$)**: Minimum energy needed for reaction
- Higher $E_a$ → slower reaction

**Rate Laws**:
- For reaction: $aA + bB \rightarrow \text{products}$
- Rate law: $\text{Rate} = k[A]^m[B]^n$
  - $k$ = rate constant (depends on temperature)
  - $m$, $n$ = orders (determined experimentally, not from stoichiometry)
  - Overall order = $m + n$
- **Zero order**: Rate independent of concentration
- **First order**: Rate proportional to concentration
- **Second order**: Rate proportional to concentration squared

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

**Problem**: For the reaction $A \rightarrow B$, the concentration of A decreases from 0.80 M to 0.60 M over 40 seconds. Calculate the average rate of reaction.

**Solution**:
1. Change in concentration: $\Delta[A] = 0.60 - 0.80 = -0.20 \text{ M}$
2. Time interval: $\Delta t = 40 \text{ s}$
3. Rate $= -\frac{\Delta[A]}{\Delta t}$ (negative sign makes rate positive)
4. Rate $= -\frac{-0.20 \text{ M}}{40 \text{ s}} = \frac{0.20}{40} = 0.0050 \text{ M/s}$

**Answer**: Average rate = 0.0050 M/s (or $5.0 \times 10^{-3}$ M/s)

---

### Example 2: Determining Rate Law from Data

**Problem**: For the reaction $A + B \rightarrow C$, experimental data shows:

| Exp | [A] (M) | [B] (M) | Initial Rate (M/s) |
|-----|---------|---------|---------------------|
| 1   | 0.10    | 0.10    | 0.0050              |
| 2   | 0.20    | 0.10    | 0.020               |
| 3   | 0.10    | 0.20    | 0.0050              |

Determine the rate law and calculate $k$.

**Solution**:
1. Compare Exp 1 and 2 ([B] constant, [A] doubles):
   - Rate increases from 0.0050 to 0.020 (4× increase)
   - [A] doubles → rate quadruples → second order in A ($m = 2$)
2. Compare Exp 1 and 3 ([A] constant, [B] doubles):
   - Rate stays same (0.0050)
   - [B] doubles → no change → zero order in B ($n = 0$)
3. Rate law: $\text{Rate} = k[A]^2[B]^0 = k[A]^2$
4. Solve for $k$ using Exp 1: $0.0050 = k(0.10)^2$
5. $k = \frac{0.0050}{0.010} = 0.50 \text{ M}^{-1}\text{s}^{-1}$

**Answer**: Rate law: $\text{Rate} = k[A]^2$, $k = 0.50 \text{ M}^{-1}\text{s}^{-1}$

---

### Example 3: Effect of Catalyst on Activation Energy

**Problem**: A reaction has an activation energy of 75 kJ/mol. Adding a catalyst lowers the activation energy to 50 kJ/mol. Explain how this affects the reaction rate and whether the equilibrium position changes.

**Solution**:
1. Lower activation energy means:
   - More molecules have sufficient energy to react
   - Higher fraction of collisions are successful
   - Reaction rate increases
2. Catalyst provides alternate pathway with lower $E_a$
3. Catalyst increases rate of both forward and reverse reactions equally
4. Equilibrium is reached faster, but equilibrium constant $K$ doesn't change
5. Equilibrium position (concentrations at equilibrium) remains the same

**Answer**: The catalyst increases the reaction rate by lowering $E_a$ from 75 to 50 kJ/mol, allowing more successful collisions. The equilibrium position does not change; equilibrium is just reached faster.

---

## Practice Problems

1. List four factors that increase reaction rate.

2. For the reaction $2A \rightarrow B$, [A] decreases from 1.00 M to 0.80 M in 20 seconds. Calculate the average rate of consumption of A.

3. Explain why increasing temperature increases reaction rate using collision theory.

4. What is activation energy? How does a catalyst affect it?

5. For the rate law $\text{Rate} = k[X]^2[Y]$, what is the order with respect to X? What is the overall order?

6. Given the rate law $\text{Rate} = k[A][B]^2$, what happens to the rate if [A] is doubled and [B] is tripled?

7. For the reaction $X + Y \rightarrow Z$:

   | [X] (M) | [Y] (M) | Rate (M/s) |
   |---------|---------|------------|
   | 0.10    | 0.10    | 0.020      |
   | 0.20    | 0.10    | 0.040      |
   | 0.10    | 0.30    | 0.020      |

   Determine the rate law.

8. Why do powdered reactants react faster than large chunks of the same substance?

9. In a multi-step mechanism, what is the rate-determining step?

10. Does a catalyst affect the equilibrium constant? Explain.

---

## Answer Key

??? note "Click to reveal answers"
    1. (1) **Increase concentration**, (2) **Increase temperature**, (3) **Increase surface area**, (4) **Add a catalyst**

    2. Rate $= -\frac{\Delta[A]}{\Delta t} = -\frac{(0.80-1.00)}{20} = -\frac{-0.20}{20} = \mathbf{0.010 \text{ M/s}}$ (or $1.0 \times 10^{-2}$ M/s)

    3. Higher temperature increases **kinetic energy** of particles. This means:
       - More collisions occur (particles move faster)
       - Higher fraction of collisions have energy ≥ $E_a$
       - Both factors increase successful collision rate

    4. **Activation energy** is the minimum energy needed for a reaction to occur. A **catalyst lowers $E_a$** by providing an alternate reaction pathway, increasing the rate without being consumed.

    5. **Second order** with respect to X (exponent is 2). **Overall order = 2 + 1 = 3** (third order overall).

    6. New rate $= k[2A][3B]^2 = k \cdot 2[A] \cdot 9[B]^2 = 18 \cdot k[A][B]^2$. The rate **increases by a factor of 18**.

    7. Comparing first two rows ([Y] constant): [X] doubles, rate doubles → first order in X. Comparing first and third rows ([X] constant): [Y] triples, rate unchanged → zero order in Y. **Rate law**: $\mathbf{\text{Rate} = k[X]}$

    8. Powder has **greater surface area** than chunks. More surface area means more particles exposed and available for collisions, increasing reaction rate.

    9. The **slowest step** in the mechanism. It controls the overall rate because the reaction can't proceed faster than this step.

    10. **No**. A catalyst speeds up both forward and reverse reactions equally, so it helps reach equilibrium faster but doesn't change the equilibrium constant or position.
