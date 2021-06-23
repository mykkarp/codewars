const ELEMENTS = {
  H: 'Hydrogen',
  He: 'Helium',
  Li: 'Lithium',
  Be: 'Beryllium',
  B: 'Boron',
  C: 'Carbon',
  N: 'Nitrogen',
  O: 'Oxygen',
  F: 'Fluorine',
  Ne: 'Neon',
  Na: 'Sodium',
  Mg: 'Magnesium',
  Al: 'Aluminium',
  Si: 'Silicon',
  P: 'Phosphorus',
  S: 'Sulfur',
  Cl: 'Chlorine',
  Ar: 'Argon',
  K: 'Potassium',
  Ca: 'Calcium',
  Sc: 'Scandium',
  Ti: 'Titanium',
  V: 'Vanadium',
  Cr: 'Chromium',
  Mn: 'Manganese',
  Fe: 'Iron',
  Co: 'Cobalt',
  Ni: 'Nickel',
  Cu: 'Copper',
  Zn: 'Zinc',
  Ga: 'Gallium',
  Ge: 'Germanium',
  As: 'Arsenic',
  Se: 'Selenium',
  Br: 'Bromine',
  Kr: 'Krypton',
  Rb: 'Rubidium',
  Sr: 'Strontium',
  Y: 'Yttrium',
  Zr: 'Zirconium',
  Nb: 'Niobium',
  Mo: 'Molybdenum',
  Tc: 'Technetium',
  Ru: 'Ruthenium',
  Rh: 'Rhodium',
  Pd: 'Palladium',
  Ag: 'Silver',
  Cd: 'Cadmium',
  In: 'Indium',
  Sn: 'Tin',
  Sb: 'Antimony',
  Te: 'Tellurium',
  I: 'Iodine',
  Xe: 'Xenon',
  Cs: 'Caesium',
  Ba: 'Barium',
  Hf: 'Hafnium',
  Ta: 'Tantalum',
  W: 'Tungsten',
  Re: 'Rhenium',
  Os: 'Osmium',
  Ir: 'Iridium',
  Pt: 'Platinum',
  Au: 'Gold',
  Hg: 'Mercury',
  Tl: 'Thallium',
  Pb: 'Lead',
  Bi: 'Bismuth',
  Po: 'Polonium',
  At: 'Astatine',
  Rn: 'Radon',
  Fr: 'Francium',
  Ra: 'Radium',
  Rf: 'Rutherfordium',
  Db: 'Dubnium',
  Sg: 'Seaborgium',
  Bh: 'Bohrium',
  Hs: 'Hassium',
  Mt: 'Meitnerium',
  Ds: 'Darmstadtium',
  Rg: 'Roentgenium',
  Cn: 'Copernicium',
  Uut: 'Ununtrium',
  Fl: 'Flerovium',
  Uup: 'Ununpentium',
  Lv: 'Livermorium',
  Uus: 'Ununseptium',
  Uuo: 'Ununoctium',
  La: 'Lanthanum',
  Ce: 'Cerium',
  Pr: 'Praseodymium',
  Nd: 'Neodymium',
  Pm: 'Promethium',
  Sm: 'Samarium',
  Eu: 'Europium',
  Gd: 'Gadolinium',
  Tb: 'Terbium',
  Dy: 'Dysprosium',
  Ho: 'Holmium',
  Er: 'Erbium',
  Tm: 'Thulium',
  Yb: 'Ytterbium',
  Lu: 'Lutetium',
  Ac: 'Actinium',
  Th: 'Thorium',
  Pa: 'Protactinium',
  U: 'Uranium',
  Np: 'Neptunium',
  Pu: 'Plutonium',
  Am: 'Americium',
  Cm: 'Curium',
  Bk: 'Berkelium',
  Cf: 'Californium',
  Es: 'Einsteinium',
  Fm: 'Fermium',
  Md: 'Mendelevium',
  No: 'Nobelium',
  Lr: 'Lawrencium'
}

function elementalForms(word) {
  const elemWordsTable = [];
  if (!word) return elemWordsTable;

  (function addTableLine(prevElements, w) {
    let tableLine = [...prevElements];

    w.split('').reduce((prevLetter, currLetter) => {
      singleElem = currLetter.toUpperCase();
      twinElem = prevLetter ? prevLetter.toUpperCase() + currLetter : '';

      // if (ELEMENTS[singleElem] && ELEMENTS[twinElem]) {
      //   console.log(isMatchTo(word, tableLine, singleElem, twinElem));
      // }
      const tempTable = [];
      if (ELEMENTS[singleElem]) {
        if (isMatchTo(w, tableLine, singleElem)) {
          tempTable.push(singleElem);
        }
      }
      if (ELEMENTS[twinElem]) {
        if (isMatchTo(w, tableLine, twinElem)) {
          tempTable.push(twinElem);
        }
        if (isMatchTo(w, tableLine, twinElem)) {
          // addTableLine([...tableLine, ...twinElem]);
        }
      }

      tableLine = [...tableLine, ...tempTable];
      return currLetter
    }, '');

    elemWordsTable.push(tableLine);
  })([], word);

  function isMatchTo(expectedWord, wordSlice, part) {
    const sliceWithPart = (wordSlice.join('') + part).toLowerCase();
    return sliceWithPart === expectedWord.substr(0, sliceWithPart.length);
  }
  function formatElem(element) {
    return `${ELEMENTS[element]} (${element})`
  }

  return elemWordsTable;
}

console.warn(elementalForms('snack'));






  // function makeTableLine(prevSequence, table){
  //   const line = [];
  //   return () => {

  //   }
  // }