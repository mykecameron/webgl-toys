(function() {
  var scene = new THREE.Scene();

  var animationSpeed = 0.05;

  var fieldOfView = 75;
  var aspectRatio = window.innerWidth / window.innerHeight;
  var nearClip = 0.1;
  var farClip = 1000;

  var camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearClip,
    farClip);

  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  // Attach renderer to DOM
  document.body.appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  var cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  function rotate(mesh) {
    mesh.rotation.x += animationSpeed;
    mesh.rotation.y += animationSpeed;
  }

  var clock = new THREE.Clock();

  function moveCamera(camera, clock) {
    var newPosition = Math.sin(clock.getElapsedTime() * 2) * 10 + 12;
    camera.position.z = newPosition;
  }

  function render() {
    moveCamera(camera, clock);
    rotate(cube);
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }

  render();
})();
