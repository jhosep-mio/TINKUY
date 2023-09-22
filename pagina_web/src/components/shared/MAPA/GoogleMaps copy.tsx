import { useEffect } from 'react'
import { fin, inicio } from '../Images'
export const GoogleMaps = (): JSX.Element => {
  const key = 'AIzaSyCQnmO2O0RPVFuzisXOA402_ZSbwLtSU5Q'
  useEffect(() => {
    const initMap = (): void => {
      const mapOptions = {
        center: { lat: -11.9898112, lng: -77.0768896 },
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off' // Oculta las etiquetas de los puntos de interés
              }
            ]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off' // Oculta las etiquetas de las estaciones de transporte público
              }
            ]
          }
        ]
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const map = new window.google.maps.Map(
        document.getElementById('map'),
        mapOptions
      )
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const directionsService = new window.google.maps.DirectionsService()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map, // Asociar la renderización de direcciones con el mapa
        polylineOptions: {
          strokeOpacity: 1.0, // Opacidad de la línea (0.0 - 1.0)
          strokeWeight: 4
        },
        suppressMarkers: true
      })
      directionsRenderer.setMap(map)

      const waypoints = [
        {
          location: { lat: -11.9947783, lng: -77.0721344 }, // Punto de partida
          stopover: true // Indica que es una parada
        },
        {
          location: { lat: -11.9919852, lng: -77.0710789 }, // Punto intermedio
          stopover: true // Indica que es una parada
        },
        {
          location: { lat: -11.9771113, lng: -77.0626993 }, // Punto de destino
          stopover: true // Indica que es una parada
        }
      ]

      const request = {
        origin: waypoints[0].location, // El primer punto es el punto de partida
        destination: waypoints[waypoints.length - 1].location, // El último punto es el destino
        waypoints: waypoints.slice(1, -1), // Los puntos intermedios
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        travelMode: window.google.maps.TravelMode.DRIVING
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      directionsService.route(request, (result, status) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result)
          const route = result.routes[0]
          const legs = route.legs
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const startMarker = new window.google.maps.Marker({
            position: legs[0].start_location,
            icon: {
              url: inicio, // URL de una imagen personalizada con fondo negro
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(15, 10) // Ajusta la posición de la etiqueta
            },
            map
          })
          for (let i = 1; i < legs.length; i++) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const marker = new window.google.maps.Marker({
              position: legs[i].start_location,
              label: {
                text: i.toString(), // Puedes usar una letra como etiqueta
                color: '#FFFFFF', // Color del texto de la etiqueta
                fontWeight: 'bold', // Estilo de fuente de la etiqueta
                fontSize: '16px' // Tamaño de fuente de la etiqueta
              },
              map
            })
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const destinationMarker = new window.google.maps.Marker({
            position: legs[legs.length - 1].end_location,
            icon: {
              url: fin, // URL de una imagen personalizada con fondo negro
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(15, 10) // Ajusta la posición de la etiqueta
            },
            map
          })
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          const bounds = new window.google.maps.LatLngBounds()
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          route.overview_path.forEach((path) => {
            bounds.extend(path)
          })
          map.fitBounds(bounds)
          setTimeout(() => {
            map.setZoom(16) // Puedes ajustar el nivel de zoom según tus necesidades
          }, 100)
        }
      })
    }
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
    script.defer = true
    script.async = true
    script.onload = initMap
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return <div id="map" style={{ height: '100vh', width: '100%' }}></div>
}
