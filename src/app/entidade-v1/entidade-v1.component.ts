import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';

// Services
import { BookService } from '../services/book.service';

interface Country {
  nome: string;
  publico: string;
  ativo: string;
}

const COUNTRIES: Country[] = [
  {
    nome: 'Marcelo Freixo',
    publico: 'Público',
    ativo: 'Ativo'
  },
  {
    nome: 'Joyce Hasselman',
    publico: 'Público',
    ativo: 'Ativo'
  },
  {
    nome: 'Marco Feliciano',
    publico: 'Público',
    ativo: 'Ativo'
  },
  {
    nome: 'Rodrigo Maia',
    publico: 'Público',
    ativo: 'Ativo'
  }
];



@Component({
  selector: 'app-entidade-v1',
  templateUrl: './entidade-v1.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./entidade-v1.component.scss'],
  providers: [
    BookService
  ]
})

export class EntidadeV1Component implements OnInit {

  //Modal
  closeResult: string;

  //Tree
  tree = [
    {
      text: "Parent 1",
      nodes: [
        {
          text: "Child 1",
          nodes: [
            {
              text: "Grandchild 1"
            },
            {
              text: "Grandchild 2"
            }
          ]
        },
        {
          text: "Child 2"
        }
      ]
    },
    {
      text: "Parent 2"
    },
    {
      text: "Parent 3"
    },
    {
      text: "Parent 4"
    },
    {
      text: "Parent 5"
    }
  ];

  model = {
    left: true,
    middle: false,
    right: false
  };

  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  constructor(
    private modalService: NgbModal,
    private service: BookService
  ) { }

  ngOnInit(): void {

    // $('#tree').treeview({data: getTree()});
    // getTree()
    this.items = this.service.getBooks();

  }

  onFilterChange(value: string): void {
    console.log('filter:', value);
  }

  getTree() {
    return this.tree
  }

  countries = COUNTRIES;

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
