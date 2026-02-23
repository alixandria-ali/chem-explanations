# Advanced Kinetics

## Explanation

Advanced kinetics explores mathematical relationships between concentration and time, reaction mechanisms, and catalysis in depth. These topics are crucial for AP Chemistry success.

### Key Concepts

**Integrated Rate Laws**:
Connect concentration to time directly.

**Zero-Order Reactions**:
- Rate = $k$ (independent of concentration)
- Integrated: $[A]_t = -kt + [A]_0$
- Graph: [A] vs. $t$ is linear, slope = $-k$
- Half-life: $t_{1/2} = \frac{[A]_0}{2k}$ (depends on initial concentration)

**First-Order Reactions**:
- Rate = $k[A]$
- Integrated: $\ln[A]_t = -kt + \ln[A]_0$
- Graph: $\ln[A]$ vs. $t$ is linear, slope = $-k$
- Half-life: $t_{1/2} = \frac{0.693}{k} = \frac{\ln 2}{k}$ (independent of concentration)

**Second-Order Reactions**:
- Rate = $k[A]^2$
- Integrated: $\frac{1}{[A]_t} = kt + \frac{1}{[A]_0}$
- Graph: $\frac{1}{[A]}$ vs. $t$ is linear, slope = $k$
- Half-life: $t_{1/2} = \frac{1}{k[A]_0}$ (depends on initial concentration)

**Determining Order**:
- Plot [A], $\ln[A]$, or $\frac{1}{[A]}$ vs. time
- Whichever gives straight line indicates order

**Reaction Mechanisms**:
- Series of elementary steps
- **Rate-determining step** (RDS): Slowest step, determines overall rate
- **Intermediate**: Species produced and consumed (not in overall equation)
- **Catalyst**: Appears in mechanism but not in overall equation
- Mechanism must:
  1. Add up to overall equation
  2. Agree with experimental rate law

**Deriving Rate Laws from Mechanisms**:
- If first step is slow (RDS): Use first step for rate law
- If first step is fast equilibrium followed by slow step: Use equilibrium to eliminate intermediate

**Arrhenius Equation**:
Relates rate constant to temperature and activation energy:
$$k = Ae^{-E_a/RT}$$

Or in logarithmic form:
$$\ln k = \ln A - \frac{E_a}{RT}$$

Two-temperature form:
$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

- $k$ = rate constant
- $A$ = frequency factor (collision frequency and orientation)
- $E_a$ = activation energy (J/mol)
- $R = 8.314 \text{ J/mol·K}$
- $T$ = temperature (K)

**Graphing Arrhenius**:
- Plot $\ln k$ vs. $\frac{1}{T}$
- Linear graph with slope = $-\frac{E_a}{R}$
- Can determine $E_a$ from slope

---

## Worked Examples

### Example 1: First-Order Kinetics

**Problem**: A first-order reaction has $k = 0.0462 \text{ min}^{-1}$. If $[A]_0 = 0.800 \text{ M}$, what is [A] after 20.0 minutes? What is the half-life?

**Solution**:
1. First-order integrated law: $\ln[A]_t = -kt + \ln[A]_0$
2. Substitute: $\ln[A]_t = -(0.0462)(20.0) + \ln(0.800)$
3. $\ln[A]_t = -0.924 + (-0.223) = -1.147$
4. $[A]_t = e^{-1.147} = 0.317 \text{ M}$
5. Half-life: $t_{1/2} = \frac{0.693}{k} = \frac{0.693}{0.0462} = 15.0 \text{ min}$

**Answer**: [A] = 0.317 M after 20 min; $t_{1/2} = 15.0$ min

---

### Example 2: Determining Activation Energy

**Problem**: A reaction has $k = 0.020 \text{ s}^{-1}$ at 300 K and $k = 0.080 \text{ s}^{-1}$ at 320 K. Calculate the activation energy $E_a$.

**Solution**:
1. Use two-temperature Arrhenius: $\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$
2. $k_1 = 0.020$, $T_1 = 300$ K; $k_2 = 0.080$, $T_2 = 320$ K
3. $\ln\frac{0.080}{0.020} = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{320}\right)$
4. $\ln(4) = \frac{E_a}{8.314}\left(0.003333 - 0.003125\right)$
5. $1.386 = \frac{E_a}{8.314}(0.000208)$
6. $E_a = \frac{1.386 \times 8.314}{0.000208} = 55,400 \text{ J/mol} = 55.4 \text{ kJ/mol}$

**Answer**: $E_a = 55.4 \text{ kJ/mol}$

---

### Example 3: Mechanism and Rate Law

