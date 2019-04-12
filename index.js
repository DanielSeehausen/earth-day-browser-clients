const canvas = new Canvas(config.DEFAULTLENGTH, config.DEFAULTARRAY)
const httpConn = new HTTPConn(config.HTTPENDPOINT)
const socketConn = new SocketConn(config.WSENDPOINT, canvas)
const canvasManager = new CanvasManager(config.dimension)
const dragger = new Dragger
const DOMCanvas = document.getElementById('canvas')

/********************* Keyboard Input Handler ***************************************/
const keyCodes = [32, 37, 38, 39, 40, 65, 68, 83, 87]

handleKeyDown = (e) => {
  if (e.target.id !== "hex"){
    if (keyCodes.includes(e.keyCode)) {
    canvasManager.handleMove(e)
  } else if (e.keyCode === 75){
    canvasManager.resetMove()
    dragger.resetMove()
  }
 }
}

document.addEventListener('keydown', (e) => handleKeyDown(e))
/********************* Mouse Input Handler ***************************************/

document.addEventListener('mousedown',  (e) => dragger.mouseDown(e))
document.addEventListener('mouseup',   (e) => dragger.mouseUp(e))
document.addEventListener('mousemove', (e) => dragger.mouseMove(e))
document.addEventListener('click', (e) => handleClick(e))

/******************* Sample Tile Setting***************************************/

httpConn.getBoard() //fetch initial state of board

