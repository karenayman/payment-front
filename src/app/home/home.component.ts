import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'stripeAngular';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
  onClickPayNow(){
    this.router.navigate(['/payment']);
  }

}
