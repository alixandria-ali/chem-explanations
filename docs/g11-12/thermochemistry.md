# Thermochemistry

## Explanation

Thermochemistry studies energy changes during chemical reactions. Understanding energy flow helps predict reaction spontaneity and calculate heat transfer.

### Key Concepts

**Energy and Enthalpy**:
- **System**: The part of the universe we're studying (the reaction)
- **Surroundings**: Everything else outside the system
- **Enthalpy (\(H\))**: Heat content of a system at constant pressure
- **Enthalpy change (\(\Delta H\))**: Heat absorbed or released in a reaction
  - \(\Delta H = H_{\text{products}} - H_{\text{reactants}}\)

**Exothermic vs. Endothermic**:
- **Exothermic**: Releases heat to surroundings, \(\Delta H < 0\) (negative)
  - Example: \(CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O \quad \Delta H = -890 \text{ kJ}\)
  - Products have less energy than reactants
- **Endothermic**: Absorbs heat from surroundings, \(\Delta H > 0\) (positive)
  - Example: \(N_2 + O_2 \rightarrow 2NO \quad \Delta H = +181 \text{ kJ}\)
  - Products have more energy than reactants

**Standard Enthalpy of Formation (\(\Delta H_f°\))**:
- Heat change when 1 mole of compound forms from elements in standard states
- Standard state: 25°C (298 K), 1 atm pressure
- By definition: \(\Delta H_f°\) of elements in standard state = 0

**Hess's Law**:
- Total enthalpy change is independent of pathway
- \(\Delta H_{\text{reaction}} = \sum \Delta H_f°(\text{products}) - \sum \Delta H_f°(\text{reactants})\)
- Can add equations and their \(\Delta H\) values to find overall \(\Delta H\)

**Calorimetry**:
- Measuring heat transfer using a calorimeter
- \(q = mc\Delta T\)
  - \(q\) = heat absorbed/released (J)
  - \(m\) = mass (g)
  - \(c\) = specific heat capacity (J/g·°C)
  - \(\Delta T\) = temperature change (°C)
- Specific heat of water: \(c = 4.18 \text{ J/g·°C}\)

---

## Enhanced Step-by-Step Explanations

### Understanding Enthalpy Changes

**Step-by-Step Approach**:

1. **Identify the type of process**: Is this a reaction, phase change, or temperature change?

2. **Determine the direction of heat flow**:
   - Heat flows INTO the system = endothermic (\(\Delta H > 0\))
   - Heat flows OUT OF the system = exothermic (\(\Delta H < 0\))

3. **Apply the correct formula**:
   - For reactions: \(\Delta H = \sum n\Delta H_f°(\text{products}) - \sum n\Delta H_f°(\text{reactants})\)
   - For temperature changes: \(q = mc\Delta T\)
   - For Hess's Law: Add/subtract equations to reach target equation

4. **Check your sign**:
   - Negative \(\Delta H\) means heat is released (exothermic)
   - Positive \(\Delta H\) means heat is absorbed (endothermic)

### Mastering Calorimetry Calculations

**Step-by-Step Process**:

1. **Write down what you know**:
   - Mass (m) in grams
   - Specific heat capacity (c) in J/g·°C
   - Initial temperature (\(T_i\))
   - Final temperature (\(T_f\))

2. **Calculate temperature change**:
   - \(\Delta T = T_f - T_i\)
   - **Important**: Keep track of the sign! Heating gives positive \(\Delta T\), cooling gives negative \(\Delta T\)

3. **Apply the calorimetry equation**:
   - \(q = mc\Delta T\)
   - Substitute all values with units

4. **Interpret the result**:
   - Positive q = heat absorbed by the substance
   - Negative q = heat released by the substance

5. **Convert units if needed**:
   - J to kJ: divide by 1000
   - kJ to J: multiply by 1000

**Example Walkthrough**:
Calculate the heat when 150 g of aluminum (c = 0.90 J/g·°C) is heated from 25°C to 75°C.

- **Step 1**: m = 150 g, c = 0.90 J/g·°C, \(T_i\) = 25°C, \(T_f\) = 75°C
- **Step 2**: \(\Delta T = 75 - 25 = 50°\text{C}\)
- **Step 3**: \(q = (150 \text{ g})(0.90 \text{ J/g·°C})(50°\text{C}) = 6,750 \text{ J}\)
- **Step 4**: Positive q means aluminum absorbed 6,750 J of heat
- **Step 5**: \(q = 6.75 \text{ kJ}\)

### Solving Hess's Law Problems

**Step-by-Step Strategy**:

1. **Write the target equation**: What reaction are you trying to find \(\Delta H\) for?

2. **List the given equations**: Write all provided equations with their \(\Delta H\) values

