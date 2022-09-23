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
        "yaw": 1.6658203585712137,
        "pitch": 0.07362401281167763,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": 2.2606210313389257,
          "pitch": 0.182804142932671,
          "rotation": 0.7853981633974483,
          "target": "1-test-360"
        }
      ],
      "infoHotspots": []
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
        "yaw": -1.5326760608490275,
        "pitch": 0.014367963867702116,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": -0.9515536380622169,
          "pitch": 0.23364911973191127,
          "rotation": 0,
          "target": "0-test"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6621699070895364,
          "pitch": -0.1401292311562834,
          "title": "CPS",
          "text": "<script>hideTxtBox1()</script>"
        },
		{
          "yaw": -12.6621699070895364,
          "pitch": -0.1401292311562834,
          "title": "CPS2",
          "text": "<script>hideTxtBox1()</script>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};


