# Thermodynamics

## Explanation

Thermodynamics studies energy transformations and predicts reaction spontaneity. Understanding entropy and Gibbs free energy is essential for AP Chemistry and predicting chemical behavior.

### Key Concepts

**Laws of Thermodynamics**:
- **First Law**: Energy is conserved. \(\Delta E = q + w\)
  - \(\Delta E\) = change in internal energy
  - \(q\) = heat (+ absorbed, - released)
  - \(w\) = work (+ done on system, - done by system)

**Enthalpy (\(H\))**: Heat content at constant pressure
- \(\Delta H = q_p\) (heat at constant pressure)
- Hess's Law: \(\Delta H\) is path-independent

**Entropy (\(S\))**: Measure of disorder/randomness
- Units: J/mol·K
- Higher entropy = more disorder
- \(\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}}\)

**Entropy Changes**:
- **Increase entropy** (\(\Delta S > 0\)):
  - Gas formation from liquid/solid
  - More moles of gas products than reactants
  - Dissolving, mixing, heating
- **Decrease entropy** (\(\Delta S < 0\)):
  - Gas → liquid/solid
  - Fewer moles of gas products
  - Cooling, ordering

**Calculating \(\Delta S°\)**:
\[\Delta S° = \sum S°_{\text{products}} - \sum S°_{\text{reactants}}\]

**Second Law**: Spontaneous processes increase universal entropy (\(\Delta S_{\text{univ}} > 0\))

**Third Law**: Perfect crystal at 0 K has \(S = 0\)

**Gibbs Free Energy (\(G\))**: Predicts spontaneity at constant T and P
\[\Delta G = \Delta H - T\Delta S\]

**Spontaneity**:
- \(\Delta G < 0\): Spontaneous (thermodynamically favored)
- \(\Delta G > 0\): Non-spontaneous (thermodynamically unfavored)
- \(\Delta G = 0\): At equilibrium

**Temperature Dependence**:

| \(\Delta H\) | \(\Delta S\) | \(\Delta G\) | Spontaneity |
|------------|------------|------------|-------------|
| - (exo)    | + (increase) | Always - | Spontaneous at all T |
| + (endo)   | - (decrease) | Always + | Never spontaneous |
| - (exo)    | - (decrease) | - at low T | Spontaneous at low T |
| + (endo)   | + (increase) | - at high T | Spontaneous at high T |

**Standard Free Energy**:
\[\Delta G° = \sum \Delta G_f°(\text{products}) - \sum \Delta G_f°(\text{reactants})\]
\[\Delta G° = -RT\ln K\]
- \(R = 8.314 \text{ J/mol·K}\)
- \(K\) = equilibrium constant

**Relationship to Equilibrium**:
\[\Delta G = \Delta G° + RT\ln Q\]

---

## Enhanced Explanations

### Understanding Entropy Step-by-Step

**What is Entropy?**
Entropy (\(S\)) measures the number of possible microscopic arrangements (microstates) of a system. More microstates mean higher entropy and more disorder.

**Step-by-Step Approach to Entropy:**

1. **Identify the initial and final states**: What physical or chemical change is occurring?

2. **Consider molecular freedom**: More freedom of movement means higher entropy
   - **Gases** have the highest entropy (molecules move freely in all directions)
   - **Liquids** have intermediate entropy (molecules can slide past each other)
   - **Solids** have the lowest entropy (molecules are fixed in position)

3. **Count moles of gas**: Gas phase has the biggest impact on entropy
   - More moles of gas = higher entropy
   - Compare total moles of gas on each side of equation

4. **Consider temperature**: Higher temperature always increases entropy
   - More kinetic energy = more possible arrangements

5. **Calculate \(\Delta S°\)** using standard molar entropies:
   \[\Delta S° = \sum n S°_{\text{products}} - \sum m S°_{\text{reactants}}\]
   where \(n\) and \(m\) are stoichiometric coefficients

**Example**: For \(N_2(g) + 3H_2(g) \rightarrow 2NH_3(g)\)
- Reactants: 4 moles of gas (1 + 3)
- Products: 2 moles of gas
- \(\Delta S° < 0\) (entropy decreases) because we have fewer moles of gas

### Understanding Gibbs Free Energy Step-by-Step

**What is Gibbs Free Energy?**
Gibbs free energy (\(G\)) combines enthalpy and entropy to predict spontaneity at constant temperature and pressure. It represents the maximum useful work obtainable from a process.

**Step-by-Step Approach to Gibbs Free Energy:**

1. **Identify \(\Delta H\)**: Is the reaction exothermic (–) or endothermic (+)?
   - Exothermic releases heat, favoring spontaneity
   - Endothermic absorbs heat, opposing spontaneity

2. **Identify \(\Delta S\)**: Does entropy increase (+) or decrease (–)?
   - Entropy increase favors spontaneity
   - Entropy decrease opposes spontaneity

3. **Check units**: CRITICAL for avoiding errors
   - \(\Delta H\) is typically in kJ or kJ/mol
   - \(\Delta S\) is typically in J/K or J/mol·K
   - Convert \(\Delta S\) to kJ/K by dividing by 1000

4. **Apply the Gibbs equation**:
   \[\Delta G = \Delta H - T\Delta S\]
   - \(T\) must be in Kelvin (K = °C + 273.15)
   - All terms must have consistent units

5. **Interpret the result**:
   - \(\Delta G < 0\): Spontaneous (reaction favors products)
   - \(\Delta G > 0\): Non-spontaneous (reaction favors reactants)
   - \(\Delta G = 0\): System at equilibrium

**Example Calculation**:
Given: \(\Delta H° = -200 \text{ kJ}\), \(\Delta S° = +150 \text{ J/K}\), \(T = 298 \text{ K}\)

- Convert: \(\Delta S° = 150 \text{ J/K} = 0.150 \text{ kJ/K}\)
- Calculate: \(\Delta G° = -200 - (298)(0.150)\)
- \(\Delta G° = -200 - 44.7 = -244.7 \text{ kJ}\)
- Result: Spontaneous (both enthalpy and entropy favor the reaction)

### Understanding Spontaneity and Temperature

**How Temperature Affects Spontaneity:**

The equation \(\Delta G = \Delta H - T\Delta S\) shows that temperature can change whether a reaction is spontaneous.

**Four Scenarios:**

1. **\(\Delta H < 0\), \(\Delta S > 0\)**: Spontaneous at ALL temperatures
   - Both terms favor spontaneity: \(\Delta G = (-) - T(+) = (-) - (+) = \text{always negative}\)

