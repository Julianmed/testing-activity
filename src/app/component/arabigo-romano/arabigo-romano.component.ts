import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RomanNumeralsService } from'../../service/roman-numerals.service';

@Component({
  selector: 'app-arabigo-romano',
  templateUrl: './arabigo-romano.component.html',
  styleUrls: ['./arabigo-romano.component.css']
})
export class ArabigoRomanoComponent implements OnInit {
  romanNum: string ="";
  number: string;

  constructor(
    private romNumSvc: RomanNumeralsService
  ) { }

  ngOnInit(): void {
  }

  turn(form: NgForm){
    this.romanNum = this.romNumSvc.translateNumberArabic(form);
  }

}
