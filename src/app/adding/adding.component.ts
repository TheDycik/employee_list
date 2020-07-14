import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { PersonService } from "../services/person.service";

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  id: number;
  itemForm: FormGroup;
  worker;

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

    this.itemForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      surname: new FormControl(null,[Validators.required]),
      lastname: new FormControl(null,[]),
      group: new FormControl(null,[Validators.required])
    });
  }
    
  async onAddWorker(){
    this.worker = await this.personService.postWorker({
      "id": this.itemForm.value.id,
      "surname": this.itemForm.value.surname,
      "name": this.itemForm.value.name,
      "lastname": this.itemForm.value.lastname,
      "group": this.itemForm.value.group
    });
    this.router.navigate([`/workerlist`]);
    }
  }