2. **\(\Delta H > 0\), \(\Delta S < 0\)**: NEVER spontaneous
   - Both terms oppose spontaneity: \(\Delta G = (+) - T(-) = (+) + (+) = \text{always positive}\)

3. **\(\Delta H < 0\), \(\Delta S < 0\)**: Spontaneous at LOW temperatures
   - Enthalpy favors, entropy opposes
   - At low T: \(|\Delta H| > T|\Delta S|\), so \(\Delta G < 0\)
   - At high T: \(T|\Delta S| > |\Delta H|\), so \(\Delta G > 0\)

4. **\(\Delta H > 0\), \(\Delta S > 0\)**: Spontaneous at HIGH temperatures
   - Entropy favors, enthalpy opposes
   - At low T: \(\Delta H > T\Delta S\), so \(\Delta G > 0\)
   - At high T: \(T\Delta S > \Delta H\), so \(\Delta G < 0\)

**Finding the Crossover Temperature:**
Set \(\Delta G = 0\) and solve for T:
\[T = \frac{\Delta H}{\Delta S}\]
This is the temperature where the reaction transitions between spontaneous and non-spontaneous.

---

## Common Mistakes to Avoid

### Mistake 1: Sign Convention Errors with \(\Delta S\)

**Error**: Forgetting that in \(\Delta G = \Delta H - T\Delta S\), the \(\Delta S\) term is SUBTRACTED.

**Example of Wrong Thinking**:
"Since \(\Delta S\) is negative and we're subtracting it, that makes \(\Delta G\) more negative, favoring spontaneity."

**Correct Analysis**:
\(\Delta G = \Delta H - T\Delta S = \Delta H - T(-\Delta S) = \Delta H + T|\Delta S|\)

A negative \(\Delta S\) actually INCREASES \(\Delta G\) (makes it more positive), opposing spontaneity.

**How to Avoid**: Always substitute actual values with signs, then do the arithmetic carefully.

### Mistake 2: Unit Conversion for \(\Delta H\) and \(\Delta S\)

**Error**: Using \(\Delta H\) in kJ and \(\Delta S\) in J/K without converting to the same unit.

**Wrong Calculation**:
\(\Delta H = -50 \text{ kJ}\), \(\Delta S = 100 \text{ J/K}\), \(T = 300 \text{ K}\)
\(\Delta G = -50 - (300)(100) = -50 - 30000 = -30050 \text{ kJ}\) (WRONG!)

**Correct Calculation**:
Convert \(\Delta S = 100 \text{ J/K} = 0.100 \text{ kJ/K}\)
\(\Delta G = -50 - (300)(0.100) = -50 - 30 = -80 \text{ kJ}\) (CORRECT)

**How to Avoid**: ALWAYS convert \(\Delta S\) from J/K to kJ/K (divide by 1000) before plugging into the equation.

### Mistake 3: Confusing \(\Delta G\) and \(\Delta G°\)

**Error**: Thinking \(\Delta G°\) and \(\Delta G\) are the same thing.

**Key Differences**:
- **\(\Delta G°\)**: Standard free energy change (all species at 1 M, 1 atm, 25°C)
- **\(\Delta G\)**: Free energy change under ANY conditions

**Relationship**:
\[\Delta G = \Delta G° + RT\ln Q\]

**When to Use Which**:
- Use \(\Delta G°\) to find equilibrium constant: \(\Delta G° = -RT\ln K\)
- Use \(\Delta G\) to determine if a reaction is spontaneous under specific conditions
- At equilibrium: \(Q = K\) and \(\Delta G = 0\) (but \(\Delta G°\) may not be zero!)

**How to Avoid**: Always check whether you're working with standard conditions or actual conditions.

### Mistake 4: Temperature Dependence Assumptions

**Error**: Assuming \(\Delta H\) and \(\Delta S\) change significantly with temperature.

**Reality**: For most AP Chemistry problems, \(\Delta H°\) and \(\Delta S°\) are approximately constant over moderate temperature ranges (room temperature to a few hundred degrees).

**This allows us to write**:
\[\Delta G(T) = \Delta H° - T\Delta S°\]
even at temperatures other than 25°C.

**When this breaks down**: At very high temperatures (above 1000 K) or involving phase changes, \(\Delta H\) and \(\Delta S\) can change.

**How to Avoid**: Unless told otherwise, treat \(\Delta H°\) and \(\Delta S°\) as constants when calculating \(\Delta G\) at different temperatures.

### Mistake 5: Misinterpreting Spontaneity and Reaction Rate

**Error**: Thinking \(\Delta G < 0\) means the reaction occurs quickly.

**Reality**:
- **Thermodynamics** (Gibbs free energy) tells us IF a reaction will occur (direction)
- **Kinetics** (activation energy) tells us HOW FAST it occurs (rate)

**Classic Example**: Diamond converting to graphite
- \(\Delta G < 0\) at room temperature (thermodynamically favored)
- But the reaction is essentially infinitely slow (high activation energy)
- Diamonds are "forever" kinetically, not thermodynamically

**Another Example**: Combustion of gasoline and oxygen
- Very negative \(\Delta G\) (highly spontaneous)
- But doesn't occur until you provide a spark (activation energy)

**How to Avoid**: Remember that spontaneity only indicates the final equilibrium position, not the path or speed to get there.

---

## Worked Examples

### Example 1: Calculating \(\Delta G\) and Predicting Spontaneity

**Problem**: For a reaction, \(\Delta H° = -125 \text{ kJ}\) and \(\Delta S° = -200 \text{ J/K}\) at 298 K. Calculate \(\Delta G°\) and determine if the reaction is spontaneous.

**Solution**:
1. Use formula: \(\Delta G° = \Delta H° - T\Delta S°\)
2. Convert units: \(\Delta S° = -200 \text{ J/K} = -0.200 \text{ kJ/K}\)
3. Substitute: \(\Delta G° = -125 \text{ kJ} - (298 \text{ K})(-0.200 \text{ kJ/K})\)
4. \(\Delta G° = -125 + 59.6 = -65.4 \text{ kJ}\)
5. Since \(\Delta G° < 0\), reaction is spontaneous at 298 K

**Answer**: \(\Delta G° = -65.4 \text{ kJ}\), spontaneous at 298 K

#### Step-by-Step Checker for \(\Delta G\) Calculations

Use this checklist to verify your work on Gibbs free energy calculations:

