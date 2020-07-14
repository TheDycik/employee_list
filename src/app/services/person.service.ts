import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from './base-api';


@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseApi {

  options: HttpHeaders;

  constructor(public http: HttpClient) {
    super(http);
    this.options = new HttpHeaders();
    this.options = this.options.set('Content-Type', 'application/json');
  }

  async getWorkers() {
		return this.get('notes', this.options).toPromise();
	}
	

	async getWorkerById(id) {
		return this.get('notes/' + id, this.options).toPromise();
	}
	
	async postWorker(data) {
		return this.post('notes', data, this.options).toPromise();
	}

	async putWorkerById(id, data) {
		return this.put('notes/' + id, data, this.options).toPromise();
	}

	async deleteWorkerById(id) {
		return this.delete('notes/' + id, this.options).toPromise();
  }



  async getSort() {
		return this.get('sort', this.options).toPromise();
	}
	async putSort(data) {
		return this.put('sort/0', data, this.options).toPromise();
	}

	async getFilter() {
		return this.get('filter', this.options).toPromise();
	}
	async putFilter(data) {
		return this.put('filter/0', data, this.options).toPromise();
	}
}