3. **Plan your manipulation**:
   - If a reactant in the target is a product in a given equation, REVERSE it (change sign of \(\Delta H\))
   - If coefficients don't match, MULTIPLY the equation (and \(\Delta H\)) by a factor

4. **Add the equations**:
   - Line up equations so species cancel
   - Add all \(\Delta H\) values algebraically

5. **Verify your result**:
   - Check that the final equation matches your target
   - Ensure all unwanted species have cancelled

**Example Walkthrough**:
Find \(\Delta H\) for: \(2C_{(s)} + H_{2(g)} \rightarrow C_2H_{2(g)}\)

Given:
- (1) \(C_{2}H_{2(g)} + \frac{5}{2}O_{2(g)} \rightarrow 2CO_{2(g)} + H_2O_{(l)} \quad \Delta H = -1300 \text{ kJ}\)
- (2) \(C_{(s)} + O_{2(g)} \rightarrow CO_{2(g)} \quad \Delta H = -394 \text{ kJ}\)
- (3) \(H_{2(g)} + \frac{1}{2}O_{2(g)} \rightarrow H_2O_{(l)} \quad \Delta H = -286 \text{ kJ}\)

**Step 1**: Target has \(C_2H_2\) as product

**Step 2**: Equations listed above

**Step 3**:
- Reverse equation (1) to get \(C_2H_2\) as product: \(\Delta H = +1300 \text{ kJ}\)
- Multiply equation (2) by 2 to get 2C: \(\Delta H = 2 \times (-394) = -788 \text{ kJ}\)
- Keep equation (3) as is: \(\Delta H = -286 \text{ kJ}\)

**Step 4**:
- \(2CO_{2(g)} + H_2O_{(l)} \rightarrow C_{2}H_{2(g)} + \frac{5}{2}O_{2(g)} \quad (+1300 \text{ kJ})\)
- \(2C_{(s)} + 2O_{2(g)} \rightarrow 2CO_{2(g)} \quad (-788 \text{ kJ})\)
- \(H_{2(g)} + \frac{1}{2}O_{2(g)} \rightarrow H_2O_{(l)} \quad (-286 \text{ kJ})\)

Cancel \(2CO_2\), \(H_2O\), and \(O_2\) simplifies to \(\frac{5}{2} - 2 - \frac{1}{2} = 0\)

Result: \(2C_{(s)} + H_{2(g)} \rightarrow C_2H_{2(g)}\)

**Step 5**: \(\Delta H = 1300 - 788 - 286 = +226 \text{ kJ}\)

---

## Common Mistakes and How to Avoid Them

### 1. Sign Convention Errors

**Mistake**: Confusing the sign of \(\Delta H\) when reversing equations in Hess's Law.

**Why it happens**: Students forget that reversing a reaction reverses the direction of heat flow.

**How to avoid it**:
- When you reverse an equation, ALWAYS change the sign of \(\Delta H\)
- Forward reaction: \(\Delta H = -100 \text{ kJ}\) → Reverse reaction: \(\Delta H = +100 \text{ kJ}\)
- Remember: If a reaction releases heat (exothermic, negative), its reverse absorbs heat (endothermic, positive)

**Example**:
- Given: \(2H_2O \rightarrow 2H_2 + O_2 \quad \Delta H = +572 \text{ kJ}\)
- Reversed: \(2H_2 + O_2 \rightarrow 2H_2O \quad \Delta H = -572 \text{ kJ}\)

### 2. Unit Conversion Mistakes

**Mistake**: Mixing J and kJ, or forgetting to convert units.

**Why it happens**: Energy values can be given in different units (J, kJ, cal, kcal).

**How to avoid it**:
- Always check units in the problem and answer
- Standard conversion: 1 kJ = 1000 J
- Write units throughout your calculation
- Common specific heats: water = 4.18 J/g·°C = 4.184 J/g·°C

**Example**:
If q = 5,430 J and the answer choices are in kJ, convert: 5,430 J ÷ 1000 = 5.43 kJ

### 3. Temperature Change Direction

**Mistake**: Using \(\Delta T = T_i - T_f\) instead of \(\Delta T = T_f - T_i\).

**Why it happens**: Confusion about which temperature to subtract from which.

**How to avoid it**:
- ALWAYS use: \(\Delta T = T_{\text{final}} - T_{\text{initial}}\)
- Heating: \(T_f > T_i\) → \(\Delta T\) is positive → q is positive (heat absorbed)
- Cooling: \(T_f < T_i\) → \(\Delta T\) is negative → q is negative (heat released)

**Example**:
- Water cools from 80°C to 30°C
- Correct: \(\Delta T = 30 - 80 = -50°\text{C}\)
- Incorrect: \(\Delta T = 80 - 30 = +50°\text{C}\) (This would indicate heating!)

### 4. Forgetting Stoichiometric Coefficients

**Mistake**: Not multiplying \(\Delta H_f°\) values by the number of moles in the balanced equation.

