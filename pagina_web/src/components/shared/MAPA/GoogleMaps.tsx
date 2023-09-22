import { useEffect, useState } from 'react'
import { mapa } from '../Images'
export const GoogleMaps = (): JSX.Element => {
  const key = 'AIzaSyCQnmO2O0RPVFuzisXOA402_ZSbwLtSU5Q'

  const [selection, setselection] = useState(1)

  useEffect(() => {
    const generaricono = (color: string): any => {
      const icono = `<svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 116.69">
      <defs>
        <style>
          .cls-1 {
            fill: #fff;
          }
    
          .cls-2 {
            fill: ${color};
          }
    
          .cls-3 {
            fill: #2c465d;
          }
        </style>
      </defs>
      <g>
        <path class="cls-2" d="m41,115.14c-1.61,0-3.11-.65-4.23-1.84C26.22,102.15,1.69,72.83,1.69,41.63,1.69,25.29,8.29,13.47,21.3,6.48c6.01-3.23,12.82-4.93,19.7-4.93s13.69,1.71,19.7,4.93c13.01,6.99,19.61,18.82,19.61,35.15,0,31.2-24.54,60.52-35.08,71.67-1.12,1.19-2.62,1.84-4.23,1.84Z"/>
        <path class="cls-3" d="m41,3.16c6.62,0,13.17,1.64,18.94,4.74,12.45,6.69,18.77,18.04,18.77,33.74,0,30.62-24.23,59.55-34.64,70.57-.81.86-1.9,1.34-3.06,1.34s-2.25-.47-3.06-1.34C27.52,101.18,3.29,72.26,3.29,41.63c0-15.7,6.31-27.05,18.77-33.74,5.77-3.1,12.32-4.74,18.94-4.74m0-3.22c-7.05,0-14.1,1.71-20.46,5.12C10.31,10.56.08,21.17.08,41.63c0,31.61,24.41,61.02,35.52,72.78,1.48,1.56,3.44,2.34,5.4,2.34s3.92-.78,5.4-2.34c11.11-11.75,35.52-41.17,35.52-72.78,0-20.46-10.23-31.07-20.46-36.57C55.1,1.65,48.05-.06,41-.06h0Z"/>
      </g>
      <g>
        <circle class="cls-2" cx="41" cy="42.97" r="31.71"/>
        <path class="cls-1" d="m41,13c16.53,0,29.98,13.45,29.98,29.98s-13.45,29.98-29.98,29.98-29.98-13.45-29.98-29.98,13.45-29.98,29.98-29.98m0-3.48C22.52,9.52,7.55,24.5,7.55,42.97s14.98,33.45,33.45,33.45,33.45-14.98,33.45-33.45S59.48,9.52,41,9.52h0Z"/>
      </g>
    </svg>`
      return icono
    }
    const initMap = (): void => {
      const mapOptions = {
        disableDefaultUI: true,
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
      const directionsService1 = new window.google.maps.DirectionsService()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const directionsRenderer1 = new window.google.maps.DirectionsRenderer({
        map,
        polylineOptions: {
          strokeColor: '#FF0000', // Color de la línea para la primera ruta
          strokeOpacity: 1.0,
          strokeWeight: 6
        },
        suppressMarkers: true
      })
      const waypoints1 = [
        {
          location: { lat: -11.9947783, lng: -77.0721344 }, // Punto de partida
          stopover: true
        },
        {
          location: { lat: -11.9919852, lng: -77.0710789 }, // Punto intermedio
          stopover: true
        },
        {
          location: { lat: -11.976511, lng: -77.051359 }, // Punto de destino
          stopover: true
        }
      ]

      // Crear la solicitud de ruta para la primera ruta
      const request1 = {
        origin: waypoints1[0].location,
        destination: waypoints1[waypoints1.length - 1].location,
        waypoints: waypoints1.slice(1, -1),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        travelMode: window.google.maps.TravelMode.DRIVING
      }

      // Solicitar y mostrar la primera ruta
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      directionsService1.route(request1, (result, status) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer1.setDirections(result)
          const route = result.routes[0]
          const legs = route.legs
          const markerIconstart = {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
              generaricono('#000000')
            )}`,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const startMarker = new window.google.maps.Marker({
            position: legs[0].start_location,
            label: {
              text: 'S', // Números en lugar de letras
              color: '#FFFFFF', // Color del texto de la etiqueta
              fontWeight: 'bold', // Estilo de fuente de la etiqueta
              fontSize: '20px',
              fontFamily: 'Arial, sans-serif'
            },
            icon: markerIconstart, // Usar el ícono personalizado con borde
            map
          })
          for (let i = 1; i < legs.length; i++) {
            const markerIcon = {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                generaricono('#FF0000')
              )}`,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const marker = new window.google.maps.Marker({
              position: legs[i].start_location,
              label: {
                text: i.toString(), // Números en lugar de letras
                color: '#FFFFFF', // Color del texto de la etiqueta
                fontWeight: 'bold', // Estilo de fuente de la etiqueta
                fontSize: '16px' // Tamaño de fuente de la etiqueta
              },
              icon: markerIcon, // Usar el ícono personalizado con borde
              map
            })
          }
          const markerIcon = {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
              generaricono('#FF0000')
            )}`,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const destinationMarker = new window.google.maps.Marker({
            position: legs[legs.length - 1].end_location,
            label: {
              text: [legs.length].toString(), // Puedes usar una letra como etiqueta
              color: '#FFFFFF', // Color del texto de la etiqueta
              fontWeight: 'bold', // Estilo de fuente de la etiqueta
              fontSize: '16px',
              backgroundColor: '#ffffff',
              padding: '8px'
            },
            icon: markerIcon, // Usar el ícono personalizado con borde
            map
          })
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

  useEffect(() => {
    const generaricono = (color: string): any => {
      const icono = `<svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 116.69">
      <defs>
        <style>
          .cls-1 {
            fill: #fff;
          }

          .cls-2 {
            fill: ${color};
          }

          .cls-3 {
            fill: #2c465d;
          }
        </style>
      </defs>
      <g>
        <path class="cls-2" d="m41,115.14c-1.61,0-3.11-.65-4.23-1.84C26.22,102.15,1.69,72.83,1.69,41.63,1.69,25.29,8.29,13.47,21.3,6.48c6.01-3.23,12.82-4.93,19.7-4.93s13.69,1.71,19.7,4.93c13.01,6.99,19.61,18.82,19.61,35.15,0,31.2-24.54,60.52-35.08,71.67-1.12,1.19-2.62,1.84-4.23,1.84Z"/>
        <path class="cls-3" d="m41,3.16c6.62,0,13.17,1.64,18.94,4.74,12.45,6.69,18.77,18.04,18.77,33.74,0,30.62-24.23,59.55-34.64,70.57-.81.86-1.9,1.34-3.06,1.34s-2.25-.47-3.06-1.34C27.52,101.18,3.29,72.26,3.29,41.63c0-15.7,6.31-27.05,18.77-33.74,5.77-3.1,12.32-4.74,18.94-4.74m0-3.22c-7.05,0-14.1,1.71-20.46,5.12C10.31,10.56.08,21.17.08,41.63c0,31.61,24.41,61.02,35.52,72.78,1.48,1.56,3.44,2.34,5.4,2.34s3.92-.78,5.4-2.34c11.11-11.75,35.52-41.17,35.52-72.78,0-20.46-10.23-31.07-20.46-36.57C55.1,1.65,48.05-.06,41-.06h0Z"/>
      </g>
      <g>
        <circle class="cls-2" cx="41" cy="42.97" r="31.71"/>
        <path class="cls-1" d="m41,13c16.53,0,29.98,13.45,29.98,29.98s-13.45,29.98-29.98,29.98-29.98-13.45-29.98-29.98,13.45-29.98,29.98-29.98m0-3.48C22.52,9.52,7.55,24.5,7.55,42.97s14.98,33.45,33.45,33.45,33.45-14.98,33.45-33.45S59.48,9.52,41,9.52h0Z"/>
      </g>
    </svg>`
      return icono
    }
    const initMap = (): void => {
      const mapOptions = {
        disableDefaultUI: true,
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
      const directionsService1 = new window.google.maps.DirectionsService()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const directionsRenderer1 = new window.google.maps.DirectionsRenderer({
        map,
        polylineOptions: {
          strokeColor: '#FF0000', // Color de la línea para la primera ruta
          strokeOpacity: 1.0,
          strokeWeight: 6
        },
        suppressMarkers: true
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const directionsService2 = new window.google.maps.DirectionsService()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const directionsRenderer2 = new window.google.maps.DirectionsRenderer({
        map,
        polylineOptions: {
          strokeColor: '#4A8020', // Color de la línea para la segunda ruta
          strokeOpacity: 1.0,
          strokeWeight: 6
        },
        suppressMarkers: true
      })

      // Configurar las waypoints para la primera ruta
      const waypoints1 = [
        {
          location: { lat: -11.9947783, lng: -77.0721344 }, // Punto de partida
          stopover: true
        },
        {
          location: { lat: -11.9919852, lng: -77.0710789 }, // Punto intermedio
          stopover: true
        },
        {
          location: { lat: -11.976511, lng: -77.051359 }, // Punto de destino
          stopover: true
        }
      ]

      // Configurar las waypoints para la segunda ruta
      const waypoints2 = [
        {
          location: { lat: -11.9947783, lng: -77.0721344 }, // Punto de partida
          stopover: true
        },
        {
          location: { lat: -11.991142, lng: -77.080607 }, // Punto intermedio
          stopover: true
        },
        {
          location: { lat: -11.978370, lng: -77.071021 }, // Punto de destino
          stopover: true
        }
      ]

      // Crear la solicitud de ruta para la primera ruta
      const request1 = {
        origin: waypoints1[0].location,
        destination: waypoints1[waypoints1.length - 1].location,
        waypoints: waypoints1.slice(1, -1),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        travelMode: window.google.maps.TravelMode.DRIVING
      }

      // Crear la solicitud de ruta para la segunda ruta
      const request2 = {
        origin: waypoints2[0].location,
        destination: waypoints2[waypoints2.length - 1].location,
        waypoints: waypoints2.slice(1, -1),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        travelMode: window.google.maps.TravelMode.DRIVING
      }

      // Solicitar y mostrar la primera ruta

      if (selection == 1) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
        directionsService1.route(request1, (result, status) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer1.setDirections(result)
            const route = result.routes[0]
            const legs = route.legs
            const markerIconstart = {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                generaricono('#000000')
              )}`,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const startMarker = new window.google.maps.Marker({
              position: legs[0].start_location,
              label: {
                text: 'S', // Números en lugar de letras
                color: '#FFFFFF', // Color del texto de la etiqueta
                fontWeight: 'bold', // Estilo de fuente de la etiqueta
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif'
              },
              icon: markerIconstart, // Usar el ícono personalizado con borde
              map
            })
            for (let i = 1; i < legs.length; i++) {
              const markerIcon = {
                url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                  generaricono('#FF0000')
                )}`,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
              }
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const marker = new window.google.maps.Marker({
                position: legs[i].start_location,
                label: {
                  text: i.toString(), // Números en lugar de letras
                  color: '#FFFFFF', // Color del texto de la etiqueta
                  fontWeight: 'bold', // Estilo de fuente de la etiqueta
                  fontSize: '16px' // Tamaño de fuente de la etiqueta
                },
                icon: markerIcon, // Usar el ícono personalizado con borde
                map
              })
            }
            const markerIcon = {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                generaricono('#FF0000')
              )}`,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const destinationMarker = new window.google.maps.Marker({
              position: legs[legs.length - 1].end_location,
              label: {
                text: [legs.length].toString(), // Puedes usar una letra como etiqueta
                color: '#FFFFFF', // Color del texto de la etiqueta
                fontWeight: 'bold', // Estilo de fuente de la etiqueta
                fontSize: '16px',
                backgroundColor: '#ffffff',
                padding: '8px'
              },
              icon: markerIcon, // Usar el ícono personalizado con borde
              map
            })
          }
        })
      } else if (selection == 2) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
        directionsService2.route(request2, (result, status) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer2.setDirections(result)
            const route = result.routes[0]
            const legs = route.legs
            const markerIconstart = {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                generaricono('#000000')
              )}`,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const startMarker = new window.google.maps.Marker({
              position: legs[0].start_location,
              label: {
                text: 'I', // Números en lugar de letras
                color: '#FFFFFF', // Color del texto de la etiqueta
                fontWeight: 'bold', // Estilo de fuente de la etiqueta
                fontSize: '16px' // Tamaño de fuente de la etiqueta
              },
              icon: markerIconstart, // Usar el ícono personalizado con borde
              map
            })
            for (let i = 1; i < legs.length; i++) {
              const markerIcon = {
                url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                  generaricono('#4A8020')
                )}`,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
              }
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const marker = new window.google.maps.Marker({
                position: legs[i].start_location,
                label: {
                  text: i.toString(), // Números en lugar de letras
                  color: '#FFFFFF', // Color del texto de la etiqueta
                  fontWeight: 'bold', // Estilo de fuente de la etiqueta
                  fontSize: '16px' // Tamaño de fuente de la etiqueta
                },
                icon: markerIcon, // Usar el ícono personalizado con borde
                map
              })
            }
            const markerIcon = {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                generaricono('#4A8020')
              )}`,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const destinationMarker = new window.google.maps.Marker({
              position: legs[legs.length - 1].end_location,
              label: {
                text: [legs.length].toString(), // Puedes usar una letra como etiqueta
                color: '#FFFFFF', // Color del texto de la etiqueta
                fontWeight: 'bold', // Estilo de fuente de la etiqueta
                fontSize: '16px',
                backgroundColor: '#ffffff',
                padding: '8px'
              },
              icon: markerIcon, // Usar el ícono personalizado con borde
              map
            })
          }
        })
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
        directionsService1.route(request1, (result, status) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer1.setDirections(result)
            const route = result.routes[0]
            const legs = route.legs
            const markerIconstart = {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                generaricono('#000000')
              )}`,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const startMarker = new window.google.maps.Marker({
              position: legs[0].start_location,
              label: {
                text: 'S', // Números en lugar de letras
                color: '#FFFFFF', // Color del texto de la etiqueta
                fontWeight: 'bold', // Estilo de fuente de la etiqueta
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif'
              },
              icon: markerIconstart, // Usar el ícono personalizado con borde
              map
            })
            for (let i = 1; i < legs.length; i++) {
              const markerIcon = {
                url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                  generaricono('#FF0000')
                )}`,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
              }
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const marker = new window.google.maps.Marker({
                position: legs[i].start_location,
                label: {
                  text: i.toString(), // Números en lugar de letras
                  color: '#FFFFFF', // Color del texto de la etiqueta
                  fontWeight: 'bold', // Estilo de fuente de la etiqueta
                  fontSize: '16px' // Tamaño de fuente de la etiqueta
                },
                icon: markerIcon, // Usar el ícono personalizado con borde
                map
              })
            }
            const markerIcon = {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                generaricono('#FF0000')
              )}`,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const destinationMarker = new window.google.maps.Marker({
              position: legs[legs.length - 1].end_location,
              label: {
                text: [legs.length].toString(), // Puedes usar una letra como etiqueta
                color: '#FFFFFF', // Color del texto de la etiqueta
                fontWeight: 'bold', // Estilo de fuente de la etiqueta
                fontSize: '16px',
                backgroundColor: '#ffffff',
                padding: '8px'
              },
              icon: markerIcon, // Usar el ícono personalizado con borde
              map
            })
          }
        })
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        directionsService2.route(request2, (result, status) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer2.setDirections(result)
            const route = result.routes[0]
            const legs = route.legs
            const markerIconstart = {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                generaricono('#000000')
              )}`,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const startMarker = new window.google.maps.Marker({
              position: legs[0].start_location,
              label: {
                text: 'I', // Números en lugar de letras
                color: '#FFFFFF', // Color del texto de la etiqueta
                fontWeight: 'bold', // Estilo de fuente de la etiqueta
                fontSize: '16px' // Tamaño de fuente de la etiqueta
              },
              icon: markerIconstart, // Usar el ícono personalizado con borde
              map
            })
            for (let i = 1; i < legs.length; i++) {
              const markerIcon = {
                url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                  generaricono('#4A8020')
                )}`,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
              }
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const marker = new window.google.maps.Marker({
                position: legs[i].start_location,
                label: {
                  text: i.toString(), // Números en lugar de letras
                  color: '#FFFFFF', // Color del texto de la etiqueta
                  fontWeight: 'bold', // Estilo de fuente de la etiqueta
                  fontSize: '16px' // Tamaño de fuente de la etiqueta
                },
                icon: markerIcon, // Usar el ícono personalizado con borde
                map
              })
            }
            const markerIcon = {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                generaricono('#4A8020')
              )}`,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              scaledSize: new window.google.maps.Size(50, 50), // Tamaño del ícono
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              labelOrigin: new window.google.maps.Point(24, 18) // Ajusta la posición de la etiqueta
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const destinationMarker = new window.google.maps.Marker({
              position: legs[legs.length - 1].end_location,
              label: {
                text: [legs.length].toString(), // Puedes usar una letra como etiqueta
                color: '#FFFFFF', // Color del texto de la etiqueta
                fontWeight: 'bold', // Estilo de fuente de la etiqueta
                fontSize: '16px',
                backgroundColor: '#ffffff',
                padding: '8px'
              },
              icon: markerIcon, // Usar el ícono personalizado con borde
              map
            })
          }
        })
      }
      // Solicitar y mostrar la segunda ruta
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
  }, [selection])

  const exportMapa1 = (): void => {
    const startLat = -11.9947783
    const startLng = -77.0721344
    const waypoints = [
      { lat: -11.9919852, lng: -77.0710789 } // Punto intermedio 1
      // Agrega más paradas intermedias según sea necesario
    ]
    const endLat = -11.976511
    const endLng = -77.051359

    // Construye la URL de Google Maps con las paradas intermedias
    const waypointsString = waypoints.map(waypoint => `${waypoint.lat},${waypoint.lng}`).join('|')
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${startLat},${startLng}&waypoints=${waypointsString}&destination=${endLat},${endLng}&travelmode=driving`

    // Abre la URL en una nueva ventana o pestaña del navegador
    window.open(googleMapsUrl, '_blank')
  }

  const exportMapa2 = (): void => {
    const startLat = -11.9947783
    const startLng = -77.0721344
    const waypoints = [
      { lat: -11.991142, lng: -77.080607 } // Punto intermedio 1
      // Agrega más paradas intermedias según sea necesario
    ]
    const endLat = -11.978370
    const endLng = -77.071021

    // Construye la URL de Google Maps con las paradas intermedias
    const waypointsString = waypoints.map(waypoint => `${waypoint.lat},${waypoint.lng}`).join('|')
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${startLat},${startLng}&waypoints=${waypointsString}&destination=${endLat},${endLng}&travelmode=driving`

    // Abre la URL en una nueva ventana o pestaña del navegador
    window.open(googleMapsUrl, '_blank')
  }

  return (
    <>
      <div id="map" className="section_rutas2"></div>
      <div className="absolute z-10 top-0 m-4 flex flex-col gap-3">
        <span className="bg-gray-400 text-white text-base py-1 px-5 font-extrabold boxes_day text-center" onClick={() => {
          setselection(0)
        }}>
          Todos
        </span>
        <div className="flex gap-2">
          <span
            className="bg-[#FF0000] text-white text-base py-1 px-5 font-extrabold boxes_day"
            onClick={() => {
              setselection(1)
            }}
          >
            DIA 1
          </span>
          <img src={mapa} alt="" className="h-8 w-8 object-contain cursor-pointer" onClick={() => { exportMapa1() }}/>
        </div>
        <div className="flex gap-2">
          <span
            className="bg-[#4A8020] text-white text-base py-1 px-5 font-extrabold boxes_day"
            onClick={() => {
              setselection(2)
            }}
          >
            DIA 2
          </span>
          <img src={mapa} alt="" className="h-8 w-8 object-contain cursor-pointer" onClick={() => { exportMapa2() }}/>
        </div>
      </div>
    </>
  )
}
