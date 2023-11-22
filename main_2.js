//IMPORT MODULES
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//VARIABLES
let width = window.innerWidth;
let height = window.innerHeight;
var geometries = [];
let materials = [];
var cubes = [];
//CHALLENGE: Add an array to store multiple cubes.
 
//CREATE SCENE AND CAMERA
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 100);
camera.position.set(0, 0, 20);
 
//CREATE GEOMETRY AND ADD TO THE SCENE
for(let i = 1; i <= 4; i++){
    geometries[i] = new THREE.BoxGeometry( i, i, i);
    materials [i] = new THREE.MeshBasicMaterial( { color: i/100 * 0xffffff } );
    cubes [i]= new THREE.Mesh( geometries[i], materials[i] );
    cubes[i].position.set(1, i*i, 1);
}
cubes.forEach(function(element, index){
    scene.add(element);
})

/*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xbcc8ec } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(1,5,0)
scene.add( cube );
*/
//CHALLENGE: Create multiple cubes using loops and set different positions for each cube. 
// For each cube, add them to the array before adding them to the scene. 
 
// RESPONSIVE
 
//CREATE A RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
const container = document.querySelector('#threejs-container')
container.append(renderer.domElement)
//CREATE MOUSE CONTROL
const controls = new OrbitControls( camera, renderer.domElement );
 
//ANIMATE AND RENDER
function animate() {
requestAnimationFrame( animate );
controls.update();

cubes.forEach(function(element, index){
    element.rotation.x += 0.01 * index;
    element.rotation.y += 0.02 * index;
})




renderer.render( scene, camera );
}


animate();

window.addEventListener('resize', () => {
width = window.innerWidth
height = window.innerHeight
camera.aspect = width / height
camera.updateProjectionMatrix()
renderer.setSize(width, height)
renderer.render(scene, camera)
})
//CHALLENGE: Inside the function animate( ), iterate through the array to access each cube using ForEach. Set different rotation (i.e. different speeds, different axes) for each cube.