**Step 1: Identify given values**
- [ ] Write down \(\Delta H°\) with units (typically kJ or kJ/mol)
- [ ] Write down \(\Delta S°\) with units (typically J/K or J/mol·K)
- [ ] Write down temperature T (convert to Kelvin if needed: K = °C + 273.15)
- [ ] Note which equation to use: \(\Delta G = \Delta H - T\Delta S\)

**Step 2: Unit conversion (CRITICAL)**
- [ ] Check if \(\Delta H\) is in kJ → keep as is
- [ ] Check if \(\Delta S\) is in J/K → convert to kJ/K by dividing by 1000
- [ ] Verify temperature is in Kelvin (not Celsius)
- [ ] Ensure all energy units match (all in kJ or all in J)

**Common error check**: Using \(\Delta H\) in kJ but \(\Delta S\) in J/K leads to wrong answers by a factor of 1000!

**Step 3: Substitute into equation**
- [ ] Write out: \(\Delta G = \Delta H - T\Delta S\)
- [ ] Plug in values WITH signs: \(\Delta G = (\text{value with sign}) - (T)(\text{value with sign})\)
- [ ] Keep units throughout: example \(\Delta G = -125 \text{ kJ} - (298 \text{ K})(−0.200 \text{ kJ/K})\)

**Step 4: Calculate the \(T\Delta S\) term**
- [ ] Multiply T by \(\Delta S\): \((298)(−0.200) = −59.6 \text{ kJ}\)
- [ ] Pay attention to the sign!

**Step 5: Complete the calculation**
- [ ] Perform subtraction: \(\Delta G = \Delta H - (T\Delta S)\)
- [ ] Example: \(-125 - (−59.6) = -125 + 59.6 = -65.4 \text{ kJ}\)
- [ ] Double-check sign arithmetic

**Step 6: Interpret the result**
- [ ] If \(\Delta G < 0\): reaction is spontaneous (thermodynamically favored)
- [ ] If \(\Delta G > 0\): reaction is non-spontaneous (thermodynamically unfavored)
- [ ] If \(\Delta G = 0\): system is at equilibrium
- [ ] Check if the answer makes sense:
  - Exothermic + entropy increase → should be spontaneous (negative \(\Delta G\))
  - Endothermic + entropy decrease → should be non-spontaneous (positive \(\Delta G\))

**Step 7: Final verification**
- [ ] Units on final answer are in kJ (or J)
- [ ] Sign makes thermodynamic sense given \(\Delta H\) and \(\Delta S\) values
- [ ] Magnitude is reasonable (typically between -200 and +200 kJ for most reactions)

**Practice with the checker**: Redo Example 1 above using this step-by-step verification!

---

### Example 2: Finding Temperature for Spontaneity

**Problem**: A reaction has \(\Delta H° = +150 \text{ kJ}\) and \(\Delta S° = +250 \text{ J/K}\). At what temperature does the reaction become spontaneous?

**Solution**:
1. For spontaneity: \(\Delta G < 0\)
2. At threshold: \(\Delta G = 0\)
3. \(0 = \Delta H - T\Delta S\)
4. \(T = \frac{\Delta H}{\Delta S}\)
5. Convert: \(\Delta H = 150 \text{ kJ} = 150,000 \text{ J}\), \(\Delta S = 250 \text{ J/K}\)
6. \(T = \frac{150,000 \text{ J}}{250 \text{ J/K}} = 600 \text{ K}\)
7. Above 600 K, \(T\Delta S > \Delta H\), so \(\Delta G < 0\) (spontaneous)

**Answer**: The reaction becomes spontaneous above 600 K (or 327°C)

---

### Example 3: Relating \(\Delta G°\) and \(K\)

**Problem**: A reaction at 25°C has \(K = 1.5 \times 10^{-5}\). Calculate \(\Delta G°\).

**Solution**:
1. Use formula: \(\Delta G° = -RT\ln K\)
2. \(R = 8.314 \text{ J/mol·K}\), \(T = 298 \text{ K}\)
3. \(\Delta G° = -(8.314)(298)\ln(1.5 \times 10^{-5})\)
4. \(\ln(1.5 \times 10^{-5}) = \ln(1.5) + \ln(10^{-5}) = 0.405 - 11.513 = -11.108\)
5. \(\Delta G° = -(8.314)(298)(-11.108)\)
6. \(\Delta G° = (2477.6)(11.108) = 27,520 \text{ J} = 27.5 \text{ kJ}\)

**Answer**: \(\Delta G° = +27.5 \text{ kJ}\) (positive, so reactants favored at equilibrium)

---

## AP-Level Practice Problems

### Challenging Problems (AP Exam Style)

1. Define entropy. Does entropy increase or decrease when ice melts to water?

2. For the reaction \(2SO_2(g) + O_2(g) \rightarrow 2SO_3(g)\), predict the sign of \(\Delta S°\) (positive or negative). Explain.

3. A reaction has \(\Delta H° = -50 \text{ kJ}\) and \(\Delta S° = +100 \text{ J/K}\). Calculate \(\Delta G°\) at 300 K. Is it spontaneous?

4. If \(\Delta G° = 0\), what is the value of \(K\)?

5. For a reaction, \(\Delta H° = +200 \text{ kJ}\) and \(\Delta S° = -300 \text{ J/K}\). Is this reaction spontaneous at any temperature? Explain.

6. Calculate \(\Delta G°\) for a reaction at 298 K with \(K = 100\).

7. A reaction is spontaneous at low temperatures but non-spontaneous at high temperatures. What are the signs of \(\Delta H\) and \(\Delta S\)?

8. Given: \(\Delta G_f°(CO_2) = -394 \text{ kJ/mol}\), \(\Delta G_f°(H_2O) = -237 \text{ kJ/mol}\), \(\Delta G_f°(C_3H_8) = -24 \text{ kJ/mol}\). Calculate \(\Delta G°\) for:
   \(C_3H_8(g) + 5O_2(g) \rightarrow 3CO_2(g) + 4H_2O(l)\)

9. At what temperature does a reaction with \(\Delta H° = -75 \text{ kJ}\) and \(\Delta S° = -150 \text{ J/K}\) transition from spontaneous to non-spontaneous?

10. Explain why \(\Delta G < 0\) does not mean a reaction will occur quickly.

11. For the dissolution of ammonium nitrate: \(NH_4NO_3(s) \rightarrow NH_4^+(aq) + NO_3^-(aq)\)
    Given: \(\Delta H° = +25.7 \text{ kJ/mol}\) and \(\Delta S° = +108.7 \text{ J/mol·K}\)

    (a) Calculate \(\Delta G°\) at 298 K.

    (b) Is the dissolution spontaneous at room temperature? Explain why cold packs work even though the process is endothermic.

    (c) Calculate the minimum temperature at which dissolution becomes non-spontaneous.