**Why it happens**: Students treat all coefficients as "1" by default.

**How to avoid it**:
- Write the formula: \(\Delta H = \sum n\Delta H_f°(\text{products}) - \sum n\Delta H_f°(\text{reactants})\)
- The "n" represents the coefficient from the balanced equation
- Multiply each \(\Delta H_f°\) by its corresponding coefficient

**Example**:
For \(2H_2O\) with \(\Delta H_f° = -286 \text{ kJ/mol}\), use \(2 \times (-286) = -572 \text{ kJ}\), not just -286 kJ.

### 5. Assuming All Elements Have \(\Delta H_f° = 0\)

**Mistake**: Thinking all elements have zero enthalpy of formation regardless of their state.

**Why it happens**: Misunderstanding what "standard state" means.

**How to avoid it**:
- Only elements in their standard state have \(\Delta H_f° = 0\)
- Standard states: \(O_{2(g)}\), \(N_{2(g)}\), \(C_{(graphite)}\), \(S_{8(s)}\), \(Br_{2(l)}\), etc.
- Non-standard states have \(\Delta H_f° \neq 0\)
  - Example: \(O_{3(g)}\) (ozone) has \(\Delta H_f° = +142 \text{ kJ/mol}\)
  - Example: \(C_{(diamond)}\) has \(\Delta H_f° = +1.9 \text{ kJ/mol}\)

**Remember**: Diatomic gases (\(H_2, N_2, O_2, F_2, Cl_2, Br_2, I_2\)) in gas form (except \(Br_2\) is liquid) are standard states.

---

## Worked Examples

### Example 1: Calculating Heat Using \(q = mc\Delta T\)

**Problem**: How much heat is required to raise the temperature of 250 g of water from 20°C to 80°C? (Specific heat of water = 4.18 J/g·°C)

**Solution**:
1. Identify given values: \(m = 250 \text{ g}\), \(c = 4.18 \text{ J/g·°C}\), \(\Delta T = 80 - 20 = 60°\text{C}\)
2. Use formula: \(q = mc\Delta T\)
3. \(q = (250 \text{ g})(4.18 \text{ J/g·°C})(60°\text{C})\)
4. \(q = 62,700 \text{ J} = 62.7 \text{ kJ}\)

**Answer**: 62.7 kJ of heat is required

---

### Example 2: Using Hess's Law

**Problem**: Given:
- \(C_{(s)} + O_{2(g)} \rightarrow CO_{2(g)} \quad \Delta H = -394 \text{ kJ}\)
- \(CO_{(g)} + \frac{1}{2}O_{2(g)} \rightarrow CO_{2(g)} \quad \Delta H = -283 \text{ kJ}\)

Calculate \(\Delta H\) for: \(C_{(s)} + \frac{1}{2}O_{2(g)} \rightarrow CO_{(g)}\)

**Solution**:
1. We want to get \(CO\) as a product, so reverse the second equation:
   - \(CO_{2(g)} \rightarrow CO_{(g)} + \frac{1}{2}O_{2(g)} \quad \Delta H = +283 \text{ kJ}\) (sign changes)
2. Add the first equation and reversed second equation:
   - \(C_{(s)} + O_{2(g)} \rightarrow CO_{2(g)} \quad \Delta H = -394 \text{ kJ}\)
   - \(CO_{2(g)} \rightarrow CO_{(g)} + \frac{1}{2}O_{2(g)} \quad \Delta H = +283 \text{ kJ}\)
3. \(CO_2\) cancels, \(O_2\) simplifies: \(C_{(s)} + \frac{1}{2}O_{2(g)} \rightarrow CO_{(g)}\)
4. Add enthalpies: \(\Delta H = -394 + 283 = -111 \text{ kJ}\)

**Answer**: \(\Delta H = -111 \text{ kJ}\)

---

### Example 3: Calculating \(\Delta H\) from Formation Enthalpies

**Problem**: Calculate \(\Delta H\) for the combustion of methane:
\(CH_{4(g)} + 2O_{2(g)} \rightarrow CO_{2(g)} + 2H_2O_{(l)}\)

Given: \(\Delta H_f°(CH_4) = -75 \text{ kJ/mol}\), \(\Delta H_f°(CO_2) = -394 \text{ kJ/mol}\), \(\Delta H_f°(H_2O) = -286 \text{ kJ/mol}\)

**Solution**:
1. Formula: \(\Delta H = \sum n\Delta H_f°(\text{products}) - \sum n\Delta H_f°(\text{reactants})\)
2. Note: \(\Delta H_f°(O_2) = 0\) (element in standard state)
3. Products: \(1 \times (-394) + 2 \times (-286) = -394 - 572 = -966 \text{ kJ}\)
4. Reactants: \(1 \times (-75) + 2 \times (0) = -75 \text{ kJ}\)
5. \(\Delta H = -966 - (-75) = -966 + 75 = -891 \text{ kJ}\)

