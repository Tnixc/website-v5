---
title: A somewhat correct Fourier Transformation explaination
date: "2024-04-20"
---

# What does it do?

The Fourier transform **decomposes** a waveform or signal into its constituent sinusoidal waves of different frequencies, amplitudes, and phases. It essentially breaks down a complicated waveform into a **sum of simpler sine and cosine waves.** Otherwise known as seeing it in the **frequency-domain**.

Look at this image here: It's actually made up of a bunch of waves stacked on top of each other. All waves are like this.

<img width="400" alt="a cross sectional view of the time domain and frequency domain representations" src="https://studyelectrical.com/wp-content/uploads/2023/05/Time-domain-vs-frequency-domain-measurements-1.png" />

In the image, we're seeing the strength or **power** of each frequency that makes up the input wave.

This is said to be the **frequency domain** representation of the original function (the final graph in blue). We get no information about the change over time when looking at the frequency domain representation, instead we get the _power levels (strength of amplitude)_ of **each frequency component present**. This is the frequency domain representation as opposed to the **time domain** representation, where the value of the wave is known at **all real possible values of time** (the graph in red).

Put simply, a [time-domain](https://www.wikiwand.com/en/Time-domain "Time-domain") graph shows how a signal changes over time, whereas a [frequency-domain](https://www.wikiwand.com/en/Frequency_domain "Frequency-domain") graph shows how the signal is distributed within different frequency bands over a range of frequencies.

This ties into the **Uncertainty principle**, which basically states that **the more you know about frequency, the less you know about time(as in when it takes place), and vice versa.** This is why in the case of a Fourier transformation, we can know everything about the waves that make up the input function with 100% certainty, we cannot know anything about **when** these are in effect.

On the other hand, when looking at the **time domain** representation, we know the exact value of the function at all times, but we don't know anything about the waves that make it up. This is the input to the Fourier transform.

The time domain and frequency domain representations are complementary views of the same signal. They contain the same information, just represented differently. The Fourier transform allows us to switch between these two representations

---

# An Example - How does it work?

The input of a Fourier transform will be denoted as $f(t)$, and the output will be denoted as $\hat{f}(t)$.

<img src="https://neurodsp-tools.github.io/neurodsp/_images/sphx_glr_plot_MorletWavelet_004.png" alt="a morlet function graph" />

The function above is $f(t) = cos(2\pi 3t)\exp(-\pi t^2)$. It is a cosine wave that oscillates at 3Hz (assuming t is seconds) and tends quickly to 0. (The second factor in this equation is an [envelope function](<https://www.wikiwand.com/en/Envelope_(waves)> "Envelope (waves)") shown in red that shapes the continuous sinusoid into a short pulse.) - [Fourier transform - Wikiwand](https://www.wikiwand.com/en/Fourier_transform)

The result will be denoted as $\hat{f}(x)$. In order to calculate it, we need to **integrate** the result(product) of $f(t)\exp{(-i2\pi3t)}$. Why is this?

!> $\exp(a)$ is another notation for $e^a$

## Where $\exp{(-i2\pi3t )}$ comes from and Euler's formula

$\exp{(-i2\pi3t)}$ is a **complex exponential** which is oscillating. This **oscillation comes from the $t$ item.**

$\exp{(-i2\pi3t)}$ can be expressed as $\cos(2π3t) + i \sin(2π3t)$. This is **[Euler's formula](https://www.wikiwand.com/en/Euler%27s_formula)**, which states that $e^{i\theta}=\cos(\theta)+i\sin(\theta)$. This represents **a complex sinusoid oscillating at 3 Hz**. The **cosine(real)** and the **sine(imaginary )** component are 90 degrees out of phase.

It kinds of look like this:

<div class="flex flex-wrap justify-center">
<img width="300" alt="3D representation of the complex exponential" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Rising_circular.gif/480px-Rising_circular.gif" />
<img  width="300" alt="euler's formula on a unit circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Euler%27s_formula.svg/640px-Euler%27s_formula.svg.png" />
</div>

x> To reiterate: $\exp(-i2\pi 3t) = \cos(2\pi 3t) + i\sin(2\pi 3t)$. The imaginary component(_sin_) is 90 degrees out of phase from the real component(_cos_).

The coefficient of _t_ in this case is 3 because that's the frequency we're trying to extract at the moment, which will give us the result of $\hat{f}(3)$. In general, the frequency term in the complex exponential $\exp(-i2πkt)$ used in the Fourier transform integral is chosen to match the frequency _k_ present. This means we will slide _k_ here to find out the **power level** of the contributing wave at frequency _k_.

## Real and imaginary parts - How it really works

The wikipedia page states it best:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Onfreq.png/960px-Onfreq.png" alt="the graphs of the integrals" />

> The 2 images on the right are the real and imaginary parts of that product respectively. The real part of the integrand has a non-negative average value, because **the alternating signs of $f(t)$ and $\text{Re}(\exp(-i2\pi3t))$ oscillate at the same rate and same phase, whereas $f(t)$ and $\text{Im}(\exp(-i2\pi3t))$ are same rate but orthogonal(90 degrees offset) phase**. The result is that when you integrate the real part of the integrand you get a relatively large number (in this case 1/2)

> When you try to measure a frequency that is not present, as in the case when we look at $\hat{f}(5)$ **both real and imaginary component of the product vary rapidly between positive and negative values.** **Therefore, the integral is very small and the value for the Fourier transform for that frequency is nearly zero.** The general situation is usually more complicated than this, but heuristically this is how the Fourier transform measures how much of an individual frequency is present in a function.

### So how does taking the integral compare its alikeness?

1. It is important to note that we are multiplying $f(t)$ by $\exp(-i2πkt)$. This product will be large (constructively added) at times when $f(t)$ and $\exp(-i2πkt)$ are "in phase" and have the same sign. It will be small (destructively canceled) when they are "out of phase" and have opposite signs.
2. If $f(x)$ and $exp(-i2\pi3t )$ contains much of the same frequency, their product will consistently have the same sign, allowing the areas under the curve to constructively add up.
3. The inverse is also true. If they are not well matched, their product will rapidly oscillate between positive and negative values, causing the areas under the curve to cancel out.
4. By integrating this product $f(t)\exp(-i2πkt)$ over all time, we are essentially summing up the total area under the curve that didn't get canceled out due to sign mismatches.

As the product is complex, the result of the Fourier transform integral for a given frequency k can be represented as a complex number, which will be in the form $\hat{f}(k) = \cos(k) + i\sin(k)$. This can also be thought of as the Dot product between the complex $\exp(-i2\pi3t)$ and the real or complex value at $f(t)$, which is another way to think of the Fourier Transformation that I will not get into at this moment.

### Extracting phase and magnitude

From the form $\cos(k) + i\sin(k)$, we can take the **absolute value** of the complex number, otherwise known as the magnitude, which is given by the equation $\sqrt{(\text{Re}(\cos(k)))^2+(\text{Im}(\sin(k)))^2}$.

Note that we are taking the **coefficient of the imaginary component** here, which will be a real number. This means the magnitude will also be a real number.

The phase is encoded by the angle from 0 that the line pointing to the point in the complex plane is. In other words, angle $\theta$, which is the phase component in the equation $\exp(k+\theta)$, can be given by the following:

$$\theta = \tan^{-1}\left(\frac{\text{Im}(\hat{f}(k))}{\text{Re}(\hat{f}(k))}\right)$$

<img alt="result" width="300" src="https://i.imgur.com/Jcw29On.png" />

It is with this phase information that the make up of a wave at frequency _k_ can be perfectly encoded, allowing for a perfect reconstruction of the input function, **allowing for a perfect conversion between the time-domain and the frequency-domain representations**

?> In summary, it is taking the frequency _k_ and then **comparing how alike it is to the input function**, for sliding frequency of _k_.

# The result

<img src=
"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Fourier_transform_of_oscillating_function.svg/720px-Fourier_transform_of_oscillating_function.svg.png" width="500" />

Here is the result. Isn't it beautiful? But why is there a response at -3 Hz?

This is due to the fact that $\cos(2\pi3t)$ is indistinguishable from $\cos(2\pi(-3)t)$.

?> **On symmetry: ** The reason for the response at -3 Hz is that the Fourier transform is a symmetric operation, and the Fourier transform of a real-valued function is conjugate-symmetric (or Hermitian-symmetric). This means that the Fourier transform at a positive frequency is the complex conjugate of the Fourier transform at the corresponding negative frequency.

x> **Error in notation**: denoting the result as $\hat{f}(t)$ is probably wrong. It should be $\hat{f}(\xi)$, as the result is a function of frequency, not time.

# Sources

1. [Fourier coefficients - YouTube](https://youtu.be/_htCsieA0_U?si=NTUlbCqICabXKWMK)
2. [Fourier transform - Wikiwand](https://www.wikiwand.com/en/Fourier%20transform)
3. [Frequency domain - Wikiwand](https://www.wikiwand.com/en/Frequency_domain)

---

# Why did I write this?

Thanks for reading! Although this is a very well explained topic I couldn't really understand it for a while. Writing this is more for my own understanding than for the reader tbh, I did learn a lot by writing this.
