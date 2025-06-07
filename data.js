// Chemistry syllabus topics and content
const topics = [
    {
        id: "atomic-structure",
        name: "Atomic Structure and Periodicity",
        flashcards: [
            {
                front: "What is an atom?",
                back: "The smallest part of an element that can exist and still retain the properties of the element."
            },
            {
                front: "What are isotopes?",
                back: "Atoms of the same element with the same number of protons but different numbers of neutrons."
            },
            {
                front: "Define atomic number.",
                back: "The number of protons in the nucleus of an atom."
            },
            {
                front: "What is the mass number?",
                back: "The total number of protons and neutrons in the nucleus of an atom."
            },
            {
                front: "What is the periodic table?",
                back: "A tabular arrangement of chemical elements arranged by atomic number and electron configuration."
            },
            {
                front: "Define ionization energy.",
                back: "The energy required to remove an electron from a gaseous atom or ion."
            },
            {
                front: "What is electron affinity?",
                back: "The energy change when an electron is added to a gaseous atom or ion."
            },
            {
                front: "What are valence electrons?",
                back: "Electrons in the outermost shell of an atom that participate in chemical bonding."
            },
            {
                front: "Define electronegativity.",
                back: "A measure of an atom's ability to attract the shared pair of electrons in a covalent bond."
            },
            {
                front: "What is the quantum mechanical model?",
                back: "A mathematical model describing the behavior and positions of electrons in atoms using quantum numbers."
            }
        ],
        quiz: [
            {
                question: "What is the atomic number of an atom?",
                options: [
                    "The number of neutrons",
                    "The number of protons",
                    "The number of electrons",
                    "The number of protons plus neutrons"
                ],
                correctIndex: 1
            },
            {
                question: "Which subatomic particle has no charge?",
                options: [
                    "Proton",
                    "Electron",
                    "Neutron",
                    "Positron"
                ],
                correctIndex: 2
            },
            {
                question: "What are isotopes?",
                options: [
                    "Atoms with the same number of neutrons but different numbers of protons",
                    "Atoms with the same atomic number but different mass numbers",
                    "Atoms with the same mass number but different atomic numbers",
                    "Atoms with different numbers of electrons"
                ],
                correctIndex: 1
            },
            {
                question: "Which periodic table group contains the noble gases?",
                options: [
                    "Group 1",
                    "Group 7",
                    "Group 17",
                    "Group 18"
                ],
                correctIndex: 3
            },
            {
                question: "Which element has the highest electronegativity?",
                options: [
                    "Oxygen",
                    "Nitrogen",
                    "Fluorine",
                    "Chlorine"
                ],
                correctIndex: 2
            },
            {
                question: "What is the maximum number of electrons that can occupy the third energy level (n=3)?",
                options: [
                    "8",
                    "18",
                    "32",
                    "2"
                ],
                correctIndex: 1
            },
            {
                question: "Which quantum number describes the shape of an orbital?",
                options: [
                    "Principal quantum number (n)",
                    "Angular momentum quantum number (l)",
                    "Magnetic quantum number (ml)",
                    "Spin quantum number (ms)"
                ],
                correctIndex: 1
            },
            {
                question: "In which direction does ionization energy generally increase across the periodic table?",
                options: [
                    "Left to right",
                    "Right to left",
                    "Top to bottom",
                    "Bottom to top"
                ],
                correctIndex: 0
            },
            {
                question: "What is the electron configuration of oxygen?",
                options: [
                    "1s² 2s² 2p⁴",
                    "1s² 2s² 2p⁶",
                    "1s² 2s² 2p² 3s²",
                    "1s² 2s² 2p³"
                ],
                correctIndex: 0
            },
            {
                question: "Which of these elements would have the largest atomic radius?",
                options: [
                    "Lithium",
                    "Sodium",
                    "Potassium",
                    "Rubidium"
                ],
                correctIndex: 3
            }
        ]
    },
    {
        id: "chemical-bonding",
        name: "Chemical Bonding and Structure",
        flashcards: [
            {
                front: "What is a covalent bond?",
                back: "A bond formed by sharing electron pairs between atoms."
            },
            {
                front: "What is an ionic bond?",
                back: "An electrostatic attraction between oppositely charged ions."
            },
            {
                front: "Define hydrogen bonding.",
                back: "A type of dipole-dipole interaction between a hydrogen atom bonded to a highly electronegative atom and another electronegative atom with a lone pair of electrons."
            },
            {
                front: "What is VSEPR theory?",
                back: "Valence Shell Electron Pair Repulsion theory - predicts the geometry of molecules based on electron pair repulsions."
            },
            {
                front: "What are van der Waals forces?",
                back: "Weak attractive forces between molecules or atoms that arise from temporary dipoles."
            },
            {
                front: "What is hybridization?",
                back: "The mixing of atomic orbitals to form new hybrid orbitals suitable for chemical bonding."
            },
            {
                front: "What is a coordinate (dative) bond?",
                back: "A covalent bond in which both shared electrons come from the same atom."
            },
            {
                front: "What is the octet rule?",
                back: "Atoms tend to combine in such a way that they each have eight electrons in their valence shells."
            },
            {
                front: "What is a sigma bond?",
                back: "A chemical bond formed by head-to-head overlapping of atomic orbitals."
            },
            {
                front: "What is a pi bond?",
                back: "A chemical bond formed by side-by-side overlapping of atomic orbitals."
            }
        ],
        quiz: [
            {
                question: "Which type of chemical bond involves the sharing of electrons?",
                options: [
                    "Ionic bond",
                    "Covalent bond",
                    "Metallic bond",
                    "Hydrogen bond"
                ],
                correctIndex: 1
            },
            {
                question: "What is the shape of a molecule with four electron pairs around the central atom with no lone pairs?",
                options: [
                    "Tetrahedral",
                    "Square planar",
                    "Trigonal pyramidal",
                    "Bent"
                ],
                correctIndex: 0
            },
            {
                question: "What is the hybridization of carbon in methane (CH₄)?",
                options: [
                    "sp",
                    "sp²",
                    "sp³",
                    "sp³d"
                ],
                correctIndex: 2
            },
            {
                question: "Which of these compounds would have the strongest hydrogen bonding?",
                options: [
                    "CH₄",
                    "NH₃",
                    "HF",
                    "H₂S"
                ],
                correctIndex: 2
            },
            {
                question: "What is the bond angle in a water molecule?",
                options: [
                    "90°",
                    "104.5°",
                    "120°",
                    "180°"
                ],
                correctIndex: 1
            },
            {
                question: "Which of these bonds is most polar?",
                options: [
                    "C-H",
                    "O-H",
                    "C-C",
                    "H-H"
                ],
                correctIndex: 1
            },
            {
                question: "In VSEPR theory, what is the molecular geometry when there are 3 bonding pairs and 1 lone pair around the central atom?",
                options: [
                    "Trigonal planar",
                    "Tetrahedral",
                    "Trigonal pyramidal",
                    "T-shaped"
                ],
                correctIndex: 2
            },
            {
                question: "Which type of bond is responsible for the high melting point of sodium chloride?",
                options: [
                    "Covalent bond",
                    "Ionic bond",
                    "Hydrogen bond",
                    "Metallic bond"
                ],
                correctIndex: 1
            },
            {
                question: "What is the hybridization of nitrogen in ammonia (NH₃)?",
                options: [
                    "sp",
                    "sp²",
                    "sp³",
                    "sp³d"
                ],
                correctIndex: 2
            },
            {
                question: "Which molecule does NOT have a dipole moment?",
                options: [
                    "H₂O",
                    "CO₂",
                    "NH₃",
                    "HCl"
                ],
                correctIndex: 1
            }
        ]
    },
    {
        id: "energetics",
        name: "Energetics and Thermochemistry",
        flashcards: [
            {
                front: "What is enthalpy (H)?",
                back: "A measure of the total energy in a system, including internal energy plus the product of pressure and volume."
            },
            {
                front: "Define standard enthalpy change of formation (ΔHf°).",
                back: "The enthalpy change when 1 mole of a compound is formed from its constituent elements in their standard states."
            },
            {
                front: "What is Hess's Law?",
                back: "The total enthalpy change for a reaction is the same whether it occurs in one step or multiple steps."
            },
            {
                front: "Define entropy (S).",
                back: "A measure of disorder or randomness in a system."
            },
            {
                front: "What is Gibbs free energy (G)?",
                back: "The thermodynamic potential that measures the maximum reversible work that may be performed by a system at constant temperature and pressure."
            },
            {
                front: "Define standard enthalpy change of combustion (ΔHc°).",
                back: "The enthalpy change when 1 mole of a substance completely combusts in oxygen under standard conditions."
            },
            {
                front: "What is the First Law of Thermodynamics?",
                back: "Energy can neither be created nor destroyed, only transformed from one form to another."
            },
            {
                front: "What is bond enthalpy?",
                back: "The energy required to break one mole of a particular bond in a gaseous molecule."
            },
            {
                front: "Define endothermic reaction.",
                back: "A chemical reaction that absorbs heat energy from its surroundings."
            },
            {
                front: "Define exothermic reaction.",
                back: "A chemical reaction that releases heat energy to its surroundings."
            }
        ],
        quiz: [
            {
                question: "What is meant by an exothermic reaction?",
                options: [
                    "A reaction that absorbs heat from surroundings",
                    "A reaction that releases heat to surroundings",
                    "A reaction that doesn't involve heat change",
                    "A reaction that changes the phase of reactants"
                ],
                correctIndex: 1
            },
            {
                question: "Which equation correctly represents Gibbs free energy change?",
                options: [
                    "ΔG = ΔH + TΔS",
                    "ΔG = ΔH - TΔS",
                    "ΔG = ΔH × TΔS",
                    "ΔG = ΔH ÷ TΔS"
                ],
                correctIndex: 1
            },
            {
                question: "For a spontaneous reaction at all temperatures, which must be true?",
                options: [
                    "ΔH > 0 and ΔS > 0",
                    "ΔH < 0 and ΔS < 0",
                    "ΔH < 0 and ΔS > 0",
                    "ΔH > 0 and ΔS < 0"
                ],
                correctIndex: 2
            },
            {
                question: "What does a positive value of ΔS indicate?",
                options: [
                    "Decrease in disorder",
                    "Increase in disorder",
                    "No change in disorder",
                    "A non-spontaneous reaction"
                ],
                correctIndex: 1
            },
            {
                question: "Which process is likely to have a negative entropy change?",
                options: [
                    "Melting of ice",
                    "Evaporation of water",
                    "Freezing of water",
                    "Dissolving salt in water"
                ],
                correctIndex: 2
            },
            {
                question: "What is the standard enthalpy change of formation of an element in its standard state?",
                options: [
                    "Equal to its combustion enthalpy",
                    "A positive value",
                    "Zero",
                    "A negative value"
                ],
                correctIndex: 2
            },
            {
                question: "When calculating the enthalpy change of a reaction using bond enthalpies, which of the following is correct?",
                options: [
                    "ΔH = bonds formed - bonds broken",
                    "ΔH = bonds broken - bonds formed",
                    "ΔH = bonds broken + bonds formed",
                    "ΔH = bonds broken × bonds formed"
                ],
                correctIndex: 1
            },
            {
                question: "Which statement is true according to Hess's Law?",
                options: [
                    "The enthalpy change depends on the pathway taken",
                    "The enthalpy change is independent of the pathway taken",
                    "The enthalpy change is always exothermic",
                    "The enthalpy change is always endothermic"
                ],
                correctIndex: 1
            },
            {
                question: "For a reaction to be spontaneous at high temperatures, which is most favorable?",
                options: [
                    "High ΔH, high ΔS",
                    "High ΔH, low ΔS",
                    "Low ΔH, high ΔS",
                    "Low ΔH, low ΔS"
                ],
                correctIndex: 0
            },
            {
                question: "What is the relationship between ΔG and the spontaneity of a reaction?",
                options: [
                    "If ΔG > 0, the reaction is spontaneous",
                    "If ΔG < 0, the reaction is spontaneous",
                    "If ΔG = 0, the reaction is spontaneous",
                    "ΔG has no relation to spontaneity"
                ],
                correctIndex: 1
            }
        ]
    },
    {
        id: "kinetics",
        name: "Chemical Kinetics",
        flashcards: [
            {
                front: "What is the rate of reaction?",
                back: "The change in concentration of a reactant or product per unit time."
            },
            {
                front: "What factors affect the rate of reaction?",
                back: "Temperature, concentration, pressure (for gases), surface area, catalysts, and nature of reactants."
            },
            {
                front: "What is activation energy?",
                back: "The minimum energy required for a reaction to occur."
            },
            {
                front: "Define a catalyst.",
                back: "A substance that increases the rate of reaction without being consumed in the reaction by providing an alternative pathway with lower activation energy."
            },
            {
                front: "What is the rate-determining step?",
                back: "The slowest step in a reaction mechanism that determines the overall rate of reaction."
            },
            {
                front: "What is a rate law?",
                back: "An equation showing the relationship between the reaction rate and the concentration of reactants."
            },
            {
                front: "What is the order of reaction?",
                back: "The sum of the powers to which the concentrations are raised in the rate equation."
            },
            {
                front: "What is a first-order reaction?",
                back: "A reaction where the rate is directly proportional to the concentration of one reactant."
            },
            {
                front: "What is the half-life of a first-order reaction?",
                back: "The time taken for the concentration of a reactant to decrease to half its initial value."
            },
            {
                front: "What is the Arrhenius equation?",
                back: "k = Ae^(-Ea/RT), relating the rate constant to temperature, activation energy and frequency factor."
            }
        ],
        quiz: [
            {
                question: "What happens to the rate of reaction when temperature increases?",
                options: [
                    "Decreases",
                    "Increases",
                    "Remains unchanged",
                    "First increases then decreases"
                ],
                correctIndex: 1
            },
            {
                question: "For a first-order reaction, what is the relationship between rate and concentration?",
                options: [
                    "Rate ∝ [A]²",
                    "Rate ∝ [A]",
                    "Rate ∝ 1/[A]",
                    "Rate is independent of [A]"
                ],
                correctIndex: 1
            },
            {
                question: "What is the unit of rate constant for a second-order reaction?",
                options: [
                    "s⁻¹",
                    "mol⁻¹·L·s⁻¹",
                    "mol·L⁻¹·s⁻¹",
                    "mol²·L⁻²·s⁻¹"
                ],
                correctIndex: 1
            },
            {
                question: "How does a catalyst affect the activation energy of a reaction?",
                options: [
                    "Increases it",
                    "Decreases it",
                    "Has no effect on it",
                    "First increases then decreases it"
                ],
                correctIndex: 1
            },
            {
                question: "What does the rate-determining step in a reaction mechanism determine?",
                options: [
                    "The reaction mechanism",
                    "The reaction intermediates",
                    "The overall rate of reaction",
                    "The reaction yield"
                ],
                correctIndex: 2
            },
            {
                question: "What happens to the half-life of a first-order reaction if the initial concentration is doubled?",
                options: [
                    "Doubles",
                    "Halves",
                    "Remains the same",
                    "Quadruples"
                ],
                correctIndex: 2
            },
            {
                question: "In the Arrhenius equation k = Ae^(-Ea/RT), what does 'A' represent?",
                options: [
                    "Activation energy",
                    "Pre-exponential factor/frequency factor",
                    "Rate of reaction",
                    "Reaction quotient"
                ],
                correctIndex: 1
            },
            {
                question: "Which plot would give a straight line for a first-order reaction?",
                options: [
                    "Concentration vs time",
                    "ln(concentration) vs time",
                    "1/concentration vs time",
                    "Concentration² vs time"
                ],
                correctIndex: 1
            },
            {
                question: "How is the rate of a reaction affected by increasing the surface area of a solid reactant?",
                options: [
                    "Decreases",
                    "Increases",
                    "Remains unchanged",
                    "First increases then decreases"
                ],
                correctIndex: 1
            },
            {
                question: "If the rate law for a reaction is rate = k[A]²[B], what is the overall order of the reaction?",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correctIndex: 2
            }
        ]
    },
    {
        id: "equilibrium",
        name: "Chemical Equilibrium",
        flashcards: [
            {
                front: "What is chemical equilibrium?",
                back: "A state where the rate of the forward reaction equals the rate of the backward reaction, and the concentrations of reactants and products remain constant."
            },
            {
                front: "What is the equilibrium constant (K)?",
                back: "A value that expresses the relationship between products and reactants at equilibrium as a ratio of their concentrations or partial pressures."
            },
            {
                front: "State Le Chatelier's principle.",
                back: "If a system at equilibrium is subjected to a change, the system will respond in a way that counteracts the change and establishes a new equilibrium."
            },
            {
                front: "How does increasing concentration affect equilibrium?",
                back: "The equilibrium shifts in the direction that uses up the added substance, i.e., away from the side with increased concentration."
            },
            {
                front: "How does temperature affect equilibrium?",
                back: "Increasing temperature favors the endothermic reaction; decreasing temperature favors the exothermic reaction."
            },
            {
                front: "How does a catalyst affect equilibrium?",
                back: "A catalyst does not affect the position of equilibrium, but helps the system reach equilibrium faster by lowering the activation energy of both forward and reverse reactions."
            },
            {
                front: "What is Kp?",
                back: "The equilibrium constant expressed in terms of partial pressures of gases."
            },
            {
                front: "What is Kc?",
                back: "The equilibrium constant expressed in terms of molar concentrations."
            },
            {
                front: "How are Kp and Kc related?",
                back: "Kp = Kc(RT)^Δn, where Δn is the change in the number of moles of gas."
            },
            {
                front: "What does a large value of K indicate?",
                back: "It indicates that the equilibrium position lies far to the right (products are favored)."
            }
        ],
        quiz: [
            {
                question: "When the equilibrium constant K is much greater than 1, what does this indicate about the reaction?",
                options: [
                    "Reactants are favored",
                    "Products are favored",
                    "Equal amounts of products and reactants",
                    "The reaction doesn't reach equilibrium"
                ],
                correctIndex: 1
            },
            {
                question: "According to Le Chatelier's principle, what happens when concentration of a reactant is increased?",
                options: [
                    "Equilibrium shifts toward products",
                    "Equilibrium shifts toward reactants",
                    "Equilibrium remains unchanged",
                    "Reaction rate decreases"
                ],
                correctIndex: 0
            },
            {
                question: "How does increasing pressure affect an equilibrium involving gases with different number of moles?",
                options: [
                    "Always shifts toward products",
                    "Always shifts toward reactants",
                    "Shifts toward the side with fewer gas molecules",
                    "Shifts toward the side with more gas molecules"
                ],
                correctIndex: 2
            },
            {
                question: "For an endothermic reaction, how does increasing temperature affect the equilibrium position?",
                options: [
                    "Shifts toward products",
                    "Shifts toward reactants",
                    "No effect on equilibrium position",
                    "First shifts to products then to reactants"
                ],
                correctIndex: 0
            },
            {
                question: "How does a catalyst affect the value of the equilibrium constant?",
                options: [
                    "Increases it",
                    "Decreases it",
                    "Does not affect it",
                    "First increases then decreases it"
                ],
                correctIndex: 2
            },
            {
                question: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is the relationship between Kp and Kc?",
                options: [
                    "Kp = Kc(RT)²",
                    "Kp = Kc(RT)⁻²",
                    "Kp = Kc(RT)",
                    "Kp = Kc"
                ],
                correctIndex: 1
            },
            {
                question: "What happens to the equilibrium position when an inert gas is added to a reaction at constant volume?",
                options: [
                    "Shifts toward products",
                    "Shifts toward reactants",
                    "Equilibrium position is unaffected",
                    "Depends on the nature of the inert gas"
                ],
                correctIndex: 2
            },
            {
                question: "What is the value of ΔG when a system is at equilibrium?",
                options: [
                    "Greater than zero",
                    "Less than zero",
                    "Equal to zero",
                    "Equal to ΔH - TΔS"
                ],
                correctIndex: 2
            },
            {
                question: "If Kc = [products]/[reactants], what happens to Kc when the reaction is reversed?",
                options: [
                    "Kc becomes 1/Kc",
                    "Kc remains the same",
                    "Kc becomes -Kc",
                    "Kc becomes Kc²"
                ],
                correctIndex: 0
            },
            {
                question: "In which direction will the equilibrium shift for an exothermic reaction if the temperature is increased?",
                options: [
                    "Toward products",
                    "Toward reactants",
                    "No shift will occur",
                    "First toward products, then toward reactants"
                ],
                correctIndex: 1
            }
        ]
    },
    {
        id: "acid-base",
        name: "Acids and Bases",
        flashcards: [
            {
                front: "What is the Brønsted-Lowry definition of an acid?",
                back: "A substance that donates a proton (H⁺)."
            },
            {
                front: "What is the Brønsted-Lowry definition of a base?",
                back: "A substance that accepts a proton (H⁺)."
            },
            {
                front: "What is the Lewis definition of an acid?",
                back: "An electron pair acceptor."
            },
            {
                front: "What is the Lewis definition of a base?",
                back: "An electron pair donor."
            },
            {
                front: "What is pH?",
                back: "A measure of the hydrogen ion concentration in a solution, defined as -log[H⁺]."
            },
            {
                front: "What is a buffer solution?",
                back: "A solution that resists changes in pH when small amounts of acid or base are added."
            },
            {
                front: "What is the Ka of an acid?",
                back: "The acid dissociation constant that indicates the strength of an acid in solution."
            },
            {
                front: "What is pKa?",
                back: "The negative logarithm of Ka, pKa = -log(Ka)."
            },
            {
                front: "What is a conjugate acid-base pair?",
                back: "Two species that differ by the loss or gain of a single proton."
            },
            {
                front: "What is the pH at the equivalence point in a strong acid-strong base titration?",
                back: "pH = 7.0 at 25°C"
            }
        ],
        quiz: [
            {
                question: "Which of the following best defines a Brønsted-Lowry acid?",
                options: [
                    "A substance that produces OH⁻ ions in water",
                    "A substance that donates protons",
                    "A substance that accepts protons",
                    "A substance with a pH greater than 7"
                ],
                correctIndex: 1
            },
            {
                question: "What is the pH of a 0.01 M HCl solution?",
                options: [
                    "1",
                    "2",
                    "12",
                    "13"
                ],
                correctIndex: 1
            },
            {
                question: "Which of the following is an example of an amphoteric substance?",
                options: [
                    "HCl",
                    "NaOH",
                    "H₂O",
                    "CH₄"
                ],
                correctIndex: 2
            },
            {
                question: "What is the conjugate base of NH₄⁺?",
                options: [
                    "NH₃",
                    "NH₂⁻",
                    "H₂O",
                    "OH⁻"
                ],
                correctIndex: 0
            },
            {
                question: "What is the pH at the equivalence point of a weak acid-strong base titration?",
                options: [
                    "Exactly 7.0",
                    "Less than 7.0",
                    "Greater than 7.0",
                    "Equal to the pKa of the acid"
                ],
                correctIndex: 2
            },
            {
                question: "Which component must a buffer solution contain?",
                options: [
                    "A strong acid and a strong base",
                    "A weak acid and its conjugate base",
                    "Two strong acids",
                    "Two weak bases"
                ],
                correctIndex: 1
            },
            {
                question: "What is the relationship between Ka and the strength of an acid?",
                options: [
                    "The larger the Ka, the stronger the acid",
                    "The smaller the Ka, the stronger the acid",
                    "Ka is not related to acid strength",
                    "Ka depends only on temperature, not acid strength"
                ],
                correctIndex: 0
            },
            {
                question: "What is the pH of a neutral solution at 25°C?",
                options: [
                    "0",
                    "1",
                    "7",
                    "14"
                ],
                correctIndex: 2
            },
            {
                question: "Which statement is true regarding buffer capacity?",
                options: [
                    "It depends only on the concentration of the acid",
                    "It depends only on the concentration of the base",
                    "It depends on the ratio of acid to base",
                    "It depends on both the absolute concentrations and the ratio of acid to base"
                ],
                correctIndex: 3
            },
            {
                question: "What happens to the pH of an acidic buffer when a small amount of strong base is added?",
                options: [
                    "It decreases significantly",
                    "It increases significantly",
                    "It increases slightly",
                    "It remains exactly the same"
                ],
                correctIndex: 2
            }
        ]
    },
    {
        id: "redox",
        name: "Redox Processes",
        flashcards: [
            {
                front: "What is oxidation?",
                back: "The loss of electrons, increase in oxidation number, or gain of oxygen/loss of hydrogen."
            },
            {
                front: "What is reduction?",
                back: "The gain of electrons, decrease in oxidation number, or loss of oxygen/gain of hydrogen."
            },
            {
                front: "What is an oxidizing agent?",
                back: "A substance that causes oxidation by accepting electrons, while being reduced itself."
            },
            {
                front: "What is a reducing agent?",
                back: "A substance that causes reduction by donating electrons, while being oxidized itself."
            },
            {
                front: "What is an oxidation number?",
                back: "A number assigned to an element in a chemical compound that represents the number of electrons lost, gained, or shared by an atom of that element."
            },
            {
                front: "What is a disproportionation reaction?",
                back: "A redox reaction in which the same element is both oxidized and reduced."
            },
            {
                front: "What is an electrochemical cell?",
                back: "A device that generates electrical energy from chemical reactions or uses electrical energy to cause chemical reactions."
            },
            {
                front: "What is standard electrode potential (E°)?",
                back: "The potential difference developed in a half-cell compared to the standard hydrogen electrode under standard conditions."
            },
            {
                front: "What is the Nernst equation?",
                back: "An equation relating the cell potential to the standard cell potential and the reaction quotient: E = E° - (RT/nF)ln(Q)."
            },
            {
                front: "What is electrolysis?",
                back: "The process of using electrical energy to drive a non-spontaneous chemical reaction."
            }
        ],
        quiz: [
            {
                question: "In the reaction 2Mg + O₂ → 2MgO, which element is oxidized?",
                options: [
                    "Magnesium",
                    "Oxygen",
                    "Both are oxidized",
                    "Neither is oxidized"
                ],
                correctIndex: 0
            },
            {
                question: "What is the oxidation number of chromium in the dichromate ion (Cr₂O₇²⁻)?",
                options: [
                    "+3",
                    "+4",
                    "+6",
                    "+7"
                ],
                correctIndex: 2
            },
            {
                question: "Which of the following is the strongest oxidizing agent?",
                options: [
                    "F₂",
                    "Cl₂",
                    "Br₂",
                    "I₂"
                ],
                correctIndex: 0
            },
            {
                question: "In a voltaic cell, which direction do electrons flow?",
                options: [
                    "From cathode to anode",
                    "From anode to cathode",
                    "From electrolyte to electrodes",
                    "In both directions equally"
                ],
                correctIndex: 1
            },
            {
                question: "What happens at the cathode during electrolysis?",
                options: [
                    "Oxidation",
                    "Reduction",
                    "Both oxidation and reduction",
                    "Neither oxidation nor reduction"
                ],
                correctIndex: 1
            },
            {
                question: "What is the relationship between the standard cell potential (E°cell) and the standard free energy change (ΔG°)?",
                options: [
                    "ΔG° = -nFE°cell",
                    "ΔG° = nFE°cell",
                    "ΔG° = E°cell/nF",
                    "ΔG° = -E°cell/nF"
                ],
                correctIndex: 0
            },
            {
                question: "What is the oxidation number of sulfur in H₂SO₄?",
                options: [
                    "+2",
                    "+4",
                    "+6",
                    "+8"
                ],
                correctIndex: 2
            },
            {
                question: "For a spontaneous redox reaction, what must be true about the cell potential?",
                options: [
                    "E°cell > 0",
                    "E°cell < 0",
                    "E°cell = 0",
                    "E°cell must be calculated from the Nernst equation"
                ],
                correctIndex: 0
            },
            {
                question: "In the reaction MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ in acidic solution, how many electrons are transferred per MnO₄⁻?",
                options: [
                    "1",
                    "3",
                    "5",
                    "7"
                ],
                correctIndex: 2
            },
            {
                question: "Which of the following is NOT a factor in the Nernst equation?",
                options: [
                    "Temperature",
                    "Number of electrons transferred",
                    "Concentrations of species",
                    "Activation energy"
                ],
                correctIndex: 3
            }
        ]
    },
    {
        id: "organic-chemistry",
        name: "Organic Chemistry",
        flashcards: [
            {
                front: "What is a functional group in organic chemistry?",
                back: "A specific group of atoms within a molecule that is responsible for the characteristic chemical reactions of that molecule."
            },
            {
                front: "What is an alkane?",
                back: "A saturated hydrocarbon with single bonds only, having the general formula CnH2n+2."
            },
            {
                front: "What is an alkene?",
                back: "An unsaturated hydrocarbon containing at least one carbon-carbon double bond, having the general formula CnH2n."
            },
            {
                front: "What is an alkyne?",
                back: "An unsaturated hydrocarbon containing at least one carbon-carbon triple bond, having the general formula CnH2n-2."
            },
            {
                front: "What is isomerism?",
                back: "The phenomenon where compounds have the same molecular formula but different structural arrangements."
            },
            {
                front: "What is addition reaction?",
                back: "A reaction where two or more molecules combine to form a larger molecule without forming any by-product."
            },
            {
                front: "What is elimination reaction?",
                back: "A reaction where atoms are removed from a molecule to form a multiple bond or a new ring."
            },
            {
                front: "What is a nucleophile?",
                back: "An electron-rich species that donates electrons to form a new bond with an electrophile."
            },
            {
                front: "What is an electrophile?",
                back: "An electron-deficient species that accepts electrons to form a new bond with a nucleophile."
            },
            {
                front: "What is esterification?",
                back: "The reaction between a carboxylic acid and an alcohol to form an ester and water."
            }
        ],
        quiz: [
            {
                question: "Which of the following represents an alkene functional group?",
                options: [
                    "C-C",
                    "C=C",
                    "C≡C",
                    "C-O-C"
                ],
                correctIndex: 1
            },
            {
                question: "What type of reaction occurs when HBr is added to propene?",
                options: [
                    "Substitution",
                    "Addition",
                    "Elimination",
                    "Oxidation"
                ],
                correctIndex: 1
            },
            {
                question: "Which of the following is NOT a functional group?",
                options: [
                    "Hydroxyl (-OH)",
                    "Carbonyl (C=O)",
                    "Propyl (C3H7-)",
                    "Carboxyl (-COOH)"
                ],
                correctIndex: 2
            },
            {
                question: "What is the product of the reaction between ethanoic acid and methanol?",
                options: [
                    "Methyl ethanoate and water",
                    "Ethyl methanoate and water",
                    "Methane and carbon dioxide",
                    "Ethane and carbon dioxide"
                ],
                correctIndex: 0
            },
            {
                question: "Which mechanism is most likely for the reaction between a haloalkane and hydroxide ion?",
                options: [
                    "Electrophilic addition",
                    "Nucleophilic substitution",
                    "Electrophilic substitution",
                    "Free radical substitution"
                ],
                correctIndex: 1
            },
            {
                question: "What is the main product when propan-1-ol is oxidized with potassium dichromate in acidic solution?",
                options: [
                    "Propanal",
                    "Propanone",
                    "Propanoic acid",
                    "Propane"
                ],
                correctIndex: 2
            },
            {
                question: "Which type of isomerism is exhibited by butane and 2-methylpropane?",
                options: [
                    "Structural isomerism",
                    "Geometric isomerism",
                    "Optical isomerism",
                    "Tautomerism"
                ],
                correctIndex: 0
            },
            {
                question: "In which of the following reactions would a carboxylic acid NOT be produced?",
                options: [
                    "Oxidation of a primary alcohol",
                    "Oxidation of an aldehyde",
                    "Oxidation of a ketone",
                    "Hydrolysis of an ester"
                ],
                correctIndex: 2
            },
            {
                question: "Which reagent is used to distinguish between an aldehyde and a ketone?",
                options: [
                    "Bromine water",
                    "Sodium hydroxide",
                    "Tollens' reagent",
                    "Hydrochloric acid"
                ],
                correctIndex: 2
            },
            {
                question: "What is the product when but-1-ene reacts with hydrogen bromide?",
                options: [
                    "1-bromobutane only",
                    "2-bromobutane only",
                    "Mixture of 1-bromobutane and 2-bromobutane with 1-bromobutane as major product",
                    "Mixture of 1-bromobutane and 2-bromobutane with 2-bromobutane as major product"
                ],
                correctIndex: 3
            }
        ]
    },
    {
        id: "analytical-techniques",
        name: "Analytical Techniques",
        flashcards: [
            {
                front: "What is chromatography?",
                back: "A technique used to separate mixtures based on the differential affinities of components for a stationary phase and a mobile phase."
            },
            {
                front: "What is mass spectrometry?",
                back: "An analytical technique that ionizes chemical samples and sorts ions based on their mass-to-charge ratio."
            },
            {
                front: "What is infrared spectroscopy?",
                back: "An analytical technique that identifies chemical bonds in a molecule by producing an infrared absorption spectrum."
            },
            {
                front: "What is nuclear magnetic resonance (NMR) spectroscopy?",
                back: "A spectroscopic technique that exploits the magnetic properties of certain atomic nuclei to determine physical and chemical properties of atoms or molecules."
            },
            {
                front: "What is the retention time in chromatography?",
                back: "The time taken for a particular compound to pass through the chromatography column to the detector."
            },
            {
                front: "What is the stationary phase in chromatography?",
                back: "The immobile phase in the chromatography system to which compounds in the mixture may adhere."
            },
            {
                front: "What is the mobile phase in chromatography?",
                back: "The phase that moves through the chromatography system, carrying the compounds being analyzed."
            },
            {
                front: "What is the molecular ion peak in mass spectrometry?",
                back: "The peak representing the original molecule that has lost one electron, giving information about the molecular weight."
            },
            {
                front: "What are fingerprint regions in IR spectroscopy?",
                back: "The region of the IR spectrum (approximately 1500-400 cm⁻¹) that is unique to each molecule, like a molecular fingerprint."
            },
            {
                front: "What is chemical shift in NMR spectroscopy?",
                back: "The resonant frequency of a nucleus relative to a standard, providing information about the chemical environment around the nucleus."
            }
        ],
        quiz: [
            {
                question: "Which technique separates components based on their affinity for stationary and mobile phases?",
                options: [
                    "Mass spectrometry",
                    "Nuclear magnetic resonance",
                    "Chromatography",
                    "X-ray crystallography"
                ],
                correctIndex: 2
            },
            {
                question: "What does the m/z ratio represent in mass spectrometry?",
                options: [
                    "Mass times charge",
                    "Mass divided by charge",
                    "Moles times atomic number",
                    "Molecular weight times charge"
                ],
                correctIndex: 1
            },
            {
                question: "Which region of the IR spectrum is known as the fingerprint region?",
                options: [
                    "4000-2500 cm⁻¹",
                    "2500-2000 cm⁻¹",
                    "2000-1500 cm⁻¹",
                    "1500-400 cm⁻¹"
                ],
                correctIndex: 3
            },
            {
                question: "What does NMR spectroscopy primarily measure?",
                options: [
                    "Absorption of UV light",
                    "Absorption of IR radiation",
                    "Nuclear spin transitions in a magnetic field",
                    "Emission of electrons"
                ],
                correctIndex: 2
            },
            {
                question: "In thin-layer chromatography (TLC), what is the Rf value?",
                options: [
                    "Rate of flow",
                    "Ratio of distances traveled by solute and solvent",
                    "Retention factor",
                    "Reflectance factor"
                ],
                correctIndex: 1
            },
            {
                question: "Which of the following is NOT a type of chromatography?",
                options: [
                    "Gas chromatography",
                    "High-performance liquid chromatography",
                    "Thin-layer chromatography",
                    "Resonance chromatography"
                ],
                correctIndex: 3
            },
            {
                question: "Which technique would be most useful for determining the functional groups present in an organic compound?",
                options: [
                    "Mass spectrometry",
                    "Infrared spectroscopy",
                    "Gas chromatography",
                    "Ultraviolet spectroscopy"
                ],
                correctIndex: 1
            },
            {
                question: "What is the base peak in a mass spectrum?",
                options: [
                    "The peak with the highest m/z ratio",
                    "The peak with the lowest m/z ratio",
                    "The peak with the highest relative intensity",
                    "The peak representing the molecular ion"
                ],
                correctIndex: 2
            },
            {
                question: "In NMR spectroscopy, what causes splitting of peaks?",
                options: [
                    "Different isotopes of the same element",
                    "Interaction with neighboring protons",
                    "Varying magnetic field strength",
                    "Different functional groups"
                ],
                correctIndex: 1
            },
            {
                question: "Which of these would NOT typically be used as a mobile phase in chromatography?",
                options: [
                    "Helium gas",
                    "Methanol",
                    "Silicon dioxide",
                    "Water"
                ],
                correctIndex: 2
            }
        ]
    }
];