# Thermodynamics

## Explanation

Thermodynamics studies energy transformations and predicts reaction spontaneity. Understanding entropy and Gibbs free energy is essential for AP Chemistry and predicting chemical behavior.

### Key Concepts

**Laws of Thermodynamics**:
- **First Law**: Energy is conserved. $\Delta E = q + w$
  - $\Delta E$ = change in internal energy
  - $q$ = heat (+ absorbed, - released)
  - $w$ = work (+ done on system, - done by system)

**Enthalpy ($H$)**: Heat content at constant pressure
- $\Delta H = q_p$ (heat at constant pressure)
- Hess's Law: $\Delta H$ is path-independent

**Entropy ($S$)**: Measure of disorder/randomness
- Units: J/mol·K
- Higher entropy = more disorder
- $\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}}$

**Entropy Changes**:
- **Increase entropy** ($\Delta S > 0$):
  - Gas formation from liquid/solid
  - More moles of gas products than reactants
  - Dissolving, mixing, heating
- **Decrease entropy** ($\Delta S < 0$):
  - Gas → liquid/solid
  - Fewer moles of gas products
  - Cooling, ordering

**Calculating $\Delta S°$**:
$$\Delta S° = \sum S°_{\text{products}} - \sum S°_{\text{reactants}}$$

**Second Law**: Spontaneous processes increase universal entropy ($\Delta S_{\text{univ}} > 0$)

**Third Law**: Perfect crystal at 0 K has $S = 0$

**Gibbs Free Energy ($G$)**: Predicts spontaneity at constant T and P
$$\Delta G = \Delta H - T\Delta S$$

**Spontaneity**:
- $\Delta G < 0$: Spontaneous (thermodynamically favored)
- $\Delta G > 0$: Non-spontaneous (thermodynamically unfavored)
- $\Delta G = 0$: At equilibrium

**Temperature Dependence**:

| $\Delta H$ | $\Delta S$ | $\Delta G$ | Spontaneity |
|------------|------------|------------|-------------|
| - (exo)    | + (increase) | Always - | Spontaneous at all T |
| + (endo)   | - (decrease) | Always + | Never spontaneous |
| - (exo)    | - (decrease) | - at low T | Spontaneous at low T |
| + (endo)   | + (increase) | - at high T | Spontaneous at high T |

**Standard Free Energy**:
$$\Delta G° = \sum \Delta G_f°(\text{products}) - \sum \Delta G_f°(\text{reactants})$$
$$\Delta G° = -RT\ln K$$
- $R = 8.314 \text{ J/mol·K}$
- $K$ = equilibrium constant

**Relationship to Equilibrium**:
$$\Delta G = \Delta G° + RT\ln Q$$

---

## Worked Examples

### Example 1: Calculating $\Delta G$ and Predicting Spontaneity

**Problem**: For a reaction, $\Delta H° = -125 \text{ kJ}$ and $\Delta S° = -200 \text{ J/K}$ at 298 K. Calculate $\Delta G°$ and determine if the reaction is spontaneous.

**Solution**:
1. Use formula: $\Delta G° = \Delta H° - T\Delta S°$
2. Convert units: $\Delta S° = -200 \text{ J/K} = -0.200 \text{ kJ/K}$
3. Substitute: $\Delta G° = -125 \text{ kJ} - (298 \text{ K})(-0.200 \text{ kJ/K})$
4. $\Delta G° = -125 + 59.6 = -65.4 \text{ kJ}$
5. Since $\Delta G° < 0$, reaction is spontaneous at 298 K

**Answer**: $\Delta G° = -65.4 \text{ kJ}$, spontaneous at 298 K

---

### Example 2: Finding Temperature for Spontaneity

**Problem**: A reaction has $\Delta H° = +150 \text{ kJ}$ and $\Delta S° = +250 \text{ J/K}$. At what temperature does the reaction become spontaneous?

**Solution**:
1. For spontaneity: $\Delta G < 0$
2. At threshold: $\Delta G = 0$
3. $0 = \Delta H - T\Delta S$
4. $T = \frac{\Delta H}{\Delta S}$
5. Convert: $\Delta H = 150 \text{ kJ} = 150,000 \text{ J}$, $\Delta S = 250 \text{ J/K}$
6. $T = \frac{150,000 \text{ J}}{250 \text{ J/K}} = 600 \text{ K}$
7. Above 600 K, $T\Delta S > \Delta H$, so $\Delta G < 0$ (spontaneous)

**Answer**: The reaction becomes spontaneous above 600 K (or 327°C)

---

### Example 3: Relating $\Delta G°$ and $K$

**Problem**: A reaction at 25°C has $K = 1.5 \times 10^{-5}$. Calculate $\Delta G°$.

