import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
  
=======
  constructor(private route: ActivatedRoute) { }

>>>>>>> a573181... feat: routing, AuthGuard, edit-course logic
  public ngOnInit(): void {
    this.route.data.subscribe()
  }

}
