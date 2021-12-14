import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss'],
})
export class AppToolbarComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    console.log("init")
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
