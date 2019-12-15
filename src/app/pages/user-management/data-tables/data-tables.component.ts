import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

class Person {
  id: number;
  firstName: string;
  lastName: string;
  action: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  persons: Person[];
  personDetail: Person;
  closeResult: string;

  viewUser(content, person) {
    this.personDetail=person;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then();
  }

  editUser(content, person) {
    // Update logic
  }

  deleteUser(person) {
    // Delete logic
  }

  constructor(private http: HttpClient,private modalService: NgbModal) { }

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }, { data: 'action' }]
    };
  }

  viewEventHandler(p) {
    console.log(p);
  }

}
