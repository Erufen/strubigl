/*
 * Basic rendering modes of protein structure
 * Jean-Christophe Taveau
 * 2020/01/10
 */
 'use strict';

 /*
 * Create Geometry for `atoms`
 * Jean-Christophe Taveau
 */
const pointsGeom = (model,symbol,chemicals='CONSP') => {
  const CPK = {
    'C': [200/255,200/255,200/255],
    'O': [240/255,0,0],
    'N': [143/255,143/255,1.0],
    'S': [1.0,200/255,50/255],
    'P': [1.0,165/255,0]
  };
  
}

/*
 * Create Geometry for `trace`
 * Jean-Christophe Taveau
 */
const traceGeom = (model,chID) => {
  // Extract CA (or P for nucleic) atoms
  const vertices = model.atoms
    .filter( atom => atom.chainID === chID && atom.name === 'CA')
    .reduce( (vtx, a) => [...vtx, a.x, a.y, a.z], []);

  const geom = new THREE.BufferGeometry();
  geom.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3));
  return geom;
}

/*
 * Create Geometry for `backbone`
 * Jean-Christophe Taveau
 */
const backboneGeom = (model,chID) => {
  // Extract (N-CA-C=O)
  
  // Create Geometry
  
}

/**
 *  Render Atoms in `spacefill` mode
 */
const spacefill = (model) => {
  
}
/**
 *  Render Atoms in `balls` mode
 */
const balls = (model) => {
}

/**
 *  Render `backbone` mode
 * Alpha carbons line strip
  A, a [192,208,255] C0D0FF      [144,160,207] 90A0CF   
  B, b [176,255,176] B0FFB0      [128,207,152] 80CF98   
  C, c [255,192,200] FFC0C8      [207,144,176] CF90B0   
  D, d [255,255,128] FFFF80      [207,207,112] CFCF70   
  E, e [255,192,255] FFC0FF      [207,144,207] CF90CF   
  F, f [176,240,240] B0F0F0      [128,192,192] 80C0C0   
  G, g [255,208,112] FFD070      [207,160,96] CFA060   
  H, h [240,128,128] F08080      [192,80,112] C05070   
  I, h [245,222,179] F5DEB3      [197,174,131] C5AE83   
  J, j [0,191,255] 00BFFF      [0,167,207] 00A7CF   
  K, k [205,92,92] CD5C5C      [181,76,76] B54C4C   
  L, l [102,205,170] 66CDAA      [86,181,146] 56B592   
  M, m [154,205,50] 9ACD32      [138,181,42] 8AB52A   
  N, n [238,130,238] EE82EE      [190,114,190] BE72BE   
  O, o [0,206,209] 00CED1      [0,182,161] 00B6A1   
  P, p [0,255,127] 00FF7F      [0,207,111] 00CF6F   
  Q, q [60,179,113] 3CB371      [52,155,97] 349B61   
  R, r [0,0,139] 00008B      [0,0,187] 0000BB   
  S, s [189,183,107] BDB76B      [165,159,91] A59F5B   
  T, t [0,100,0] 006400      [0,148,0] 009400   
  U, u [128,0,0] 800000      [176,0,0] B00000   
  V, v [128,128,0] 808000      [176,176,0] B0B000   
  W, w [128,0,128] 800080      [176,0,176] B000B0   
  X, x [0,128,128] 008080      [0,176,176] 00B0B0   
  Y, y [184,134,11] B8860B      [232,182,19] E8B613   
  Z, z [178,34,34] B22222      [194,50,50] C23232   
none/
numeric [255,255,255] FFFFFF      [255,255,255] FFFFFF
 */


const trace = (model) => {
  const materials = {
    A : new THREE.LineBasicMaterial( { color: 0xC0D0FF } ),
    B : new THREE.LineBasicMaterial( { color: 0xB0FFB0 } ),
    C : new THREE.LineBasicMaterial( { color: 0xFFC0C8 } ),
    D : new THREE.LineBasicMaterial( { color: 0xFFFF80 } ),
    E : new THREE.LineBasicMaterial( { color: 0xFFC0FF } ),
    F : new THREE.LineBasicMaterial( { color: 0xB0F0F0 } ),
    G : new THREE.LineBasicMaterial( { color: 0xFFD070 } ),
    H : new THREE.LineBasicMaterial( { color: 0xF08080 } ),
    I : new THREE.LineBasicMaterial( { color: 0xF5DEB3 } ),
    J : new THREE.LineBasicMaterial( { color: 0x00BFFF } ),
    K : new THREE.LineBasicMaterial( { color: 0xCD5C5C } ),
    L : new THREE.LineBasicMaterial( { color: 0x66CDAA } ),
    
  }
  // Extract CA atoms for each chain
  model.features.chains.forEach( c => {
    let geom = traceGeom(model, c);
    const t = new THREE.Line(geom, materials[c]);
    t.name = 'trace';
    scene.add(t);

  });

  
}

/**
 * Render backbone (-N-CA-C=0)n
 */
const backbone = (model) => {
  const materials = {
    A : new THREE.LineBasicMaterial( { color: 0xC0D0FF } ),
    B : new THREE.LineBasicMaterial( { color: 0xB0FFB0 } ),
    C : new THREE.LineBasicMaterial( { color: 0xFFC0C8 } ),
    D : new THREE.LineBasicMaterial( { color: 0xFFFF80 } ),
    E : new THREE.LineBasicMaterial( { color: 0xFFC0FF } ),
    F : new THREE.LineBasicMaterial( { color: 0xB0F0F0 } ),
    G : new THREE.LineBasicMaterial( { color: 0xFFD070 } ),
    H : new THREE.LineBasicMaterial( { color: 0xF08080 } ),
    I : new THREE.LineBasicMaterial( { color: 0xF5DEB3 } ),
    J : new THREE.LineBasicMaterial( { color: 0x00BFFF } ),
    K : new THREE.LineBasicMaterial( { color: 0xCD5C5C } ),
    L : new THREE.LineBasicMaterial( { color: 0x66CDAA } ),
    
  }
  
  // TODO
}

// Add Event Listeners

const updateGraphics = (e) => {
  console.log(e.target.value);
  // Clear 3D objects in `scene`
  scene.remove.apply(scene, scene.children);
  
  switch (e.target.value) {
  case 'trace': trace(model); break;
  case 'backbone': backbone(model); break;
  case 'balls': balls(model); break;
  case 'spacefill': spacefill(model); break;
  default: // Do nothing
  }
  animate();
}

document.querySelectorAll('input[name="graphics_mode"]').forEach( radio => radio.addEventListener( 'change', updateGraphics ) );