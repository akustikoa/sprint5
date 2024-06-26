import { Injectable } from '@angular/core';
import { iStep } from './i-step';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  public steps: iStep[] = [
    {
      title: 'Dedica moltes hores',
      description:
        'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      img: '../assets/img/image1.svg',
      bgcolor: 'ff0000',
    },
    {
      title: 'Programa projectes propis:',
      description:
        'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      img: '../assets/img/image2.svg',
      bgcolor: 'ffffff',
    },
    {
      title: 'Procura descansar:',
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      img: '../assets/img/image3.svg',
      bgcolor: 'ffffff',
    },
  ];

  constructor() {}
}
