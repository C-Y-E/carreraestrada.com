import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  pStyle;
  pParams;
  width: number;
  height: number;

  constructor() { }

  ngOnInit() {
    this.width = 100;
    this.height = 100;
    this.pStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };
    this.pParams = {
      'particles': {
        'number': {
          'value': 250,
          'density': {
            'enable': true,
            'value_area': 868.0641183723798
          }
        },
        'color': {
          'value': '#C7EBFF'
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          },
          'image': {
            'src': 'img/github.svg',
            'width': 100,
            'height': 100
          }
        },
        'opacity': {
          'value': 1,
          'random': true,
          'anim': {
            'enable': true,
            'speed': 1,
            'opacity_min': 0,
            'sync': false
          }
        },
        'size': {
          'value': 2,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 4,
            'size_min': 0.3,
            'sync': false
          }
        },
        'line_linked': {
          'enable': false,
          'distance': 150,
          'color': '#ffffff',
          'opacity': 0.4,
          'width': 1
        },
        'move': {
          'enable': true,
          'speed': 1,
          'direction': 'none',
          'random': true,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 600
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'bubble'
          },
          'onclick': {
            'enable': true,
            'mode': 'repulse'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 400,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 50,
            'size': 0,
            'duration': 2,
            'opacity': 0,
            'speed': 3
          },
          'repulse': {
            'distance': 200,
            'duration': 0.4
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      'retina_detect': true
    };
  }

}
