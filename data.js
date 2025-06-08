const topics = [
  {
    id: "states-of-matter",
    name: "States of Matter",
    flashcards: [
      {
        front: "What are the distinguishing properties of solids, liquids and gases?",
        back: "Solids have fixed shape and volume; liquids have fixed volume but take the shape of the container; gases have neither fixed shape nor fixed volume."
      },
      {
        front: "Describe the arrangement of particles in solids.",
        back: "Particles are closely packed in a regular pattern with limited vibration about fixed positions."
      },
      {
        front: "What is diffusion?",
        back: "The movement of particles from a region of higher concentration to a region of lower concentration."
      },
      {
        front: "Why does diffusion occur faster in gases than in liquids?",
        back: "Because gas particles move faster and are farther apart than in liquids."
      },
      {
        front: "How does temperature affect the volume of a gas?",
        back: "Increasing temperature increases the kinetic energy of particles, causing the gas to expand and occupy more volume."
      }
    ],
    quiz: [
      {
        question: "Which state of matter has the most ordered particle arrangement?",
        options: ["Solid", "Liquid", "Gas", "Plasma"],
        correctIndex: 0
      },
      {
        question: "What happens to the particles in a solid when it melts?",
        options: [
          "They stop moving",
          "They move farther apart and slide past one another",
          "They form a gas immediately",
          "They condense into a liquid"
        ],
        correctIndex: 1
      },
      {
        question: "Which of the following affects the rate of diffusion?",
        options: ["Relative molecular mass", "Colour", "Density", "Viscosity"],
        correctIndex: 0
      },
      {
        question: "Which state of matter is compressible and fills its container completely?",
        options: ["Solid", "Liquid", "Gas", "Plasma"],
        correctIndex: 2
      },
      {
        question: "What explains changes of state like melting or boiling?",
        options: [
          "Electrostatic forces",
          "Magnetic attraction",
          "Kinetic particle theory",
          "Gravitational pull"
        ],
        correctIndex: 2
      }
    ]
  },
  {
    id: "atoms-elements-compounds",
    name: "Atoms, Elements and Compounds",
    flashcards: [
      {
        front: "Define an element.",
        back: "A substance made of only one type of atom."
      },
      {
        front: "What is a compound?",
        back: "A substance formed when two or more elements chemically combine in fixed proportions."
      },
      {
        front: "What is an isotope?",
        back: "Atoms of the same element with the same number of protons but different numbers of neutrons."
      },
      {
        front: "State the relative charges of protons, neutrons, and electrons.",
        back: "Proton: +1, Neutron: 0, Electron: -1"
      },
      {
        front: "What is the electronic configuration of an atom with atomic number 13?",
        back: "2, 8, 3"
      }
    ],
    quiz: [
      {
        question: "Which particles are found in the nucleus of an atom?",
        options: ["Protons and neutrons", "Electrons and protons", "Electrons and neutrons", "Only protons"],
        correctIndex: 0
      },
      {
        question: "Which statement is true about isotopes?",
        options: [
          "They have different chemical properties",
          "They have different numbers of electrons",
          "They have different numbers of neutrons",
          "They are different elements"
        ],
        correctIndex: 2
      },
      {
        question: "Which ion is formed by an atom that loses two electrons?",
        options: ["2-", "2+", "0", "1+"],
        correctIndex: 1
      },
      {
        question: "How many electrons are in the outer shell of an atom in Group VII?",
        options: ["5", "6", "7", "8"],
        correctIndex: 2
      },
      {
        question: "What is the formula for calcium chloride?",
        options: ["CaCl", "CaCl2", "Ca2Cl", "Ca2Cl3"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "stoichiometry",
    name: "Stoichiometry",
    flashcards: [
      {
        front: "Define the mole.",
        back: "The amount of substance containing 6.02 × 10²³ particles (Avogadro constant)."
      },
      {
        front: "What is the molar volume of a gas at room temperature and pressure?",
        back: "24 dm³ per mole"
      },
      {
        front: "How do you calculate empirical formula?",
        back: "Divide the moles of each element by the smallest value and express as whole numbers."
      },
      {
        front: "What is the formula for calculating moles from mass?",
        back: "moles = mass / molar mass"
      },
      {
        front: "What is percentage yield?",
        back: "The actual yield divided by the theoretical yield, multiplied by 100."
      }
    ],
    quiz: [
      {
        question: "What is the mass of 1 mole of H₂O?",
        options: ["16 g", "17 g", "18 g", "19 g"],
        correctIndex: 2
      },
      {
        question: "What is the molar ratio of H₂ to O₂ in the equation 2H₂ + O₂ → 2H₂O?",
        options: ["1:1", "2:1", "2:2", "1:2"],
        correctIndex: 1
      },
      {
        question: "How many moles are there in 48 g of magnesium (Ar = 24)?",
        options: ["1", "2", "0.5", "3"],
        correctIndex: 1
      },
      {
        question: "What is the empirical formula of C₆H₁₂O₆?",
        options: ["C₂H₄O₂", "CH₂O", "C₃H₆O₃", "C₆H₆O₆"],
        correctIndex: 1
      },
      {
        question: "How many particles are in 2 moles of a substance?",
        options: ["6.02 × 10²³", "1.20 × 10²⁴", "3.01 × 10²³", "6.02 × 10²²"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "electrochemistry",
    name: "Electrochemistry",
    flashcards: [
      {
        front: "Define electrolysis.",
        back: "The breakdown of a compound using electricity."
      },
      {
        front: "What is the anode?",
        back: "The positive electrode in electrolysis."
      },
      {
        front: "What happens at the cathode?",
        back: "Reduction — gain of electrons."
      },
      {
        front: "What is electroplating?",
        back: "Using electrolysis to coat an object with a thin layer of metal."
      },
      {
        front: "What is the function of the electrolyte?",
        back: "It is the liquid containing ions which conducts electricity."
      }
    ],
    quiz: [
      {
        question: "Which ion is reduced at the cathode during electrolysis?",
        options: ["Cl⁻", "Na⁺", "OH⁻", "O²⁻"],
        correctIndex: 1
      },
      {
        question: "What are the electrodes made of during electrolysis of copper(II) sulfate with copper electrodes?",
        options: ["Graphite", "Carbon", "Copper", "Platinum"],
        correctIndex: 2
      },
      {
        question: "Which half-equation represents a reduction reaction?",
        options: ["Cl⁻ → Cl₂ + e⁻", "Na⁺ + e⁻ → Na", "O²⁻ → O + 2e⁻", "Fe³⁺ → Fe²⁺ + e⁻"],
        correctIndex: 1
      },
      {
        question: "Why is hydrogen produced at the cathode in the electrolysis of water?",
        options: [
          "It is less reactive than oxygen",
          "It has a positive charge",
          "It is more easily reduced",
          "It is lighter than oxygen"
        ],
        correctIndex: 2
      },
      {
        question: "What is the purpose of cryolite in aluminium electrolysis?",
        options: ["Acts as a solvent", "Lowers melting point", "Conducts electricity", "Improves efficiency"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "chemical-energetics",
    name: "Chemical Energetics",
    flashcards: [
      {
        front: "What is an exothermic reaction?",
        back: "A reaction that releases heat to the surroundings."
      },
      {
        front: "What is activation energy?",
        back: "The minimum energy needed for a reaction to occur."
      },
      {
        front: "Which bond-breaking process is endothermic?",
        back: "Breaking bonds absorbs energy from surroundings."
      },
      {
        front: "How is ΔH represented in exothermic reactions?",
        back: "ΔH is negative."
      },
      {
        front: "How do you calculate energy change using bond energies?",
        back: "ΔH = Energy to break bonds − Energy to make bonds"
      }
    ],
    quiz: [
      {
        question: "Which of the following reactions is exothermic?",
        options: ["Photosynthesis", "Combustion of methane", "Electrolysis of water", "Thermal decomposition of CaCO₃"],
        correctIndex: 1
      },
      {
        question: "What does a negative ΔH value indicate?",
        options: ["Exothermic reaction", "Endothermic reaction", "No energy change", "Activation energy too high"],
        correctIndex: 0
      },
      {
        question: "Which process always absorbs energy?",
        options: ["Bond making", "Bond breaking", "Neutralisation", "Combustion"],
        correctIndex: 1
      },
      {
        question: "Which energy change occurs when a reaction has a positive ΔH?",
        options: ["Endothermic", "Exothermic", "No change", "Reversible"],
        correctIndex: 0
      },
      {
        question: "What is the enthalpy change when bonds formed > bonds broken?",
        options: ["ΔH is zero", "ΔH is positive", "ΔH is negative", "No reaction"],
        correctIndex: 2
      }
    ]
  },
  {
    id: "chemical-reactions",
    name: "Chemical Reactions",
    flashcards: [
      {
        front: "What is the difference between physical and chemical changes?",
        back: "Physical changes are reversible and do not form new substances; chemical changes are irreversible and produce new substances."
      },
      {
        front: "Define activation energy.",
        back: "The minimum energy required for particles to collide and react."
      },
      {
        front: "How does a catalyst affect a reaction?",
        back: "It lowers the activation energy and increases the reaction rate without being consumed."
      },
      {
        front: "What is a reversible reaction?",
        back: "A reaction where products can revert back to reactants under certain conditions."
      },
      {
        front: "Explain the dynamic nature of chemical equilibrium.",
        back: "At equilibrium, the forward and reverse reactions occur at the same rate and concentrations remain constant."
      }
    ],
    quiz: [
      {
        question: "Which of the following increases the rate of reaction?",
        options: ["Lowering temperature", "Decreasing surface area", "Adding a catalyst", "Removing a reactant"],
        correctIndex: 2
      },
      {
        question: "What does the ⇌ symbol mean?",
        options: ["Irreversible reaction", "Exothermic reaction", "Endothermic reaction", "Reversible reaction"],
        correctIndex: 3
      },
      {
        question: "Which factor does not affect the position of equilibrium?",
        options: ["Catalyst", "Temperature", "Pressure", "Concentration"],
        correctIndex: 0
      },
      {
        question: "Which industrial process uses a reversible reaction?",
        options: ["Contact Process", "Electrolysis", "Fermentation", "Crystallisation"],
        correctIndex: 0
      },
      {
        question: "Which statement about catalysts is correct?",
        options: ["They are used up during reactions", "They change the products formed", "They decrease activation energy", "They slow down reactions"],
        correctIndex: 2
      }
    ]
  },
  {
    id: "acids-bases-salts",
    name: "Acids, Bases and Salts",
    flashcards: [
      {
        front: "Define an acid and a base.",
        back: "An acid is a proton donor; a base is a proton acceptor."
      },
      {
        front: "What is a neutralisation reaction?",
        back: "The reaction of an acid and a base to form a salt and water."
      },
      {
        front: "What is the difference between strong and weak acids?",
        back: "Strong acids fully dissociate in water; weak acids only partially dissociate."
      },
      {
        front: "Name two amphoteric oxides.",
        back: "Aluminium oxide (Al₂O₃) and zinc oxide (ZnO)."
      },
      {
        front: "State a general rule for solubility of salts.",
        back: "All sodium, potassium, ammonium salts, and all nitrates are soluble."
      }
    ],
    quiz: [
      {
        question: "Which salt is produced from hydrochloric acid and sodium hydroxide?",
        options: ["Sodium sulfate", "Sodium chloride", "Sodium carbonate", "Sodium nitrate"],
        correctIndex: 1
      },
      {
        question: "What is the colour of methyl orange in an acid?",
        options: ["Red", "Yellow", "Green", "Pink"],
        correctIndex: 0
      },
      {
        question: "Which oxide is amphoteric?",
        options: ["CO₂", "Na₂O", "Al₂O₃", "SO₂"],
        correctIndex: 2
      },
      {
        question: "What is the pH range of weak acids?",
        options: ["1–3", "4–6", "7", "8–14"],
        correctIndex: 1
      },
      {
        question: "Which salt is insoluble in water?",
        options: ["Sodium chloride", "Potassium nitrate", "Silver chloride", "Ammonium sulfate"],
        correctIndex: 2
      }
    ]
  },
  {
    id: "periodic-table",
    name: "The Periodic Table",
    flashcards: [
      {
        front: "How are elements arranged in the periodic table?",
        back: "In order of increasing atomic number in periods and groups."
      },
      {
        front: "What do elements in the same group have in common?",
        back: "Same number of outer electrons and similar chemical properties."
      },
      {
        front: "What trend is observed across a period?",
        back: "Metallic to non-metallic character decreases."
      },
      {
        front: "Describe a characteristic of Group I metals.",
        back: "They are soft and very reactive with water."
      },
      {
        front: "Describe the appearance of Group VII elements at room temperature.",
        back: "Chlorine: pale green gas; Bromine: red-brown liquid; Iodine: grey-black solid."
      }
    ],
    quiz: [
      {
        question: "Which element is in Group I and Period 2?",
        options: ["Sodium", "Potassium", "Lithium", "Beryllium"],
        correctIndex: 2
      },
      {
        question: "What is a common property of Group VII halogens?",
        options: ["They are metals", "They are monatomic gases", "They form coloured compounds", "They form diatomic molecules"],
        correctIndex: 3
      },
      {
        question: "What happens to reactivity in Group I down the group?",
        options: ["Increases", "Decreases", "Remains the same", "First decreases then increases"],
        correctIndex: 0
      },
      {
        question: "What are noble gases?",
        options: ["Reactive metals", "Unreactive monatomic gases", "Radioactive gases", "Highly flammable gases"],
        correctIndex: 1
      },
      {
        question: "Which group contains transition metals?",
        options: ["Group I", "Group II", "Group IV", "Middle block"],
        correctIndex: 3
      }
    ]
  },
  {
    id: "metals",
    name: "Metals",
    flashcards: [
      {
        front: "What is an alloy?",
        back: "A mixture of a metal with other elements to improve its properties."
      },
      {
        front: "State the general properties of metals.",
        back: "High conductivity, malleable, ductile, high melting points."
      },
      {
        front: "What is the reactivity series?",
        back: "A list of metals arranged by their tendency to lose electrons and form ions."
      },
      {
        front: "What are the conditions for rusting?",
        back: "Presence of water and oxygen."
      },
      {
        front: "What is sacrificial protection?",
        back: "Using a more reactive metal to prevent corrosion of another metal."
      }
    ],
    quiz: [
      {
        question: "Which metal is used for galvanising iron?",
        options: ["Aluminium", "Copper", "Zinc", "Lead"],
        correctIndex: 2
      },
      {
        question: "What is the product of the reaction of magnesium with hydrochloric acid?",
        options: ["Magnesium chloride and hydrogen", "Magnesium oxide and water", "Magnesium carbonate", "Magnesium nitrate"],
        correctIndex: 0
      },
      {
        question: "Which of the following metals is least reactive?",
        options: ["Iron", "Copper", "Zinc", "Potassium"],
        correctIndex: 1
      },
      {
        question: "What is formed when aluminium reacts with oxygen?",
        options: ["Al", "Al₂O₃", "AlO", "AlOH"],
        correctIndex: 1
      },
      {
        question: "Which is a use of stainless steel?",
        options: ["Aircraft", "Cables", "Food containers", "Cutlery"],
        correctIndex: 3
      }
    ]
  },
  {
    id: "environmental-chemistry",
    name: "Chemistry of the Environment",
    flashcards: [
      {
        front: "What is the main composition of air?",
        back: "78% nitrogen, 21% oxygen, trace gases including CO₂."
      },
      {
        front: "Name a test for water.",
        back: "Turns white anhydrous copper(II) sulfate blue."
      },
      {
        front: "What is the greenhouse effect?",
        back: "Trapping of heat by gases like CO₂ and CH₄ leading to global warming."
      },
      {
        front: "What causes acid rain?",
        back: "Emission of SO₂ and NOₓ gases from burning fossil fuels."
      },
      {
        front: "What is the role of catalytic converters?",
        back: "They reduce harmful emissions like NO and CO from vehicles."
      }
    ],
    quiz: [
      {
        question: "Which gas turns limewater milky?",
        options: ["O₂", "H₂", "NH₃", "CO₂"],
        correctIndex: 3
      },
      {
        question: "What causes eutrophication?",
        options: ["Plastics", "Phosphates and nitrates", "Heavy metals", "Sewage alone"],
        correctIndex: 1
      },
      {
        question: "Which of the following is used to purify water?",
        options: ["Sulfur", "Sand", "Chlorine", "Carbon monoxide"],
        correctIndex: 2
      },
      {
        question: "Which greenhouse gas is produced by livestock digestion?",
        options: ["CO₂", "NO", "CH₄", "O₃"],
        correctIndex: 2
      },
      {
        question: "Which air pollutant is toxic and produced by incomplete combustion?",
        options: ["Carbon monoxide", "Carbon dioxide", "Nitrogen", "Methane"],
        correctIndex: 0
      }
    ]
  },
  {
    id: "organic-chemistry",
    name: "Organic Chemistry",
    flashcards: [
      {
        front: "What is a homologous series?",
        back: "A group of compounds with the same functional group and general formula."
      },
      {
        front: "Give an example of an alkene.",
        back: "Ethene: CH₂=CH₂"
      },
      {
        front: "How is ethanol manufactured industrially?",
        back: "By fermentation or catalytic hydration of ethene."
      },
      {
        front: "What is the functional group of carboxylic acids?",
        back: "-COOH"
      },
      {
        front: "What is polymerisation?",
        back: "The process of joining many monomers to form a polymer."
      }
    ],
    quiz: [
      {
        question: "Which compound is an alkane?",
        options: ["CH₄", "CH₂=CH₂", "CH₃COOH", "C₂H₅OH"],
        correctIndex: 0
      },
      {
        question: "What is the product of ethanoic acid and ethanol?",
        options: ["Water", "Ethanol", "Ethyl ethanoate", "Ethanal"],
        correctIndex: 2
      },
      {
        question: "What type of reaction forms esters?",
        options: ["Neutralisation", "Combustion", "Condensation", "Addition"],
        correctIndex: 2
      },
      {
        question: "Which polymer is made from ethene?",
        options: ["Polyester", "Nylon", "Polythene", "Protein"],
        correctIndex: 2
      },
      {
        question: "What is the main use of ethanol?",
        options: ["Fuel", "Plastic", "Metal extraction", "Fertiliser"],
        correctIndex: 0
      }
    ]
  },
  {
    id: "experimental-techniques",
    name: "Experimental Techniques and Chemical Analysis",
    flashcards: [
      {
        front: "What is chromatography used for?",
        back: "To separate and identify components of mixtures."
      },
      {
        front: "Define a titration.",
        back: "An experiment to determine the concentration of a solution using a standard solution."
      },
      {
        front: "Name a method to test for ammonia gas.",
        back: "Turns damp red litmus paper blue."
      },
      {
        front: "What is the flame test colour for potassium?",
        back: "Lilac"
      },
      {
        front: "Define the Rf value in chromatography.",
        back: "Rf = distance travelled by substance / distance travelled by solvent"
      }
    ],
    quiz: [
      {
        question: "Which method is best to purify a soluble salt?",
        options: ["Filtration", "Crystallisation", "Chromatography", "Decanting"],
        correctIndex: 1
      },
      {
        question: "Which apparatus is used in titration?",
        options: ["Thermometer", "Beaker", "Burette", "Test tube"],
        correctIndex: 2
      },
      {
        question: "What colour does copper(II) produce in a flame test?",
        options: ["Red", "Green", "Blue-green", "Orange"],
        correctIndex: 2
      },
      {
        question: "Which test confirms the presence of CO₂ gas?",
        options: ["Glowing splint", "Limewater", "Litmus paper", "Universal indicator"],
        correctIndex: 1
      },
      {
        question: "How is the end point in titration identified?",
        options: ["Boiling", "Evaporation", "Colour change of indicator", "Gas formation"],
        correctIndex: 2
      }
    ]
  }
];
