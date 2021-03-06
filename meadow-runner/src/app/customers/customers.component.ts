import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../customers/customers.service';
import { PhonePipe} from '../pipes/phone.pipe';
import { Router} from '@angular/router';
import { ICustomer } from './models/customer';
@Component({
  selector: 'app-root',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
    customers: ICustomer[] = [];
    settings = {};
    constructor(private customerService: CustomerService, private router: Router) {
    }

    rowClick(event): void {
       this.router.navigate(['/customers/' + event.data.Id]);
    }

    ngOnInit(): void {
        this.settings = {
            actions: false
            , hideSubHeader: true
            , columns: {
                Id: {
                title: 'ID'
                },
                FirstName: {
                title: 'First Name'
                },
                LastName: {
                title: 'Last Name'
                },
                Email: {
                title: 'Email'
                },
                Phone: {
                title: 'Phone',
                valuePrepareFunction: (value) => new PhonePipe().transform(value)
                }
            }
        };

        const customersPromise: Promise<ICustomer[]> = this.customerService.list();
        customersPromise.then(data => {
            this.customers = data;
        });

    }
}
