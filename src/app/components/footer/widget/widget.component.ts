import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() title: string;
  @Input() templateContent: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
