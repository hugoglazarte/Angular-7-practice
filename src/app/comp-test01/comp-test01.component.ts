import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-test01',
  templateUrl: './comp-test01.component.html',
  styleUrls: ['./comp-test01.component.css']
})
export class CompTest01Component implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = "Componente de Test 01";
    console.log('Se ha cargado el nuevo componente Test 01');
  }

  ngOnInit() {

  }

}
