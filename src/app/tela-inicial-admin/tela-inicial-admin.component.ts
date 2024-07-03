import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tela-inicial-admin.component.html',
  styleUrl: './tela-inicial-admin.component.css'
})

export class TelaInicialAdminComponent implements OnInit {
  books: any[] = [];

  booksGrouped: any[] = [];

  ngOnInit() {
    this.fetchBooks();
  }

  constructor(private http: HttpClient) {}

  fetchBooks() {
    this.http.get<any[]>('http://localhost:3000/book/')
      .subscribe({
        next: (data) => {
          this.books = data;
          this.groupBooks();
        },
        error: (error) => {
          console.error('Erro ao buscar livros:', error);
        }
      });
  }
  
  groupBooks() {
    const groupSize = 4;
    for (let i = 0; i < this.books.length; i += groupSize) {
      this.booksGrouped.push(this.books.slice(i, i + groupSize));
    }
  }
}
