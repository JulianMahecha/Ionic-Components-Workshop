import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data:any[] = Array(20);



  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      event.target.complete()
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length >50) {
        event.target.disabled = true;
      }
    }, 500);
  }

  /* toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  } */

}
