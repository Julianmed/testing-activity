import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  translateNumberArabic(numberArabic: any){
    let number = parseInt(numberArabic.number);
    console.log(numberArabic);

    if(number > 1000){
        return 'El número ingresado debe ser inferior a 1001'
    };

    let romanNumber =""
    let mil= number/1000
    let centena = (number/100) % 10
    let decena = (number/10) % 10
    let unidad = number % 10

    //Para agregar miles
    if(mil == 1){
        romanNumber += "M"
    }
    //Para agregar centenas
    if(centena == 9){
        romanNumber += "CM"
    }else if(centena >= 5){
        romanNumber += "D"
        for(let i = 1; i <= centena-5; i++){
            romanNumber += "C"
        }
    }else if(centena == 4){
        romanNumber += "CD"
    }else{
        for(let i=1; i <= centena; i++){
            romanNumber += "C"
        }
    }
    //Para agregar decenas
    if(decena == 9){
        romanNumber += "XC"
    }else if(decena >= 5){
        romanNumber += "L"
        for(let i = 1; i <= decena-5; i++){
            romanNumber += "X"
        }
    }else if(decena == 4){
        romanNumber += "XL"
    }else{
        for(let i=1; i <= decena; i++){
            romanNumber += "X"
        }
    }
    //Para agregar unidades
    if(unidad == 9){
        romanNumber += "IX"
    }else if(unidad >= 5){
        romanNumber += "V"
        for(let i = 1; i <= unidad-5; i++){
            romanNumber += "I"
        }
    }else if(unidad == 4){
        romanNumber += "IV"
    }else{
        for(let i=1; i <= unidad; i++){
            romanNumber += "I"
        }
    }
    return romanNumber;
  }

}
