/*
 * Basic three.js renderer
 */


'use strict';

// Global variables

let scene, renderer;
let camera, controls;

const init = () => {
  
  // Renderer
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );

  let container = document.getElementById( 'view3D' );
  container.appendChild( renderer.domElement );

  window.addEventListener( 'resize', onWindowResize, false );
  
  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x333333 );
  
  // Camera
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 10;

  // Controls
  // controls = new THREE.OrbitControls( camera, renderer.domElement);
  controls = new THREE.TrackballControls( camera, renderer.domElement);
  controls.rotateSpeed = 5;
  controls.addEventListener( 'change', render );

}

const onWindowResize = () => {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

  render();

}

const animate = () => {
  requestAnimationFrame( animate );
  controls.update();
}

const render = () => {
  renderer.render( scene, camera );
}

/************** M A I N **************/

init();
animate();