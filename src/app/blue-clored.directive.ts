import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[blueClored]'
})
export class BlueCloredDirective {

  constructor(element: ElementRef) {
    console.log(element);
    element.nativeElement.style.color = 'blue';
  }

  @HostListener('click') doSomething() {
    alert('it work!');
  }
  @HostListener('mouseenter') doSomething1() {
    console.log('mouse just entred');
  }
  @HostListener('mouseleave') doSomething2() {
    console.log('mouse just left the element');
  }
  @HostListener('mousemove') doSomething3() {
    console.log('mouse just moved');
  }
  @HostListener('document:click', ['$event'])
  elemCliked(elem) {
    console.log('clicked', elem);
  }
}
