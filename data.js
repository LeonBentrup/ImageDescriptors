var APP_DATA = {
  "scenes": [
    {
      "id": "0-vorplatz",
      "name": "Vorplatz",
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
        "yaw": 1.517064563356307,
        "pitch": -0.10509938132026164,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": 2.3250411639260022,
          "pitch": 0.0626874102172632,
          "rotation": 0.7853981633974483,
          "target": "1-treppen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-treppen",
      "name": "Treppen",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": 2.8209177551078755,
          "pitch": 0.7256994998383028,
          "rotation": 5.497787143782138,
          "target": "0-vorplatz"
        },
        {
          "yaw": 0.014174123092590918,
          "pitch": -0.11743668938216523,
          "rotation": 0.7853981633974483,
          "target": "2-bro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bro",
      "name": "Büro",
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
        "yaw": 0.6315685432778935,
        "pitch": 0.004844971958601008,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": 1.1637273930794763,
          "pitch": 0.5241396100961175,
          "rotation": 5.497787143782138,
          "target": "1-treppen"
        },
        {
          "yaw": 1.545041646600132,
          "pitch": 0.2116544087780028,
          "rotation": 0,
          "target": "3-kollegen"
        },
        {
          "yaw": -3.0303640528345035,
          "pitch": 0.4625680196120108,
          "rotation": 0,
          "target": "4-arbeitsplatz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5558405152575006,
          "pitch": -0.27369523236869675,
          "title": "Gaia-X",
          "text": ""
        },
        {
          "yaw": -2.1670289455488145,
          "pitch": -0.21899413846196758,
          "title": "Künstliche Intelligenz",
          "text": ""
        },
        {
          "yaw": 0.542738569476036,
          "pitch": -0.3101188430070714,
          "title": "Cyber-physische Systeme",
          "text": ""
        },
        {
          "yaw": 0.9034125220817693,
          "pitch": -0.29617844197558973,
          "title": "Digitaler Zwilling",
          "text": ""
        }
      ]
    },
    {
      "id": "3-kollegen",
      "name": "Kollegen",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": -1.3904660181821633,
          "pitch": 0.23034689431764122,
          "rotation": 0,
          "target": "2-bro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-arbeitsplatz",
      "name": "Arbeitsplatz",
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
        "yaw": -0.6920920170761171,
        "pitch": 0.06093998468026385,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": 0.5627832841475797,
          "pitch": 0.5223307904631138,
          "rotation": 0,
          "target": "2-bro"
        },
        {
          "yaw": 1.6902199762015018,
          "pitch": 0.27479371791680585,
          "rotation": 0,
          "target": "5-3d-drucker"
        },
        {
          "yaw": 1.4358469124839983,
          "pitch": 0.1328790191625444,
          "rotation": 0,
          "target": "6-produktion"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.026424780551295157,
          "pitch": -0.07253212004308907,
          "title": "Virtual Engineering",
          "text": ""
        },
        {
          "yaw": 0.25685625085285935,
          "pitch": -0.07336378031012636,
          "title": "Rami 4.0",
          "text": "<div><br></div>"
        }
      ]
    },
    {
      "id": "5-3d-drucker",
      "name": "3D-Drucker",
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
        "yaw": -0.12483622241632908,
        "pitch": 0.4845471952625857,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": -3.0687005868394728,
          "pitch": 0.1814201204312198,
          "rotation": 0,
          "target": "4-arbeitsplatz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-produktion",
      "name": "Produktion",
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
        "yaw": 0.5702518639977328,
        "pitch": -0.014863410897625329,
        "fov": 1.0839673103598262
      },
      "linkHotspots": [
        {
          "yaw": -1.5363020432244365,
          "pitch": 0.43814400631526595,
          "rotation": 0,
          "target": "4-arbeitsplatz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.02870873775884064,
          "pitch": -0.12688824398513532,
          "title": "Smart Factory",
          "text": ""
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
