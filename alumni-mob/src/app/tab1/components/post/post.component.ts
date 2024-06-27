import { Component, OnInit } from '@angular/core';
import { InterType } from 'src/app/core/types/intern-type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent  implements OnInit {

  intern : InterType = {
    lastname : 'Jacky',
    firstname : 'Test',
    company : 'Airbus'
  }

  constructor() { }


  ngOnInit() {}

}
