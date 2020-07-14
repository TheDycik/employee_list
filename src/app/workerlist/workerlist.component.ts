import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-workerlist',
  templateUrl: './workerlist.component.html',
  styleUrls: ['./workerlist.component.css']
})
export class WorkerlistComponent implements OnInit {

  constructor(
    private personService: PersonService
  ) { }

  workers = []


  async ngOnInit() {
    try {
      let workers = this.personService.getWorkers();
      this.workers = (isNullOrUndefined(await workers)) ? [] : await workers;
      console.log(workers);
    } catch (err) {
      console.log(err);
    }
  }
  async delPerson(id: number) {
    await this.personService.deleteWorkerById(id);
    this.ngOnInit();
  }

}
