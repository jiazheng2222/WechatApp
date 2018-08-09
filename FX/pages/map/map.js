Page({
  data: {
    latitude: 22.54286,
    longitude: 114.05956,
    markers: [{
      id: 0,
      latitude: 22.54246,
      longitude: 114.05956,
      name: 'Current Location',
      iconPath: '../../image/location.png',
      callout: {
        content: "Steven\nPrice: 0.8771\nAmount:8k",
        color: "#0000ff",
        fontSize: "16",
        borderRadius: "10",
        bgColor: "#ffffff",
        padding: "5",
        display: "ALWAYS"
      }
    }, {
        id:1,
        latitude: 22.54286,
        longitude: 114.06256,
        name: 'Current Location',
        iconPath: '../../image/location.png',
        callout: {
          content: "Cindy\nPrice: 0.8768\nAmount:3k",
          color: "#ff0000",
          fontSize: "16",
          borderRadius: "10",
          bgColor: "#ffffff",
          padding: "5",
          display: "ALWAYS"
        }},
        {
        id: 1,
        latitude: 22.54286,
        longitude: 114.03256,
        name: 'Current Location',
        iconPath: '../../image/location.png'        
      }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.9345211,
      }, {
        latitude: 23.90229,
        longitude: 113.9345211,
      }]
    })
  }
})
