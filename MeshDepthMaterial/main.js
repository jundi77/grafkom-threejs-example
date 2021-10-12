function main() {
    // 1. membuat scene
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000)

    // 2. membuat kamera, menentukan lokasi kamera
    let camera  = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 10, 130);
    camera.position.z = 50;

    // 3. Membuat dan menentukan lokasi obyek
    let geometry = new THREE.BoxGeometry(10, 10, 10);
    let material = new THREE.MeshDepthMaterial();
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 4. Membuat renderer
    renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.lookAt(scene.position)

    document.body.appendChild(renderer.domElement);
    let mainLoop = function() {
        let move = 0.01;

        console.log(mesh.position.z);
        mesh.rotation.x += move;
        mesh.rotation.y += move;

        if (mesh.position.z == 24) {
            zoom = -0.5;
        } else if (mesh.position.z == 0) {
            zoom = 0.5;
        }

        mesh.position.z += zoom;
        
        // console.log(mesh.position)
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };

    mainLoop()
}

window.onload = main