
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// FOV - field of view; Aspect Ratio; near; far (of clipping plane)
const pointer = new THREE.Vector2();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

let font;
const loader = new THREE.FontLoader();

const createText = () => {
  loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {
    font = font;

      const color = 0x006699;
    
      const matDark = new THREE.LineBasicMaterial( {
        color: color,
        side: THREE.DoubleSide
      } );
    
      const matLite = new THREE.MeshBasicMaterial( {
        color: color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      } );
    
      const message = "1";
    
      const shapes = font.generateShapes( message, 100 );
    
      const geometry = new THREE.ShapeGeometry( shapes );
    
      geometry.computeBoundingBox();
    
      const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
    
      geometry.translate( xMid, 0, 0 );
    
      // make shape ( N.B. edge view not visible )
    
      const text = new THREE.Mesh( geometry, matLite );
      text.position.z = - 150;
      scene.add( text );
    
      // make line shape ( N.B. edge view remains visible )
    
      const holeShapes = [];
    
      for ( let i = 0; i < shapes.length; i ++ ) {
    
        const shape = shapes[ i ];
    
        if ( shape.holes && shape.holes.length > 0 ) {
    
          for ( let j = 0; j < shape.holes.length; j ++ ) {
    
            const hole = shape.holes[ j ];
            holeShapes.push( hole );
    
          }
    
        }
    
      }
    
      shapes.push.apply( shapes, holeShapes );
    
      const lineText = new THREE.Object3D();
    
      for ( let i = 0; i < shapes.length; i ++ ) {
    
        const shape = shapes[ i ];
    
        const points = shape.getPoints();
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
        geometry.translate( xMid, 0, 0 );
    
        const lineMesh = new THREE.Line( geometry, matDark );
        lineText.add( lineMesh );
    
      }
    
    scene.add( lineText );
    
    
	} 
);
}

const boxWidth = .5;
const boxHeight = .5;
const boxDepth = .5;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

let INTERSECTED;

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(200, 400, 300);
scene.add(spotLight);

let material =  new THREE.MeshLambertMaterial({ color: 0x00ff00 });

const raycaster = new THREE.Raycaster();

const gridGenerator = new GridGenerator();
const grid = gridGenerator.generateGrid();

const cubes = [];
let posX = -2;
let posY = 2;

function onPointerMove( event ) {
  pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

for (let i = 0; i < grid.length; i++) {

  for (let j = 0; j < grid[i].length; j++) {
    const cube = new THREE.Mesh( geometry, material);
    cube.position.x = posX;
    cube.position.y = posY;
    posX += 1;
    document.addEventListener( 'mousemove', onPointerMove );
    cubes.push(cube);
  }
  posX = -2;
  posY -= 1;
}

cubes.map(cube => scene.add(cube));
camera.position.z = 5;

const animate = function () {
	requestAnimationFrame( animate );

  cubes.map(cube => {
    cube.rotation.x += 0.01;
	  cube.rotation.y += 0.01;
  })

  raycaster.setFromCamera( pointer, camera );

  const intersects = raycaster.intersectObjects( scene.children );

  if ( intersects.length > 0 ) {
    if ( INTERSECTED != intersects[ 0 ].object ) {
      if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      INTERSECTED = intersects[ 0 ].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex( 0xff0000 * Math.random() );
    }

  } else {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = null;
  }

	renderer.render( scene, camera );
  
};

animate();