var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / innerHeight,
    0.1,
    1000
)

camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({
    antialias: true
})
renderer.setClearColor('#000000');
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectMatrix();
})


var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshLambertMaterial({ color: 0xFFCC00 })
var mesh = new THREE.Mesh(geometry, material)

mesh.position.x = 2

scene.add(mesh);

var light = new THREE.PointLight(0xFFFFFF, 1, 500)
slight.position.set(10, 0, 25)

scene.add(light)

var render = function () {
    requestAnimationFrame(render)
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.05;
    mesh.scale.x -= 0.01;
    renderer.render(scene, camera)
}

render();
