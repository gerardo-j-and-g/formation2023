import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-exo09',
  templateUrl: './exo09.component.html',
  styleUrls: ['./exo09.component.scss'],
})
export class Exo09Component {
  article: string = '';
  prix: number = 0;
  quantite: number = 0;

  listeArticles: Article[] = [];

  ajouter() {
    if (this.article === '' || this.prix === 0 || this.quantite === 0) return;

    const id = this.listeArticles.findIndex((e) => e.name === this.article);
    if (id >= 0 && this.listeArticles[id].price === this.prix) {
      this.listeArticles[id].qty += this.quantite;
      return;
    }

    const article = new Article();
    article.name = this.article;
    article.price = this.prix;
    article.qty = this.quantite;
    this.listeArticles.push(article);
  }

  supprimer(article: Article) {
    this.listeArticles = this.listeArticles.filter((e) => e !== article);

    // this.listeArticles.splice(
    //   this.listeArticles.findIndex((e) => e === article),
    //   1
    // );
  }

  total() {
    return this.listeArticles.reduce((acc, curr) => {
      return acc + curr.qty * curr.price;
    }, 0);
  }
}