**Answer**: \(\Delta H = -891 \text{ kJ}\) (exothermic combustion)

---

## SAT Chemistry-Style Practice Problems

### Section A: Concept Application (Questions 1-5)

1. A reaction occurs in a calorimeter, and the temperature of the water surrounding the reaction vessel increases from 22.0°C to 28.5°C. Which statement best describes the reaction?
   - A) The reaction is endothermic and \(\Delta H > 0\)
   - B) The reaction is endothermic and \(\Delta H < 0\)
   - C) The reaction is exothermic and \(\Delta H > 0\)
   - D) The reaction is exothermic and \(\Delta H < 0\)

2. The standard enthalpy of formation (\(\Delta H_f°\)) of a compound is defined as the enthalpy change when:
   - A) One mole of compound decomposes into its elements
   - B) One mole of compound is formed from its elements in their standard states
   - C) One gram of compound is formed from its elements
   - D) One mole of any substance reacts with oxygen

3. How much heat is required to raise the temperature of 300 g of water from 20°C to 60°C? (Specific heat of water = 4.18 J/g·°C)
   - A) 25,080 J
   - B) 50,160 J
   - C) 75,240 J
   - D) 100,320 J

4. Which of the following substances has a standard enthalpy of formation equal to zero?
   - A) \(O_{3(g)}\)
   - B) \(H_2O_{(l)}\)
   - C) \(Br_{2(l)}\)
   - D) \(C_{(diamond)}\)

5. For the reaction: \(2H_2 + O_2 \rightarrow 2H_2O\), \(\Delta H = -572 \text{ kJ}\). How much heat is released when 1.0 mole of \(H_2\) reacts?
   - A) 143 kJ
   - B) 286 kJ
   - C) 572 kJ
   - D) 1144 kJ

### Section B: Calculation Problems (Questions 6-8)

6. A 75.0 g sample of copper (specific heat = 0.385 J/g·°C) is heated from 25.0°C to 95.0°C. What is the heat absorbed?
   - A) 1.35 kJ
   - B) 2.02 kJ
   - C) 2.70 kJ
   - D) 5.40 kJ

7. Calculate \(\Delta H\) for the reaction: \(CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O\)

   Given: \(\Delta H_f°(CH_4) = -75 \text{ kJ/mol}\), \(\Delta H_f°(CO_2) = -394 \text{ kJ/mol}\), \(\Delta H_f°(H_2O) = -286 \text{ kJ/mol}\)
   - A) -891 kJ
   - B) -605 kJ
   - C) -405 kJ
   - D) -755 kJ

8. When 5.0 g of ammonium nitrate dissolves in 100 g of water, the temperature drops from 25.0°C to 20.0°C. What is the heat change of the water? (c = 4.18 J/g·°C)
   - A) +2090 J
   - B) -2090 J
   - C) +10,450 J
   - D) -10,450 J

### Section C: Hess's Law Problems (Questions 9-10)

9. Given the following reactions:
   - (1) \(C + O_2 \rightarrow CO_2 \quad \Delta H = -394 \text{ kJ}\)
   - (2) \(2CO + O_2 \rightarrow 2CO_2 \quad \Delta H = -566 \text{ kJ}\)

   What is \(\Delta H\) for the reaction: \(2C + O_2 \rightarrow 2CO\)?
   - A) -222 kJ
   - B) -172 kJ
   - C) +172 kJ
   - D) +222 kJ

10. Given:
    - (1) \(S + O_2 \rightarrow SO_2 \quad \Delta H = -297 \text{ kJ}\)
    - (2) \(2SO_2 + O_2 \rightarrow 2SO_3 \quad \Delta H = -198 \text{ kJ}\)

    Calculate \(\Delta H\) for: \(2S + 3O_2 \rightarrow 2SO_3\)
    - A) -495 kJ
    - B) -594 kJ
    - C) -693 kJ
    - D) -792 kJ

---

## Original Practice Problems

11. Is a reaction with \(\Delta H = -125 \text{ kJ}\) exothermic or endothermic? Does it release or absorb heat?

12. Calculate the heat absorbed when 500 g of water is heated from 25°C to 100°C. (\(c = 4.18 \text{ J/g·°C}\))

13. If 50 g of iron (\(c = 0.45 \text{ J/g·°C}\)) cools from 150°C to 25°C, how much heat is released?

14. What is the standard enthalpy of formation (\(\Delta H_f°\)) of \(O_{2(g)}\)? Explain.

15. Given: \(\Delta H_f°(H_2O_{(l)}) = -286 \text{ kJ/mol}\). Is the formation of liquid water from \(H_2\) and \(O_2\) exothermic or endothermic?

