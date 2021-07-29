import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    { name: '0', id: 111 },
    { name: '1', id: 222 },
    { name: '2', id: 333 },
    { name: '3', id: 444 },
    { name: '4', id: 555 },
    { name: '5', id: 666 }
  ];

  onClick() {
    // this.testCaseOne();
    // this.testCaseTwo();
    // this.testCaseThree();
    // this.testCaseFour();
    // this.testCaseFive();
    this.testCaseSix();
  }

  // 更動名稱，但沒有更動到被指定為追蹤的值(ID)
  // 因此不會重新render
  testCaseOne(): void {
    this.items[1].name = 'Gary';
  }

  // 更動被追蹤的ID,會重新render
  testCaseTwo(): void {
    this.items[1].id = 333;
  }

  // 更動array index 為 1 的整個物件，但值不變。
  // 應該是因為id一樣所以不會render
  testCaseThree(): void {
    this.items[1] = { name: '1', id: 222 };
  }

  // 更新array index 為1的整個物件，但id變化。
  // 會重新render
  testCaseFour(): void {
    this.items[1] = { name: '13', id: 777 };
  }

  // 調換順序
  testCaseFive(): void {
    this.items = [
      this.items[5],
      this.items[1],
      this.items[0],
      this.items[2],
      this.items[4],
      this.items[3]
    ];
  }

  // 這個case發現，雖然指定Id，但只要有兩個以上的ID變化，
  // 他一樣會採用我們今天下午發現的策略
  testCaseSix(): void {
    const temp = this.items[0];
    this.items[0] = this.items[4];
    this.items[4] = temp;
  }

  cusTrackBy(index, item) {
    return item.id;
  }
}
