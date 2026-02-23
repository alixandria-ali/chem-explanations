# Thermochemistry

## Explanation

Thermochemistry studies energy changes during chemical reactions. Understanding energy flow helps predict reaction spontaneity and calculate heat transfer.

### Key Concepts

**Energy and Enthalpy**:
- **System**: The part of the universe we're studying (the reaction)
- **Surroundings**: Everything else outside the system
- **Enthalpy ($H$)**: Heat content of a system at constant pressure
- **Enthalpy change ($\Delta H$)**: Heat absorbed or released in a reaction
  - $\Delta H = H_{\text{products}} - H_{\text{reactants}}$

**Exothermic vs. Endothermic**:
- **Exothermic**: Releases heat to surroundings, $\Delta H < 0$ (negative)
  - Example: $CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O \quad \Delta H = -890 \text{ kJ}$
  - Products have less energy than reactants
- **Endothermic**: Absorbs heat from surroundings, $\Delta H > 0$ (positive)
  - Example: $N_2 + O_2 \rightarrow 2NO \quad \Delta H = +181 \text{ kJ}$
  - Products have more energy than reactants

**Standard Enthalpy of Formation ($\Delta H_f°$)**:
- Heat change when 1 mole of compound forms from elements in standard states
- Standard state: 25°C (298 K), 1 atm pressure
- By definition: $\Delta H_f°$ of elements in standard state = 0

**Hess's Law**:
- Total enthalpy change is independent of pathway
- $\Delta H_{\text{reaction}} = \sum \Delta H_f°(\text{products}) - \sum \Delta H_f°(\text{reactants})$
- Can add equations and their $\Delta H$ values to find overall $\Delta H$

**Calorimetry**:
- Measuring heat transfer using a calorimeter
- $q = mc\Delta T$
  - $q$ = heat absorbed/released (J)
  - $m$ = mass (g)
  - $c$ = specific heat capacity (J/g·°C)
  - $\Delta T$ = temperature change (°C)
- Specific heat of water: $c = 4.18 \text{ J/g·°C}$

---

## Worked Examples

### Example 1: Calculating Heat Using $q = mc\Delta T$

**Problem**: How much heat is required to raise the temperature of 250 g of water from 20°C to 80°C? (Specific heat of water = 4.18 J/g·°C)

**Solution**:
1. Identify given values: $m = 250 \text{ g}$, $c = 4.18 \text{ J/g·°C}$, $\Delta T = 80 - 20 = 60°\text{C}$
2. Use formula: $q = mc\Delta T$
3. $q = (250 \text{ g})(4.18 \text{ J/g·°C})(60°\text{C})$
4. $q = 62,700 \text{ J} = 62.7 \text{ kJ}$

**Answer**: 62.7 kJ of heat is required

---

### Example 2: Using Hess's Law

**Problem**: Given:
- $C_{(s)} + O_{2(g)} \rightarrow CO_{2(g)} \quad \Delta H = -394 \text{ kJ}$
- $CO_{(g)} + \frac{1}{2}O_{2(g)} \rightarrow CO_{2(g)} \quad \Delta H = -283 \text{ kJ}$

Calculate $\Delta H$ for: $C_{(s)} + \frac{1}{2}O_{2(g)} \rightarrow CO_{(g)}$

**Solution**:
1. We want to get $CO$ as a product, so reverse the second equation:
   - $CO_{2(g)} \rightarrow CO_{(g)} + \frac{1}{2}O_{2(g)} \quad \Delta H = +283 \text{ kJ}$ (sign changes)
2. Add the first equation and reversed second equation:
   - $C_{(s)} + O_{2(g)} \rightarrow CO_{2(g)} \quad \Delta H = -394 \text{ kJ}$
   - $CO_{2(g)} \rightarrow CO_{(g)} + \frac{1}{2}O_{2(g)} \quad \Delta H = +283 \text{ kJ}$
3. $CO_2$ cancels, $O_2$ simplifies: $C_{(s)} + \frac{1}{2}O_{2(g)} \rightarrow CO_{(g)}$
4. Add enthalpies: $\Delta H = -394 + 283 = -111 \text{ kJ}$

**Answer**: $\Delta H = -111 \text{ kJ}$

---

### Example 3: Calculating $\Delta H$ from Formation Enthalpies

**Problem**: Calculate $\Delta H$ for the combustion of methane:
$CH_{4(g)} + 2O_{2(g)} \rightarrow CO_{2(g)} + 2H_2O_{(l)}$

Given: $\Delta H_f°(CH_4) = -75 \text{ kJ/mol}$, $\Delta H_f°(CO_2) = -394 \text{ kJ/mol}$, $\Delta H_f°(H_2O) = -286 \text{ kJ/mol}$