**Problem**: Proposed mechanism:
- Step 1 (slow): $2NO \rightarrow N_2O_2$ (Rate = $k_1[NO]^2$)
- Step 2 (fast): $N_2O_2 + H_2 \rightarrow N_2O + H_2O$

Overall: $2NO + H_2 \rightarrow N_2O + H_2O$

What is the predicted rate law? Identify the intermediate.

**Solution**:
1. Rate-determining step (slow step) determines rate law
2. Step 1 is slow: Rate = $k_1[NO]^2$
3. Since step 1 contains only reactants from overall equation, this is the rate law
4. Predicted rate law: **Rate = $k[NO]^2$**
5. $N_2O_2$ is produced in step 1 and consumed in step 2 (not in overall equation)
6. $N_2O_2$ is an **intermediate**

**Answer**: Rate = $k[NO]^2$; intermediate = $N_2O_2$

---

## Practice Problems

1. What is the half-life of a first-order reaction with $k = 0.0150 \text{ s}^{-1}$?

2. A zero-order reaction has $k = 0.025 \text{ M/s}$ and $[A]_0 = 0.50 \text{ M}$. What is [A] after 10 seconds?

3. For a second-order reaction with $k = 0.080 \text{ M}^{-1}\text{s}^{-1}$ and $[A]_0 = 0.60 \text{ M}$, calculate [A] after 25 seconds.

4. Data shows that a plot of $\ln[A]$ vs. $t$ is linear. What is the reaction order?

5. A first-order reaction has a half-life of 30 minutes. What fraction of the original concentration remains after 90 minutes?

6. A reaction has $k = 0.050 \text{ s}^{-1}$ at 400 K. If $E_a = 50 \text{ kJ/mol}$, estimate $k$ at 420 K.

7. From an Arrhenius plot ($\ln k$ vs. $1/T$), the slope is $-7500 \text{ K}$. Calculate $E_a$ in kJ/mol.

8. Mechanism:
   - Step 1 (fast): $A + B \rightleftharpoons C$ (equilibrium)
   - Step 2 (slow): $C + D \rightarrow E$

   What is the rate law for the overall reaction $A + B + D \rightarrow E$?

9. Explain why catalysts increase reaction rate without being consumed.

10. How does increasing temperature affect the rate constant $k$ according to the Arrhenius equation?

---

## Answer Key

??? note "Click to reveal answers"
    1. $t_{1/2} = \frac{0.693}{k} = \frac{0.693}{0.0150} = \mathbf{46.2 \text{ s}}$

    2. Zero-order: $[A]_t = -kt + [A]_0 = -(0.025)(10) + 0.50 = -0.25 + 0.50 = \mathbf{0.25 \text{ M}}$

    3. Second-order: $\frac{1}{[A]_t} = kt + \frac{1}{[A]_0} = (0.080)(25) + \frac{1}{0.60} = 2.0 + 1.67 = 3.67$. $[A]_t = \frac{1}{3.67} = \mathbf{0.27 \text{ M}}$

    4. **First-order**. The $\ln[A]$ vs. $t$ plot is linear for first-order reactions.

    5. After 90 min = $3 \times t_{1/2}$. After 1 half-life: $\frac{1}{2}$ remains. After 2: $\frac{1}{4}$. After 3: $\mathbf{\frac{1}{8}}$ or **0.125** (12.5%) remains.

    6. $\ln\frac{k_2}{0.050} = \frac{50,000}{8.314}\left(\frac{1}{400} - \frac{1}{420}\right) = 6014(0.00250 - 0.00238) = 6014(0.00012) = 0.72$. $\frac{k_2}{0.050} = e^{0.72} = 2.05$. $k_2 = \mathbf{0.103 \text{ s}^{-1}}$ or **0.10 s$^{-1}$**.

    7. Slope $= -\frac{E_a}{R}$, so $E_a = -\text{slope} \times R = -(-7500)(8.314) = 62,355 \text{ J/mol} = \mathbf{62.4 \text{ kJ/mol}}$

    8. Step 2 (slow) is RDS: Rate $= k_2[C][D]$. But C is intermediate. From step 1 equilibrium: $K = \frac{[C]}{[A][B]}$, so $[C] = K[A][B]$. Substitute: Rate $= k_2K[A][B][D]$. **Rate = $k[A][B][D]$** (where $k = k_2K$).

    9. Catalysts provide an **alternate reaction pathway with lower activation energy**. This increases the rate constant $k$, speeding up the reaction. Catalysts are regenerated after the reaction, so they're not consumed overall.

    10. As temperature increases, $k$ **increases exponentially**. The term $e^{-E_a/RT}$ becomes larger (less negative exponent), so more molecules have sufficient energy to overcome $E_a$.
