var APP_DATA = {
  "scenes": [
    {
      "id": "0-test",
      "name": "test",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8067917739461272,
        "pitch": -0.13008595473055884,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": 2.2811672521191007,
          "pitch": 0.15784081452253673,
          "rotation": 0.7853981633974483,
          "target": "1-test-360"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8495163886647337,
          "pitch": -0.4550345737488968,
          "title": "CPS",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-test-360",
      "name": "test 360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.542696468511009,
        "pitch": 0.07009540028080075,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": -0.9514390347465298,
          "pitch": 0.1870640281172573,
          "rotation": 0,
          "target": "0-test"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
