class HTTPConn {

  constructor(endpoint) {
    this.endpoint = endpoint
  }

  getBoard() {
    const route = `/board`
    fetch(this.endpoint + route, { method: 'GET' })
      .then(response => response.arrayBuffer())
      .then(bufferData => {
        const pixelArray = new Uint8ClampedArray(bufferData)
        canvas.setImageFromArray(pixelArray)
        console.log('fetched board: ', pixelArray)
      })
  }

  setTile(x, y, c) {
    fetch(this.endpoint + `/tile?x=${x}&y=${y}&c=${c}`, {
      method: 'Post',
      mode: 'no-cors'
    })
      .then(response => response)
      .then(x => {
        // console.log('%cJUST SET A TILE', 'color: purple', x.headers)
      })
  }

}