12. Consider the Haber process: \(N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)\)
    Given at 298 K: \(\Delta H° = -92.4 \text{ kJ}\), \(\Delta S° = -198.8 \text{ J/K}\), \(K = 6.0 \times 10^5\)

    (a) Calculate \(\Delta G°\) at 298 K using \(\Delta H°\) and \(\Delta S°\).

    (b) Calculate \(\Delta G°\) using the equilibrium constant.

    (c) Industrial ammonia synthesis operates at 450°C. Assuming \(\Delta H°\) and \(\Delta S°\) remain constant, calculate \(\Delta G°\) at 723 K.

    (d) Explain why high temperatures are used industrially despite making the reaction less favorable thermodynamically.

13. The vaporization of water can be represented as: \(H_2O(l) \rightleftharpoons H_2O(g)\)
    At 100°C and 1 atm, water boils (liquid and vapor are at equilibrium).
    Given: \(\Delta H°_{\text{vap}} = +40.7 \text{ kJ/mol}\)

    (a) What is \(\Delta G\) for vaporization at 100°C and 1 atm? Explain.

    (b) Calculate \(\Delta S°_{\text{vap}}\) for water at 100°C.

    (c) Calculate \(\Delta G\) for vaporization at 25°C. Is vaporization spontaneous at room temperature and 1 atm?

    (d) Explain why water spontaneously evaporates at 25°C even though \(\Delta G > 0\) at 1 atm.

14. Consider the following reaction at 298 K:
    \(2NO(g) + O_2(g) \rightleftharpoons 2NO_2(g)\)

    At a particular moment, the partial pressures are: \(P_{NO} = 0.50 \text{ atm}\), \(P_{O_2} = 0.25 \text{ atm}\), \(P_{NO_2} = 2.0 \text{ atm}\)
    Given: \(\Delta G° = -70.5 \text{ kJ}\)

    (a) Calculate \(K_p\) for this reaction at 298 K.

    (b) Calculate \(Q_p\) for the given conditions.

    (c) Calculate \(\Delta G\) under these conditions.

    (d) In which direction will the reaction proceed? Explain using both Q vs K and the sign of \(\Delta G\).

15. A student measures the equilibrium constant for a reaction at different temperatures and obtains:
    At 300 K: \(K = 1.5 \times 10^{-3}\)
    At 400 K: \(K = 8.2 \times 10^{-2}\)

    (a) Calculate \(\Delta G°\) at both temperatures.

    (b) Determine whether the reaction is endothermic or exothermic. Explain your reasoning.

    (c) Use the relationship between \(\Delta G°\), \(\Delta H°\), and \(\Delta S°\) to estimate \(\Delta H°\) and \(\Delta S°\) (assume they are constant). Hint: Set up two equations.

16. For the decomposition of calcium carbonate:
    \(CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)\)
    Given: \(\Delta H° = +178 \text{ kJ}\) and \(\Delta S° = +161 \text{ J/K}\)

    (a) Calculate the temperature at which \(K = 1\).

    (b) At what temperature does the equilibrium partial pressure of \(CO_2\) equal 1 atm?

    (c) Explain why limestone (CaCO3) is stable at room temperature but decomposes when heated in a kiln.

    (d) If the partial pressure of \(CO_2\) in the atmosphere is 0.0004 atm, at what temperature will limestone start to decompose?

17. The following reaction is used in some chemical heat pumps:
    \(NH_3(g) + HCl(g) \rightarrow NH_4Cl(s)\)
    Given: \(\Delta H° = -176 \text{ kJ}\) and \(\Delta G° = -91.2 \text{ kJ}\) at 298 K

    (a) Calculate \(\Delta S°\) for this reaction.

    (b) Predict the sign of \(\Delta S°\) based on the states of matter. Does your calculation agree?

    (c) Is this reaction more or less spontaneous at higher temperatures? Explain.

    (d) Calculate the temperature at which \(\Delta G = 0\).

18. A biochemical reaction has \(\Delta G° = +15.5 \text{ kJ/mol}\) at 37°C (body temperature).

    (a) Calculate the equilibrium constant at body temperature.

    (b) What is the ratio of products to reactants at equilibrium?

    (c) In living cells, this reaction is coupled with ATP hydrolysis (\(\Delta G° = -30.5 \text{ kJ/mol}\)). Calculate \(\Delta G°\) for the coupled reaction.

    (d) Calculate the new equilibrium constant for the coupled reaction and explain why coupling makes unfavorable reactions proceed in cells.

19. Consider the phase transition: \(I_2(s) \rightleftharpoons I_2(g)\)
    The vapor pressure of solid iodine at different temperatures:
    At 298 K: \(P = 0.31 \text{ torr}\)
    At 323 K: \(P = 3.3 \text{ torr}\)

    (a) Calculate \(\Delta G°\) for sublimation at both temperatures (note: \(K_p = P_{I_2}\) in atm).

    (b) Use your results to estimate \(\Delta H°_{sub}\). Hint: \(\Delta G° = -RT\ln K\), so use the two temperatures to set up equations.

    (c) Is the sublimation of iodine favored at higher or lower temperatures?

20. Multi-step problem: The reaction \(2A + B \rightleftharpoons 2C\) has the following thermodynamic data at 298 K:
    \(\Delta H° = -85 \text{ kJ}\), \(\Delta S° = -125 \text{ J/K}\)

    (a) Calculate \(\Delta G°\) at 298 K and determine the equilibrium constant.

    (b) If the reaction mixture contains [A] = 0.50 M, [B] = 0.25 M, and [C] = 2.0 M, calculate Q and \(\Delta G\).

    (c) Determine if the reaction will proceed forward or reverse.

    (d) At what temperature does the reaction transition from spontaneous to non-spontaneous?

    (e) If you wanted to maximize product formation, would you run this reaction at high or low temperature? Justify your answer considering both thermodynamics and the likely kinetic effects.

---

## Answer Key with Full Explanations