16. For the reaction \(2H_2 + O_2 \rightarrow 2H_2O\), \(\Delta H = -572 \text{ kJ}\). How much heat is released when 4.0 moles of \(H_2\) react completely?

17. Given:
    - \(N_2 + 2O_2 \rightarrow 2NO_2 \quad \Delta H = +68 \text{ kJ}\)
    - \(2NO + O_2 \rightarrow 2NO_2 \quad \Delta H = -112 \text{ kJ}\)

    Calculate \(\Delta H\) for: \(N_2 + O_2 \rightarrow 2NO\)

18. Calculate \(\Delta H\) for: \(4NH_3 + 5O_2 \rightarrow 4NO + 6H_2O\) given:
    - \(\Delta H_f°(NH_3) = -46 \text{ kJ/mol}\)
    - \(\Delta H_f°(NO) = +90 \text{ kJ/mol}\)
    - \(\Delta H_f°(H_2O) = -286 \text{ kJ/mol}\)

19. When 2.0 g of \(NaOH\) dissolves in water, the temperature increases by 10°C. If the solution has a mass of 100 g and \(c = 4.18 \text{ J/g·°C}\), calculate the heat released.

20. Explain why bond breaking is endothermic and bond forming is exothermic.

---

## Answer Key with Complete Explanations

### SAT Chemistry-Style Problems: Solutions

??? note "Question 1 - Answer: D"
    **Correct Answer: D) The reaction is exothermic and \(\Delta H < 0\)**

    **Explanation**: When the water temperature increases, heat is flowing FROM the reaction TO the surroundings (water). This means the reaction is releasing heat, which is the definition of an exothermic reaction. Exothermic reactions always have negative \(\Delta H\) values because the products have less enthalpy than the reactants.

    **Key Concept**: Temperature increase in surroundings = heat released by system = exothermic = negative \(\Delta H\)

??? note "Question 2 - Answer: B"
    **Correct Answer: B) One mole of compound is formed from its elements in their standard states**

    **Explanation**: The standard enthalpy of formation (\(\Delta H_f°\)) is specifically defined as the enthalpy change when ONE MOLE of a compound is formed from its constituent elements in their standard states under standard conditions (25°C, 1 atm).

    **Why other answers are wrong**:
    - A: This describes decomposition, not formation
    - C: Must be one MOLE, not one gram
    - D: This describes combustion, not formation

    **Example**: For \(H_2O_{(l)}\): \(H_{2(g)} + \frac{1}{2}O_{2(g)} \rightarrow H_2O_{(l)}\), \(\Delta H_f° = -286 \text{ kJ/mol}\)

??? note "Question 3 - Answer: B"
    **Correct Answer: B) 50,160 J**

    **Step-by-Step Solution**:
    1. Identify given values: m = 300 g, c = 4.18 J/g·°C, \(T_i\) = 20°C, \(T_f\) = 60°C
    2. Calculate \(\Delta T\): \(\Delta T = 60 - 20 = 40°\text{C}\)
    3. Apply formula: \(q = mc\Delta T\)
    4. Substitute: \(q = (300 \text{ g})(4.18 \text{ J/g·°C})(40°\text{C})\)
    5. Calculate: \(q = 50,160 \text{ J}\)

    **Reasoning**: The positive value indicates heat is absorbed by the water as its temperature increases.

??? note "Question 4 - Answer: C"
    **Correct Answer: C) \(Br_{2(l)}\)**

    **Explanation**: The standard enthalpy of formation (\(\Delta H_f°\)) is zero ONLY for elements in their standard states. The standard state of bromine at 25°C and 1 atm is LIQUID, so \(Br_{2(l)}\) has \(\Delta H_f° = 0\).

    **Why other answers are wrong**:
    - A: \(O_{3(g)}\) is ozone, NOT the standard state of oxygen. \(O_{2(g)}\) is the standard state. \(\Delta H_f°(O_3) = +142 \text{ kJ/mol}\)
    - B: \(H_2O_{(l)}\) is a compound, not an element. \(\Delta H_f° = -286 \text{ kJ/mol}\)
    - D: Diamond is NOT the standard state of carbon. Graphite is the standard state. \(\Delta H_f°(C_{diamond}) = +1.9 \text{ kJ/mol}\)

??? note "Question 5 - Answer: B"
    **Correct Answer: B) 286 kJ**

    **Step-by-Step Solution**:
    1. The balanced equation shows: 2 moles of \(H_2\) release 572 kJ of heat
    2. Set up proportion: \(\frac{572 \text{ kJ}}{2 \text{ mol } H_2} = \frac{x \text{ kJ}}{1.0 \text{ mol } H_2}\)
    3. Solve: \(x = \frac{572 \text{ kJ} \times 1.0 \text{ mol}}{2 \text{ mol}} = 286 \text{ kJ}\)

    **Reasoning**: Half the moles of \(H_2\) means half the heat released.

    **Common Mistake**: Choosing C (572 kJ) by not accounting for the stoichiometry.

