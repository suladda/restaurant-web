import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public pageContent = {
    header : {
      title : 'About Loc8r',
      strapline : ''
    },
    content : '<b>Loc8r was created to help people find places to sit down and get a bit of work done.</b> \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. loremLorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas. Quibusdam modi tempora qui non mollitia incidunt alias! Facere, unde. Numquam deserunt dolorum voluptatem eaque quos minus, suscipit pariatur? Voluptatem. Recusandae voluptas reprehenderit autem sint, nisi nostrum veritatis esse officia. Consectetur quo veritatis debitis officiis similique, aperiam nihil ab. Ducimus? Mollitia voluptatum quia totam provident qui facilis hic pariatur animi. Eaque, iusto quidem animi omnis ab tenetur cupiditate expedita explicabo. Asperiores, recusandae nesciunt fugit aspernatur reprehenderit consequatur provident officiis esse. Eveniet voluptas vitae unde sequi assumenda quisquam eligendi minus. Obcaecati? Nostrum debitis voluptatum excepturi modi facere delectus, rerum placeat corrupti.'
    };

}