**Solution**:
1. Use formula: $\Delta G° = -RT\ln K$
2. $R = 8.314 \text{ J/mol·K}$, $T = 298 \text{ K}$
3. $\Delta G° = -(8.314)(298)\ln(1.5 \times 10^{-5})$
4. $\ln(1.5 \times 10^{-5}) = \ln(1.5) + \ln(10^{-5}) = 0.405 - 11.513 = -11.108$
5. $\Delta G° = -(8.314)(298)(-11.108)$
6. $\Delta G° = (2477.6)(11.108) = 27,520 \text{ J} = 27.5 \text{ kJ}$

**Answer**: $\Delta G° = +27.5 \text{ kJ}$ (positive, so reactants favored at equilibrium)

---

## Practice Problems

1. Define entropy. Does entropy increase or decrease when ice melts to water?

2. For the reaction $2SO_2(g) + O_2(g) \rightarrow 2SO_3(g)$, predict the sign of $\Delta S°$ (positive or negative). Explain.

3. A reaction has $\Delta H° = -50 \text{ kJ}$ and $\Delta S° = +100 \text{ J/K}$. Calculate $\Delta G°$ at 300 K. Is it spontaneous?

4. If $\Delta G° = 0$, what is the value of $K$?

5. For a reaction, $\Delta H° = +200 \text{ kJ}$ and $\Delta S° = -300 \text{ J/K}$. Is this reaction spontaneous at any temperature? Explain.

6. Calculate $\Delta G°$ for a reaction at 298 K with $K = 100$.

7. A reaction is spontaneous at low temperatures but non-spontaneous at high temperatures. What are the signs of $\Delta H$ and $\Delta S$?

8. Given: $\Delta G_f°(CO_2) = -394 \text{ kJ/mol}$, $\Delta G_f°(H_2O) = -237 \text{ kJ/mol}$, $\Delta G_f°(C_3H_8) = -24 \text{ kJ/mol}$. Calculate $\Delta G°$ for:
   $C_3H_8(g) + 5O_2(g) \rightarrow 3CO_2(g) + 4H_2O(l)$

9. At what temperature does a reaction with $\Delta H° = -75 \text{ kJ}$ and $\Delta S° = -150 \text{ J/K}$ transition from spontaneous to non-spontaneous?

10. Explain why $\Delta G < 0$ does not mean a reaction will occur quickly.

---

## Answer Key

??? note "Click to reveal answers"
    1. **Entropy** is a measure of disorder or randomness. Ice melting to water **increases entropy** ($\Delta S > 0$) because liquid water has more disorder than solid ice.

    2. **Negative** ($\Delta S° < 0$). Left side: 3 moles gas. Right side: 2 moles gas. Fewer moles of gas means less disorder, so entropy decreases.

    3. $\Delta S° = +100 \text{ J/K} = +0.100 \text{ kJ/K}$. $\Delta G° = -50 - (300)(0.100) = -50 - 30 = \mathbf{-80 \text{ kJ}}$. **Spontaneous** ($\Delta G° < 0$).

    4. $\Delta G° = -RT\ln K = 0$ means $\ln K = 0$, so $\mathbf{K = 1}$.

    5. **Never spontaneous**. $\Delta H° > 0$ (endothermic) and $\Delta S° < 0$ (decrease entropy). $\Delta G° = \Delta H° - T\Delta S° = (+) - T(-) = (+) + (+) = \mathbf{always~positive}$.

    6. $\Delta G° = -RT\ln K = -(8.314)(298)\ln(100) = -(2477.6)(4.605) = \mathbf{-11,400 \text{ J} = -11.4 \text{ kJ}}$

    7. Spontaneous at low T means $\Delta G < 0$ when T is small. This requires $\Delta H < 0$ (exothermic, favors spontaneity) and $\Delta S < 0$ (decrease entropy, disfavors spontaneity). At low T, $|\Delta H| > T|\Delta S|$. **$\Delta H$ is negative, $\Delta S$ is negative**.

    8. Products: $3(-394) + 4(-237) = -1182 - 948 = -2130 \text{ kJ}$. Reactants: $1(-24) + 5(0) = -24 \text{ kJ}$. $\Delta G° = -2130 - (-24) = \mathbf{-2106 \text{ kJ}}$

    9. At transition, $\Delta G = 0$: $T = \frac{\Delta H}{\Delta S} = \frac{-75,000 \text{ J}}{-150 \text{ J/K}} = \mathbf{500 \text{ K}}$. Above 500 K, reaction becomes non-spontaneous.

    10. $\Delta G < 0$ indicates **thermodynamic favorability** (will eventually reach equilibrium favoring products), but says **nothing about rate** (kinetics). A reaction can be spontaneous but have high activation energy, making it very slow.