??? note "Question 6 - Answer: B"
    **Correct Answer: B) 2.02 kJ**

    **Step-by-Step Solution**:
    1. Given: m = 75.0 g, c = 0.385 J/g·°C, \(T_i\) = 25.0°C, \(T_f\) = 95.0°C
    2. Calculate \(\Delta T\): \(\Delta T = 95.0 - 25.0 = 70.0°\text{C}\)
    3. Apply formula: \(q = mc\Delta T\)
    4. Substitute: \(q = (75.0 \text{ g})(0.385 \text{ J/g·°C})(70.0°\text{C})\)
    5. Calculate: \(q = 2,021.25 \text{ J} = 2.02 \text{ kJ}\)

    **Reasoning**: The positive value indicates the copper absorbed heat as it was heated.

??? note "Question 7 - Answer: A"
    **Correct Answer: A) -891 kJ**

    **Step-by-Step Solution**:
    1. Write the formula: \(\Delta H = \sum n\Delta H_f°(\text{products}) - \sum n\Delta H_f°(\text{reactants})\)

    2. Calculate products:
       - 1 mol \(CO_2\): \(1 \times (-394) = -394 \text{ kJ}\)
       - 2 mol \(H_2O\): \(2 \times (-286) = -572 \text{ kJ}\)
       - Total: \(-394 + (-572) = -966 \text{ kJ}\)

    3. Calculate reactants:
       - 1 mol \(CH_4\): \(1 \times (-75) = -75 \text{ kJ}\)
       - 2 mol \(O_2\): \(2 \times (0) = 0 \text{ kJ}\) (element in standard state)
       - Total: \(-75 + 0 = -75 \text{ kJ}\)

    4. Calculate \(\Delta H\): \(\Delta H = -966 - (-75) = -966 + 75 = -891 \text{ kJ}\)

    **Reasoning**: The large negative value indicates this combustion reaction is highly exothermic.

??? note "Question 8 - Answer: B"
    **Correct Answer: B) -2090 J**

    **Step-by-Step Solution**:
    1. Given: m = 100 g (water only, not including solute), c = 4.18 J/g·°C
    2. Temperature change: \(\Delta T = 20.0 - 25.0 = -5.0°\text{C}\) (temperature DROPS)
    3. Apply formula: \(q = mc\Delta T\)
    4. Substitute: \(q = (100 \text{ g})(4.18 \text{ J/g·°C})(-5.0°\text{C})\)
    5. Calculate: \(q = -2,090 \text{ J}\)

    **Reasoning**: The negative value indicates the water LOST heat (released heat) to the dissolving ammonium nitrate. This is an endothermic dissolution process where the solute absorbs heat from the water.

    **Key Concept**: When a substance dissolves and the solution gets colder, it's an endothermic process. The solute absorbs heat from the water.

??? note "Question 9 - Answer: A"
    **Correct Answer: A) -222 kJ**

    **Step-by-Step Solution using Hess's Law**:

    **Target equation**: \(2C + O_2 \rightarrow 2CO\)

    **Given equations**:
    - (1) \(C + O_2 \rightarrow CO_2 \quad \Delta H = -394 \text{ kJ}\)
    - (2) \(2CO + O_2 \rightarrow 2CO_2 \quad \Delta H = -566 \text{ kJ}\)

    **Strategy**:
    1. Multiply equation (1) by 2 to get 2C: \(2C + 2O_2 \rightarrow 2CO_2 \quad \Delta H = 2 \times (-394) = -788 \text{ kJ}\)
    2. Reverse equation (2) to get 2CO as product: \(2CO_2 \rightarrow 2CO + O_2 \quad \Delta H = +566 \text{ kJ}\)
    3. Add the modified equations:
       - \(2C + 2O_2 \rightarrow 2CO_2 \quad (-788 \text{ kJ})\)
       - \(2CO_2 \rightarrow 2CO + O_2 \quad (+566 \text{ kJ})\)
       - Result: \(2C + O_2 \rightarrow 2CO\) (after canceling \(2CO_2\) and one \(O_2\))
    4. Add enthalpies: \(\Delta H = -788 + 566 = -222 \text{ kJ}\)

    **Reasoning**: The negative value indicates this reaction is exothermic.

