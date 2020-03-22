import {Component, OnInit} from '@angular/core';
import {icon, LatLng, latLng, Layer, marker, tileLayer} from 'leaflet';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  selectedLocation: any;


  faChevronRight = faChevronRight;
  mapsView = false;
  supermarket = [
    {
      name: 'Aldi',
      position:
        {
          lat: 49.0108342,
          long: 8.3983163
        },
      address: {
        street: 'KaiserStr.',
        code: '76131',
        city: 'Karlsruhe'
      }
    }
  ];

  markers: Layer[] = [];

  optionsSpec: any = {
    layers: [{url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map'}],
    zoom: 15,
    center: [49.0107096, 8.3985327]
  };

  // Leaflet bindings
  options = {
    layers: [tileLayer(this.optionsSpec.layers[0].url, {attribution: this.optionsSpec.layers[0].attribution})],
    zoom: this.optionsSpec.zoom,
    center: latLng(this.optionsSpec.center)
  };

  addAldiMarker() {
    const newMarker = marker(
      [49.0107597, 8.3984137],
      {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          // shadowUrl: 'assets/marker-shadow.png'
        })
      }
    );

    this.markers.push(newMarker);
  }

  constructor() {
  }

  ngOnInit(): void {
    this.addAldiMarker();

    this.selectedLocation = {
      marktName: 'Aldi',
      position:
        {
          lat: 49.0108342,
          long: 8.3983163
        },
      address: {
        street: 'KaiserStr.',
        code: '76131',
        city: 'Karlsruhe'
      }
    };
  }

  selectLocation(location: any) {
    this.selectedLocation = location;
  }

}