**Solution**:
1. Formula: $\Delta H = \sum n\Delta H_f°(\text{products}) - \sum n\Delta H_f°(\text{reactants})$
2. Note: $\Delta H_f°(O_2) = 0$ (element in standard state)
3. Products: $1 \times (-394) + 2 \times (-286) = -394 - 572 = -966 \text{ kJ}$
4. Reactants: $1 \times (-75) + 2 \times (0) = -75 \text{ kJ}$
5. $\Delta H = -966 - (-75) = -966 + 75 = -891 \text{ kJ}$

**Answer**: $\Delta H = -891 \text{ kJ}$ (exothermic combustion)

---

## Practice Problems

1. Is a reaction with $\Delta H = -125 \text{ kJ}$ exothermic or endothermic? Does it release or absorb heat?

2. Calculate the heat absorbed when 500 g of water is heated from 25°C to 100°C. ($c = 4.18 \text{ J/g·°C}$)

3. If 50 g of iron ($c = 0.45 \text{ J/g·°C}$) cools from 150°C to 25°C, how much heat is released?

4. What is the standard enthalpy of formation ($\Delta H_f°$) of $O_{2(g)}$? Explain.

5. Given: $\Delta H_f°(H_2O_{(l)}) = -286 \text{ kJ/mol}$. Is the formation of liquid water from $H_2$ and $O_2$ exothermic or endothermic?

6. For the reaction $2H_2 + O_2 \rightarrow 2H_2O$, $\Delta H = -572 \text{ kJ}$. How much heat is released when 4.0 moles of $H_2$ react completely?

7. Given:
   - $N_2 + 2O_2 \rightarrow 2NO_2 \quad \Delta H = +68 \text{ kJ}$
   - $2NO + O_2 \rightarrow 2NO_2 \quad \Delta H = -112 \text{ kJ}$

   Calculate $\Delta H$ for: $N_2 + O_2 \rightarrow 2NO$

8. Calculate $\Delta H$ for: $4NH_3 + 5O_2 \rightarrow 4NO + 6H_2O$ given:
   - $\Delta H_f°(NH_3) = -46 \text{ kJ/mol}$
   - $\Delta H_f°(NO) = +90 \text{ kJ/mol}$
   - $\Delta H_f°(H_2O) = -286 \text{ kJ/mol}$

9. When 2.0 g of $NaOH$ dissolves in water, the temperature increases by 10°C. If the solution has a mass of 100 g and $c = 4.18 \text{ J/g·°C}$, calculate the heat released.

10. Explain why bond breaking is endothermic and bond forming is exothermic.

---

## Answer Key

??? note "Click to reveal answers"
    1. **Exothermic** (negative $\Delta H$). The reaction **releases heat** to the surroundings.

    2. $q = mc\Delta T = (500)(4.18)(100-25) = (500)(4.18)(75) = 156,750 \text{ J} = \mathbf{157 \text{ kJ}}$

    3. $\Delta T = 25 - 150 = -125°\text{C}$. $q = (50)(0.45)(-125) = -2,812.5 \text{ J} = \mathbf{-2.81 \text{ kJ}}$. Heat released = **2.81 kJ** (absolute value).

    4. $\mathbf{0 \text{ kJ/mol}}$. By definition, the standard enthalpy of formation of an element in its standard state is zero.

    5. **Exothermic**. The negative $\Delta H_f°$ indicates heat is released when water forms.

    6. The equation shows 2 moles $H_2$ releases 572 kJ. For 4.0 moles: $\frac{572 \text{ kJ}}{2 \text{ mol}} \times 4.0 \text{ mol} = \mathbf{1144 \text{ kJ}}$ or **1140 kJ**.

    7. Reverse the second equation: $2NO_2 \rightarrow 2NO + O_2, \Delta H = +112 \text{ kJ}$. Add to first: $N_2 + 2O_2 \rightarrow 2NO_2$ ($\Delta H = +68$) + $2NO_2 \rightarrow 2NO + O_2$ ($\Delta H = +112$). Result: $N_2 + O_2 \rightarrow 2NO$, $\Delta H = 68 + 112 = \mathbf{+180 \text{ kJ}}$.

    8. Products: $4(90) + 6(-286) = 360 - 1716 = -1356 \text{ kJ}$. Reactants: $4(-46) + 5(0) = -184 \text{ kJ}$. $\Delta H = -1356 - (-184) = \mathbf{-1172 \text{ kJ}}$.

    9. $q = mc\Delta T = (100)(4.18)(10) = \mathbf{4180 \text{ J} = 4.18 \text{ kJ}}$ released.

    10. **Bond breaking** requires energy input to overcome attractive forces (endothermic). **Bond forming** releases energy as atoms form stable bonds (exothermic). In exothermic reactions, more energy is released forming new bonds than is required to break old bonds.