??? note "Question 10 - Answer: D"
    **Correct Answer: D) -792 kJ**

    **Step-by-Step Solution using Hess's Law**:

    **Target equation**: \(2S + 3O_2 \rightarrow 2SO_3\)

    **Given equations**:
    - (1) \(S + O_2 \rightarrow SO_2 \quad \Delta H = -297 \text{ kJ}\)
    - (2) \(2SO_2 + O_2 \rightarrow 2SO_3 \quad \Delta H = -198 \text{ kJ}\)

    **Strategy**:
    1. Multiply equation (1) by 2 to get 2S and \(2SO_2\):
       - \(2S + 2O_2 \rightarrow 2SO_2 \quad \Delta H = 2 \times (-297) = -594 \text{ kJ}\)
    2. Keep equation (2) as is:
       - \(2SO_2 + O_2 \rightarrow 2SO_3 \quad \Delta H = -198 \text{ kJ}\)
    3. Add the equations:
       - \(2S + 2O_2 \rightarrow 2SO_2 \quad (-594 \text{ kJ})\)
       - \(2SO_2 + O_2 \rightarrow 2SO_3 \quad (-198 \text{ kJ})\)
       - Result: \(2S + 3O_2 \rightarrow 2SO_3\) (after canceling \(2SO_2\))
    4. Add enthalpies: \(\Delta H = -594 + (-198) = -792 \text{ kJ}\)

    **Verification**: Check oxygen atoms: 2 + 1 = 3 on left side. Correct!

    **Reasoning**: This highly exothermic reaction represents the complete oxidation of sulfur to sulfur trioxide.

---

### Original Practice Problems: Solutions

??? note "Question 11"
    **Exothermic** (negative \(\Delta H\)). The reaction **releases heat** to the surroundings.

??? note "Question 12"
    \(q = mc\Delta T = (500)(4.18)(100-25) = (500)(4.18)(75) = 156,750 \text{ J} = \mathbf{157 \text{ kJ}}\)

??? note "Question 13"
    \(\Delta T = 25 - 150 = -125°\text{C}\). \(q = (50)(0.45)(-125) = -2,812.5 \text{ J} = \mathbf{-2.81 \text{ kJ}}\). Heat released = **2.81 kJ** (absolute value).

??? note "Question 14"
    \(\mathbf{0 \text{ kJ/mol}}\). By definition, the standard enthalpy of formation of an element in its standard state is zero.

??? note "Question 15"
    **Exothermic**. The negative \(\Delta H_f°\) indicates heat is released when water forms.

??? note "Question 16"
    The equation shows 2 moles \(H_2\) releases 572 kJ. For 4.0 moles: \(\frac{572 \text{ kJ}}{2 \text{ mol}} \times 4.0 \text{ mol} = \mathbf{1144 \text{ kJ}}\) or **1140 kJ**.

??? note "Question 17"
    Reverse the second equation: \(2NO_2 \rightarrow 2NO + O_2, \Delta H = +112 \text{ kJ}\). Add to first: \(N_2 + 2O_2 \rightarrow 2NO_2\) (\(\Delta H = +68\)) + \(2NO_2 \rightarrow 2NO + O_2\) (\(\Delta H = +112\)). Result: \(N_2 + O_2 \rightarrow 2NO\), \(\Delta H = 68 + 112 = \mathbf{+180 \text{ kJ}}\).

??? note "Question 18"
    Products: \(4(90) + 6(-286) = 360 - 1716 = -1356 \text{ kJ}\). Reactants: \(4(-46) + 5(0) = -184 \text{ kJ}\). \(\Delta H = -1356 - (-184) = \mathbf{-1172 \text{ kJ}}\).

??? note "Question 19"
    \(q = mc\Delta T = (100)(4.18)(10) = \mathbf{4180 \text{ J} = 4.18 \text{ kJ}}\) released.

??? note "Question 20"
    **Bond breaking** requires energy input to overcome attractive forces (endothermic). **Bond forming** releases energy as atoms form stable bonds (exothermic). In exothermic reactions, more energy is released forming new bonds than is required to break old bonds.

---

## Multi-Step Problem Step Checker

Use this interactive checker to verify your work on complex calorimetry and Hess's Law problems.

### Calorimetry Problem Template

**Problem**: A 120 g sample of aluminum (c = 0.90 J/g·°C) is heated from 30°C to 85°C. Calculate the heat absorbed.

**Step-by-Step Verification**:

#### Step 1: Identify Known Variables
- [ ] Mass (m) = 120 g
- [ ] Specific heat (c) = 0.90 J/g·°C
- [ ] Initial temperature (\(T_i\)) = 30°C
- [ ] Final temperature (\(T_f\)) = 85°C

**Check**: Did you write down all given values with correct units?

#### Step 2: Calculate Temperature Change
- [ ] Formula used: \(\Delta T = T_f - T_i\)
- [ ] Calculation: \(\Delta T = 85 - 30 = 55°\text{C}\)
- [ ] Sign check: Is \(\Delta T\) positive (heating) or negative (cooling)?

**Check**: For heating, \(\Delta T\) should be positive. For cooling, \(\Delta T\) should be negative.

