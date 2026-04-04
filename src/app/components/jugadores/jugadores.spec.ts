import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing'; 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; //LO AÑADO PARA LAS PRUEBAS
//import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { JugadoresComponent } from './jugadores';
import { JugadoresService } from '../../services/jugadores.service'; // Importamos el servicio real

describe('Mocks y Simulación HTTP', () => {
  let component: JugadoresComponent;
  let fixture: ComponentFixture<JugadoresComponent>;
  let httpMock: HttpTestingController; // Para simular el backend de Node.js
  //let service: JugadoresService; // añadimos el servicio

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadoresComponent,
                HttpClientTestingModule, //SIMULA PETICIONES HTTP
      ],
      providers: [ JugadoresService ] // PRUEBA EL SERVICIO REAL
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadoresComponent);
    component = fixture.componentInstance;
    //service = TestBed.inject(JugadoresService); // Obtenemos el servicio
    httpMock = TestBed.inject(HttpTestingController); // Obtenemos el simulador HTTP
  });

  afterEach(() => {
    // Verificamos que no haya peticiones HTTP pendientes de resolver
    httpMock.verify();
  });

    it('debe existir el componente', () => {
    expect(component).toBeTruthy();
  });

  it('verificación que el componente recibe datos del servicio', () => {
    // 1. lista de jugadores MOCK en formato JSON
    const mockJugadores = [
      { id: '1', nombre: 'Luis Gómez', equipo: 'Tigres FC' },
      { id: '2', nombre: 'Carlos Soto', equipo: 'Leones Club' },
      { id: '3', nombre: 'Mario Ruiz', equipo: 'Águilas Juveniles' },
      { id: '4', nombre: 'Iván Torres', equipo: 'Halcones Club' },
      { id: '5', nombre: 'Nerea Camacho', equipo: 'Coyotes Junior' },
    ];

    // 2. Ejecutamos la detección de cambios (esto dispara el ngOnInit y el http.get)
    fixture.detectChanges();

    // 3. Interceptamos la llamada
    const req = httpMock.expectOne('http://localhost:3000/api/jugadores');
    expect(req.request.method).toBe('GET');

    // 4. Respondemos con los datos falsos (SIMULACIÓN)
    req.flush(mockJugadores);
       
    // 5. Muy importante: Otra detección de cambios para que la vista se actualice
    fixture.detectChanges();

    // 6. Verificamos que el componente ha recibido los datos y los ha guardado
    expect(component.jugadores.length).toBe(5);//nº de jugadores
    expect(component.jugadores[0].nombre).toBe('Luis Gómez');
  });
});

