import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { PersonService } from "../services/person.service";
import { HttpClientModule } from '@angular/common/http';
import { BaseApi } from "../services/base-api";


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  id: number;
  itemForm: FormGroup;
  selectedItem;

  constructor(
    private activatedRouter: ActivatedRoute, 
    private router: Router, 
    private personService: PersonService
  ) {
    this.activatedRouter.params.subscribe(param => {
      this.id = param.id;
    });
  }

  ngOnInit() {
    this.selectedItem = this.personService.getWorkerById(this.id);
    this.itemForm = new FormGroup({
      name: new FormControl(this.selectedItem.name)
    });
  }

  onSaveForm() {
    this.personService.putWorkerById(this.id, this.itemForm.value.name);
    this.router.navigate([`/`]); 
  }
  
}
