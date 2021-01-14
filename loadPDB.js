/*
 * Load/Parse Local PDB File
 *
 * 2019/10/18
 * Jean-Christophe Taveau
 */

// Function

const showPDB = (text) => {
  let d = document.querySelector('#display');
  d.innerHTML = `<pre>${text}</pre>`;
};


//////////////  M  A  I  N  ////////////// 

// Global variables 
let model;

const getContents = (ev) => {
  console.log(ev);
  let f = ev.target.files[0];

  // Read File
  let reader = new FileReader();
  reader.onload = (e) => {
    let text = reader.result;
    showPDB(text);
    // Add the parser, Here
    let extension = f.name.split('.').pop();

    if (extension === 'pdb') {
      model = parsePDB(text);
    }
    console.log(model);
  }
  reader.readAsText(f);
};

// Add Event Listeners
let pdbBrowse = document.querySelector('#pdb');
pdbBrowse.addEventListener('change',getContents);