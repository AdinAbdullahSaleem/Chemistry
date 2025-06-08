const topics = [
  // 1. States of Matter
  {
    id: "states-of-matter",
    name: "States of Matter",
    flashcards: [
      { front: "What are the distinguishing properties of solids, liquids and gases?", back: "Solids: fixed shape and volume; Liquids: fixed volume, no fixed shape; Gases: neither fixed shape nor volume." },
      { front: "Describe the arrangement of particles in solids.", back: "Particles are tightly packed in a regular pattern and vibrate about fixed positions." },
      { front: "How does the kinetic particle theory explain melting?", back: "Particles gain kinetic energy, overcome attractive forces, and move more freely." },
      { front: "Explain how heating curves reflect changes in kinetic energy.", back: "Temperature increases during kinetic energy gain; flat sections show potential energy changes during phase change." },
      { front: "What affects the rate of diffusion in gases?", back: "Molecular mass (lighter gases diffuse faster), temperature (higher temp = faster diffusion)." },
      { front: "What is sublimation?", back: "The process where a solid changes directly into gas without becoming liquid." },
      { front: "What happens to particles during boiling?", back: "They gain enough energy to overcome attractive forces and escape as gas." },
      { front: "What causes condensation?", back: "Gas particles lose energy and come closer together to form a liquid." },
      { front: "Why do solids have definite shape?", back: "Particles are fixed in position and can only vibrate." },
      { front: "Why does a gas exert pressure?", back: "Its particles move rapidly and collide with container walls." }
    ],
    quiz: [
      { question: "Which state of matter has the highest kinetic energy?", options: ["Solid", "Liquid", "Gas", "Plasma"], correctIndex: 2 },
      { question: "What occurs during melting?", options: ["Gas to solid", "Solid to gas", "Liquid to gas", "Solid to liquid"], correctIndex: 3 },
      { question: "Which describes particle motion in gases?", options: ["Closely packed, vibrating", "Random and free-moving", "Slightly vibrating", "Layered structure"], correctIndex: 1 },
      { question: "Why do solids have fixed shape?", options: ["Particles locked in position", "Particles far apart", "Low pressure", "Gas particles not present"], correctIndex: 0 },
      { question: "What is diffusion?", options: ["Particle vibration", "Spreading of particles from high to low concentration", "Heat absorption", "Condensation"], correctIndex: 1 },
      { question: "What happens at melting point?", options: ["Particles condense", "Particles gain enough energy to break bonds", "Gas forms immediately", "Freezing starts"], correctIndex: 1 },
      { question: "What state has both fixed volume and takes shape of container?", options: ["Solid", "Liquid", "Gas", "Plasma"], correctIndex: 1 },
      { question: "Which change of state is exothermic?", options: ["Melting", "Evaporation", "Condensation", "Sublimation"], correctIndex: 2 },
      { question: "Which process requires energy input?", options: ["Freezing", "Condensation", "Evaporation", "Compression"], correctIndex: 2 },
      { question: "Why does gas pressure increase with temperature?", options: ["Particles expand", "Container expands", "Particles move faster and collide more", "New gas forms"], correctIndex: 2 }
    ]
  },

  // 2. Atoms, Elements and Compounds
  {
    id: "atoms-elements-and-compounds",
    name: "Atoms, Elements and Compounds",
    flashcards: [
      { front: "What is an element?", back: "A substance made of only one kind of atom." },
      { front: "What is a compound?", back: "A substance formed from two or more elements chemically bonded together." },
      { front: "Define atomic number.", back: "The number of protons in the nucleus of an atom." },
      { front: "What is the mass number?", back: "The sum of protons and neutrons in an atom." },
      { front: "What are isotopes?", back: "Atoms of the same element with different numbers of neutrons." },
      { front: "How are compounds different from mixtures?", back: "Compounds have fixed ratios and chemical bonding; mixtures do not." },
      { front: "What are the charges on protons, neutrons, and electrons?", back: "Proton: +1, Neutron: 0, Electron: -1" },
      { front: "What is the electronic configuration of sodium?", back: "2,8,1" },
      { front: "What type of ion does a metal form?", back: "A positive ion (cation)" },
      { front: "What is an ionic bond?", back: "A bond formed by transfer of electrons between metal and non-metal atoms." }
    ],
    quiz: [
      { question: "What subatomic particle determines an atom's identity?", options: ["Neutron", "Electron", "Proton", "Nucleus"], correctIndex: 2 },
      { question: "What is the charge of an electron?", options: ["+1", "0", "-1", "-2"], correctIndex: 2 },
      { question: "Which particles are found in the nucleus?", options: ["Protons only", "Protons and neutrons", "Electrons and protons", "Electrons only"], correctIndex: 1 },
      { question: "What is the formula for water?", options: ["H2", "H2O", "O2", "HO"], correctIndex: 1 },
      { question: "Which of the following is an isotope?", options: ["12C and 14C", "H2O and CO2", "Na+ and Cl−", "Cu and Fe"], correctIndex: 0 },
      { question: "Which element has atomic number 8?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"], correctIndex: 0 },
      { question: "Which element has 11 protons?", options: ["Sodium", "Magnesium", "Potassium", "Calcium"], correctIndex: 0 },
      { question: "What kind of bonding occurs in NaCl?", options: ["Covalent", "Metallic", "Ionic", "Hydrogen"], correctIndex: 2 },
      { question: "Which is a compound?", options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Iron"], correctIndex: 2 },
      { question: "What does the mass number represent?", options: ["Electrons only", "Protons only", "Protons + neutrons", "All subatomic particles"], correctIndex: 2 }
    ]
  },
  
  // 3. Stoichiometry
  {
    id: "stoichiometry",
    name: "Stoichiometry",
    flashcards: [
      { front: "What is a mole?", back: "The amount of substance containing 6.02 × 10²³ particles (Avogadro's number)." },
      { front: "How do you calculate moles from mass?", back: "Moles = Mass / Molar mass (g/mol)" },
      { front: "What is the molar volume of a gas at room temperature and pressure?", back: "24 dm³ per mole" },
      { front: "What is the empirical formula?", back: "The simplest whole-number ratio of atoms in a compound." },
      { front: "How is the molecular formula related to the empirical formula?", back: "It is a multiple of the empirical formula." },
      { front: "What is the equation for percentage yield?", back: "Percentage yield = (Actual yield / Theoretical yield) × 100" },
      { front: "What is the limiting reagent?", back: "The reactant that is used up first, limiting the amount of product formed." },
      { front: "How do you find the number of particles?", back: "Particles = Moles × Avogadro's constant" },
      { front: "What is concentration?", back: "The amount of solute in a given volume of solution, typically mol/dm³." },
      { front: "How do you calculate mass from moles?", back: "Mass = Moles × Molar mass" }
    ],
    quiz: [
      { question: "How many moles are in 48 g of Mg (Ar = 24)?", options: ["1", "2", "3", "4"], correctIndex: 1 },
      { question: "What is the molar volume of a gas at r.t.p.?", options: ["22.4 dm³", "24 dm³", "18 dm³", "20 dm³"], correctIndex: 1 },
      { question: "How many particles in 2 moles of substance?", options: ["6.02×10²³", "1.2×10²⁴", "3.01×10²³", "2×10²³"], correctIndex: 1 },
      { question: "What is the empirical formula of C6H12O6?", options: ["CH2O", "C2H4O2", "C3H6O3", "C6H6O6"], correctIndex: 0 },
      { question: "What is the % yield if actual = 40g, theoretical = 50g?", options: ["60%", "70%", "80%", "90%"], correctIndex: 2 },
      { question: "What is the formula for calculating concentration?", options: ["mass ÷ volume", "moles ÷ volume", "volume ÷ moles", "molar mass × volume"], correctIndex: 1 },
      { question: "Which is the limiting reagent?", options: ["The reactant left over", "The one in excess", "The one that runs out first", "The one with lower mass"], correctIndex: 2 },
      { question: "How many atoms in 0.5 moles?", options: ["3.01×10²³", "6.02×10²³", "1.2×10²³", "5.0×10²²"], correctIndex: 0 },
      { question: "Moles of H2O in 36g?", options: ["1", "2", "3", "4"], correctIndex: 1 },
      { question: "Molecular formula of CH2O if Mr = 180?", options: ["CH2O", "C6H12O6", "C2H4O2", "C3H6O3"], correctIndex: 1 }
    ]
  },

  // 4. Electrochemistry
  {
    id: "electrochemistry",
    name: "Electrochemistry",
    flashcards: [
      { front: "What is electrolysis?", back: "The decomposition of a compound using electricity." },
      { front: "What is the cathode?", back: "The negative electrode where reduction occurs." },
      { front: "What happens at the anode?", back: "Oxidation – loss of electrons." },
      { front: "What is a molten electrolyte?", back: "An ionic compound in liquid state that conducts electricity." },
      { front: "What are inert electrodes?", back: "Electrodes that do not react during electrolysis (e.g. graphite, platinum)." },
      { front: "What is electroplating?", back: "Using electrolysis to coat a metal object with another metal." },
      { front: "What is the product at the anode during electrolysis of brine?", back: "Chlorine gas." },
      { front: "What is the purpose of cryolite in aluminium extraction?", back: "It lowers the melting point of aluminium oxide." },
      { front: "In aqueous solutions, which ions are discharged?", back: "The ones that are easier to reduce/oxidize, based on reactivity." },
      { front: "What is the rule for cathode product in aqueous solutions?", back: "Least reactive metal or hydrogen is discharged." }
    ],
    quiz: [
      { question: "What occurs at the cathode?", options: ["Oxidation", "Reduction", "Gas formation", "Dissolution"], correctIndex: 1 },
      { question: "Which gas is released at the anode during electrolysis of NaCl solution?", options: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"], correctIndex: 2 },
      { question: "What is the role of cryolite in aluminium extraction?", options: ["Increases voltage", "Lowers melting point", "Acts as reducing agent", "Removes impurities"], correctIndex: 1 },
      { question: "Electroplating is used to...", options: ["Clean metals", "Protect metals", "Make alloys", "Increase corrosion"], correctIndex: 1 },
      { question: "Which ion is attracted to the anode?", options: ["Positive ion", "Negative ion", "Neutral atom", "All of the above"], correctIndex: 1 },
      { question: "Which metal is deposited at cathode in CuSO4 electrolysis using copper electrodes?", options: ["Iron", "Zinc", "Copper", "None"], correctIndex: 2 },
      { question: "What is the electrolyte in electroplating silver?", options: ["Silver nitrate", "Copper sulfate", "Zinc chloride", "Sodium hydroxide"], correctIndex: 0 },
      { question: "What happens to mass of copper anode during electrolysis?", options: ["Increases", "Decreases", "Unchanged", "Explodes"], correctIndex: 1 },
      { question: "Which process uses electrolysis?", options: ["Rusting", "Fermentation", "Aluminium extraction", "Distillation"], correctIndex: 2 },
      { question: "What is required for electrolysis?", options: ["DC current", "AC current", "Heat", "Light"], correctIndex: 0 }
    ]
  },
  
  // 5. Chemical Energetics
  {
    id: "chemical-energetics",
    name: "Chemical Energetics",
    flashcards: [
      { front: "What is an exothermic reaction?", back: "A reaction that releases heat to the surroundings." },
      { front: "What is an endothermic reaction?", back: "A reaction that absorbs heat from the surroundings." },
      { front: "What does a negative ΔH value indicate?", back: "An exothermic reaction." },
      { front: "What does a positive ΔH value indicate?", back: "An endothermic reaction." },
      { front: "What is activation energy?", back: "The minimum energy required for a reaction to occur." },
      { front: "How do catalysts affect activation energy?", back: "They lower it, increasing the rate of reaction." },
      { front: "What is bond energy?", back: "The energy required to break one mole of a bond in gaseous molecules." },
      { front: "How is energy change calculated using bond energies?", back: "ΔH = Bonds broken – Bonds formed" },
      { front: "Give an example of an exothermic process.", back: "Combustion, neutralisation, respiration." },
      { front: "Give an example of an endothermic process.", back: "Photosynthesis, thermal decomposition." }
    ],
    quiz: [
      { question: "Which process is exothermic?", options: ["Photosynthesis", "Melting", "Combustion", "Boiling"], correctIndex: 2 },
      { question: "What is the sign of ΔH in an endothermic reaction?", options: ["Positive", "Negative", "Zero", "Undefined"], correctIndex: 0 },
      { question: "Which of the following is endothermic?", options: ["Condensation", "Combustion", "Thermal decomposition", "Freezing"], correctIndex: 2 },
      { question: "What does activation energy represent?", options: ["Energy to form bonds", "Minimum energy for reaction", "Energy of products", "Energy of surroundings"], correctIndex: 1 },
      { question: "How does a catalyst affect a reaction?", options: ["Increases activation energy", "Lowers activation energy", "Changes ΔH", "Stops the reaction"], correctIndex: 1 },
      { question: "Bond breaking is always...", options: ["Exothermic", "Endothermic", "Neutral", "Catalytic"], correctIndex: 1 },
      { question: "Bond forming is always...", options: ["Endothermic", "Exothermic", "Thermal", "Photochemical"], correctIndex: 1 },
      { question: "Which process absorbs heat?", options: ["Freezing", "Condensation", "Evaporation", "Neutralisation"], correctIndex: 2 },
      { question: "Which reaction releases energy?", options: ["Dissolving ammonium nitrate", "Burning methane", "Photosynthesis", "Boiling water"], correctIndex: 1 },
      { question: "Which is a feature of an exothermic energy profile diagram?", options: ["Products above reactants", "Energy increases", "Products below reactants", "No activation energy"], correctIndex: 2 }
    ]
  },

  // 6. Chemical Reactions
  {
    id: "chemical-reactions",
    name: "Chemical Reactions",
    flashcards: [
      { front: "What is a physical change?", back: "A change where no new substance is formed and it is usually reversible." },
      { front: "What is a chemical change?", back: "A change where new substances are formed and it is usually irreversible." },
      { front: "What are signs of a chemical reaction?", back: "Color change, gas evolved, precipitate formed, energy change." },
      { front: "What does a catalyst do?", back: "Speeds up a reaction without being used up." },
      { front: "What is a reversible reaction?", back: "One where products can react to form the original reactants again." },
      { front: "What is equilibrium?", back: "The state where forward and reverse reactions occur at the same rate." },
      { front: "How does increasing temperature affect equilibrium?", back: "Favors the endothermic direction." },
      { front: "How does pressure affect gaseous equilibria?", back: "Favors the side with fewer gas molecules." },
      { front: "What is the symbol for reversible reactions?", back: "⇌" },
      { front: "Give an example of a reversible reaction.", back: "Haber process: N2 + 3H2 ⇌ 2NH3" }
    ],
    quiz: [
      { question: "Which is not a sign of a chemical change?", options: ["Color change", "Gas release", "Dissolving salt", "Temperature change"], correctIndex: 2 },
      { question: "What is the symbol for a reversible reaction?", options: ["→", "⇌", "←", "↔"], correctIndex: 1 },
      { question: "What is equilibrium?", options: ["Reaction stopped", "No reactants left", "Rate of forward = reverse reaction", "No products formed"], correctIndex: 2 },
      { question: "What happens if you increase temperature in a reversible reaction?", options: ["Favours exothermic", "Favours endothermic", "Reaction stops", "Catalyst is destroyed"], correctIndex: 1 },
      { question: "What does a catalyst change?", options: ["ΔH", "Position of equilibrium", "Rate of reaction", "Mass of product"], correctIndex: 2 },
      { question: "Which reaction is reversible?", options: ["Combustion", "Fermentation", "Decomposition of limestone", "Formation of ammonia"], correctIndex: 3 },
      { question: "What happens at equilibrium?", options: ["Only products remain", "Reactants disappear", "Forward and reverse rates equal", "No reaction"], correctIndex: 2 },
      { question: "How can you increase the rate of reaction?", options: ["Cool it", "Add catalyst", "Reduce surface area", "Lower pressure"], correctIndex: 1 },
      { question: "Which process uses a reversible reaction?", options: ["Photosynthesis", "Rusting", "Contact process", "Electrolysis"], correctIndex: 2 },
      { question: "What does increasing pressure do in a gaseous equilibrium?", options: ["Favors fewer gas molecules", "No effect", "Slows reaction", "Favors more gas molecules"], correctIndex: 0 }
    ]
  },
  
  // 7. Acids, Bases and Salts
  {
    id: "acids-bases-and-salts",
    name: "Acids, Bases and Salts",
    flashcards: [
      { front: "What is an acid?", back: "A substance that donates protons (H⁺ ions) in aqueous solution." },
      { front: "What is a base?", back: "A substance that accepts protons or produces OH⁻ ions in solution." },
      { front: "What is an alkali?", back: "A soluble base that produces OH⁻ ions in water." },
      { front: "What is neutralisation?", back: "The reaction between an acid and a base to form salt and water." },
      { front: "What is the pH scale?", back: "A scale from 0 to 14 measuring acidity or alkalinity." },
      { front: "What are amphoteric oxides?", back: "Oxides that react with both acids and bases (e.g., Al₂O₃)." },
      { front: "What is a salt?", back: "A compound formed when the hydrogen in an acid is replaced by a metal or ammonium ion." },
      { front: "Name a test for acidic solution.", back: "Turns blue litmus paper red." },
      { front: "Which salts are insoluble in water?", back: "Most carbonates and hydroxides except those of Group 1 and ammonium." },
      { front: "What is a titration?", back: "A method to determine concentration using neutralisation and indicators." }
    ],
    quiz: [
      { question: "What is the pH of a strong acid?", options: ["1–3", "4–6", "7", "8–10"], correctIndex: 0 },
      { question: "What is formed when an acid reacts with a metal?", options: ["Salt and water", "Salt and hydrogen", "Only water", "Carbon dioxide"], correctIndex: 1 },
      { question: "Which of the following is an alkali?", options: ["NaCl", "NaOH", "HCl", "CuSO₄"], correctIndex: 1 },
      { question: "What colour is methyl orange in acid?", options: ["Yellow", "Orange", "Red", "Green"], correctIndex: 2 },
      { question: "What happens in neutralisation?", options: ["pH drops", "Hydrogen gas is released", "Salt and water form", "A precipitate forms"], correctIndex: 2 },
      { question: "Which is an amphoteric oxide?", options: ["CO₂", "Al₂O₃", "Na₂O", "P₄O₁₀"], correctIndex: 1 },
      { question: "Which salt is insoluble in water?", options: ["NaNO₃", "KCl", "AgCl", "NH₄Cl"], correctIndex: 2 },
      { question: "What does pH 7 indicate?", options: ["Strong acid", "Weak acid", "Neutral", "Strong base"], correctIndex: 2 },
      { question: "Which ion is present in all acids?", options: ["H⁺", "OH⁻", "Na⁺", "Cl⁻"], correctIndex: 0 },
      { question: "What is the result of adding alkali to acid?", options: ["Neutralisation", "Precipitation", "Electrolysis", "Oxidation"], correctIndex: 0 }
    ]
  },

  // 8. The Periodic Table
  {
    id: "periodic-table",
    name: "The Periodic Table",
    flashcards: [
      { front: "How are elements arranged in the periodic table?", back: "By increasing atomic number." },
      { front: "What are groups in the periodic table?", back: "Vertical columns showing elements with similar properties." },
      { front: "What are periods in the periodic table?", back: "Horizontal rows indicating the number of electron shells." },
      { front: "What is a noble gas?", back: "An unreactive element in Group VIII/0 with full outer shell." },
      { front: "Why are Group I metals reactive?", back: "They lose one electron easily to form +1 ions." },
      { front: "What happens to Group I reactivity down the group?", back: "Reactivity increases." },
      { front: "What are halogens?", back: "Group VII non-metals with 7 outer electrons." },
      { front: "What happens to halogen reactivity down the group?", back: "Reactivity decreases." },
      { front: "What are transition metals?", back: "Elements in the central block with variable oxidation states." },
      { front: "What are typical properties of transition metals?", back: "High density, coloured compounds, catalytic activity." }
    ],
    quiz: [
      { question: "What do elements in the same group have in common?", options: ["Same mass", "Same number of protons", "Same number of outer electrons", "Same number of shells"], correctIndex: 2 },
      { question: "Which group contains unreactive gases?", options: ["Group I", "Group II", "Group VII", "Group 0"], correctIndex: 3 },
      { question: "Which group contains alkali metals?", options: ["Group I", "Group II", "Group VI", "Group VIII"], correctIndex: 0 },
      { question: "What happens to metallic character across a period?", options: ["Increases", "Decreases", "No change", "Disappears"], correctIndex: 1 },
      { question: "What happens to atomic size down a group?", options: ["Increases", "Decreases", "No change", "First decreases then increases"], correctIndex: 0 },
      { question: "Which element is a halogen?", options: ["Sodium", "Calcium", "Chlorine", "Argon"], correctIndex: 2 },
      { question: "Which element is a noble gas?", options: ["Hydrogen", "Oxygen", "Neon", "Fluorine"], correctIndex: 2 },
      { question: "Which transition metal is commonly used as a catalyst?", options: ["Zinc", "Iron", "Potassium", "Lithium"], correctIndex: 1 },
      { question: "Which element has two shells and 7 electrons in the outer shell?", options: ["Oxygen", "Neon", "Fluorine", "Sodium"], correctIndex: 2 },
      { question: "Which element is more reactive: sodium or potassium?", options: ["Sodium", "Potassium", "Both same", "Depends on conditions"], correctIndex: 1 }
    ]
  },

  // 9. Metals
  {
    id: "metals",
    name: "Metals",
    flashcards: [
      { front: "What are typical properties of metals?", back: "High melting point, shiny, malleable, ductile, good conductor of heat and electricity." },
      { front: "What is the reactivity series?", back: "A list of metals in order of their reactivity." },
      { front: "What is corrosion?", back: "The gradual destruction of metals by chemical reaction with the environment." },
      { front: "What causes rusting?", back: "Presence of oxygen and water on iron." },
      { front: "What is galvanisation?", back: "Coating iron or steel with zinc to prevent rusting." },
      { front: "What is an alloy?", back: "A mixture of a metal with other elements to improve its properties." },
      { front: "How is iron extracted?", back: "By reduction of iron ore in a blast furnace." },
      { front: "What does limestone do in a blast furnace?", back: "Removes impurities by forming slag." },
      { front: "Why are alloys stronger than pure metals?", back: "Different sized atoms prevent layer sliding." },
      { front: "Name a use of aluminium.", back: "Aircraft bodies due to low density and resistance to corrosion." }
    ],
    quiz: [
      { question: "Which metal is most reactive?", options: ["Copper", "Iron", "Zinc", "Potassium"], correctIndex: 3 },
      { question: "What is formed when iron rusts?", options: ["Iron carbonate", "Hydrated iron oxide", "Iron chloride", "Steel"], correctIndex: 1 },
      { question: "Why is aluminium suitable for aircraft?", options: ["Hard", "Dense", "Corrosion-resistant", "Magnetic"], correctIndex: 2 },
      { question: "What is brass made of?", options: ["Iron and zinc", "Copper and zinc", "Aluminium and iron", "Tin and lead"], correctIndex: 1 },
      { question: "Which process protects iron from corrosion?", options: ["Alloying", "Boiling", "Galvanising", "Smelting"], correctIndex: 2 },
      { question: "What is the main reducing agent in the blast furnace?", options: ["CO₂", "Carbon monoxide", "Hydrogen", "Limestone"], correctIndex: 1 },
      { question: "Which metal is least reactive?", options: ["Iron", "Zinc", "Gold", "Aluminium"], correctIndex: 2 },
      { question: "Why are alloys harder than pure metals?", options: ["Heavier", "Brittle", "Different sized atoms disrupt layers", "Larger particles"], correctIndex: 2 },
      { question: "What gas is released when metals react with acid?", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Chlorine"], correctIndex: 1 },
      { question: "Which metal is used for galvanising?", options: ["Iron", "Zinc", "Aluminium", "Lead"], correctIndex: 1 }
    ]
  },
  
  // 10. Chemistry of the Environment
  {
    id: "chemistry-of-the-environment",
    name: "Chemistry of the Environment",
    flashcards: [
      { front: "What is the composition of clean, dry air?", back: "78% nitrogen, 21% oxygen, ~1% argon and other gases including CO₂." },
      { front: "What gas turns limewater milky?", back: "Carbon dioxide (CO₂)." },
      { front: "What causes acid rain?", back: "Sulfur dioxide (SO₂) and nitrogen oxides (NOₓ) from burning fossil fuels." },
      { front: "What is the greenhouse effect?", back: "The warming of Earth's atmosphere due to greenhouse gases trapping infrared radiation." },
      { front: "What gases contribute to the greenhouse effect?", back: "Carbon dioxide, methane, and water vapor." },
      { front: "How is carbon monoxide produced?", back: "By incomplete combustion of carbon-containing fuels." },
      { front: "Why is carbon monoxide dangerous?", back: "It binds to hemoglobin, reducing oxygen transport in blood." },
      { front: "What is eutrophication?", back: "The overgrowth of algae due to excessive nutrients, leading to oxygen depletion in water." },
      { front: "What are the main pollutants from car exhausts?", back: "Carbon monoxide, nitrogen oxides, and unburned hydrocarbons." },
      { front: "What is the function of catalytic converters?", back: "They convert harmful gases (CO, NOₓ) into less harmful substances (CO₂, N₂)." }
    ],
    quiz: [
      { question: "Which gas turns limewater cloudy?", options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Nitrogen"], correctIndex: 2 },
      { question: "What causes acid rain?", options: ["Carbon monoxide", "Sulfur dioxide and nitrogen oxides", "Methane", "Ozone"], correctIndex: 1 },
      { question: "Which gas is a greenhouse gas?", options: ["Oxygen", "Carbon monoxide", "Methane", "Nitrogen"], correctIndex: 2 },
      { question: "Why is carbon monoxide dangerous?", options: ["Explosive", "Reacts with water", "Blocks oxygen transport", "Forms acid rain"], correctIndex: 2 },
      { question: "What is the role of a catalytic converter?", options: ["Add oxygen", "Remove sulfur", "Convert pollutants", "Remove water vapor"], correctIndex: 2 },
      { question: "Which gas is not a greenhouse gas?", options: ["CO₂", "H₂O vapor", "CH₄", "O₂"], correctIndex: 3 },
      { question: "What causes eutrophication?", options: ["Oil spill", "Heavy metals", "Fertilizer runoff", "Acid rain"], correctIndex: 2 },
      { question: "How does acid rain damage ecosystems?", options: ["Increases pH", "Neutralizes soil", "Kills aquatic life and trees", "Adds nutrients"], correctIndex: 2 },
      { question: "Which pollutant is produced by incomplete combustion?", options: ["CO₂", "O₂", "CO", "NO₂"], correctIndex: 2 },
      { question: "Which gas is reduced in catalytic converters?", options: ["O₂", "N₂", "NOₓ", "CO₂"], correctIndex: 2 }
    ]
  },
  
  // 11. Organic Chemistry
  {
    id: "organic-chemistry",
    name: "Organic Chemistry",
    flashcards: [
      { front: "What is a homologous series?", back: "A group of organic compounds with the same functional group and general formula." },
      { front: "What is the general formula for alkanes?", back: "CnH₂n+₂" },
      { front: "What is the functional group in alcohols?", back: "–OH" },
      { front: "What is an isomer?", back: "Compounds with the same molecular formula but different structures." },
      { front: "What happens when alkenes react with bromine water?", back: "They decolorize bromine water (orange to colorless)." },
      { front: "How is ethanol made industrially?", back: "By hydration of ethene or fermentation of glucose." },
      { front: "What is an addition reaction?", back: "A reaction where atoms are added to a molecule, breaking a double bond." },
      { front: "What is a polymer?", back: "A long chain molecule made by joining many monomers." },
      { front: "What is the functional group in carboxylic acids?", back: "–COOH" },
      { front: "What is esterification?", back: "A reaction between a carboxylic acid and an alcohol to form an ester and water." }
    ],
    quiz: [
      { question: "What is the general formula of alkanes?", options: ["CnH₂n", "CnH₂n+₂", "CnH₂nO₂", "CnH₂nO"], correctIndex: 1 },
      { question: "Which gas is produced when ethanol burns?", options: ["CO₂", "O₂", "CO", "NO₂"], correctIndex: 0 },
      { question: "What is the functional group of alcohols?", options: ["–COOH", "–OH", "–C=C–", "–CHO"], correctIndex: 1 },
      { question: "What is an addition polymer?", options: ["Made from alkynes", "Formed from alkanes", "Made from alkenes", "From acids and bases"], correctIndex: 2 },
      { question: "What decolorizes bromine water?", options: ["Alkanes", "Alcohols", "Alkenes", "Esters"], correctIndex: 2 },
      { question: "What is formed when ethanoic acid reacts with ethanol?", options: ["Ethanol", "Water", "Ethyl ethanoate", "Ethanal"], correctIndex: 2 },
      { question: "Which of the following is saturated?", options: ["Alkene", "Alkane", "Alcohol", "Carboxylic acid"], correctIndex: 1 },
      { question: "Which reaction forms polymers?", options: ["Condensation", "Neutralisation", "Substitution", "Addition"], correctIndex: 3 },
      { question: "What type of compound is CH₃COOH?", options: ["Alcohol", "Carboxylic acid", "Alkene", "Ester"], correctIndex: 1 },
      { question: "Which is not a functional group?", options: ["–COOH", "–OH", "–Cl", "–O–O–"], correctIndex: 3 }
    ]
  },
  
  // 12. Experimental Techniques and Chemical Analysis
  {
    id: "experimental-techniques-and-chemical-analysis",
    name: "Experimental Techniques and Chemical Analysis",
    flashcards: [
      { front: "What is filtration used for?", back: "To separate an insoluble solid from a liquid." },
      { front: "What is crystallisation?", back: "A technique to obtain solid crystals from a solution." },
      { front: "What is chromatography used for?", back: "To separate mixtures of substances based on solubility and adhesion." },
      { front: "What is an Rf value?", back: "Rf = distance moved by substance ÷ distance moved by solvent." },
      { front: "What is the flame test color for sodium?", back: "Yellow." },
      { front: "What does copper give in a flame test?", back: "Blue-green flame." },
      { front: "How is hydrogen gas tested?", back: "With a lighted splint – it makes a pop sound." },
      { front: "How is carbon dioxide tested?", back: "Turns limewater milky." },
      { front: "What is the test for ammonia gas?", back: "Turns damp red litmus paper blue." },
      { front: "What is titration used for?", back: "To determine the concentration of an acid or base using a standard solution." }
    ],
    quiz: [
      { question: "What is used to separate a soluble solid from a liquid?", options: ["Filtration", "Crystallisation", "Decanting", "Centrifuging"], correctIndex: 1 },
      { question: "What is used to separate colored substances?", options: ["Distillation", "Chromatography", "Evaporation", "Filtration"], correctIndex: 1 },
      { question: "What does the flame test for potassium produce?", options: ["Orange-red", "Yellow", "Lilac", "Green"], correctIndex: 2 },
      { question: "What gas gives a pop with a lit splint?", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Ammonia"], correctIndex: 1 },
      { question: "Which gas turns red litmus blue?", options: ["Hydrogen", "Carbon dioxide", "Ammonia", "Chlorine"], correctIndex: 2 },
      { question: "What does carbon dioxide do to limewater?", options: ["Turns blue", "Remains clear", "Turns milky", "Turns green"], correctIndex: 2 },
      { question: "What is used in titration to measure volumes?", options: ["Burette and pipette", "Beaker", "Test tube", "Evaporating dish"], correctIndex: 0 },
      { question: "What is the color of copper(II) sulfate solution?", options: ["Green", "Blue", "Yellow", "Red"], correctIndex: 1 },
      { question: "What is the test for chlorine gas?", options: ["Turns red litmus blue", "Bleaches damp litmus paper", "Pops with flame", "Turns limewater milky"], correctIndex: 1 },
      { question: "What is an Rf value used in?", options: ["Titration", "Chromatography", "Filtration", "Distillation"], correctIndex: 1 }
    ]
  }
];