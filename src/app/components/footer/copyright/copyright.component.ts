import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  public year: number;

  constructor(
    public config: ConfigService
  ) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