??? note "Click to reveal answers"
    ### Problems 1-10 (Foundational)

    1. **Entropy** is a measure of disorder or randomness. Ice melting to water **increases entropy** (\(\Delta S > 0\)) because liquid water has more disorder than solid ice.

    2. **Negative** (\(\Delta S° < 0\)). Left side: 3 moles gas. Right side: 2 moles gas. Fewer moles of gas means less disorder, so entropy decreases.

    3. \(\Delta S° = +100 \text{ J/K} = +0.100 \text{ kJ/K}\). \(\Delta G° = -50 - (300)(0.100) = -50 - 30 = \mathbf{-80 \text{ kJ}}\). **Spontaneous** (\(\Delta G° < 0\)).

    4. \(\Delta G° = -RT\ln K = 0\) means \(\ln K = 0\), so \(\mathbf{K = 1}\).

    5. **Never spontaneous**. \(\Delta H° > 0\) (endothermic) and \(\Delta S° < 0\) (decrease entropy). \(\Delta G° = \Delta H° - T\Delta S° = (+) - T(-) = (+) + (+) = \mathbf{always~positive}\).

    6. \(\Delta G° = -RT\ln K = -(8.314)(298)\ln(100) = -(2477.6)(4.605) = \mathbf{-11,400 \text{ J} = -11.4 \text{ kJ}}\)

    7. Spontaneous at low T means \(\Delta G < 0\) when T is small. This requires \(\Delta H < 0\) (exothermic, favors spontaneity) and \(\Delta S < 0\) (decrease entropy, disfavors spontaneity). At low T, \(|\Delta H| > T|\Delta S|\). **\(\Delta H\) is negative, \(\Delta S\) is negative**.

    8. Products: \(3(-394) + 4(-237) = -1182 - 948 = -2130 \text{ kJ}\). Reactants: \(1(-24) + 5(0) = -24 \text{ kJ}\). \(\Delta G° = -2130 - (-24) = \mathbf{-2106 \text{ kJ}}\)

    9. At transition, \(\Delta G = 0\): \(T = \frac{\Delta H}{\Delta S} = \frac{-75,000 \text{ J}}{-150 \text{ J/K}} = \mathbf{500 \text{ K}}\). Above 500 K, reaction becomes non-spontaneous.

    10. \(\Delta G < 0\) indicates **thermodynamic favorability** (will eventually reach equilibrium favoring products), but says **nothing about rate** (kinetics). A reaction can be spontaneous but have high activation energy, making it very slow.

    ---

    ### Problems 11-20 (AP-Level Challenging)

    **Problem 11: Cold Pack Thermodynamics**

    (a) **Calculate \(\Delta G°\) at 298 K:**
    - Convert: \(\Delta S° = +108.7 \text{ J/mol·K} = +0.1087 \text{ kJ/mol·K}\)
    - \(\Delta G° = \Delta H° - T\Delta S°\)
    - \(\Delta G° = 25.7 - (298)(0.1087)\)
    - \(\Delta G° = 25.7 - 32.4 = \mathbf{-6.7 \text{ kJ/mol}}\)

    (b) **Spontaneity explanation:**
    - Yes, dissolution is spontaneous (\(\Delta G° < 0\)) even though it's endothermic (\(\Delta H° > 0\))
    - The large positive entropy change (solid dissolving to form ions in solution) outweighs the unfavorable enthalpy
    - Cold packs work because the endothermic process absorbs heat from surroundings, cooling them
    - The driving force is the entropy increase from the highly ordered solid becoming dispersed ions

    (c) **Minimum temperature for non-spontaneity:**
    - At transition: \(\Delta G = 0\)
    - \(0 = \Delta H° - T\Delta S°\)
    - \(T = \frac{\Delta H°}{\Delta S°} = \frac{25,700 \text{ J/mol}}{108.7 \text{ J/mol·K}} = \mathbf{236 \text{ K} \text{ or } -37°C}\)
    - Below 236 K (–37°C), dissolution becomes non-spontaneous
    - This is below the freezing point of water, so in practice, the dissolution is always spontaneous in aqueous solution

    ---

    **Problem 12: Haber Process Analysis**

    (a) **Calculate \(\Delta G°\) using \(\Delta H°\) and \(\Delta S°\):**
    - Convert: \(\Delta S° = -198.8 \text{ J/K} = -0.1988 \text{ kJ/K}\)
    - \(\Delta G° = \Delta H° - T\Delta S°\)
    - \(\Delta G° = -92.4 - (298)(-0.1988)\)
    - \(\Delta G° = -92.4 + 59.2 = \mathbf{-33.2 \text{ kJ}}\)

    (b) **Calculate \(\Delta G°\) using K:**
    - \(\Delta G° = -RT\ln K\)
    - \(\Delta G° = -(8.314)(298)\ln(6.0 \times 10^5)\)
    - \(\ln(6.0 \times 10^5) = \ln(6.0) + 5\ln(10) = 1.79 + 11.51 = 13.30\)
    - \(\Delta G° = -(2477.6)(13.30) = \mathbf{-32,952 \text{ J} = -33.0 \text{ kJ}}\)
    - Close agreement confirms our calculations (small difference due to rounding)

    (c) **Calculate \(\Delta G°\) at 723 K:**
    - \(\Delta G° = -92.4 - (723)(-0.1988)\)
    - \(\Delta G° = -92.4 + 143.7 = \mathbf{+51.3 \text{ kJ}}\)
    - At high temperature, the reaction becomes non-spontaneous!

    (d) **Why use high temperatures industrially?**
    - Although high temperature makes the reaction less thermodynamically favorable (\(\Delta G\) becomes positive), it dramatically increases the reaction rate
    - At room temperature, the reaction is essentially frozen despite favorable thermodynamics (kinetic limitation)
    - High temperature provides sufficient activation energy to overcome the large energy barrier
    - The compromise: operate at 400-500°C with a catalyst and high pressure to shift equilibrium toward products
    - This is a classic example of balancing thermodynamics (favors low T) with kinetics (favors high T)

    ---

    **Problem 13: Water Vaporization Equilibrium**

    (a) **\(\Delta G\) at boiling point:**
    - At equilibrium (100°C, 1 atm), \(\Delta G = \mathbf{0}\)
    - At the boiling point, liquid and vapor are in equilibrium
    - No net driving force in either direction

    (b) **Calculate \(\Delta S°_{\text{vap}}:\)**
    - At equilibrium: \(\Delta G = 0 = \Delta H - T\Delta S\)
    - \(\Delta S = \frac{\Delta H}{T}\)
    - Convert: \(T = 100°C = 373 \text{ K}\), \(\Delta H = 40.7 \text{ kJ/mol} = 40,700 \text{ J/mol}\)
    - \(\Delta S = \frac{40,700}{373} = \mathbf{109 \text{ J/mol·K}}\)

    (c) **Calculate \(\Delta G\) at 25°C:**
    - \(T = 298 \text{ K}\)
    - \(\Delta S = 109 \text{ J/mol·K} = 0.109 \text{ kJ/mol·K}\)
    - \(\Delta G = 40.7 - (298)(0.109)\)
    - \(\Delta G = 40.7 - 32.5 = \mathbf{+8.2 \text{ kJ/mol}}\)
    - Non-spontaneous at 1 atm pressure

    (d) **Why does water evaporate at 25°C?**
    - The calculation in part (c) assumes the partial pressure of water vapor is 1 atm
    - In normal air, the partial pressure of water vapor is much less than 1 atm (typically 0.01-0.03 atm)
    - Using \(\Delta G = \Delta G° + RT\ln Q\), where \(Q = P_{H_2O(g)}\)
    - When \(P_{H_2O} < 1\) atm, \(\ln Q < 0\), making \(\Delta G\) more negative
    - At the vapor pressure of water at 25°C (0.031 atm), \(\Delta G = 0\) and equilibrium exists
    - If humidity is low (P < 0.031 atm), \(\Delta G < 0\) and evaporation is spontaneous

    ---

    **Problem 14: Reaction Direction and Q vs K**

    (a) **Calculate \(K_p\):**
    - \(\Delta G° = -RT\ln K_p\)
    - \(-70.5 \text{ kJ} = -70,500 \text{ J}\)
    - \(\ln K_p = \frac{-\Delta G°}{RT} = \frac{70,500}{(8.314)(298)} = 28.45\)
    - \(K_p = e^{28.45} = \mathbf{2.4 \times 10^{12}}\)
    - Very large K indicates strong product favorability at equilibrium

    (b) **Calculate \(Q_p\):**
    - \(Q_p = \frac{(P_{NO_2})^2}{(P_{NO})^2(P_{O_2})}\)
    - \(Q_p = \frac{(2.0)^2}{(0.50)^2(0.25)} = \frac{4.0}{(0.25)(0.25)} = \frac{4.0}{0.0625}\)
    - \(Q_p = \mathbf{64}\)

    (c) **Calculate \(\Delta G\):**
    - \(\Delta G = \Delta G° + RT\ln Q_p\)
    - \(\Delta G = -70,500 + (8.314)(298)\ln(64)\)
    - \(\ln(64) = 4.159\)
    - \(\Delta G = -70,500 + (2477.6)(4.159)\)
    - \(\Delta G = -70,500 + 10,306 = \mathbf{-60,194 \text{ J} = -60.2 \text{ kJ}}\)

    (d) **Direction of reaction:**
    - **Using Q vs K**: \(Q_p = 64 \ll K_p = 2.4 \times 10^{12}\)
    - Since \(Q < K\), the reaction will proceed **forward** (toward products) to reach equilibrium
    - **Using \(\Delta G\)**: \(\Delta G = -60.2 \text{ kJ} < 0\)
    - Negative \(\Delta G\) confirms the forward reaction is spontaneous
    - Both methods agree: the system will shift right, consuming NO and O₂ to produce more NO₂

    ---

    **Problem 15: Temperature Dependence of K**

    (a) **Calculate \(\Delta G°\) at both temperatures:**
    - At 300 K:
      - \(\Delta G° = -RT\ln K = -(8.314)(300)\ln(1.5 \times 10^{-3})\)
      - \(\ln(1.5 \times 10^{-3}) = -6.502\)
      - \(\Delta G° = -(2494.2)(-6.502) = \mathbf{+16,210 \text{ J} = +16.2 \text{ kJ}}\)
    - At 400 K:
      - \(\Delta G° = -(8.314)(400)\ln(8.2 \times 10^{-2})\)
      - \(\ln(8.2 \times 10^{-2}) = -2.501\)
      - \(\Delta G° = -(3325.6)(-2.501) = \mathbf{+8,317 \text{ J} = +8.3 \text{ kJ}}\)

    (b) **Determine if endothermic or exothermic:**
    - \(\Delta G°\) becomes less positive (more favorable) at higher temperature
    - K increases from \(1.5 \times 10^{-3}\) to \(8.2 \times 10^{-2}\) (increases ~55-fold)
    - For an endothermic reaction: higher T favors products (Le Chatelier's principle)
    - For an exothermic reaction: higher T favors reactants
    - Since K increases with temperature, the reaction is **endothermic** (\(\Delta H° > 0\))

    (c) **Estimate \(\Delta H°\) and \(\Delta S°\):**
    - Set up two equations using \(\Delta G° = \Delta H° - T\Delta S°\):
      - At 300 K: \(16,210 = \Delta H° - 300\Delta S°\) ... (1)
      - At 400 K: \(8,317 = \Delta H° - 400\Delta S°\) ... (2)
    - Subtract (2) from (1):
      - \(16,210 - 8,317 = (300 - 400)\Delta S°\)
      - \(7,893 = -100\Delta S°\)
      - \(\Delta S° = -78.9 \text{ J/K} = \mathbf{-0.079 \text{ kJ/K}}\)
    - Substitute back into equation (1):
      - \(16,210 = \Delta H° - 300(-78.9)\)
      - \(16,210 = \Delta H° + 23,670\)
      - \(\Delta H° = 16,210 - 23,670 = \mathbf{-7,460 \text{ J}}\)

    Wait, this gives negative \(\Delta H°\), contradicting our prediction. Let me recalculate:
    - Rechecking: \(7,893 = (300 - 400)\Delta S° = -100\Delta S°\)
    - \(\Delta S° = -78.93 \text{ J/K}\)
    - From equation (1): \(16,210 = \Delta H° - 300(-78.93) = \Delta H° + 23,679\)
    - \(\Delta H° = 16,210 - 23,679 = -7,469 \text{ J}\) ❌

    This is incorrect. Let me reconsider:
    - Actually, from (1): \(16,210 = \Delta H° - 300\Delta S°\), so \(\Delta H° = 16,210 + 300\Delta S°\)
    - From (2): \(8,317 = \Delta H° - 400\Delta S°\), so \(\Delta H° = 8,317 + 400\Delta S°\)
    - Setting equal: \(16,210 + 300\Delta S° = 8,317 + 400\Delta S°\)
    - \(16,210 - 8,317 = 400\Delta S° - 300\Delta S°\)
    - \(7,893 = 100\Delta S°\)
    - \(\Delta S° = +78.9 \text{ J/K} = \mathbf{+0.079 \text{ kJ/K}}\)
    - Substitute: \(\Delta H° = 16,210 + 300(78.9) = 16,210 + 23,670 = \mathbf{39,880 \text{ J} = +39.9 \text{ kJ}}\)

    This confirms: \(\Delta H° = +39.9 \text{ kJ}\) (endothermic), \(\Delta S° = +78.9 \text{ J/K}\) (entropy increases)

    ---

    **Problem 16: Limestone Decomposition**

    (a) **Temperature where \(K = 1\):**
    - When \(K = 1\), \(\ln K = 0\), so \(\Delta G° = 0\)
    - \(0 = \Delta H° - T\Delta S°\)
    - Convert: \(\Delta S° = 161 \text{ J/K} = 0.161 \text{ kJ/K}\)
    - \(T = \frac{\Delta H°}{\Delta S°} = \frac{178}{0.161} = \mathbf{1,106 \text{ K} \text{ or } 833°C}\)

    (b) **Temperature for \(P_{CO_2} = 1 \text{ atm}\):**
    - For this reaction, \(K_p = P_{CO_2}\) (solids have activity = 1)
    - When \(P_{CO_2} = 1 \text{ atm}\), \(K_p = 1\)
    - This is the same as part (a): \(\mathbf{T = 1,106 \text{ K} = 833°C}\)

    (c) **Why is limestone stable at room temperature?**
    - At 298 K:
      - \(\Delta G° = 178 - (298)(0.161) = 178 - 48.0 = +130 \text{ kJ}\)
    - Very positive \(\Delta G°\) means reaction strongly favors reactants (CaCO₃)
    - The endothermic nature (\(\Delta H° > 0\)) dominates at low temperature
    - Only at very high temperature (~800°C) does \(T\Delta S°\) become large enough to overcome \(\Delta H°\)
    - In kilns, high temperature makes decomposition spontaneous, producing lime (CaO) for cement

    (d) **Decomposition temperature at \(P_{CO_2} = 0.0004 \text{ atm}\):**
    - At equilibrium with atmosphere: \(K_p = P_{CO_2} = 0.0004\)
    - \(\Delta G° = -RT\ln K_p = -(8.314)T\ln(0.0004)\)
    - Also: \(\Delta G° = \Delta H° - T\Delta S° = 178,000 - T(161)\)
    - Setting equal: \(-(8.314)T\ln(0.0004) = 178,000 - 161T\)
    - \(\ln(0.0004) = -7.824\)
    - \(-(8.314)T(-7.824) = 178,000 - 161T\)
    - \(65.05T = 178,000 - 161T\)
    - \(226.05T = 178,000\)
    - \(T = \mathbf{787 \text{ K} = 514°C}\)
    - At atmospheric CO₂ levels, limestone begins decomposing at lower temperature than in pure conditions

    ---

    **Problem 17: Chemical Heat Pump**

    (a) **Calculate \(\Delta S°\):**
    - From \(\Delta G° = \Delta H° - T\Delta S°\)
    - \(-91.2 = -176 - (298)\Delta S°\)
    - \((298)\Delta S° = -176 + 91.2 = -84.8\)
    - \(\Delta S° = \frac{-84.8}{298} = \mathbf{-0.284 \text{ kJ/K} = -284 \text{ J/K}}\)

    (b) **Predict sign of \(\Delta S°\):**
    - Reactants: 2 moles of gas (NH₃ + HCl)
    - Products: 1 mole of solid (NH₄Cl)
    - Going from gas to solid dramatically decreases disorder
    - Predicted: \(\Delta S° < 0\) (large negative value)
    - **Calculation agrees**: –284 J/K is a large negative entropy change

    (c) **Spontaneity at higher temperatures:**
    - \(\Delta H° < 0\) (exothermic) favors spontaneity
    - \(\Delta S° < 0\) (entropy decrease) opposes spontaneity
    - At low T: \(|\Delta H°|\) term dominates, \(\Delta G < 0\) (spontaneous)
    - At high T: \(T|\Delta S°|\) term grows, making \(\Delta G\) more positive
    - **Conclusion**: Reaction becomes LESS spontaneous at higher temperatures

    (d) **Temperature where \(\Delta G = 0\):**
    - \(0 = \Delta H° - T\Delta S°\)
    - Convert: \(\Delta H° = -176 \text{ kJ} = -176,000 \text{ J}\), \(\Delta S° = -284 \text{ J/K}\)
    - \(T = \frac{-176,000}{-284} = \mathbf{620 \text{ K} = 347°C}\)
    - Above 620 K, reaction becomes non-spontaneous

    ---

    **Problem 18: Coupled Biochemical Reactions**

    (a) **Calculate K at 37°C (310 K):**
    - \(\Delta G° = -RT\ln K\)
    - \(15.5 \text{ kJ} = 15,500 \text{ J}\)
    - \(\ln K = \frac{-\Delta G°}{RT} = \frac{-15,500}{(8.314)(310)} = -6.014\)
    - \(K = e^{-6.014} = \mathbf{2.4 \times 10^{-3}}\)

    (b) **Ratio of products to reactants:**
    - For a reaction A → B, \(K = \frac{[B]}{[A]}\)
    - At equilibrium: \(\frac{[\text{products}]}{[\text{reactants}]} = \mathbf{2.4 \times 10^{-3} = 0.0024}\)
    - Reactants heavily favored (about 400:1 ratio of reactants to products)
    - This unfavorable reaction would not proceed significantly on its own

    (c) **Coupled reaction \(\Delta G°\):**
    - Original reaction: \(\Delta G° = +15.5 \text{ kJ}\)
    - ATP hydrolysis: \(\Delta G° = -30.5 \text{ kJ}\)
    - Coupled: \(\Delta G°_{\text{total}} = 15.5 + (-30.5) = \mathbf{-15.0 \text{ kJ}}\)
    - Now favorable!

    (d) **New equilibrium constant:**
    - \(\ln K = \frac{-\Delta G°}{RT} = \frac{15,000}{(8.314)(310)} = 5.821\)
    - \(K = e^{5.821} = \mathbf{337}\)
    - Now products favored by 337:1 ratio!
    - **Explanation**: Coupling with ATP hydrolysis (which has very negative \(\Delta G°\)) drives the unfavorable reaction forward. This is how cells accomplish thermodynamically unfavorable reactions - by coupling them to highly favorable reactions like ATP hydrolysis. The combined reaction has negative \(\Delta G°\), allowing biosynthesis to occur.

    ---

    **Problem 19: Iodine Sublimation**

    (a) **Calculate \(\Delta G°\) at both temperatures:**
    - For sublimation: \(K_p = P_{I_2}\)
    - At 298 K:
      - Convert: \(P = 0.31 \text{ torr} \times \frac{1 \text{ atm}}{760 \text{ torr}} = 4.08 \times 10^{-4} \text{ atm}\)
      - \(\Delta G° = -RT\ln K_p = -(8.314)(298)\ln(4.08 \times 10^{-4})\)
      - \(\ln(4.08 \times 10^{-4}) = -7.803\)
      - \(\Delta G° = -(2477.6)(-7.803) = \mathbf{+19,330 \text{ J} = +19.3 \text{ kJ}}\)
    - At 323 K:
      - Convert: \(P = 3.3 \text{ torr} \times \frac{1 \text{ atm}}{760 \text{ torr}} = 4.34 \times 10^{-3} \text{ atm}\)
      - \(\Delta G° = -(8.314)(323)\ln(4.34 \times 10^{-3})\)
      - \(\ln(4.34 \times 10^{-3}) = -5.439\)
      - \(\Delta G° = -(2685.4)(-5.439) = \mathbf{+14,607 \text{ J} = +14.6 \text{ kJ}}\)

    (b) **Estimate \(\Delta H°_{sub}\):**
    - Use \(\Delta G° = \Delta H° - T\Delta S°\) at both temperatures:
      - At 298 K: \(19,330 = \Delta H° - 298\Delta S°\) ... (1)
      - At 323 K: \(14,607 = \Delta H° - 323\Delta S°\) ... (2)
    - Subtract (2) from (1):
      - \(19,330 - 14,607 = (298 - 323)\Delta S° = -25\Delta S°\)
      - \(4,723 = -25\Delta S°\)
      - \(\Delta S° = -189 \text{ J/K}\)

    Wait, entropy should be positive for sublimation. Let me recalculate:
    - From (1): \(\Delta H° = 19,330 + 298\Delta S°\)
    - From (2): \(\Delta H° = 14,607 + 323\Delta S°\)
    - Setting equal: \(19,330 + 298\Delta S° = 14,607 + 323\Delta S°\)
    - \(19,330 - 14,607 = 323\Delta S° - 298\Delta S°\)
    - \(4,723 = 25\Delta S°\)
    - \(\Delta S° = 189 \text{ J/K}\) ✓
    - \(\Delta H° = 19,330 + 298(189) = 19,330 + 56,322 = 75,652 \text{ J}\)
    - \(\mathbf{\Delta H°_{sub} = 75.7 \text{ kJ/mol}}\)
    - \(\mathbf{\Delta S° = +189 \text{ J/K}}\) (makes sense: solid → gas increases entropy)

    (c) **Temperature dependence:**
    - \(\Delta H° > 0\) (endothermic) and \(\Delta S° > 0\) (entropy increases)
    - At low T: \(\Delta H°\) dominates, \(\Delta G > 0\) (non-spontaneous)
    - At high T: \(T\Delta S°\) becomes large, \(\Delta G\) decreases and can become negative
    - **Sublimation is favored at HIGHER temperatures**
    - Evidence: vapor pressure increases from 0.31 to 3.3 torr (10-fold) with only 25°C temperature increase

    ---

    **Problem 20: Multi-Step Comprehensive Problem**

    (a) **Calculate \(\Delta G°\) and K at 298 K:**
    - Convert: \(\Delta S° = -125 \text{ J/K} = -0.125 \text{ kJ/K}\)
    - \(\Delta G° = \Delta H° - T\Delta S° = -85 - (298)(-0.125)\)
    - \(\Delta G° = -85 + 37.25 = \mathbf{-47.75 \text{ kJ}}\)
    - Calculate K:
      - \(\Delta G° = -RT\ln K\)
      - \(\ln K = \frac{-(-47,750)}{(8.314)(298)} = 19.25\)
      - \(K = e^{19.25} = \mathbf{2.3 \times 10^8}\)
    - Very large K indicates strong product favorability

    (b) **Calculate Q and \(\Delta G\):**
    - For \(2A + B \rightleftharpoons 2C\):
      - \(Q = \frac{[C]^2}{[A]^2[B]}\)
      - \(Q = \frac{(2.0)^2}{(0.50)^2(0.25)} = \frac{4.0}{(0.25)(0.25)} = \frac{4.0}{0.0625} = \mathbf{64}\)
    - Calculate \(\Delta G\):
      - \(\Delta G = \Delta G° + RT\ln Q\)
      - \(\Delta G = -47,750 + (8.314)(298)\ln(64)\)
      - \(\ln(64) = 4.159\)
      - \(\Delta G = -47,750 + (2477.6)(4.159) = -47,750 + 10,306\)
      - \(\Delta G = \mathbf{-37,444 \text{ J} = -37.4 \text{ kJ}}\)

    (c) **Reaction direction:**
    - Compare Q and K: \(Q = 64 \ll K = 2.3 \times 10^8\)
    - Since \(Q < K\), reaction proceeds **FORWARD** (toward products)
    - Also: \(\Delta G = -37.4 \text{ kJ} < 0\), confirming forward spontaneity
    - The system will consume A and B to produce more C until equilibrium is reached

    (d) **Temperature transition:**
    - Set \(\Delta G = 0\):
      - \(0 = \Delta H° - T\Delta S°\)
      - \(T = \frac{\Delta H°}{\Delta S°} = \frac{-85,000}{-125} = \mathbf{680 \text{ K} = 407°C}\)
    - Below 680 K: spontaneous (exothermic dominates)
    - Above 680 K: non-spontaneous (entropy decrease dominates)

    (e) **Optimize product formation:**
    - **Thermodynamically**: Low temperature favors products
      - At low T: \(|\Delta H°|\) dominates, making \(\Delta G\) more negative
      - Reaction is spontaneous at ALL temperatures below 680 K, but becomes MORE favorable as T decreases
    - **Kinetically**: High temperature increases reaction rate
      - Higher T provides more energy to overcome activation barrier
      - Molecules collide more frequently and with greater energy
    - **Optimal strategy**:
      - Start at moderate-high temperature (300-400°C) to achieve reasonable rate
      - As equilibrium approaches, gradually decrease temperature to shift equilibrium toward products
      - Use a catalyst to increase rate without affecting equilibrium
      - This is similar to the compromise used in ammonia synthesis
    - **Best answer**: Use moderately elevated temperature (around 200-300°C) with a catalyst to balance rate and equilibrium position, or use temperature programming (high initially for rate, then cool for better equilibrium)
