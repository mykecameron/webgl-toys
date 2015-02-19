(function() {
  var scene = new THREE.Scene();

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
    mesh.rotation.x += 0.1;
    mesh.rotation.y += 0.1;
  };

  function zoomOut(camera) {
    camera.position.z += 0.1;
  }

  function zoomIn(camera) {
    camera.position.z -= 0.1;
  }

  function render() {
    rotate(cube);
    zoomOut(camera);
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();
})();