#### Step 3: Apply Calorimetry Formula
- [ ] Formula: \(q = mc\Delta T\)
- [ ] Substitution: \(q = (120 \text{ g})(0.90 \text{ J/g·°C})(55°\text{C})\)
- [ ] Units: Do the units cancel properly to give Joules?

**Check**: (g) × (J/g·°C) × (°C) = J. Units should cancel correctly.

#### Step 4: Calculate Final Answer
- [ ] Calculation: \(q = 5,940 \text{ J}\)
- [ ] Convert to kJ if needed: \(q = 5.94 \text{ kJ}\)
- [ ] Sign interpretation: Positive q = heat absorbed, Negative q = heat released

**Final Answer**: 5,940 J or 5.94 kJ absorbed

---

### Hess's Law Problem Template

**Problem**: Calculate \(\Delta H\) for: \(C_2H_4 + H_2 \rightarrow C_2H_6\)

Given:
- (1) \(C_2H_4 + 3O_2 \rightarrow 2CO_2 + 2H_2O \quad \Delta H = -1411 \text{ kJ}\)
- (2) \(C_2H_6 + \frac{7}{2}O_2 \rightarrow 2CO_2 + 3H_2O \quad \Delta H = -1560 \text{ kJ}\)
- (3) \(H_2 + \frac{1}{2}O_2 \rightarrow H_2O \quad \Delta H = -286 \text{ kJ}\)

**Step-by-Step Verification**:

#### Step 1: Write Target Equation
- [ ] Target: \(C_2H_4 + H_2 \rightarrow C_2H_6\)
- [ ] Identify what you need on reactant side: \(C_2H_4\) and \(H_2\)
- [ ] Identify what you need on product side: \(C_2H_6\)

#### Step 2: Plan Equation Manipulations

**For Equation (1)**:
- [ ] \(C_2H_4\) is a reactant in target, and it's a reactant in (1). Keep as is? YES
- [ ] Action: Keep equation (1) as written
- [ ] \(\Delta H_1 = -1411 \text{ kJ}\)

**For Equation (2)**:
- [ ] \(C_2H_6\) is a product in target, but it's a reactant in (2). Reverse? YES
- [ ] Action: Reverse equation (2)
- [ ] New equation: \(2CO_2 + 3H_2O \rightarrow C_2H_6 + \frac{7}{2}O_2\)
- [ ] \(\Delta H_2 = +1560 \text{ kJ}\) (sign changes!)

**For Equation (3)**:
- [ ] \(H_2\) is a reactant in target, and it's a reactant in (3). Keep as is? YES
- [ ] Action: Keep equation (3) as written
- [ ] \(\Delta H_3 = -286 \text{ kJ}\)

#### Step 3: Add Equations and Cancel Species
- [ ] Write all three equations vertically
- [ ] Circle species that appear on both sides (these will cancel)
- [ ] Expected to cancel: \(2CO_2\), \(2H_2O\), \(3O_2\)

**Addition**:
```
  C₂H₄ + 3O₂ → 2CO₂ + 2H₂O        (-1411 kJ)
  2CO₂ + 3H₂O → C₂H₆ + 7/2 O₂     (+1560 kJ)
  H₂ + 1/2 O₂ → H₂O               (-286 kJ)
  ────────────────────────────────────────────
  C₂H₄ + H₂ → C₂H₆                (? kJ)
```

#### Step 4: Verify Cancellation
- [ ] \(CO_2\): 2 on product side (eq 1), 2 on reactant side (eq 2) → Cancels
- [ ] \(H_2O\): 2 on product side (eq 1), 1 on product side (eq 3), 3 on reactant side (eq 2) → Net: 3 - 3 = 0 → Cancels
- [ ] \(O_2\): 3 on reactant (eq 1), \(\frac{7}{2}\) on product (eq 2), \(\frac{1}{2}\) on reactant (eq 3) → Net: \(3 + \frac{1}{2} - \frac{7}{2} = 0\) → Cancels

**Check**: Does your final equation match the target? It should be exactly: \(C_2H_4 + H_2 \rightarrow C_2H_6\)

#### Step 5: Calculate Total \(\Delta H\)
- [ ] Add all \(\Delta H\) values algebraically
- [ ] \(\Delta H = -1411 + 1560 + (-286)\)
- [ ] \(\Delta H = -1411 + 1560 - 286 = -137 \text{ kJ}\)

**Final Answer**: \(\Delta H = -137 \text{ kJ}\)

**Interpretation**: The negative value indicates this hydrogenation reaction is exothermic.

---

## Tips for Using the Step Checker

1. **Work through one step at a time** - Don't skip ahead
2. **Check off each box** as you verify that step
3. **If you get stuck**, review the corresponding section in "Enhanced Step-by-Step Explanations"
4. **Common checkpoints**:
   - Are your signs correct?
   - Did you use the right formula?
   - Do your units match?
   - Does your final equation match the target?
